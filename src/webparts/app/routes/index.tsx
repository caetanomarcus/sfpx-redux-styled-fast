import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import * as React from 'react';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import { IAppProps } from '../interfaces/IAppProps';
import {  useSelector } from 'react-redux';
import { IModuloItemsFormated } from '../interfaces/IModuloItems';
import { RootState } from '../../../dataflow/store';


const RoutesApp = (props: IAppProps) => { 
  const moduloStateGlobal: IModuloItemsFormated[] = useSelector((state: RootState) => state.state);

  
  React.useEffect(() => {
    if(moduloStateGlobal){
      console.log(moduloStateGlobal)
    }
  }, []);

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
