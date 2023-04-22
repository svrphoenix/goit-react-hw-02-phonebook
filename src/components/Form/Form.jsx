import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Title } from 'components/Title/Title';

export class Form extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Title title="Phonebook" />
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
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
