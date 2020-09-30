import React from 'react';
import Button from 'components/Button/Button';
import { useRecoilState } from 'recoil';
import { counterState } from 'recoil/counter-recoil/atom';
import { CounterContainer } from './styles';

const Counter = () => {
  const [count, setCounter] = useRecoilState(counterState);

  return (
    <section>
      <header>
        <h3>Counter Example</h3>
        <CounterContainer>
          <Button onClick={() => setCounter(count + 1)}>Add number</Button>
          <span>Count: {count} </span>
        </CounterContainer>
      </header>
    </section>
  )
}

export default Counter;
