import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Counter from '../components/counter/Counter';
import CrudExample from '../pages/CRUD/CrudExample';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/counter" component={Counter} />
    <Route path="/crud" component={CrudExample} />
  </Switch>
)

export default Routes;
