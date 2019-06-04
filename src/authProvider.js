import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR } from 'react-admin';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username } = params;
    localStorage.setItem('username', username);
    // currently accept all username/password combinations
    return Promise.resolve();
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('username');
    return Promise.resolve({ redirectTo: '/' });
  }
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  }
  return Promise.resolve('Unknown Error');
};
