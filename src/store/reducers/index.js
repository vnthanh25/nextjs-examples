import { common } from "@material-ui/core/colors";
import { updateObject } from "../../shared/utility";
import { actionTypes } from "../actions";

const initialState = {
  lastUpdate: 0,
  light: false,
  common: {
    isDrawerOpen: false,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    /* Tick clock */
    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };

    /* Show drawer */
    case actionTypes.SHOW_DRAWER:
      let common = updateObject(state.common, {
        isDrawerOpen: action.isDrawerOpen,
      });
      return updateObject(state, { common });

    default:
      return state;
  }
}

export default reducer;
