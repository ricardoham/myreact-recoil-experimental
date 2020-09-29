import Button from 'components/Button/Button';
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { counterState } from 'recoil/counter-recoil/atom';
import { multipleWithValue } from 'recoil/counter-recoil/selector';

import { CounterContainer } from './styles';

const Counter = () => {
  const [count, setCounter] = useRecoilState(counterState);
  const setMultiple = useSetRecoilState(multipleWithValue);

  return (
    <section>
      <header>
        <h3>Counter Example</h3>
        <CounterContainer>
          <Button onClick={() => setCounter(count + 1)}>Add number</Button>
          <Button onClick={() => setMultiple(3)}>Multiple with value</Button>
          <span>Count: {count} </span>
        </CounterContainer>
      </header>
    </section>
  )
}

export default Counter;
