import FILTER from "./constants";

/**
 * Filter reducer.
 * @param {object} state Global app state.
 * @param {object} action Filter action
 * @returns {object} Updated app state based on applied action or the same state. 
 */
const filterReducer = (state = {filter: FILTER.INITIAL_STATE}, action) => {
  switch (action.type) {
    case FILTER.TYPES.SET_FILTER:
      return {...state, filter: action.payload};
    default:
      return state;
  }
};

export default filterReducer;