import { createStore } from 'redux';

const INITIAL_STATE = {
  myDrawnGame: {},
  data: {}
};

const lotteries = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOTTERIES':
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default createStore(lotteries);
