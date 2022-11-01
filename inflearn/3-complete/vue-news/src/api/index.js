import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchUserInfo(username) {
  try {
    const response = await axios.get(`${config.baseUrl}user/${username}.json`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchItemInfo(itemId) {
  try {
    const response = await axios.get(`${config.baseUrl}item/${itemId}.json`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export { fetchList, fetchUserInfo, fetchItemInfo };
