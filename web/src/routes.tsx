import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanegesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreatOrphanege from './pages/CreateOrphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanegesMap} />
        <Route path="/orphanages/create" component={Orphanage} />
        <Route path="/orphanages/:id" component={CreatOrphanege} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
