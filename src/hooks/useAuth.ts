import { useEffect, useState } from 'react';
import { useStore } from '@/store';
import Cookies from 'js-cookie';
import _ from 'lodash';
import { IUser } from '@/types/user';

export const useAuth = () => {
  const { userStore } = useStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get('accessToken');

        if (!token) {
          setIsLoading(false);
          return;
        }

        const decodedToken: IUser = JSON.parse(token);
        userStore.user = decodedToken;
      } catch (error) {
        console.error('fetch me error', error);
        Cookies.remove('accessToken');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [userStore]);

  return {
    isAuthenticated: !_.isEmpty(userStore.user),
    isLoading,
  };
};
