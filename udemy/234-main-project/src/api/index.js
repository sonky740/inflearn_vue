import axios from 'axios';

export const defaultApi = axios.create({
  baseURL: 'https://vue-http-demo-2aa32-default-rtdb.firebaseio.com',
});

export const requestAuth = (data) => {
  return axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2tnaVwiiQh2jNdwcbwljnmKj7udJIoXI',
    data
  );
};

export const requestLogin = (data) => {
  return axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2tnaVwiiQh2jNdwcbwljnmKj7udJIoXI',
    data
  );
};
