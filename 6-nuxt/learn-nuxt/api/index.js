import axios from 'axios';

const products = axios.create({
  baseURL: 'http://localhost:3000/products',
});

const carts = axios.create({
  baseURL: 'http://localhost:3000/carts',
});

const fetchProductById = id => {
  return products.get(`/${id}`);
};

const fetchProductsByKeyword = keyword => {
  return products.get('/', {
    params: {
      name_like: keyword,
    },
  });
};

const fetchCartItems = () => {
  return carts.get('/');
};

const createCartItem = cartItem => {
  return carts.post('/', cartItem);
};

export {
  fetchProductById,
  fetchProductsByKeyword,
  fetchCartItems,
  createCartItem,
};
