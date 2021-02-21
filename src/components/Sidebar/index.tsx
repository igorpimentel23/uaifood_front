import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaRegStar } from 'react-icons/fa';

import {
  Container,
  RatingContainer,
  TitleText,
  CostContainer,
  TypeContainer,
} from './styles';
import api from '../../services/api';
import TypesList from '../TypesList';
import Loading from '../Loading';

const Sidebar: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([{ type: '' }]);

  useEffect(() => {
    setIsLoading(true);
    api.get('/restaurants/types').then(response => {
      setTypes(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container className="d-flex p-3 mr-3">
      <Form ref={formRef} onSubmit={() => {}} className="">
        <RatingContainer className="mb-3">
          <TitleText className="fw-light fs-sm color-gray">Nota:</TitleText>
          <label
            htmlFor="1"
            className="d-flex align-items-center fw-light fs-sm color-darkGray"
          >
            <input type="checkbox" name="1" className="mr-2" />
            <FaRegStar size={20} />
          </label>
          <label
            htmlFor="1"
            className="d-flex align-items-center fw-light fs-sm color-darkGray"
          >
            <input type="checkbox" name="1" className="mr-2" />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
          </label>
          <label
            htmlFor="1"
            className="d-flex align-items-center fw-light fs-sm color-darkGray"
          >
            <input type="checkbox" name="1" className="mr-2" />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
          </label>
          <label
            htmlFor="1"
            className="d-flex align-items-center fw-light fs-sm color-darkGray"
          >
            <input type="checkbox" name="1" className="mr-2" />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
          </label>
          <label
            htmlFor="1"
            className="d-flex align-items-center fw-light fs-sm color-darkGray"
          >
            <input type="checkbox" name="1" className="mr-2" />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
          </label>
        </RatingContainer>
        <CostContainer className="mb-3">
          <TitleText className="fw-light fs-sm color-gray">
            Custo para 2 pessoas:
          </TitleText>
          <label
            htmlFor="1"
            className="d-flex align-items-center fw-light fs-sm color-darkGray"
          >
            <input type="checkbox" name="1" className="mr-2" />
            Até R$50
          </label>
          <label
            htmlFor="2"
            className="d-flex align-items-center fw-light fs-sm color-darkGray"
          >
            <input type="checkbox" name="2" className="mr-2" />
            De R$50 a R$80
          </label>
          <label
            htmlFor="3"
            className="d-flex align-items-center fw-light fs-sm color-darkGray"
          >
            <input type="checkbox" name="3" className="mr-2" />
            De R$80 a R$110
          </label>
          <label
            htmlFor="4"
            className="d-flex align-items-center fw-light fs-sm color-darkGray"
          >
            <input type="checkbox" name="4" className="mr-2" />
            Acima de R$110
          </label>
        </CostContainer>
        <TypeContainer className="mb-3">
          <TitleText className="fw-light fs-sm color-gray">
            Tipo de cozinha:
          </TitleText>
          {isLoading ? <Loading /> : <TypesList types={types} />}
        </TypeContainer>
      </Form>
    </Container>
  );
};

export default Sidebar;
