// import './App.css';
import { QueryClientProvider } from 'react-query';

import { Counter } from './features/counter';
import { queryClient } from './lib/react-query';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Counter />
    </QueryClientProvider>
  );
}

export default App;
