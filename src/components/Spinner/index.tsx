import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerStyled = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--spinnerZIndex);
  background-color: transparent;
`;

const Spinner = () => {
  return (
    <SpinnerStyled>
      <Loader type="Oval" color="#5965E0" height={100} width={100} />
    </SpinnerStyled>
  );
};

export default Spinner;
