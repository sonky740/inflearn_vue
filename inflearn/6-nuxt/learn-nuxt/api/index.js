import axios from 'axios';

const products = axios.create({
  baseURL: `${process.env.baseURL}/products`,
});

const fetchProducts = () => {
  return products.get('/');
};

const carts = axios.create({
  baseURL: `${process.env.baseURL}/carts`,
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
  fetchProducts,
  fetchProductsByKeyword,
  fetchCartItems,
  createCartItem,
};
