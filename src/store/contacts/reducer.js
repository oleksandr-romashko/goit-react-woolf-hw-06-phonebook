import CONTACTS from "./constants";
import storageApi from "storage/api";

/**
 * List of initial contacts list loaded from local storage.
 */
const lsContacts = storageApi.getContactsFromStorage();

/**
 * Contacts reducer.
 * @param {object} state Global app state.
 * @param {object} action Contacts action
 * @returns {object} Updated app state based on applied action or the same state. 
 */
const contactsReducer = (
  state = {contacts: lsContacts || CONTACTS.INITIAL_STATE}, 
  action
) => {
  switch (action.type) {
    case CONTACTS.TYPES.ADD_CONTACT:
      return {
        ...state, 
        contacts: [action.payload, ...state.contacts],
      };
    case CONTACTS.TYPES.DELETE_CONTACT_BY_ID:
      return {
        ...state, 
        contacts: state.contacts.filter(el => el.id !== action.payload),
      };
    default:
      return state;
  }
};

export default contactsReducer;