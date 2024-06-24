/**
   * Key for storing contacts in Local Storage. 
   */
const LOCAL_STORAGE_CONTACTS_KEY = "phonebook.contacts";

/**
 * Gets contacts from Local Storage.
 * @returns {object[]} Array of contacts or empty array if no data were found under the local storage key. 
*/
const getContactsFromStorage = () => {
  const localStorageData = localStorage.getItem(LOCAL_STORAGE_CONTACTS_KEY);
  if (localStorageData) {
    let data;
    try {
      data = JSON.parse(localStorageData);
      return data;
    } catch (error) {
      throw new Error(`While getting contacts from local storage: "${localStorageData}"`);
    }
  }
  return [];
}

/**
 * Sets contacts into Local Storage.
 */
const writeContactsToStorage = contacts => localStorage.setItem(LOCAL_STORAGE_CONTACTS_KEY, JSON.stringify(contacts));

const storageApi = { getContactsFromStorage, writeContactsToStorage };

export default storageApi;