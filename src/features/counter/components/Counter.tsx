import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { useJokes } from '../api/getJokes';
import { decrement, increment, selectCount } from '../stores';

export const Counter = () => {
  const count = useSelector(selectCount);
  const jokesQuery = useJokes();
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
      {jokesQuery.data?.map((joke, index) => {
        return (
          <span key={index}>
            {joke.punchline}
            <br />
          </span>
        );
      })}
    </div>
  );
};
