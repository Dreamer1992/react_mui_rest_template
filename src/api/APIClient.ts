import { IApiClient } from '@/types/api';
import { APIService } from '@/api/APIService';

export const ApiClient: IApiClient = {
  me: async function (args) {
    const response = await APIService.get('/me', { params: args });
    return response;
  },
  login: async function (args) {
    const response = await APIService.post('/auth/login', args);
    return response;
  },
  logout: async function () {
    const response = await APIService.post('/auth/logout');
    return response;
  },
};
