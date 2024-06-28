import contactsReducer from "./contacts/reducer";
import filterReducer from "./filter/reducer";

/**
 * Combines reducer functions into a single combined reducer function.
 */
const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

export default reducer;