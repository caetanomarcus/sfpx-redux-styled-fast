import { sp } from '@pnp/sp/presets/all';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { itemsAddComplexo } from '../../../dataflow/reducers';
import { IComplexoItems } from '../interfaces/IComplexoItems';
import { mapGetItemsComplexo } from '../repositories/Complexo';

export class ComplexoClassService {
  private _list: string;
  private _dispatch: IDispatch<IAnyAction>;

  constructor() {
    this._list = 'Complexo';
    this._dispatch = useAppDispatch();
  }

  public getItemsAllComplexo = async (isAscending = false) => {
    const result: IComplexoItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Created', 'Modified', 'Corredor/Created', 'Corredor/Modified', 'Corredor/Id', 'Corredor')
      .expand('Corredor')
      .orderBy('Created', isAscending)
      .get();
    return mapGetItemsComplexo(result);
  };

  // Rota utilizada para obtenção de quantidade limitada de Complexos
  public getItemsWithLimit = async (top: number = 100, isAscending = false) => {
    const result: IComplexoItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Created', 'Modified', 'Corredor/Created', 'Corredor/Modified', 'Corredor/Id', 'Corredor')
      .expand('Corredor')
      .orderBy('Created', isAscending)
      .get();
    return mapGetItemsComplexo(result);
  };

  // Rota utilizada para criar novo Complexo
  public addComplexo = async (ComplexoInput: IComplexoItems) => {
    const { data } = await sp.web.lists.getByTitle(this._list).items.add(ComplexoInput);
    return data as IComplexoItems;
  };

  // Rota utilizada para atualizar um Complexo
  public editComplexo = async (id: number, ComplexoInput: IComplexoItems) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).update(ComplexoInput);
  };

  // Rota utilizada para deletar um Complexo
  public deleteComplexo = async (id: number) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).delete();
  };

  public getAllComplexos = (isAscending?: boolean) => {
    this.getItemsAllComplexo(isAscending)
      .then((result) => {
        result.map((item) => {
          this._dispatch(itemsAddComplexo(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  public createComplexos = (ComplexoInput: IComplexoItems) => {
    this.addComplexo(ComplexoInput)
      .then((response) => {
        const Complexo: IComplexoItems = {
          Id: response.Id,
          Nome: response.Nome,
          Created: response.Created,
          Modified: response.Modified,
          Corredor: response.Corredor,
        };
        this._dispatch(itemsAddComplexo(Complexo));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
