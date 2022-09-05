// This is Services component

import styled from "styled-components";

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a0b10;
 background-size: auto 100vh;
 padding-top: 7vw;
 padding-bottom: 4vw;
`;

const Main = styled.div`
  margin: 0 50rem;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;

  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 3.0rem;
  display: inline-block;
  color: white;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px red;
  border-color: red transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Text = styled.h4`
  font-size: 1.5rem;
  line-height: 1.5;
  color: white;
`;

const AboutText = styled.div`
  width: 50vw;
  position: relative;
  margin-bottom: 150px;
  margin-top: 50px;

  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const Services = () => {
  return (
    <AboutSection id="missao">
    <Main>
      <div>
        <Title>Missão</Title>
        <CurvedLine />
      </div>
      <Content>
        <AboutText>

          <Text>
            Nossa missão é ser uma produtora competitiva que através da criatividade
            estará de forma abrangente no mercado, fortalecendo os nomes de empresas parceiras através
            de propostas exclusivas.
          </Text>
        </AboutText>
      </Content>
    </Main>
  </AboutSection>
  );
};

export default Services;
