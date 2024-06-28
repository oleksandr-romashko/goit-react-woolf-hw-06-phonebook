/**
 * Selector to obtain contacts list from the app state.
 * @param {object} state Global app state. 
 * @returns {object[]} The list of contacts.
 */
export const getContacts = state => state.contacts;
