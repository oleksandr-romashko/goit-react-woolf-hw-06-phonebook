import React, { useState } from "react";
import PropTypes from "prop-types";
import throttle from "lodash.throttle";

import Input from "components/Input/Input.styled";
import Button from "components/Button/Button.styled";

import { Form, Label } from "./ContactForm.styled";

/**
 * Patterns to check input text for.
 */
const CONTACT_NAME_PATTERN_REGEX =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const PHONE_NUMBER_PATTERN_REGEX =
  "\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}";

/**
 * Form to handle contact form elements.
 * Submits data for adding a new contact.
 * Clears form elements on successfull submit.
 * @param {callback} props.onSubmit Callback to handle form submition.
 * @returns {React.Component} Form component.
 */
const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  /**
   * Handles form submition.
   * Terminates if requested regex pattern does not match to input value.
   * Calls provided props callback that handles add of a new contact.
   * @param {React.SyntheticEvent} event React crossbrowser SyntheticEvent that wraps the native Event.
   */
  const handleSubmit = event => {
    event.preventDefault();

    // Additional pattern checks in JS
    // ! Evaluate logging data when if saving to a log file for potential debugging
    if (!name.match(CONTACT_NAME_PATTERN_REGEX)) {
      console.error(`Name '${name}' does not match allowed pattern.`);
      return;
    }
    if (!number.match(PHONE_NUMBER_PATTERN_REGEX)) {
      console.error(`Number '${number}' does not match allowed pattern.`);
      return;
    }

    const isSubmitSuccessful = onSubmit(name, number);

    if (isSubmitSuccessful) {
      resetForm();
    }
  };

  /**
   * Resets form by clearing all elements data with default values.
   */
  const resetForm = () => {
    setName("");
    setNumber("");
  }

  /**
   * Handles input change.
   * Calls a function to handle input change.
   * @param {string} event.target.name Name of the element.
   * @param {string} event.target.value Element value.
   */
  const handleInputTextChange = ({ target: { name, value } }) => {
    if (name === "name") {
      setName(value);
    }
    if (name === "number") {
      setNumber(value);
    }
  };

  return (
    <Form onSubmit={handleSubmit} aria-label="Add contact form">
      <Label aria-label="Contact name">
        Name
        <Input
          onChange={throttle(handleInputTextChange, 200, {
            trailing: false,
          })}
          value={name}
          type="text"
          name="name"
          pattern={CONTACT_NAME_PATTERN_REGEX}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          autoComplete='true'
          required
        />
      </Label>
      <Label aria-label="Contact phone number">
        Phone number
        <Input
          onChange={throttle(handleInputTextChange, 200, {
            trailing: false,
          })}
          value={number}
          type="tel"
          name="number"
          pattern={PHONE_NUMBER_PATTERN_REGEX}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit" aria-label="Add contact">
        Add contact
      </Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
