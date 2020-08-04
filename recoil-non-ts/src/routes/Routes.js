import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Counter from '../components/counter/Counter'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/counter" component={Counter} />
  </Switch>
)

export default Routes;
