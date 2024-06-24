# Contact Book

## goit-react-hw-04-phonebook

This is refactored application [goit-react-hw-03-phonebook](https://github.com/oleksandr-romashko/goit-react-hw-03-phonebook) using React hooks instead of classes.

This is homework for the React components lifecycle and React hooks topics. 

## Live page

The live page for this repository can be viewed at [GitHub Pages](https://oleksandr-romashko.github.io/goit-react-hw-03-phonebook/).

## Local build and run

  1. Make sure you have an LTS version of Node.js installed on your computer. [Download and install](https://nodejs.org/en/) if needed.
  1. Install the project's base dependencies with the `npm install` command.
  1. Start development mode by running the `npm start` command.
  2. Go to [localhost:3000](http://localhost:3000/) (may vary) in your browser. This page will automatically reload after saving changes to the project files.

## Task Acceptance Criteria

[React project template](https://github.com/goitacademy/react-homework-template/blob/main/README.en.md) is used as a starting point for your application (more information about how to start-up with such a project may be found at the template repo description or [here in a Readme file](./README.en.md)).

  * The `goit-react-hw-04-phonebook` repository is created.
  * Refactor the "[Contact Book](https://github.com/oleksandr-romashko/goit-react-hw-03-phonebook)" task code from the second module using React-hooks.
  * When submitting homework, there are two links: to the source files and the live page using `GitHub Pages'.
  * When visiting the work page (GitHub pages) of the assignment, there are no errors or warnings in the console.
  * For each component has a separate folder with a React-component file and styles.
  * The `propTypes` are described for all components.
  * Component names are clear, descriptive.

## Task - Contact Book

Take your solution from the previous homework assignment and add storage of the phonebook contacts in `localStorage`. Use lifecycle methods.

  * When you add and delete a contact, the contacts are stored in the local storage.
  * When the application is loaded, contacts, if any, are read from the local storage and are written to the state.


<u>Solution example:</u>

A search field that you can use to filter your contacts.

<p align="center">
  <img max-width="960" src="./assets/tasks/step-3.gif" alt="step-1 interface example component preview">
</p>

Denies the user the ability to add contacts whose names are already in the phonebook. If tries to do so, alert with a warning is printed.

<p align="center">
  <img max-width="960" src="./assets/tasks/step-5.png" alt="step-1 interface example component preview">
</p>

Allows the user to delete previously saved contacts.

<p align="center">
  <img max-width="960" src="./assets/tasks/step-6.gif" alt="step-1 interface example component preview">
</p>