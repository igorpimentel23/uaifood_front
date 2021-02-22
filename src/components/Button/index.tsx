import React, { ButtonHTMLAttributes } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Container from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container
    type="button"
    className="border-0 color-white fw-semi-bold fs-lg px-5 py-2 h-100 ml-3"
    {...rest}
  >
    {loading ? <FontAwesomeIcon icon={faSpinner} pulse /> : children}
  </Container>
);

export default Button;
