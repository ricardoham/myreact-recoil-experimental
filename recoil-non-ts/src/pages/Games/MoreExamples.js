import React from 'react';
import GamesForm from './components/GamesForm/GamesForm';
import GamesList from './components/GamesList/GamesList';

import { GamesContainer } from './styles';

const MoreExamples = () => {

  return (
    <GamesContainer>
      {/* <GamesListContainer /> */}
      <GamesList />
      <GamesForm />
    </GamesContainer>
  )
}

export default MoreExamples;
