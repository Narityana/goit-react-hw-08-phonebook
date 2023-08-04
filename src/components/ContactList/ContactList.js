import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Contacts/contacts-operations';
import {
  selectError,
  selectIsLoading,
  selectFiltredContacts,
} from 'redux/selectors';
import LinearProgress from '@mui/material/LinearProgress';

import ContactListItem from 'components/ContactListItem/ContactListItem';

import { Container, SubTitle } from './ComtactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(selectFiltredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && !error && <LinearProgress />}
      {error && <b>Oops! Something went wrong. Please try again later.</b>}
      <SubTitle>- - - Contacts List - - -</SubTitle>
      <ul>
        {filteredContacts.map(contact => (
          <ContactListItem
            contact={contact}
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </Container>
  );
};

export default ContactList;
