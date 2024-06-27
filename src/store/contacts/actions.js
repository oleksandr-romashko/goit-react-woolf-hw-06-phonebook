import CONTACTS from "./constants";

/**
 * Action to add contact to the contacts list.
 * Sets contact 'id' value as the number of milliseconds elapsed since the epoch.
 * @param {string} name Contact name. 
 * @param {string} number Contact phone number.
 * @returns {object} Contacts action object.
 */
export const addContactAction = (name, number) => {
  return {
    type: CONTACTS.TYPES.ADD_CONTACT,
    payload: {
      id: Date.now(),
      name,
      number,
    }
  };
};

/**
 * Action to delete contact from the contacts list.
 * @param {number} contactId Contact id. 
 * @returns {object} Contacts action object.
 */
export const deleteContactByIdAction = contactId => {
  return {
    type: CONTACTS.TYPES.DELETE_CONTACT_BY_ID,
    payload: contactId,
  };
};
