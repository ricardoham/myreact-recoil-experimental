import { selector } from 'recoil';
import { gamesState } from './atom';
import { gamesAPI } from '../../api/api';

export const gamesList = selector({
  key: 'gamesList',
  get: async () => {
    try {
      const res = await gamesAPI.get('/games');
      return res.data;

    } catch (err) {
      console.log(err);
    }
  }
})
