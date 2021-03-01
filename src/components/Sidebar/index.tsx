import React from 'react';

import Container from './styles';

import TypesList from '../TypesList';
import RatingList from '../RatingList';
import CostList from '../CostList';

const Sidebar: React.FC = () => {
  return (
    <Container className="d-flex p-3 mr-3 flex-column">
      <RatingList />
      <CostList />
      <TypesList />
    </Container>
  );
};

export default Sidebar;
