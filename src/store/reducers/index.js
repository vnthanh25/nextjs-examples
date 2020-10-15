import { actionTypes } from "../actions";

const initialState = {
  lastUpdate: 0,
  light: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };

    default:
      return state;
  }
}

export default reducer;
