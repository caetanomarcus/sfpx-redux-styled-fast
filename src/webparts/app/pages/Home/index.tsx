import * as React from 'react';
import { IAppProps } from '../../interfaces/IAppProps';
import { Link } from 'react-router-dom';
import { IModuloItemsFormated } from '../../interfaces/IModuloItems';
import { ModuloClassService } from '../../../app/services/ModuloClassServices';
import { useAppSelector } from '../../../../dataflow/hooks';
import { GroupsPermissionString, ISiteCurrentUser } from '../../interfaces/IUserInfo';
import * as S from './styles';
import Header from '../../components/Header';
import Informative from './components/Informative';

const Home: React.FC<IAppProps> = (props): JSX.Element => {
  const moduloService = new ModuloClassService();
  const moduloStateGlobal: IModuloItemsFormated[] = useAppSelector((state) => state.state.listModulo);
  const isCurrentUserAdminValue = useAppSelector((state) => state.stateIsPermission.isValuePermission);

  const handlerSave = () => {
    moduloService.createModulos({
      ConteudoTema: 'sasadsdsdsds',
      // Icone: "sasas",
      // Author: datalook,
      // Corredor: [{Id: 1}],
      Nome: `${Math.random().toString(36).substr(2, 9)}`,
    });
  };

  return (
    <>
      <S.Container>
        <Header />
        <Informative />
      </S.Container>
    </>
  );
};

export default Home;
