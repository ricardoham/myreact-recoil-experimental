import { selector } from "recoil";
import { counterState } from './atom';

export const counterSelector = selector({
  key: 'counterSelector',
  get: ({ get }) => {
    const counter = get(counterState);
    return counter;
  }
});

export const multipleCount = selector({
  key: 'multipleCount',
  get: ({ get }) => get(counterState) * 2
})

export const multipleWithValue = selector({
  key: 'multipleWithValue',
  get: ({ get }, value) => get(counterState) + value,
  set: ({ set, get }, value) => {
    const curr = get(counterState);
    return set(counterState, curr * value)
  }
})
