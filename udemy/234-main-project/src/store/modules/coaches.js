import { defaultApi } from '../../api';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [],
    };
  },
  mutations: {
    registerCoach(state, payload) {
      state.coaches.push(payload);
    },
    setCoaches(state, payload) {
      state.coaches = payload;
    },
    setFetchTimestamp(state) {
      state.lastFetch = new Date().getTime();
    },
  },
  actions: {
    async registerCoach(context, data) {
      const userId = context.rootGetters.userId;
      const coachData = {
        id: context.rootGetters.userId,
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas,
      };

      const token = context.rootGetters.token;

      const response = await defaultApi.put(`/coaches/${userId}.json?auth=${token}`, data);

      // const responseData = await response.data;
      if (response.status !== 200) {
        // error...
      }

      context.commit('registerCoach', {
        ...coachData,
        id: userId,
      });
    },
    async loadCoaches(context, payload) {
      if (!payload.forceRefresh && !context.getters.shouldUpdate) return;

      const response = await defaultApi.get('/coaches.json');

      const responseData = await response.data;

      if (response.status !== 200) {
        const error = new Error(responseData.message || 'Failed to fetch!');
        throw error;
      }

      const coaches = [];

      for (const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas,
        };
        coaches.push(coach);
      }

      context.commit('setCoaches', coaches);
      context.commit('setFetchTimestamp');
    },
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
      const coaches = getters.coaches;
      const userId = rootGetters.userId;
      return coaches.some((coach) => coach.id === userId);
    },
    shouldUpdate(state) {
      const lastFetch = state.lastFetch;
      if (!lastFetch) {
        return true;
      }
      const currentTimestamp = new Date().getTime();
      return (currentTimestamp - lastFetch) / 1000 > 60;
    },
  },
};
