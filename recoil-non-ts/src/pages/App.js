import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Routes from '../routes/Routes';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import Panel from 'components/ControlPanel/Panel/Panel';
import './App.css';
import { Content, ContentPanel } from './styles';

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
              <span>Test</span>
            </Panel>
            <Panel label="Games">
              <span>Test2</span>
            </Panel>
          </ControlPanel>
        </ContentPanel>
      </Content>
    </main>
  );
}

export default App;
