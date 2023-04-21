// import PropTypes from 'prop-types';
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  contactId = nanoid();

  addContact = newContact => {
    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <label htmlFor={this.contactId}>Name</label>
        <input
          type="text"
          name="name"
          id={this.contactId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
        <button type="button" onClick={() => this.addContact('dv fvgfbgbg')}>
          Add contact
        </button>
        <GlobalStyle />
      </>
    );
  }
}
