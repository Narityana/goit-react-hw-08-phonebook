import React from 'react';
import PropTypes from 'prop-types';
import { AvatarWrapper } from './Avatar.styled';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Avatar = ({ name }) => {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  const randomColor = getRandomColor();

  return (
    <AvatarWrapper style={{ backgroundColor: randomColor }}>
      {initials}
    </AvatarWrapper>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
};

export default Avatar;
