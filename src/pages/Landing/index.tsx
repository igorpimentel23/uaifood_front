import React from 'react';

import Search from '../../components/Search';
import {
  Background,
  ImageContainer,
  SearchContainer,
  SearchText,
  AnimationContainer,
  SearchTextContainer,
  InputContainer,
} from './styles';

import logo from '../../assets/logo-white.jpg';

const Landing: React.FC = () => {
  return (
    <Background className="min-vh-100 min-vw-100 d-flex align-items-center justify-content-center position-relative">
      <ImageContainer className="position-absolute top mt-5">
        <img src={logo} alt="uaifood" />
      </ImageContainer>
      <SearchContainer className="px-2">
        <AnimationContainer>
          <SearchTextContainer className="mb-5">
            <SearchText className="fw-extra-bold color-white fs-xl">
              Descubra os melhores restaurantes em sua cidade
            </SearchText>
          </SearchTextContainer>
          <InputContainer className="d-flex align-items-center justify-content-center">
            <Search containerStyle={{ maxWidth: 1200 }} />
          </InputContainer>
        </AnimationContainer>
      </SearchContainer>
    </Background>
  );
};

export default Landing;
