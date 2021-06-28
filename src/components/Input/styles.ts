import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--white);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #dcdde0;
  color: #232129;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--blue-two);
      border-color: var(--blue-two);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--blue-two);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--text);
    font-weight: 700;


    &::placeholder {
      color:var(--text);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: var(--red);
    color: #fff;

    &::before {
      border-color: var(--red) transparent;
    }
  }
`;
