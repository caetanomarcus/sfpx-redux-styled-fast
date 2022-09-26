export interface ISiteCurrentUser {
  Id: number;
  LoginName: string;
  Permission: string;
  Title: string;
  Email: string;
}

export enum GroupsPermission {
  Administrador = 14,
  Visitantes = 4,
}

export enum GroupsPermissionString {
  Administrador = 'Administrador',
  Contribuidor = 'Contribuidor',
  Visitantes = 'Visitantes',
}
