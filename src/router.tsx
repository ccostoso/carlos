import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './routes/Home';
import { Contact } from './routes/Contact';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);
