import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { Wrapper, Title, Subtitle } from './Phonebook.styled';

import storageApi from 'storage/api';
import textToNormalizedWordsArray from 'components/helpers/textToNormalizedWordsArray';

/**
 * Phonebook component to manage contacts.
 * @returns {React.Component}
 */
const Phonebook = () => {
  const [contacts, setContacts] = useState(storageApi.getContactsFromStorage);
  const [filter, setFilter] = useState("");

  /**
   * Handle contacts update.
   */
  useEffect(()=>{
      storageApi.writeContactsToStorage(contacts);
  }, [contacts])

  /**
   * Adds contact to the list of contacts.
   * @param {string} name Name of the contact.
   * @param {string} number Phone number of the contact.
   * @returns {boolean} True if added contact successfully or false otherwise.
   */
  const addContact = (name, number) => {
    const isExist = contacts.some(({ name: existingName }) =>
      existingName.toLowerCase() === name.toLowerCase());
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    const id = nanoid();
    const contactNew = { id, name, number };
    setContacts(prev => [contactNew, ...prev]);
    return true;
  };

  /**
   * Handles change of the text input.
   * @param {string} props.value Text value of the element.
   */
  const handleFilterTextChange = (value) => {
    setFilter(value);
  }

  /**
   * Filters contacts based on filter value.
   * @returns {object[]} Array of filtered contacts.
   */
  const filterContacts = () => {
    if (!contacts.length) {
      return [];
    }
    const normalizedFilterArr = textToNormalizedWordsArray(filter);
    return contacts.filter(el => {
      const normalizedContact = textToNormalizedWordsArray(`${el.name}${el.number}`).join("");
      return normalizedFilterArr.some(filterEl => (!filterEl.isEmpty && normalizedContact.includes(filterEl)));;
    });
  }

  /**
   * Removes contact from the list of contacts.
   * @param {string} id Contact id.
   */
  const deleteContactById = (id) => {
    setContacts(contacts.filter(el => el.id !== id));
  }

  return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm
          onSubmit={addContact}
        />
        <Subtitle>Contacts</Subtitle>
        <Filter
          filterText={filter}
          onFilterInputChange={handleFilterTextChange} />
        <ContactList
          contacts={filterContacts()}
          onContactDelete={deleteContactById}
            />
      </Wrapper>
  )
}

export default Phonebook;
