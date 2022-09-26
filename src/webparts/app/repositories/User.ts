import { ISiteGroupInfo } from '@pnp/sp/site-groups';
import { ISiteUserInfo } from '@pnp/sp/site-users/types';
import { GroupsPermission, ISiteCurrentUser } from '../interfaces/IUserInfo';

export const mapGetItemsUserGroups = (groups: ISiteGroupInfo[], user?: ISiteUserInfo) => {
  let userFilterFormated: ISiteCurrentUser;

  const itemsFilterGroups = groups.filter((item) => item.Id == GroupsPermission.Administrador || item.Id === GroupsPermission.Visitantes);

  itemsFilterGroups.forEach((item) => {
    userFilterFormated = {
      Id: user.Id,
      LoginName: user.Title,
      Email: user.UserPrincipalName,
      Permission: item.Title,
      Title: user.Title,
    };
  });

  return userFilterFormated;
};
