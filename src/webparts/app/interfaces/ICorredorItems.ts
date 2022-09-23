export interface ICorredorItems {
  Id?: number;
  Nome: string;
  Created?: string;
  Modified?: string;
}

export enum FilterSelectCorredor {

}


export type ICorredorInput = Pick<ICorredorItems, 'Id' | 'Created'>;
