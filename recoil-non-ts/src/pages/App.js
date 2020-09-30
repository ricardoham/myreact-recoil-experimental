import React, { Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Routes from '../routes/Routes';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import Panel from 'components/ControlPanel/Panel/Panel';
import CounterControl from './Counter/CounterControl';
import GamesList from './Games/components/GamesList/GamesList';
import './App.css';
import { Container, Content } from './styles';

function App() {

  return (
    <main>
      <header className="App-header">
        <img src='/assets/logo.svg' className="App-logo" alt="logo" />
      </header>
      <Container>
        <Navbar />
        <Content>
          <Routes />
        </Content>
        <ControlPanel>
          <Panel label="Counter">
            <CounterControl />
          </Panel>
          <Panel label="Games">
            <Suspense fallback={<div>Loading..</div>}>
              <GamesList />
            </Suspense>
          </Panel>
        </ControlPanel>
      </Container>
    </main>
  );
}

export default App;
