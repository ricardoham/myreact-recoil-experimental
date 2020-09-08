import React, { Suspense, useEffect } from 'react';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import Tab from 'components/ControlPanel/Tab/Tab';
import Panel from 'components/ControlPanel/Panel/Panel';
import GamesList from './components/GamesList/GamesList';

const CrudExample = () => {
  return (
    <>
      <GamesList />
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

export default CrudExample;
