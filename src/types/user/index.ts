export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
} as const;

export type TUserRoles = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export interface IUser {
  name: string;
  email: string;
  role: TUserRoles;
}

export interface IUserStore {
  user: IUser;
  setUser: (user: IUser) => void;
}
