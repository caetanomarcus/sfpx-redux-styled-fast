import * as React from 'react';
import * as S from './styles';
import LogoSrc from '../../assets/icons/IconePD.svg';
import Profile from '../../assets/img/PictureProfileTeste.png';
import { useAppSelector } from '../../../../dataflow/hooks';

const Header: React.FC = () => {
  const isCurrentUser = useAppSelector((state) => state.stateObject.currentUser);
  return (
    <>
      <S.Container>
        <S.SectionMenu>
          <S.Iconer src={LogoSrc} />
          <S.TitleProject>Portal Plano Diretor</S.TitleProject>
          <S.MenuList>
            <ul>
              <li>Objetivo do PDGA</li>
              <li>Capacitação</li>
              <li>Equipe responsável</li>
              <li>Link úteis</li>
              <li>Administração</li>
            </ul>
          </S.MenuList>
        </S.SectionMenu>

        <S.UserSectionWrapper>
          <S.UserPictureContainer>
            <S.UserPicture src={Profile} />
          </S.UserPictureContainer>
          <S.NameUserWrapper>
            <S.TitleNameUser isActive={false} style={{ lineHeight: '32px' }}>
              Bem vindo,
            </S.TitleNameUser>
            <S.TitleNameUser isActive={true} style={{ lineHeight: '32px' }}>
              {isCurrentUser && isCurrentUser.LoginName}
            </S.TitleNameUser>
          </S.NameUserWrapper>
        </S.UserSectionWrapper>
      </S.Container>
    </>
  );
};

export default Header;
