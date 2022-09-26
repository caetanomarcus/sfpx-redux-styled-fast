import styled from 'styled-components';
import PictureBackground from '../../../../assets/img/PictureKnowMore.png';
import PictureKnowMore from '../../../../assets/img/KnowMoreWrapper.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;
`;

export const SectionKnowMoreWrapper = styled.div`
  width: 631px;
  height: 403px;
  margin-top: 43px;
  margin-bottom: 98px;
  position: relative;

  background: transparent url(${PictureBackground}) 0% 0% no-repeat padding-box;
  background-size: cover;
  opacity: 1;
`;

export const KnowMoreWrapper = styled.div`
  width: 338px;
  height: 246px;
  margin-top: 79px;
  margin-left: 30px;
  margin-bottom: 79px;
  position: absolute;
  box-sizing: border-box;

  border-left: 14px solid var(--amarelo-vale);
  box-shadow: inset 2px 0 var(--amarelo-vale);

  background: transparent url(${PictureKnowMore}) 0% 0% no-repeat padding-box;
  background-size: cover;
`;

export const TitleKnowMoreWrapper = styled.h1`
  margin-top: 34px;
  margin-left: 35px;
  margin-bottom: 12px;

  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--verde-vale);
  text-align: left;
  opacity: 1;

  font: normal normal bold 30px/35px Segoe UI;
`;

export const SubTitleKnowMoreWrapper = styled.h4`
  margin-left: 35px;

  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--cinza-escuro);
  text-align: left;
  opacity: 1;

  font: normal normal normal 18px/21px Segoe UI;
`;

export const WrapperKnowMoreButton = styled.div`
  margin-left: 35px;
  margin-top: 34px;
  margin-bottom: 45px;
`;

export const SectionInformativesItems = styled.div`
  width: 445px;
  height: 403px;
  margin-top: 43px;
  margin-bottom: 98px;
  overflow-y: scroll;

  background: var(--branco) 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #0000001a;
  opacity: 1;
`;

export const WrapperTitleInfo = styled.div`
  margin-top: 10px;
  margin-bottom: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background: var(--cinza-claro);
  opacity: 0.5;
`;

export const IconInfo = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 20px;
`;

export const TitleInfo = styled.h1`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--verde-vale);
  text-align: left;
  opacity: 1;

  font: var(--unnamed-font-normal-600-18-26-segoi);
`;

export const WrapperInfo = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const SubWrapperInfo = styled.div`
  display: flex;
  margin-bottom: 15px;
  gap: 20px;
`;

export const SubTextWrapperInfo = styled.div`
  width: 100%;
  display: inline-block;
`;

export const IconWrapperInfo = styled.img`
  width: 118px;
  height: 75px;
`;

export const SubTitleInfo = styled.h4`
  width: 260px;

  white-space: nowrap;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;

  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--verde-vale);
  text-align: left;
  opacity: 1;

  font: var(--unnamed-font-normal-600-14-21-segoi);
`;

export const TextInfo = styled.p`
  margin-top: 5px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--cinza-escuro);
  text-align: left;
  opacity: 1;

  font: var(--unnamed-font-normal-600-12-16-segoi);
`;

export const TexDatetInfo = styled.p`
  margin-top: 5px;
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  color: #a5a5a5;
  opacity: 1;

  font: normal normal normal 10px/16px Segoe UI;
`;
