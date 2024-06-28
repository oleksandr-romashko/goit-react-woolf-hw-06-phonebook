
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/reducer';
import filterReducer from './filter/reducer';

/**
 * A store that holds the whole state tree of the application.
 */
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;