import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import getValidationErrors from '../../util/getValidadtionErrors';

import SearchContainer from './styles';
import Input from '../Input';
import Button from '../Button';

import ILocationProps from '../../dtos/ILocationDTO';
import { IState } from '../../store';
import { IFormState } from '../../store/modules/sidebarForm/types';

interface SearchFormData {
  city: string;
}

interface SearchProps {
  containerStyle?: object;
}

const Search: React.FC<SearchProps> = ({ containerStyle = {} }) => {
  const formRef = useRef<FormHandles>(null);
  const location = useLocation<ILocationProps>();
  const history = useHistory();
  const { types, rating, cost } = useSelector<IState, IFormState>(
    state => state.sidebarForm,
  );

  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    setInputVal(location.state ? location.state.city : '');
  }, [location.state]);

  const handleSubmit = useCallback(
    async (data: SearchFormData) => {
      try {
        const pushData = { ...data, type: types, rating, cost };

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          city: Yup.string().required('Endereço obrigatório'),
        });

        await schema.validate(pushData, { abortEarly: false });

        history.push('/dashboard', pushData);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [cost, history, rating, types],
  );
  return (
    <SearchContainer style={containerStyle} className="w-100">
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        className="d-flex align-items-center flex-fill h-100"
      >
        <Input
          name="city"
          icon={FaMapMarkerAlt}
          type="text"
          placeholder="Digite a sua cidade"
          defaultValue={inputVal}
        />
        <Button type="submit">Buscar</Button>
      </Form>
    </SearchContainer>
  );
};

export default Search;
