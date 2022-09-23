import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import * as React from 'react';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import { IAppProps } from '../interfaces/IAppProps';
import { ModuloClassService } from '../services/ModuloClassServices';
import { UserProfileClassService } from '../services/UserProfileClassServices';
import { useAppDispatch, useAppSelector } from '../../../dataflow/hooks';
import { CorredorClassService } from '../services/CorredorClassServices';
import { ComplexoClassService } from '../services/ComplexoClassService';
import { FaseClassService } from '../services/FaseClassServices';
import { GroupsPermissionString } from '../interfaces/IUserInfo';
import { isItemAddValuePermission } from '../../../dataflow/reducers';

const RoutesApp = (props: IAppProps) => {
  const moduloService = new ModuloClassService();
  const corredorService = new CorredorClassService();
  const complexoService = new ComplexoClassService();
  const currentUser = new UserProfileClassService();
  const faseService = new FaseClassService();
  const currentUserStateGlobal = useAppSelector((state) => state.stateObject.currentUser);
  const dispatch = useAppDispatch();


  React.useEffect(() => {
    if (!currentUserStateGlobal) {
      console.log('Apenas um console');
      currentUser.getAllGroupsInfo();
      moduloService.getAllModulos();
      corredorService.getAllCorredor();
      complexoService.getAllComplexos();
      faseService.getAllFase();
    }
  }, []);

  React.useEffect(() => {
    const isCurrentUserAdmin = !!currentUserStateGlobal && currentUserStateGlobal?.Permission == GroupsPermissionString.Administrador;
    dispatch(isItemAddValuePermission(isCurrentUserAdmin))
  }, [currentUserStateGlobal]);


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
