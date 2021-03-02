import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';

import { setTypeState } from '../../store/modules/sidebarForm/actions';
import Loading from '../Loading';

const TypesList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([{ type: '' }]);
  const [typesArr, setTypesArr] = useState<JSX.Element[]>([]);
  const [reduxTypes, setReduxTypes] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    e => {
      const aux = reduxTypes;
      let index;

      if (e.target.checked) {
        aux.push(e.target.value);
      } else {
        index = reduxTypes.indexOf(e.target.value);
        aux.splice(index, 1);
      }

      setReduxTypes(aux);

      dispatch(setTypeState(reduxTypes));
    },
    [dispatch, reduxTypes],
  );

  useEffect(() => {
    setIsLoading(true);
    api.get('/restaurants/types').then(response => {
      setTypes(response.data);

      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (types) {
      const n = types.length;
      const aux = [];
      if (n === 1 && types[0].type === '') {
        aux.push(<p key={1}>Sem categorias</p>);
      } else {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < n; i++) {
          aux.push(
            <label
              key={types[i].type}
              htmlFor={`type[${i}]`}
              className="d-flex align-items-center fw-light fs-sm color-darkGray"
            >
              <input
                type="checkbox"
                name={`type[${i}]`}
                className="mr-2"
                value={types[i].type}
                onChange={handleChange.bind(this)}
              />
              {types[i].type}
            </label>,
          );
        }
      }
      setTypesArr(aux);
    }
  }, [handleChange, types]);

  return (
    <div>
      <div className="mb-3">
        <strong className="fw-light fs-sm color-gray">Tipo de cozinha:</strong>
      </div>
      {isLoading ? <Loading /> : typesArr}
    </div>
  );
};

export default TypesList;
