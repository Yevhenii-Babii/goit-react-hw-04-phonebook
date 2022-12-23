import React from 'react';
// import { nanoid } from 'nanoid'

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onInputText = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  addContact = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.addContact}>
        <label htmlFor="">
          {' '}
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onInputText}
          />
        </label>
        <label htmlFor="">
          {' '}
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onInputText}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
