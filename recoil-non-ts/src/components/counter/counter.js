import React from 'react';
import Button from 'components/Button/Button';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { counterState } from 'recoil/counter-recoil/atom';
import { CounterContainer } from './styles';
import { valueCount } from 'recoil/counter-recoil/selector';

const Counter = () => {
  const [count, setCounter] = useRecoilState(counterState);
  const setCount = useSetRecoilState(valueCount)

  return (
    <section>
      <header>
        <h3>Counter Example</h3>
        <CounterContainer>
          <Button onClick={() => setCounter(count + 1)}>Add number</Button>
          <span>Count: {count} </span>
          <Button onClick={() => setCount(3)}>Add Value</Button>
        </CounterContainer>
      </header>
    </section>
  )
}

export default Counter;
