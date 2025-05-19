import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/booking', element: <BookingPage /> },
    ],
  },
]);
