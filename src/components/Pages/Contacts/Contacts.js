import React from 'react';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { Container, Title } from './Contacts.styled';

const Contacts = () => {
  return (
    <div>
      <Title>Phonebook</Title>
      <Container>
        <ContactForm />

        <Filter />
        <ContactList />
      </Container>
    </div>
  );
};
export default Contacts;
