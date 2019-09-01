/* @flow */

type State = {
  +data: {
    +data: Array<{
      +accumulated?: number,
      +color: string,
      +configs: Array<any>,
      +date: string,
      +drawId: number,
      +numbersDrawn: Array<number>,
      +subTitle: string,
      +title: string,
    }>,
    +title: string,
  },
  +myGamesSelected: Object,
};

const INITIAL_STATE = {
  myGamesSelected: {},
  data: {},
};

const lotteries = (state: State = INITIAL_STATE, action: Object) => {
  switch (action.type) {
    case 'SET_LOTTERIES':
      return { ...state, data: action.data };
    case 'SET_GAMES_SELECTED':
      return {
        ...state,
        myGamesSelected: {
          ...state.myGamesSelected,
          [action.lottery]: action.selected,
        },
      };
    default:
      return state;
  }
};

export default lotteries;
