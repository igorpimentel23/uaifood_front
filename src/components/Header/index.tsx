import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';
import { HeaderContainer, ImageContainer } from './styles';

import logoImg from '../../assets/logo-red.jpg';

const Header: React.FC = () => {
  return (
    <HeaderContainer className="">
      <div className="d-flex container align-items-center justify-content-between py-3">
        <ImageContainer className="mr-5">
          <Link to="/">
            <img src={logoImg} alt="uaifood" />
          </Link>
        </ImageContainer>
        <Search />
      </div>
    </HeaderContainer>
  );
};

export default Header;
