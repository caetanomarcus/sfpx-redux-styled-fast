export interface IComplexo {
  Id?: number;
  Nome: string;
}

export interface IFaseItems {
  Id: number;
  Nome: string;
  Created: string;
  Modified: string;
  Complexo?: Array<IComplexo>;
}


export type IFaseInput = Pick<IFaseItems, 'Id' | 'Complexo'| 'Nome' >;
