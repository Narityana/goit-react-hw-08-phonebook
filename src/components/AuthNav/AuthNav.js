import { Links } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <Links to="/register">Register</Links>
      <Links to="/login">Log In</Links>
    </div>
  );
};

export default AuthNav;
