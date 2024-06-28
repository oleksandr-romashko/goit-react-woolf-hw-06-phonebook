import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

/**
 * A store that holds the whole state tree of the application.
 */
const store = configureStore({reducer});

export default store;