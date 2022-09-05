import HeroSection from "../Sections/Hero";
import About from "../Sections/About";
import Services from "../Sections/Services";
import Contact from "../Sections/Contact";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <HeroSection/>
      <About/>
      <Services/>
      <Contact/>
    </Container>
  );
};

export default Home;
