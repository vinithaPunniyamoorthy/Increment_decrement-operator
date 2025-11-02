import React, { useState } from 'react';
import './IncDecSwitch.css';

const IncDecSwitch = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="inc-dec-container">
      <button className="inc-dec-button" onClick={decrement}>-</button>
      <span className="count-display">{count}</span>
      <button className="inc-dec-button" onClick={increment}>+</button>
    </div>
  );
};

export default IncDecSwitch; 