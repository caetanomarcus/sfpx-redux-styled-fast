import { sp } from '@pnp/sp/presets/all';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { itemsAddModulo } from '../../../dataflow/reducers';
import { IModuloInput, IModuloItems, IModuloItemsFormated } from '../interfaces/IModuloItems';
import { mapGetItemsModulo } from '../repositories/Modulo';

export class ModuloClassService {
  private _list: string;
  private _dispatch: IDispatch<IAnyAction>;

  constructor() {
    this._list = 'Modulo';
    this._dispatch = useAppDispatch();
  }

  public getItemsAllModulo = async (isAscending = false) => {
    const result: IModuloItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select(
        'Id',
        'Author/Title',
        'Nome',
        'Created',
        'Modified',
        'Icone',
        'Corredor/Created',
        'Corredor/Modified',
        'Corredor/Id',
        'CorredorId',
        'ConteudoTema'
      )
      .expand('Author', 'Corredor')
      .orderBy('Created', isAscending)
      .get();
    return mapGetItemsModulo(result);
  };

  // Rota utilizada para obtenção de quantidade limitada de modulos
  public getItemsWithLimit = async (top: number = 100, isAscending = false) => {
    const result: IModuloItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select(
        'Id',
        'Author/Title',
        'Nome',
        'Created',
        'Modified',
        'Icone',
        'Corredor/Created',
        'Corredor/Modified',
        'Corredor/Id',
        'Corredor/Nome',
        'CorredorId',
        'ConteudoTema'
      )
      .expand('Author', 'Corredor')
      .orderBy('Created', isAscending)
      .get();
    return mapGetItemsModulo(result);
  };

  // Rota utilizada para criar novo modulo
  public addModulo = async (moduloInput: IModuloInput) => {
    const { data } = await sp.web.lists.getByTitle(this._list).items.add(moduloInput);
    return data as IModuloItemsFormated;
  };

  // Rota utilizada para atualizar um modulo
  public editModulo = async (id: number, moduloInput: IModuloItems) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).update(moduloInput);
  };

  // Rota utilizada para deletar um modulo
  public deleteModulo = async (id: number) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).delete();
  };

  public getAllModulos = (isAscending?: boolean) => {
    this.getItemsAllModulo(isAscending)
      .then((result) => {
        result.map((item) => {
          this._dispatch(itemsAddModulo(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  public createModulos = (moduloInput: IModuloInput) => {
    this.addModulo(moduloInput)
      .then((response) => {
        console.log('response', response);
        const modulo: IModuloItemsFormated = {
          Id: response.Id,
          Nome: response.Nome,
          Created: response.Created,
          Modified: response.Modified,
          Author: response.Author,
          Icone: response.Icone,
          Corredor: response.Corredor,
          ConteudoTema: response.ConteudoTema,
        };
        this._dispatch(itemsAddModulo(modulo));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
