import { Navigate } from 'react-router-dom';
import MainLayout from 'src/layout/MainLayout';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import PlayBoard from 'src/pages/PlayBoard';
import LeaderBoard from 'src/pages/LeaderBoard';
import LP from 'src/pages/LP';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <LP /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'dashboard', element: <Navigate to="/settings" /> },
      { path: 'settings', element: <Settings /> },
      { path: 'playboard', element: <PlayBoard /> },
      { path: 'leaderboard', element: <LeaderBoard /> },
      { path: '404', element: <NotFound /> },
    ]
  },
];

export default routes;
