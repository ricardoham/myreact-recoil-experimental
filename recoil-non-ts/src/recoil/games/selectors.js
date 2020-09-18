import { selector, selectorFamily, useRecoilCallback } from 'recoil';
import { gamesState } from './atoms';
import { gamesAPI } from '../../api/api';

export const getGamesList = selector({
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


export const saveFavGame = selectorFamily({
  key: 'saveFavGame',
  set: (games) => async ({ set }) => {
    try {
      console.log("enter", games);
      const res = await gamesAPI.post('/games', games);
      // if (res.code === 200) {
      console.log("res", res);
      set(gamesState, games)

      // }
      return res
    } catch (err) {
      console.error(err)
    }
  }
})
