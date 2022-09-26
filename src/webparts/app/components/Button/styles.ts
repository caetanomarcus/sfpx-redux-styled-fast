import styled from 'styled-components';

interface IThemeProps {
  isActive: boolean;
}

export const Container = styled.button<IThemeProps>`
  width: 120px;
  height: 42px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ isActive }) => (isActive ? 'var(--verde-vale)' : '#A5A5A5')} 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const Title = styled.p`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--branco);
  text-align: left;
  opacity: 1;

  font: normal normal 600 12px/16px Segoe UI;
`;
