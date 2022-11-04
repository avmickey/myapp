import { FieldValues } from 'react-hook-form';
import { makeAutoObservable } from 'mobx';

class UserState {
  private user: FieldValues;
  private isAuth: boolean;
  constructor() {
    this.isAuth = false;
    this.user = {};
    makeAutoObservable(this);
  }
  set setIsAuth(auth: boolean) {
    this.isAuth = auth;
  }
  set setUser(user: object) {
    this.user = user;
  }
  get getIsAuth() {
    return this.isAuth;
  }
  get getUser() {
    return this.user;
  }
}
export default UserState;
