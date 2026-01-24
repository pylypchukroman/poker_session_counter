import { Navigate } from "react-router-dom";
import { useAuth } from '@/context/AuthContext';

export const HomeRedirect = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <h1>Loading...</h1>;

  return isAuthenticated ? (
    <Navigate to="/cash" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};
