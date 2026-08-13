import { ECSClient, ListTasksCommand, DescribeTasksCommand } from "@aws-sdk/client-ecs";

const ecs = new ECSClient({ region: "us-east-1" });

// Map of service keys to ECS cluster/service names
const SERVICES = {
    pokemoves: { cluster: "pokemoves-cluster", service: "pokemoves-service" },
};

export const handler = async (event) => {
    const serviceKey = event.queryStringParameters?.service;
    const config = SERVICES[serviceKey];

    if (!config) {
        return respond(400, { error: "unknown service" });
    }

    const { taskArns } = await ecs.send(
        new ListTasksCommand({
            cluster: config.cluster,
            serviceName: config.service,
            desiredStatus: "RUNNING",
        })
    );

    if (!taskArns?.length) {
        return respond(200, { service: serviceKey, status: "down" });
    }

    const { tasks } = await ecs.send(
        new DescribeTasksCommand({ cluster: config.cluster, tasks: taskArns })
    );

    // Oldest still-running task = how long the service has been continuously up
    // (a rolling deploy briefly has two tasks; the newer one doesn't count toward uptime)
    const startedAt = tasks
        .map((t) => t.startedAt)
        .filter(Boolean)
        .sort((a, b) => a - b)[0];

    const uptimeSeconds = Math.floor((Date.now() - new Date(startedAt).getTime()) / 1000);

    return respond(200, { service: serviceKey, status: "up", startedAt, uptimeSeconds });
};

function respond(statusCode, body) {
    return {
        statusCode,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    };
}