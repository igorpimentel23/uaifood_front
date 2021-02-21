/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import {
  Container,
  ListTitle,
  ListTitleText,
  List,
  RestaurantContainer,
  RestaurantCard,
  RestaurantImgContainer,
  Image,
  RestaurantMeta,
  RestaurantInfo,
  RestaurantName,
  RestaurantAddress,
  RatingContainer,
  RestaurantTags,
  CardCost,
  CardType,
} from './styles';
import ILocationProps from '../../dtos/ILocationDTO';
import IRestaurantDTO from '../../dtos/IRestaurantDTO';
import StarRating from '../StarRating';
import Loading from '../Loading';
import api from '../../services/api';

const RestaurantList: React.FC = () => {
  const location = useLocation<ILocationProps>();

  const [isLoading, setIsLoading] = useState(true);
  const [restaurantList, setRestaurantList] = useState<IRestaurantDTO[]>([]);

  useEffect(() => {
    setIsLoading(true);
    api
      .get('/restaurants/all', {
        params: {
          city_for_geo: location.state.city,
        },
      })
      .then(response => {
        setRestaurantList(response.data);
        setIsLoading(false);
      });
  }, [location.state]);

  return (
    <Container>
      <ListTitle className="pl-3">
        <ListTitleText className="fw-semi-bold fs-lg color-strong-gray">
          {location.state ? `Restaurantes em ${location.state.city}` : ''}
        </ListTitleText>
      </ListTitle>
      <List className="d-flex row m-0 w-100">
        {isLoading ? (
          <Loading loadingStyle={{ marginLeft: 400, marginTop: 200 }} />
        ) : restaurantList.length === 0 ? (
          <p>Nenhum restaurante encontrado</p>
        ) : (
          restaurantList.map(restaurant => (
            <RestaurantContainer key={restaurant.id} className="col-4 py-2">
              <RestaurantCard>
                <RestaurantImgContainer>
                  <Image
                    src="https://img.elo7.com.br/product/zoom/258B7CB/adesivo-parede-restaurante-prato-feito-comida-caseira-lenha-adesivo-restaurante-fritas-salada.jpg"
                    alt={restaurant.name}
                  />
                </RestaurantImgContainer>

                <RestaurantMeta className="py-1 px-2">
                  <RestaurantInfo>
                    <RestaurantName className="fw-semi-bold color-strong-gray fs-md">
                      {restaurant.name}
                    </RestaurantName>
                    <RestaurantAddress className="fw-light color-gray fs-sm">
                      {`${restaurant.street}, ${restaurant.street_number}, ${restaurant.city}`}
                    </RestaurantAddress>
                  </RestaurantInfo>
                  <RatingContainer className="color-green mb-2">
                    <StarRating stars={restaurant.rating} />
                  </RatingContainer>
                  <RestaurantTags className="d-flex row m-0">
                    <CardCost className="color-white fw-semi-bold py-1 px-2 mr-3 my-1">
                      <FaUserFriends className="mr-2" size={20} />
                      {`R$ ${restaurant.cost}`}
                    </CardCost>
                    <CardType className="fw-light fs-sm color-dark-gray py-1 px-2 my-1">
                      {restaurant.type}
                    </CardType>
                  </RestaurantTags>
                </RestaurantMeta>
              </RestaurantCard>
            </RestaurantContainer>
          ))
        )}
      </List>
    </Container>
  );
};

export default RestaurantList;
