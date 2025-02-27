import { useStore } from '@/store';
import { useNavigate } from 'react-router-dom';
import { ApiClient } from '@/api/APIClient';

export const useLogout = () => {
  const { userStore } = useStore();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await ApiClient.logout();
      userStore.user = null;
      navigate('/auth/sign-in');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return { logout };
};
