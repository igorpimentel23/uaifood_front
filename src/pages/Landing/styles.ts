import styled from 'styled-components';
import colors from '../../styles/colors';

import bgImage from '../../assets/bg.jpg';

export const Background = styled.div`
  background-image: url(${bgImage});
`;

export const Container = styled.div``;

export const ImageContainer = styled.div``;

export const Image = styled.img``;

export const SearchContainer = styled.div`
  max-width: 1200px;
`;

export const SearchText = styled.h1``;

export const SearchTextContainer = styled.div``;

export const InputContainer = styled.div`
  height: 90px;

  &::placeholder {
    color: ${colors.lightGray};
  }
`;

export const InputWrapper = styled.div`
  background: ${colors.white};
`;

export const Input = styled.input``;

export const SeachButton = styled.button`
  background: ${colors.green};
`;

export const SearchButtonText = styled.span``;
