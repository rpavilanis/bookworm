import { USER_LOGGED_IN } from '../types';
import api from '../api';

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
})
export const login = credentials => (dispatch) =>
  // make api request and get data, then dispatch redux action that will change,
  // via reducers, the redux store
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));
