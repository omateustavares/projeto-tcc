import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = {
  buttonStyle: 'red' | 'blue';
};

type Props = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, buttonStyle, ...rest }) => {
  return (
    <Container buttonStyle={buttonStyle} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
