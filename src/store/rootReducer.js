import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filter/slice";
import { combineReducers } from '@reduxjs/toolkit';

/**
 * Combines reducer functions into a single combined reducer function.
 */
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;