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
  )
)

export const useEditFavGame = () => {
  const favGame = useRecoilCallback(
    ({ set }) => async (newFavGame, id) => {
      try {
        const res = await gamesAPI.put(`/games/${id}`, newFavGame);
        set(gamesState, currentGames =>
          currentGames.map(item => item.id === id ? newFavGame : item))
        return res;
      } catch (err) {
        console.error(err)
      }
    }
  )
  return favGame
}
