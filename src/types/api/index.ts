import { AxiosResponse } from 'axios';
import { TUserRoles } from '@/types/user';

export type TAxiosResponsePromise<T = unknown> = Promise<AxiosResponse<T>>;

interface IErrorResponse {
  errorCode: number;
  errorMessage: string | null;
}

type TFetchMeArgs = { email: string; password: string };

export interface IFetchMeResponse extends IErrorResponse {
  resultData: {
    user: {
      firstName: string;
      lastName: string;
      email: string;
      role: TUserRoles;
    };
    accessToken: string;
  };
}

type TFetchMeFn = (args: TFetchMeArgs) => TAxiosResponsePromise<IFetchMeResponse>;
type TLogoutFn = () => TAxiosResponsePromise<void>;

export interface IApiClient {
  me: TFetchMeFn;
  login: TFetchMeFn;
  logout: TLogoutFn;
}
