import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Layout from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/booking', element: <Booking /> },
    ],
  },
]);
