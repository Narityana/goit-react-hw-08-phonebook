import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = ({ text, onClick }) => {
  return (
    <ButtonStyled variant="contained" onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
