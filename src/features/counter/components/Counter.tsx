import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/stores/types';

import { decrement, increment } from '../stores';

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <button
        className={clsx(
          'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80'
        )}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className={clsx(
          'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80'
        )}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
};
