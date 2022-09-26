import * as React from 'react';
import Button from '../../../../components/Button';
import IconInformatives from '../../../../assets/icons/IconInformatives.svg';
import PictureBackground from '../../../../assets/img/PictureKnowMore.png';
import { format } from 'date-fns';

import * as S from './styles';

const Informative: React.FC = () => {
  const newYears = new Date('2019.01.01');
  const currentdDate = format(newYears, 'mm.dd.yyyy');

  const renderInformativeItem = () => {
    return (
      <S.WrapperInfo>
      <S.SubWrapperInfo>
        <S.IconWrapperInfo src={PictureBackground} />
        <S.SubTextWrapperInfo>
          <S.SubTitleInfo>Lorem simply dummy text of the print</S.SubTitleInfo>
          <S.TextInfo>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
            point of
          </S.TextInfo>
          <S.TexDatetInfo>{`${currentdDate}`}</S.TexDatetInfo>
        </S.SubTextWrapperInfo>
      </S.SubWrapperInfo>
      <S.Separator />
    </S.WrapperInfo>
    )
  }

  return (
    <>
      <S.Container>
        <S.SectionKnowMoreWrapper>
          <S.KnowMoreWrapper>
            <S.TitleKnowMoreWrapper>Plano Diretor de Gestão de Ativos</S.TitleKnowMoreWrapper>
            <S.SubTitleKnowMoreWrapper>Um portal para maior conexão</S.SubTitleKnowMoreWrapper>
            <S.WrapperKnowMoreButton>
              <Button isActive={true} Title={'Saber mais'} />
            </S.WrapperKnowMoreButton>
          </S.KnowMoreWrapper>
        </S.SectionKnowMoreWrapper>
        <S.SectionInformativesItems>
          <S.WrapperTitleInfo>
            <S.IconInfo src={IconInformatives} />
            <S.TitleInfo>Informativos</S.TitleInfo>
          </S.WrapperTitleInfo>
          <S.Separator />

          {renderInformativeItem()}
          {renderInformativeItem()}
          {renderInformativeItem()}
          {renderInformativeItem()}
          {renderInformativeItem()}
          {renderInformativeItem()}
        </S.SectionInformativesItems>
      </S.Container>
    </>
  );
};

export default Informative;
