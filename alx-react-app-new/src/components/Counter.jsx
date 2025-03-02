// Step 1: Import useState from React
import { useState } from 'react';

// Step 2: Define the Counter component
function Counter() {
  // Step 3: Initialize state using useState
  const [count, setCount] = useState(0);

  // Step 4: Define functions for increment, decrement, and reset
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // Step 5: Render the JSX
  return (
    <div>
      {/* Display the current count */}
      <p>Current Count: {count}</p>

      {/* Buttons for increment, decrement, and reset */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Step 6: Export the Counter component
export default Counter;