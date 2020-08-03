import React from 'react';
import { useRecoilValue } from 'recoil';
import { counterState } from '../../recoil/counter-recoil/atom';

const Counter = () => {
  const counter = useRecoilValue(counterState)
 return ( <section>
    <header>
      <h4>Counter Example</h4>
    </header>
  </section>
 )
}

export default Counter;
