import React, { Suspense } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Counter from '../components/Counter/Counter';
import CrudExample from '../pages/CRUD/CrudExample';

const Routes = () => (
  <Suspense fallback={<div>Loading..</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/crud" component={CrudExample} />
    </Switch>
  </Suspense>
)

export default Routes;
