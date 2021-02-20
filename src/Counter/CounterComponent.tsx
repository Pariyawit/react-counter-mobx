import React from 'react';
import { ICounter } from './ICounter';

type Props = {
  counter: ICounter;
};

const CounterComponent = ({ counter }: Props) => {
  // This not rerender when counter change
  return (
    <div>
      <h2>{counter.count}</h2>
      <div>
        <button onClick={() => counter.add()}>+ add</button>
      </div>
      <div>
        <button onClick={() => counter.subtract()}>- subtract</button>
      </div>
    </div>
  );
};

export default CounterComponent;
