import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface IGuestGuardProps {
  children: React.ReactNode;
}

const GuestGuard = ({ children }: IGuestGuardProps) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default GuestGuard;
