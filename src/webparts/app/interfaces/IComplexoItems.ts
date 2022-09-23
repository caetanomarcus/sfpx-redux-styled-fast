export interface ICorredor {
  Id?: number;
  Created?: string;
  Modified?: string;
}

export interface IComplexoItems {
  Id: number;
  Nome: string;
  Created: string;
  Modified: string;
  Corredor?: Array<ICorredor>;
}


export type IComplexoInput = Pick<IComplexoItems, 'Id' | 'Corredor'| 'Nome' >;
