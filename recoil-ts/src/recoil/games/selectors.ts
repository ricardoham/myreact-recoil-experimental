import { selector, selectorFamily, useRecoilCallback } from 'recoil';
import { gamesState } from './atoms';
import { gamesAPI } from '../../api/api';
import { Games } from 'model/games';

export const getGamesList = selector<Games[]>({
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
  set: async ({ set, get }, newValue: any) => {
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
  get: (id: number) => ({ get }) => {
    return get(gamesState).filter(item => item.id !== id)
  }
})

export const useSaveFavGame = () => {
  const favGame = useRecoilCallback(
    ({ set }) => async (newFavGame: Games) => {
      try {
        const { data } = await gamesAPI.post<Games>('/games', newFavGame);
        set(gamesState, currentGames => [...currentGames, data])
      } catch (err) {
        console.error(err)
      }
    }
  )
  return favGame
}

export const useRemoveFavGame = () => (
  useRecoilCallback(({ set }) => async (id: number) => {
    try {
      const res = await gamesAPI.delete(`/games/${id}`);
      set(gamesState, currGames => (
        currGames.filter((game: Games) => game.id !== id)
      ))
      return res;
    } catch (err) {
      console.error(err);
    }
  }
  ))
