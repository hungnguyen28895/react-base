// import './App.css';

import { Counter } from './features/counter';
import { AppProvider } from './providers/app';

function App() {
  return (
    <AppProvider>
      {/* <AppRoutes /> */} <Counter></Counter>
    </AppProvider>
  );
}

export default App;
