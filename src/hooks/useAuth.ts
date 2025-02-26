import { useStore } from '@/store';
import _ from 'lodash';

export const useAuth = () => {
  const { userStore } = useStore();

  const user = userStore.user;

  return {
    isAuthenticated: !_.isEmpty(user),
    user: user,
  };
};
