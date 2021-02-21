import styled, { css } from 'styled-components';
import colors from '../../styles/colors';
import Tooltip from '../tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${colors.white};

  border: 2px solid ${colors.fadingGray};

  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.textError};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.gray};
      color: ${colors.gray};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${colors.gray};
    `}

  input {
    background: transparent;

    &::placeholder {
      color: ${colors.fadingGray};
    }
  }

  svg {
    margin-right: 16px;
    ${props =>
      (props.isFilled || props.isFocused) &&
      css`
        color: ${colors.gray};
      `}
  }
`;

export const Error = styled(Tooltip)`
  display: flex;
  align-items: center;
  margin-left: 0px;

  svg {
    margin: 0;
  }

  span {
    background: ${colors.textError};
    color: ${colors.white};

    &::before {
      border-color: ${colors.textError} transparent;
    }
  }
`;
