import { createContext, useContext } from 'react';

import userStore from '@/store/UserStore.ts';

export const store = {
  userStore,
};

export const StoreContext = createContext(store);

export const useStore = () => useContext<typeof store>(StoreContext);
