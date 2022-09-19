import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import * as React from 'react';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import { IAppProps } from '../interfaces/IAppProps';

const RoutesApp = (props: IAppProps) => {
  return (
    <BrowserRouter>
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <Home {...props} />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
        </Switch>
      </HashRouter>
    </BrowserRouter>
  );
};

export default RoutesApp;
