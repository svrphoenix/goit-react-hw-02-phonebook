// import PropTypes from 'prop-types';
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));
  };

  // getContacts = (this.state.contacts) => { }

  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return (
      <>
        <Form onSubmit={this.addContact} currentState={this.state} />
        {contacts.length > 0 && <ContactList contacts={contacts} />}
        <GlobalStyle />
      </>
    );
  }
}
