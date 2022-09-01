import axios from 'axios';
import { setInterceptors } from './common/interceptors';

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
};
const instance = createInstance();

const registerUser = async userData => {
  const response = await instance.post('signup', userData);
  return response;
};

const loginUser = async userData => {
  const response = await instance.post('login', userData);
  return response;
};

export { registerUser, loginUser };
