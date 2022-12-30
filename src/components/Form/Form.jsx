import React from 'react';
import { FormStyle, BtnAddContact, LabelName, InputForm } from './Form.styled';
// import { nanoid } from 'nanoid'
import { useState } from 'react';

export function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputText = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        break;
    }
  };

  const addContact = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };
  return (
    <>
      <h2>Phonebook</h2>
      <FormStyle onSubmit={addContact}>
        <LabelName htmlFor="">
          Name
          <InputForm
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputText}
          />
        </LabelName>
        <LabelName htmlFor="">
          Number
          <InputForm
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputText}
          />
        </LabelName>

        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </FormStyle>
    </>
  );
}
