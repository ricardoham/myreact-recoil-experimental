import React from 'react';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import Panel from 'components/ControlPanel/Panel/Panel';
import GamesList from './components/GamesList/GamesList';
import GamesForm from './components/GamesForm/GamesForm';

const MoreExamples = () => {
  return (
    <>
      <GamesList />
      <GamesForm />
      <ControlPanel>
        <Panel label="Counter">
          <span>Test</span>
        </Panel>
        <Panel label="Games">
          <span>Test2</span>
        </Panel>
      </ControlPanel>
    </>
  )
}

export default MoreExamples;
