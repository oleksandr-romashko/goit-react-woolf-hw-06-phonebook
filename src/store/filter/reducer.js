import { createReducer } from "@reduxjs/toolkit";
import { setFilterAction } from "./actions";

const INITIAL_STATE = '';

/**
 * Filter reducer.
 * @param {object} initialState Initial state.
 * @param {object} actionsMap Properties object.
 * @returns {object} Updated app state based on applied action or the same state. 
 */
const filterReducer = createReducer(
  INITIAL_STATE, 
  (builder) => {
    builder
      .addCase(
        setFilterAction,
        (_, action) => {
          return action.payload;
        }
      )
  },
);

export default filterReducer;