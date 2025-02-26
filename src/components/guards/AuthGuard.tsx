import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface IAuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: IAuthGuardProps) => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" state={{ from: pathname }} replace />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthGuard;
