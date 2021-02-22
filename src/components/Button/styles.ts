import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../styles/colors';

const Container = styled.button`
  background: ${colors.green};
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, colors.green)};
  }
`;

export default Container;
