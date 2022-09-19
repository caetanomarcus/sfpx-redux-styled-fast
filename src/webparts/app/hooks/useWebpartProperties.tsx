import * as React from 'react';
import { IAppProps } from '../interfaces/IAppProps';

type WebpartPropertiesProviderType = {
  children: React.ReactNode;
  props: IAppProps;
};

type WebpartPropertiesContextData = {
  description?: string;
  moduloList?: string;
};

const WebpartPropertiesContext = React.createContext<WebpartPropertiesContextData>({} as WebpartPropertiesContextData);

export const WebpartPropertiesProvider = ({ children, props }: WebpartPropertiesProviderType) => {
  const { description, moduloList } = props;
  console.log('WebpartPropertiesProvider', props);

  return (
    <WebpartPropertiesContext.Provider
      value={{
        description,
        moduloList,
      }}
    >
      {children}
    </WebpartPropertiesContext.Provider>
  );
};

export const useWebpartProperties = () => {
  const context = React.useContext(WebpartPropertiesContext);

  return context;
};
