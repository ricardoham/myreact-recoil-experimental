import React from 'react';
import { useRecoilValue } from 'recoil';
import { counterState } from 'recoil/counter-recoil/atom';
import { multiCount } from 'recoil/counter-recoil/selector';

const CounterControl = () => {
  const count = useRecoilValue(counterState)
  const mult = useRecoilValue(multiCount)

  return (
    <section>
      <span>{count}</span>
      <br />
      <span>Mult: {mult}</span>
    </section >
  )
}

export default CounterControl;
