import { Title, Container, TextContainer } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Welcome to Phonebook</Title>
        <p>Your Phone Directory!</p>
      </TextContainer>
    </Container>
  );
};

export default Home;
