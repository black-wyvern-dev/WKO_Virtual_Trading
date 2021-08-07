import { Navigate } from 'react-router-dom';
import MainLayout from 'src/dev/layout/MainLayout';
import Login from 'src/dev/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/dev/pages/Register';
import Settings from 'src/pages/Settings';
import LP from 'src/dev/pages/LP';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: 'dashboard', element: <Navigate to="/settings" /> }, //app/dashboard" /> },
      { path: '/', element: <LP /> },
      { path: 'settings', element: <Settings /> },
    ]
  },
];

export default routes;
