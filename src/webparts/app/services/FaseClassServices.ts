import { sp } from '@pnp/sp/presets/all';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { itemsAddFase } from '../../../dataflow/reducers';
import { IFaseItems } from '../interfaces/IFaseItems';
import { mapGetItemsFase } from '../repositories/Fase';

export class FaseClassService {
  private _list: string;
  private _dispatch: IDispatch<IAnyAction>;

  constructor() {
    this._list = 'Fase';
    this._dispatch = useAppDispatch();
  }

  public getItemsAllFase = async (isAscending = false) => {
    const result: IFaseItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Created', 'Modified', 'Complexo/Nome', 'Complexo')
      .expand('Complexo')
      .orderBy('Created', isAscending)
      .get();
    return mapGetItemsFase(result);
  };

  // Rota utilizada para obtenção de quantidade limitada de Fase
  public getItemsWithLimit = async (top: number = 100, isAscending = false) => {
    const result: IFaseItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Created', 'Modified', 'Complexo/Nome', 'Complexo')
      .expand('Complexo')
      .orderBy('Created', isAscending)
      .get();
    return mapGetItemsFase(result);
  };

  // Rota utilizada para criar uma nova Fase
  public addFase = async (FaseInput: IFaseItems) => {
    const { data } = await sp.web.lists.getByTitle(this._list).items.add(FaseInput);
    return data as IFaseItems;
  };

  // Rota utilizada para atualizar uma Fase
  public editFase = async (id: number, FaseInput: IFaseItems) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).update(FaseInput);
  };

  // Rota utilizada para deletar uma Fase
  public deleteFase = async (id: number) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).delete();
  };

  public getAllFase = (isAscending?: boolean) => {
    this.getItemsAllFase(isAscending)
      .then((result) => {
        result.map((item) => {
          this._dispatch(itemsAddFase(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  public createFase = (FaseInput: IFaseItems) => {
    this.addFase(FaseInput)
      .then((response) => {
        const Fase: IFaseItems = {
          Id: response.Id,
          Nome: response.Nome,
          Created: response.Created,
          Modified: response.Modified,
          Complexo: response.Complexo,
        };
        this._dispatch(itemsAddFase(Fase));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
