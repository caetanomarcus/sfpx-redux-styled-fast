import * as React from 'react';
import * as S from './styles';

interface IProps {
  isActive?: boolean;
  Title: string;
}

const Button = ({ Title, isActive }: IProps) => {
  return (
    <>
      <S.Container isActive={isActive}>
        <S.Title>{Title}</S.Title>
      </S.Container>
    </>
  );
};

export default Button;
