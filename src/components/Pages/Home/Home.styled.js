import styled from 'styled-components';
import backgroundImage from 'components/images/backgroundImage1.jpg';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  color: #fff;
  height: 600px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;
export const Title = styled.h1`
  color: rgb(245 244 154);
  margin-bottom: 15px;
`;
export const TextContainer = styled.div`
  width: 365px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px 0 800px;
`;
