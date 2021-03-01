/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function setTypeState(types: string[]) {
  return {
    type: 'SET_TYPE_STATE',
    payload: {
      types,
    },
  };
}

export function setRatingState(rating: number[]) {
  return {
    type: 'SET_RATING_STATE',
    payload: {
      rating,
    },
  };
}

export function setCostState(cost: number[]) {
  return {
    type: 'SET_COST_STATE',
    payload: {
      cost,
    },
  };
}
