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

export const removeGame = selectorFamily({
  key: 'removeGame',
  get: id => ({ get }) => {
    return get(gamesState).filter(item => item !== id)
  }
})

export const useSaveFavGame = () => {
  const favGame = useRecoilCallback(
    ({ set }) => async newFavGame => {
      try {
        const res = await gamesAPI.post('/games', newFavGame);
        set(gamesState, currentGames => [...currentGames, res.data])
        return res;
      } catch (err) {
        console.error(err)
      }
    }
  )
  return favGame
}

export const useRemoveFavGame = () => (
  useRecoilCallback(({ set }) => async id => {
    try {
      const res = await gamesAPI.delete(`/games/${id}`);
      set(gamesState, currGames => (
        currGames.filter(game => game.id !== id)
      ))
      return res;
    } catch (err) {
      console.error(err);
    }
  }
  ))
