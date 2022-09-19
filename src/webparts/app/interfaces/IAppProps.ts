import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IAppProps {
  description: string;
  moduloList: string;
  context: WebPartContext;
}
