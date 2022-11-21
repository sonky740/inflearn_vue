import { requestAuth, requestLogin } from '../../api/';
let timer;

export default {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.didAutoLogout = false;
    },
    setAutoLogout(state) {
      state.didAutoLogout = true;
    },
  },
  actions: {
    async login(context, payload) {
      return context.dispatch('auth', {
        ...payload,
        mode: 'login',
      });
    },
    async signup(context, payload) {
      return context.dispatch('auth', {
        ...payload,
        mode: 'signup',
      });
    },
    async auth(context, payload) {
      const mode = payload.mode;
      let response;

      if (mode === 'signup') {
        response = await requestAuth({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });
      } else {
        response = await requestLogin({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });
      }

      const responseData = response.data;

      if (response.status !== 200) {
        const error = new Error(
          responseData.message ||
            'Failed to authenticate. Check your login data.'
        );
        throw error;
      }

      const expiresIn = +responseData.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn;

      localStorage.setItem('token', responseData.idToken);
      localStorage.setItem('userId', responseData.localId);
      localStorage.setItem('tokenExpiration', expirationDate);

      timer = setTimeout(function () {
        context.dispatch('autoLogout');
      }, expiresIn);

      // https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
      });
    },
    autoLogin(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tokenExpiration = localStorage.getItem('tokenExpiration');

      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn < 0) return;

      timer = setTimeout(function () {
        context.dispatch('autoLogout');
      }, expiresIn);

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId,
        });
      }
    },
    logout(context) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');

      clearTimeout(timer);

      context.commit('setUser', {
        token: null,
        userId: null,
      });
    },
    autoLogout(context) {
      context.dispatch('logout');
      context.commit('setAutoLogout');
    },
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
    didAutoLogout(state) {
      return state.didAutoLogout;
    },
  },
};
