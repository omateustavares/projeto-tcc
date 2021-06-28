import styled, { css } from 'styled-components';

type StyledButtonProps = {
  buttonStyle: 'red' | 'blue';
  disabled?: boolean;
};

export const Container = styled.button<StyledButtonProps>`
  ${props =>
    props.buttonStyle === 'red' &&
    css`
      background: var(--red-button);
    `}

  ${props =>
    props.buttonStyle === 'blue' &&
    css`
      background: var(--blue-one);
    `}

    ${props =>
    props.disabled &&
    css`
      background: var(--text);
    `}

  height: 56px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: var(--white);
  font-weight: 600;
  width: 100%;
  margin-top: 16px;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;
