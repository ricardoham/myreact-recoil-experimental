import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Routes from '../routes/Routes';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import Panel from 'components/ControlPanel/Panel/Panel';
import './App.css';
import { Container, Content } from './styles';
import Counter from 'components/Counter/Counter';
import GamesList from './Games/components/GamesList/GamesList';

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
            <Counter />
          </Panel>
          <Panel label="Games">
            <GamesList />
          </Panel>
        </ControlPanel>
      </Container>
    </main>
  );
}

export default App;
