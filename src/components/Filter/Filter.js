import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/Filter/filterSlice';
import {
  Input,
  SearchIcon,
  SearhcButton,
  SearchContainer,
} from './Filter.styled';
import { CloseIcon } from 'components/ContactForm/ContactForm.styled';
const Filter = () => {
  const dispatch = useDispatch();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = event => {
    const query = event.target.value;
    dispatch(setFilter(query));
  };

  const handleToggleForm = () => {
    setIsFormVisible(prevState => !prevState);
  };

  return (
    <SearchContainer>
      <SearhcButton onClick={handleToggleForm}>
        {isFormVisible ? <CloseIcon /> : <SearchIcon />}
      </SearhcButton>
      {isFormVisible ? (
        <form>
          <Input
            type="text"
            onChange={handleChange}
            placeholder="Find contact by name"
          ></Input>
        </form>
      ) : (
        <span>Find contact</span>
      )}
    </SearchContainer>
  );
};

export default Filter;
