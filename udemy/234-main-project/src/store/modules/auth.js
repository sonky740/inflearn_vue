import { requestAuth, requestLogin } from '../../api/';

export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    },
  },
  actions: {
    async login(context, payload) {
      const response = await requestLogin({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      });

      const responseData = response.data;

      if (response.status !== 200) {
        const error = new Error(
          responseData.message ||
            'Failed to authenticate. Check your login data.'
        );
        throw error;
      }

      console.log(responseData);
      // https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },
    async signup(context, payload) {
      const response = await requestAuth({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      });

      const responseData = response.data;

      if (response.status !== 200) {
        const error = new Error(
          responseData.message ||
            'Failed to authenticate. Check your login data.'
        );
        throw error;
      }

      console.log(responseData);
      // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
};
