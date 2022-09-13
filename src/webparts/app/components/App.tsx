import * as React from 'react';
import { IAppProps } from './IAppProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Provider } from 'react-redux';
import store from '../../../dataflow/store'
import RoutesApp from '../routes';


const App  = (props:IAppProps) => {
  
    return (
      <Provider store={store}>
        <RoutesApp {...props} />
      </Provider>
    );
  }
export default App


