import React, { useState } from 'react';

function Counter() {
  const counterInitial = 0;
  const [counter, setCounter] = useState(counterInitial);

  function increment() {
    setCounter(counter + 1);
    console.log('Like up');
  }

  function decrement() {
    setCounter(counter - 1);
    console.log('Like down');
  }

  return (
    <div>
      Counter
      <h1>{counter}</h1>
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
