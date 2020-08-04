import React, { Suspense } from 'react';
import { gamesState } from '../../recoil/games/atom';
import { useRecoilValue } from 'recoil';
import { gamesList } from '../../recoil/games/selector';

const CrudExample = () => {
  const games = useRecoilValue(gamesList);
  console.log('games', games);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>Works</div>
    </Suspense>
  )
}

export default CrudExample;
