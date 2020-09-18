import React from 'react';
import GamesList from './components/GamesList/GamesList';
import GamesForm from './components/GamesForm/GamesForm';
import GamesListContainer from 'containers/GamesListContainer';

import { GamesContainer } from './styles';

const MoreExamples = () => {
  return (
    <GamesContainer>
      {/* <GamesList /> */}
      <GamesListContainer />
      <GamesForm />
    </GamesContainer>
  )
}

export default MoreExamples;
