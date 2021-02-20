import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import {
  Background,
  ImageContainer,
  SearchContainer,
  SearchText,
  SearchTextContainer,
  InputContainer,
  InputWrapper,
  Input,
  SeachButton,
  SearchButtonText,
} from './styles';

import logo from '../../assets/logo-white.jpg';

const Landing: React.FC = () => {
  return (
    <Background className="min-vh-100 min-vw-100 d-flex align-items-center justify-content-center position-relative">
      <ImageContainer className="position-absolute top mt-5">
        <img src={logo} alt="uaifood" />
      </ImageContainer>
      <SearchContainer className="px-2">
        <SearchTextContainer className="mb-5">
          <SearchText className="fw-extra-bold color-white fs-xl">
            Descubra os melhores restaurantes em sua cidade
          </SearchText>
        </SearchTextContainer>
        <InputContainer className="d-flex align-items-center">
          <InputWrapper className="d-flex align-items-center flex-fill mr-3 h-100">
            <FaMapMarkerAlt className="ml-3 mr-2 fs-lg color-light-gray" />
            <Input
              className="border-0 px-2 w-100 fs-lg color-light-gray"
              placeholder="Digite a sua cidade"
            />
          </InputWrapper>
          <SeachButton
            /* onClick={() => {}} */
            className="px-5 border-0 fs-lg fw-semi-bold color-white h-100"
          >
            <SearchButtonText className="px-5 mx-3">Buscar</SearchButtonText>
          </SeachButton>
        </InputContainer>
      </SearchContainer>
    </Background>
  );
};

export default Landing;
