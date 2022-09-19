import * as React from 'react';
import { IAppProps } from '../app/interfaces/IAppProps';
import { Provider } from 'react-redux';
import store from '../../dataflow/store';
import RoutesApp from '../app/routes';
import { WebpartPropertiesProvider } from './hooks/useWebpartProperties';

const App = (props: IAppProps) => {
  return (
    <>
      <Provider store={store}>
        <WebpartPropertiesProvider props={props}>
            <RoutesApp {...props} />
        </WebpartPropertiesProvider>
      </Provider>
    </>
  );
};
export default App;
