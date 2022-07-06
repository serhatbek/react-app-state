import { useState } from 'react';

import React from 'react';

/**
 * *[State]: const [count, setCount] = useState(0);
 * >[State]: useState hook'un atanan değeri sakladığı değişken 'count' olarak belirlenir
 * *[State]: useState hook'un count değişkenindeki verilerin değişimi 'setCount' function'ı gerçekleştirir
 * >[State]: Herhangi bir state yenilendiği anda component içindeki return işlemi yeniden render edilir
 */

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className='wrapper'>
      <p>{count}</p>
      <div>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
    </div>
  );
};

export default Counter;
