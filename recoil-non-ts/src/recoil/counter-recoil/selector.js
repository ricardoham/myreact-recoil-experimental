import { selector } from "recoil";
import { counterState } from './atom';

export const multiCount = selector({
  key: 'multiCount',
  get: ({ get }) => get(counterState) * 2,
})

export const valueCount = selector({
  key: 'valueCount',
  get: ({ get }) => get(counterState),
  set: ({ set, get }, value) => {
    const curr = get(counterState);
    return set(counterState, curr * value)
  }
})
