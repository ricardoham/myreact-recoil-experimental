import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { counterState } from 'recoil/counter-recoil/atom';
import { counterSelector } from 'recoil/counter-recoil/selector';

const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  const countNumber = useRecoilValue(counterSelector);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }
  return (<section>
    <header>
      <h4>Counter Example</h4>
      <button onClick={handleIncrement}>Add number</button>
      <span>Counter: {countNumber} </span>
    </header>
  </section>
  )
}

export default Counter;
