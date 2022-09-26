import { sp } from '@pnp/sp/presets/all';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { itemsAddCorredor } from '../../../dataflow/reducers';
import { ICorredorItems } from '../interfaces/ICorredorItems';
import { mapGetItemsCorredor } from '../repositories/Corredor';

export class CorredorClassService {
  private _list: string;
  private _dispatch: IDispatch<IAnyAction>;

  constructor() {
    this._list = 'Corredor';
    this._dispatch = useAppDispatch();
  }

  public getItemsAllCorredor = async (isAscending = false) => {
    const result: ICorredorItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Created', 'Modified')
      .orderBy('Created', isAscending)
      .get();
    return mapGetItemsCorredor(result);
  };

  // Rota utilizada para obtenção de quantidade limitada de Corredores
  public getItemsWithLimit = async (top: number = 100, isAscending = false) => {
    const result: ICorredorItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Created', 'Modified')
      .orderBy('Created', isAscending)
      .get();
    return mapGetItemsCorredor(result);
  };

  // Rota utilizada para criar novo Corredor
  public addCorredor = async (CorredorInput: ICorredorItems) => {
    const { data } = await sp.web.lists.getByTitle(this._list).items.add(CorredorInput);
    return data as ICorredorItems;
  };

  // Rota utilizada para atualizar um Corredor
  public editCorredor = async (id: number, CorredorInput: ICorredorItems) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).update(CorredorInput);
  };

  // Rota utilizada para deletar um Corredor
  public deleteCorredor = async (id: number) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).delete();
  };

  public getAllCorredor = (isAscending?: boolean) => {
    this.getItemsAllCorredor(isAscending)
      .then((result) => {
        result.map((item) => {
          this._dispatch(itemsAddCorredor(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  public createCorredor = (CorredorInput: ICorredorItems) => {
    this.addCorredor(CorredorInput)
      .then((response) => {
        const Corredor: ICorredorItems = {
          Id: response.Id,
          Nome: response.Nome,
          Created: response.Created,
          Modified: response.Modified,
        };
        this._dispatch(itemsAddCorredor(Corredor));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
