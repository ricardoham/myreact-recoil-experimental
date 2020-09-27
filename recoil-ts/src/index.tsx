import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import { IconContext } from 'react-icons/lib';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <IconContext.Provider value={{ className: 'icons' }}>
          <App />
        </IconContext.Provider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
