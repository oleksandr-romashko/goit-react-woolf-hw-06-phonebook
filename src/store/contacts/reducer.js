import { createReducer } from "@reduxjs/toolkit";
import storageApi from "storage/api";
import { addContactAction, deleteContactByIdAction } from "./actions";

const INITIAL_STATE = [];

/**
 * List of initial contacts list loaded from local storage.
 */
const lsContacts = storageApi.getContactsFromStorage();

/**
 * Contacts reducer.
 * @param {object} initialState Initial state.
 * @param {object} actionsMap Properties object.
 * @returns {object} Updated app state based on applied action or the same state. 
 */
const contactsReducer = createReducer(
  lsContacts || INITIAL_STATE,
  (builder) => {
    builder
      .addCase(
        addContactAction, 
        (state, action) => {
          state.unshift(action.payload);
        }
      )
      .addCase(
        deleteContactByIdAction, 
        (state, action) => {
          const index = state.findIndex(contact => contact.id === action.payload);
          state.splice(index, 1);
        },
      );
  },
);

export default contactsReducer;