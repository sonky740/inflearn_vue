import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

const fetchProductById = id => {
  return instance.get(`/products/${id}`);
};

const fetchProductsByKeyword = keyword => {
  return instance.get('/products', {
    params: {
      name_like: keyword,
    },
  });
};

export { fetchProductById, fetchProductsByKeyword };
