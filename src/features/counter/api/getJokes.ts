import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Joke } from '../types';

export const getJokes = (): Promise<Joke[]> => {
  return axios.get('/jokes/goodJokes');
};

type QueryFnType = typeof getJokes;

type UseJokesOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useJokes = ({ config }: UseJokesOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['jokes'],
    queryFn: () => getJokes(),
  });
};
