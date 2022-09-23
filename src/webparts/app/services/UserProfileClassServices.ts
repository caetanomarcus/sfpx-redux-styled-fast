import { sp } from '@pnp/sp/presets/all';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { itemAddCurrentInfo } from '../../../dataflow/reducers';
import { ISiteUserInfo } from '@pnp/sp/site-users/types';
import { mapGetItemsUserGroups } from '../repositories/User';

export class UserProfileClassService {
  private _dispatch: IDispatch<IAnyAction>;
  private _dataUser: ISiteUserInfo;

  constructor() {
    this._dispatch = useAppDispatch();
  }

  private async initCurrentUser() {
    this._dataUser = await this.getCurrentUser();
  }

  public getCurrentUser = async () => {
    return await sp.web.currentUser.get();
  };

  public getGroupsInfoCurrentUser = async () => {
    await this.initCurrentUser();
    const result = await sp.web.currentUser.groups();
    return mapGetItemsUserGroups(result, this._dataUser);
  };

  public getAllGroupsInfo = () => {
    this.getGroupsInfoCurrentUser()
      .then((result) => {
        this._dispatch(itemAddCurrentInfo(result));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
