import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';

const SignIn = lazy(() => import('@/pages/auth/SignIn/SignIn'));
// const SignUp = lazy(() => import('@/pages/auth/SignUp'));

// const Dashboard = lazy(() => import('@/pages/Dashboard'));

export const publicRoutes = [
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { path: 'sign-in', element: <SignIn /> },
      // { path: 'sign-up', element: <SignUp /> },
      { path: '*', element: <Navigate to="/auth/sign-in" replace /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/auth/sign-in" replace />,
  },
];

export const protectedRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      // { path: 'dashboard', element: <Dashboard /> },
      { path: '', element: <Navigate to="/dashboard" replace /> },
      { path: '*', element: <Navigate to="/dashboard" replace /> },
    ],
  },
];
