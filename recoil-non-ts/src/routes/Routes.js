import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Counter from 'components/Counter/Counter';
import MoreExamples from '../pages/Games/MoreExamples';

const Routes = () => (
  <Suspense fallback={<div>Loading..</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/more" component={MoreExamples} />
    </Switch>
  </Suspense>
)

export default Routes;
