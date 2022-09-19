import { fetchCartItems } from '~/api';

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  // addCartItem(state, cartItem) {
  //   const newCartItem = {
  //     ...cartItem,
  //     imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
  //   };
  //   state.cartItems.push(newCartItem);
  // },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  },
};

export const actions = {
  async [FETCH_CART_ITEMS](context) {
    const response = await fetchCartItems();
    const data = response.data.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }));

    context.commit('setCartItems', data);
  },

  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch(FETCH_CART_ITEMS);
  // },
};
