import { makeAutoObservable } from 'mobx';
import { IUser } from '@/types/user';

export class UserStore {
  private _user: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get user() {
    return this._user;
  }

  set user(user: IUser | null) {
    this._user = user;
  }
}

const userStore = new UserStore();

export default userStore;
