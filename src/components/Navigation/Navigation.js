import { Links } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <Links to="/">Home</Links>
      {isLoggedIn && <Links to="/contacts">Contacts</Links>}
    </div>
  );
};

export default Navigation;
