import { NewsItem } from '@/api';

export const state = {
  news: [] as NewsItem[],
  ask: [],
  jobs: [],
  user: {},
  item: {},
  list: [],
};

export type RootState = typeof state;
