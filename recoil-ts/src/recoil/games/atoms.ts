import { atom } from 'recoil';
import { Games } from 'model/games';

export const gamesState = atom<Games[]>({
  key: 'gamesState',
  default: [],
})
