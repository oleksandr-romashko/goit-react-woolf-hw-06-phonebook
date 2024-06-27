import { combineReducers } from "redux";

import contactsReducer from "./contacts/reducer";
import filterReducer from "./filter/reducer";

/**
 * Combines different "slice reducer" functions into a single combined reducer function 
 */
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;