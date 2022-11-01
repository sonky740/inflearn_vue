import { NewsItem } from '@/api';
import { RootState } from './state';

export enum MutationTypes {
  SET_NEWS = 'SET_NEWS',
}

export const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  },
  // SET_ASK(state: RootState, ask: any) {
  //   state.ask = ask;
  // },
  // SET_JOBS(state: RootState, jobs: any) {
  //   state.jobs = jobs;
  // },
  // SET_USER(state: RootState, user: any) {
  //   state.user = user;
  // },
  // SET_ITEM(state: RootState, item: any) {
  //   state.item = item;
  // },
  // SET_LIST(state: RootState, list: any) {
  //   state.list = list;
  // },
};

export type Mutations = typeof mutations;
