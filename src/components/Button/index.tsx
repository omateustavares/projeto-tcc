import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = {
  buttonStyle: 'red' | 'blue';
  disabled?: boolean;
};

type Props = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  children,
  buttonStyle,
  disabled,
  ...rest
}) => {
  return (
    <Container
      buttonStyle={buttonStyle}
      disabled={disabled}
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
