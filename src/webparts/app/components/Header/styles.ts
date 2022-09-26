import styled from 'styled-components';
import Banner from '../../assets/img/Banner.png';

interface TitleProps {
  isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const SectionMenu = styled.div`
  height: 65px;
  display: flex;
  align-items: center;

  background: var(--branco) 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #0000000d;
  opacity: 1;
`;

export const Iconer = styled.img`
  width: 23px;
  height: 27px;

  margin-left: 37px;
  margin-bottom: 19px;
  margin-top: 19px;
  margin-right: 26px;
`;

export const TitleProject = styled.h1`
  color: var(--cinza-escuro);

  letter-spacing: var(--unnamed-character-spacing-0);
  opacity: 1;

  font: normal normal normal 19px/26px Segoe UI, Regular;
`;

export const MenuList = styled.div`
  margin-left: 72px;

  ul {
    display: flex;
    gap: 40px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font: normal normal normal 14px/26px Segoe UI;
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--cinza-escuro);
      text-align: left;
      opacity: 1;
    }
  }
`;

export const UserSectionWrapper = styled.div`
  width: 100%;
  height: 139px;
  display: flex;

  background: transparent url(${Banner}) 0% 0% no-repeat padding-box;
  background-size: cover;
  opacity: 1;
`;

export const UserPictureContainer = styled.div`
  width: 76px;
  height: 76px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 135px;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-right: 23px;

  border-radius: 50%;
  border: 1px solid #fff;
  background: transparent;

  opacity: 1;
`;

export const UserPicture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  opacity: 1;
`;

export const NameUserWrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 34px;
`;

export const TitleNameUser = styled.h1<TitleProps>`
  color: ${({ isActive }) => (isActive ? 'var(--branco)' : 'var(--amarelo-vale)')};

  letter-spacing: var(--unnamed-character-spacing-0);
  opacity: 1;

  font: normal normal 30px/35px Segoe UI, Semibold;
`;
