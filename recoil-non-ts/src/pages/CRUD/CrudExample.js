import React, { Suspense, useEffect } from 'react';
import { gamesState } from '../../recoil/games/atom';
import { useRecoilValue } from 'recoil';
import { gamesList } from '../../recoil/games/selector';

const CrudExample = () => {
  const games = useRecoilValue(gamesList);
  console.log('games', games);

  return (
    <div>Works</div>
  )
}

export default CrudExample;
