import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;

  &:hover {
    color: rgb(245 244 154);
  }

  &.active {
    text-decoration: underline;
    color: rgb(245 244 154);
  }
`;
