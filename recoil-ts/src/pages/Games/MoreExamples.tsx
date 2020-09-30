import React from 'react';
import GamesForm from './components/GamesForm/GamesForm';
import GamesListContainer from 'containers/GamesListContainer';

import { GamesContainer } from './styles';

const MoreExamples = () => {
  return (
    <GamesContainer>
      <GamesListContainer />
      <GamesForm />
    </GamesContainer>
  )
}

export default MoreExamples;
