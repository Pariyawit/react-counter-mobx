import React from 'react';
import { ICounter } from './Counter/ICounter';
import { Counter } from './Counter/Counter';
import { ObservableCounter } from './Counter/ObservableCounter';
import CounterComponent from './Counter/CounterComponent';
import ObserverCounterComponent from './Counter/ObserverCounterComponent';

function App() {
  const counter1: ICounter = new Counter();
  const counter2: ICounter = new ObservableCounter();
  return (
    <div className='App'>
      <h1>Regular Component</h1>
      <CounterComponent counter={counter1} />
      <h1>Observer Component</h1>
      <ObserverCounterComponent counter={counter2} />
    </div>
  );
}

export default App;
