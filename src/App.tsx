import React from 'react';
import { ICounter, Counter } from './Counter/Counter';
import CounterComponent from './Counter/CounterComponent';

function App() {
  const counter1: ICounter = new Counter();
  const counter2: ICounter = new Counter();
  return (
    <div className='App'>
      <CounterComponent counter={counter1} />
      <CounterComponent counter={counter2} />
    </div>
  );
}

export default App;
