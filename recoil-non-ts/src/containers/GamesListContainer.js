import { gamesAPI } from 'api/api';
import GamesList from 'pages/Games/components/GamesList/GamesList';
import React, { Suspense, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { gamesState } from 'recoil/games/atoms';

const GamesListContainer = () => {
  const setGames = useSetRecoilState(gamesState);

  useEffect(() => {
    const getGamesList = async () => {
      try {
        const res = await gamesAPI.get('/games');
        setGames(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    getGamesList()
  }, [])

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <GamesList />
      </Suspense>
    </div>
  )
}

export default GamesListContainer;