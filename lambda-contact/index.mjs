const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const FROM_ADDRESS = "Portfolio Contact <contact@mail.costo.so>";

export const handler = async (event) => {
    let body;
    try {
        body = JSON.parse(event.body ?? "{}");
    } catch {
        return respond(400, { error: "invalid JSON" });
    }

    const { name, email, message, company } = body;

    // Honeypot: a hidden field real users never fill in. Bots that
    // auto-fill every field will trip this and get silently dropped.
    if (company) {
        return respond(200, { ok: true });
    }

    if (!isSingleLine(name, 100) || !isValidEmail(email) || !isNonEmptyString(message, 5000)) {
        return respond(400, { error: "invalid input" });
    }

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: FROM_ADDRESS,
            to: [CONTACT_TO_EMAIL],
            reply_to: email,
            subject: `Portfolio contact from ${name}`,
            text: message,
        }),
    });

    if (!res.ok) {
        return respond(502, { error: "failed to send" });
    }

    return respond(200, { ok: true });
};

function isNonEmptyString(val, maxLen) {
    return typeof val === "string" && val.trim().length > 0 && val.length <= maxLen;
}

function isSingleLine(val, maxLen) {
    return isNonEmptyString(val, maxLen) && !/[\r\n]/.test(val);
}

function isValidEmail(val) {
    return typeof val === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) && val.length <= 200;
}

function respond(statusCode, body) {
    return {
        statusCode,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    };
}