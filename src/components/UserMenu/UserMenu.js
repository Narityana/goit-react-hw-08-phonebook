import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import { logOut } from 'redux/Auth/auth-operations';
import { ButtonLogOut } from 'components/Button/Button.styled';
import { Container, Text } from './UserMenu.styled';
import Avatar from 'components/Avatar/Avatar';

const capitalizeFirstLetter = str => {
  return str.replace(/\b\w/g, l => l.toUpperCase());
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  console.log(name);
  return (
    <Container>
      <Text>Welcome, {capitalizeFirstLetter(name)}</Text>
      <Avatar name={name} />
      <ButtonLogOut
        type="button"
        text="Logout"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </ButtonLogOut>
    </Container>
  );
};

export default UserMenu;
