import * as React from 'react';
import { IAppProps } from '../app/interfaces/IAppProps';
import { Provider } from 'react-redux';
import store from '../../dataflow/store';
import RoutesApp from '../app/routes';

import '../app/Global/index.css';
import { GlobalStyle } from './Global/global';

const App = (props: IAppProps) => {
  return (
    <>
      <Provider store={store}>
        <RoutesApp {...props} />
        <GlobalStyle />
      </Provider>
    </>
  );
};
export default App;
