import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const resetCount = () => {
  setCount(0);
  };
  return (
    <div>
      <h2>Task 1: Simple Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={resetCount}>Reset</button>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      
    </div>
  );
}

export default Counter;