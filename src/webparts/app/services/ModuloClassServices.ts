import { sp } from '@pnp/sp/presets/all';
import { IModuloInput, IModuloItems, IModuloItemsFormated } from '../interfaces/IModuloItems';
import { mapGetItems } from '../repositories/Modulo';

export class ModuloClassService {
  private _list: string;

  constructor(listName: string) {
    this._list = listName;
  }

  public getAllModulo = async (isAscending = false) => {
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
    return mapGetItems(result);
  };

  // Rota utilizada para obtenção de quantidade limitada de modulos
  public getWithLimit = async (top: number = 100, isAscending = false) => {
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
    return mapGetItems(result);
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
  public deleteModulon = async (id: number) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).delete();
  };
}
