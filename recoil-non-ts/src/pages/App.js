import React, { Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Routes from '../routes/Routes';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import Panel from 'components/ControlPanel/Panel/Panel';
import './App.css';
import { Content, ContentPanel } from './styles';
import Counter from 'components/Counter/Counter';
import GamesList from './Games/components/GamesList/GamesList';

function App() {

  return (
    <main>
      <header className="App-header">
        <img src='/assets/logo.svg' className="App-logo" alt="logo" />
      </header>
      <Content>
        <Navbar />
        <ContentPanel>
          <Routes />
          <ControlPanel>
            <Panel label="Counter">
              <Counter />
            </Panel>
            <Panel label="Games">
              <GamesList />
            </Panel>
          </ControlPanel>
        </ContentPanel>
      </Content>
    </main>
  );
}

export default App;
