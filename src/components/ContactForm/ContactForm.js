import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/Contacts/contacts-operations';
import { ButtonAddCont } from 'components/Button/Button.styled';

import {
  AddIcon,
  ButtonAdd,
  AddContainer,
  Input,
  CloseIcon,
} from './ContactForm.styled';
const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const sameContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (sameContact) {
      alert(`${name} is already in contacts!`);
      form.reset();
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  const handleToggleForm = () => {
    setIsFormVisible(prevState => !prevState);
  };

  return (
    <AddContainer>
      <ButtonAdd onClick={handleToggleForm}>
        {isFormVisible ? <CloseIcon /> : <AddIcon />}
      </ButtonAdd>
      {isFormVisible ? (
        <form type="submit" onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name..."
            required
          />

          <Input
            label="Phone Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter number..."
            required
          />
          <ButtonAddCont type="submit">Add contact</ButtonAddCont>
        </form>
      ) : (
        <span>Add new contact</span>
      )}
    </AddContainer>
  );
};

export default ContactForm;
