import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setCostState } from '../../store/modules/sidebarForm/actions';

const CostList: React.FC = () => {
  const [reduxCost, setReduxCost] = useState<number[]>([]);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    e => {
      const valArr = JSON.parse(e.target.value);
      let index;
      const aux = reduxCost;

      if (e.target.checked) {
        for (let i = 0; i < valArr.length; i++) {
          aux.push(valArr[i]);
        }
      } else {
        for (let i = 0; i < valArr.length; i++) {
          index = aux.indexOf(valArr[i]);
          aux.splice(index, 1);
        }
      }
      aux.sort((a, b) => a - b);
      setReduxCost(aux);

      dispatch(setCostState(reduxCost));
    },
    [dispatch, reduxCost],
  );

  return (
    <div className="mb-3">
      <strong className="fw-light fs-sm color-gray">
        Custo para 2 pessoas:
      </strong>
      <label
        htmlFor="1"
        className="d-flex align-items-center fw-light fs-sm color-darkGray"
      >
        <input
          type="checkbox"
          name="1"
          className="mr-2"
          onChange={handleChange.bind(this)}
          value="[0, 50]"
        />
        Até R$50
      </label>
      <label
        htmlFor="2"
        className="d-flex align-items-center fw-light fs-sm color-darkGray"
      >
        <input
          type="checkbox"
          name="2"
          className="mr-2"
          onChange={handleChange.bind(this)}
          value="[50, 80]"
        />
        De R$50 a R$80
      </label>
      <label
        htmlFor="3"
        className="d-flex align-items-center fw-light fs-sm color-darkGray"
      >
        <input
          type="checkbox"
          name="3"
          className="mr-2"
          onChange={handleChange.bind(this)}
          value="[80, 110]"
        />
        De R$80 a R$110
      </label>
      <label
        htmlFor="4"
        className="d-flex align-items-center fw-light fs-sm color-darkGray"
      >
        <input
          type="checkbox"
          name="4"
          className="mr-2"
          onChange={handleChange.bind(this)}
          value="[110]"
        />
        Acima de R$110
      </label>
    </div>
  );
};

export default CostList;
