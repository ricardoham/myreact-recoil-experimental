import React from 'react';
import { useRecoilValue } from 'recoil';
import { multipleCount } from 'recoil/counter-recoil/selector';
import { counterState } from 'recoil/counter-recoil/atom';

const CounterControl = () => {
  const currentNumber = useRecoilValue(counterState);
  const multiple = useRecoilValue(multipleCount);

  return (
    <section>
      <span>Current number with useRecoilValue: {currentNumber}</span>
      <br />
      <span>Number multiplied of 2: {multiple}</span>
    </section >
  )
}

export default CounterControl;
