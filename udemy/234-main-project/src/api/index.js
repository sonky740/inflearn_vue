import axios from 'axios';

export const requestCoaches = async (userId, data) => {
  return axios.put(
    `https://vue-http-demo-2aa32-default-rtdb.firebaseio.com/coaches/${userId}.json`,
    data
  );
};

export const getCoaches = async () => {
  return axios.get(
    'https://vue-http-demo-2aa32-default-rtdb.firebaseio.com/coaches.json'
  );
};

export const requestContactCoach = async (coachId, data) => {
  return axios.post(
    `https://vue-http-demo-2aa32-default-rtdb.firebaseio.com/requests/${coachId}.json`,
    data
  );
};

export const getRequests = async (coachId) => {
  return axios.get(
    `https://vue-http-demo-2aa32-default-rtdb.firebaseio.com/requests/${coachId}.json`
  );
};
