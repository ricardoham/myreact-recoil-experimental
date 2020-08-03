import { selector } from "recoil";
import { counterState } from './atom';

export const counterSelector = selector({
  key: 'counterSelector',
  get: ({get}) => {
    const counter = get(counterState);
    return counter;
  }
});
