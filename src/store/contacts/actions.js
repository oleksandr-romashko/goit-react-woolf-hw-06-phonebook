import { createAction } from "@reduxjs/toolkit";

/**
 * Action to add contact to the contacts list.
 * @returns {func} Contacts action function.
 */
export const addContactAction = createAction(
  'contacts/addContact', 
  (name, number) => {
    return {
      payload: {
        id: Date.now(),
        name,
        number,
      },
    };
  }
);

/**
 * Action to delete contact from the contacts list.
 * @returns {func} Contacts action function.
 */
export const deleteContactByIdAction = createAction(
  'contacts/deleteContactById',
);

