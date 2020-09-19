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


export const saveFavGame = selector({
  key: 'saveFavGame',
  get: ({ get }) => { },
  set: async ({ set, get }, newValue) => {
    try {
      const res = await gamesAPI.post('/games', newValue);
      set(gamesState, newValue)
      return get(gamesState)
    } catch (err) {
      console.error(err)
    }
  }
})

export const useSaveFavGame = () => {
  const favGame = useRecoilCallback(
    ({ set }) => async newFavGame => {
      try {
        const res = await gamesAPI.post('/games', newFavGame);
        set(gamesState, currentGames => [...currentGames, newFavGame])
        return res;
      } catch (err) {
        console.error(err)
      }
    }
  )
  return favGame
}
