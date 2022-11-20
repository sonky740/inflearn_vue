import axios from 'axios';

export const requestCoaches = (userId, data) => {
  return axios.put(
    `https://vue-http-demo-2aa32-default-rtdb.firebaseio.com/coaches/${userId}.json`,
    data
  );
};

export const getCoaches = () => {
  return axios.get(
    'https://vue-http-demo-2aa32-default-rtdb.firebaseio.com/coaches.json'
  );
};

export const requestContactCoach = (coachId, data) => {
  return axios.post(
    `https://vue-http-demo-2aa32-default-rtdb.firebaseio.com/requests/${coachId}.json`,
    data
  );
};

export const getRequests = (coachId) => {
  return axios.get(
    `https://vue-http-demo-2aa32-default-rtdb.firebaseio.com/requests/${coachId}.json`
  );
};

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
