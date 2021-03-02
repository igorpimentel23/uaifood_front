import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaRegStar } from 'react-icons/fa';

import { setRatingState } from '../../store/modules/sidebarForm/actions';

const TypesList: React.FC = () => {
  const [reduxRating, setReduxRating] = useState<number[]>([]);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    e => {
      const aux = reduxRating;
      let index;

      if (e.target.checked) {
        aux.push(e.target.value);
      } else {
        index = reduxRating.indexOf(e.target.value);
        aux.splice(index, 1);
      }

      setReduxRating(aux);

      dispatch(setRatingState(reduxRating));
    },
    [dispatch, reduxRating],
  );

  return (
    <div className="mb-3">
      <strong className="fw-light fs-sm color-gray">Nota:</strong>
      <label
        htmlFor="rating[0]"
        className="d-flex align-items-center fw-light fs-sm color-darkGray"
      >
        <input
          type="checkbox"
          name="rating[0]"
          className="mr-2"
          onChange={handleChange.bind(this)}
          value={1}
        />
        <FaRegStar size={20} />
      </label>
      <label
        htmlFor="rating[1]"
        className="d-flex align-items-center fw-light fs-sm color-darkGray"
      >
        <input
          type="checkbox"
          name="rating[1]"
          className="mr-2"
          onChange={handleChange.bind(this)}
          value={2}
        />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
      </label>
      <label
        htmlFor="rating[2]"
        className="d-flex align-items-center fw-light fs-sm color-darkGray"
      >
        <input
          type="checkbox"
          name="rating[2]"
          className="mr-2"
          onChange={handleChange.bind(this)}
          value={3}
        />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
      </label>
      <label
        htmlFor="rating[3]"
        className="d-flex align-items-center fw-light fs-sm color-darkGray"
      >
        <input
          type="checkbox"
          name="rating[3]"
          className="mr-2"
          onChange={handleChange.bind(this)}
          value={4}
        />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
      </label>
      <label
        htmlFor="rating[4]"
        className="d-flex align-items-center fw-light fs-sm color-darkGray"
      >
        <input
          type="checkbox"
          name="rating[4]"
          className="mr-2"
          onChange={handleChange.bind(this)}
          value={5}
        />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
      </label>
    </div>
  );
};

export default TypesList;
