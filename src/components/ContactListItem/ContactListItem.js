import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contacts-operations';
import { Item, ButtonDelete, Text, IconDelete } from './ContactListItem.styled';
import Avatar from 'components/Avatar/Avatar';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item key={id}>
      <Avatar name={name} />
      <Text>{name}</Text>
      <Text>{number}</Text>
      <ButtonDelete type="button" onClick={handleDelete}>
        <IconDelete />
      </ButtonDelete>
    </Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
