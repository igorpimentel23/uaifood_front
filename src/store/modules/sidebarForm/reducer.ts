import { Reducer } from 'redux';
import { IFormState } from './types';

const INITIAL_STATE: IFormState = {
  rating: [],
  types: [],
  cost: [],
};

const sidebarForm: Reducer<IFormState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_RATING_STATE': {
      const { rating } = action.payload;

      return { ...state, rating };

      break;
    }
    case 'SET_COST_STATE': {
      const { cost } = action.payload;

      return { ...state, cost };

      break;
    }
    case 'SET_TYPE_STATE': {
      const { types } = action.payload;

      return { ...state, types };

      break;
    }
    default: {
      return state;
    }
  }
};

export default sidebarForm;
