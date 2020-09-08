import React from 'react';
import GamesList from './components/GamesList/GamesList';
import GamesForm from './components/GamesForm/GamesForm';
import { GamesContainer } from './styles';

const MoreExamples = () => {
  return (
    <GamesContainer>
      <GamesList />
      <GamesForm />
    </GamesContainer>
  )
}

export default MoreExamples;
