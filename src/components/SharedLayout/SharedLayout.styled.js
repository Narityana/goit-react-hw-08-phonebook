import styled from 'styled-components';
import { GiRotaryPhone } from 'react-icons/gi';

export const Header = styled.header`
  padding: 10px 30px;
  height: 60px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #fff;
`;
export const Container = styled.div`
  display: flex;
  width: 1200px;
  align-items: center;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  padding: 10px 30px;
  height: 70px;
  display: flex;
  width: 100%;
  border-top: 1px solid #fff;
  color: #fff;
  justify-content: center;
  align-items: center;
`;

export const IconHeader = styled(GiRotaryPhone)`
  color: #fff;
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;

export const NavContainer = styled.nav`
  padding-left: 15px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #fff;
`;

export const Main = styled.main`
  width: 1200px;
  margin: 30px auto;
  color: #fff;
  min-height: 600px;
`;
