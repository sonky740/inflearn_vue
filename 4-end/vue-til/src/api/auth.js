import { instance } from '.';

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

export { registerUser, loginUser };
