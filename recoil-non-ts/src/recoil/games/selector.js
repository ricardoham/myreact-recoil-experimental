import { selector } from 'recoil';
import { gamesState } from './atom';
import { gamesAPI } from '../../api/api';

export const gamesList = selector({
  key: 'gamesList',
  get: async () => {
    const res = await gamesAPI.get('/games');
    console.log('res', res);
    return res;
  }
})
