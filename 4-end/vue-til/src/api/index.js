import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기화
const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
};
const instance = createInstance();

// 회원가입 API
const registerUser = async userData => {
  const response = await instance.post('signup', userData);
  return response;
};

// 로그인 API
const loginUser = async userData => {
  const response = await instance.post('login', userData);
  return response;
};

// 학습 노트 조회 API
const fetchPosts = () => {
  return instance.get('posts');
};

export { registerUser, loginUser, fetchPosts };
