import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import RestaurantList from '../../components/RestaurantList';
import Container from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container className="d-flex container mt-3">
        <Sidebar />
        <RestaurantList />
      </Container>
    </>
  );
};

export default Dashboard;
