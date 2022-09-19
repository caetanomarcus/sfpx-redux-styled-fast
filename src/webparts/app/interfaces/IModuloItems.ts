export interface ICorredor {
  Id?: number;
  Created?: string;
  Modified?: string;
}

export interface IModuloItems {
  Id: number;
  Nome?: string;
  Created: string;
  FkCorredorId?: Array<number>;
  Modified: string;
  Author: {
    Title: string;
  };
  Icone: string;
  Corredor?: Array<ICorredor>;
  ConteudoTema: string;
}

export interface IModuloItemsFormated {
  Id: number;
  Nome?: string;
  Created: string;
  FkCorredorId?: Array<number>;
  Modified: string;
  Author?: string;
  Icone: string;
  Corredor?: Array<ICorredor>;
  ConteudoTema: string;
}

export type IModuloInput = Pick<IModuloItemsFormated, 'ConteudoTema' | 'Nome'>;
