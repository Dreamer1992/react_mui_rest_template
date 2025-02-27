import { http, HttpResponse } from 'msw';
import { IFetchMeResponse } from '@/types/api';
import { IUser } from '@/types/user';

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/me`, ({ cookies }) => {
    if (!cookies.accessToken) {
      return new HttpResponse(null, {
        status: 401,
        statusText: 'Unauthorized',
      });
    }

    return HttpResponse.json<IFetchMeResponse>({
      errorCode: 0,
      errorMessage: null,
      resultData: {
        user: {
          firstName: 'John',
          lastName: 'Carter',
          email: 'john@example.com',
          role: 'user',
        },
        accessToken: cookies.accessToken,
      },
    });
  }),

  http.post(`${import.meta.env.VITE_API_URL}/auth/login`, async ({ request }) => {
    const requestData = await request.json();

    const newUser: IUser = {
      firstName: 'John',
      lastName: 'Carter',
      email: (requestData as { email: string })?.email,
      role: 'user',
    };
    const accessToken = JSON.stringify(newUser);

    return new HttpResponse(
      JSON.stringify({
        errorCode: 0,
        errorMessage: null,
        resultData: {
          user: newUser,
          accessToken,
        },
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `accessToken=${accessToken}; path=/`,
        },
      }
    );
  }),

  http.post(`${import.meta.env.VITE_API_URL}/auth/logout`, () => {
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Set-Cookie': 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
      },
    });
  }),
];
