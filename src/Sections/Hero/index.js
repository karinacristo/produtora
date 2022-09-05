// This is HeroSection component, Main top section of website

import styled, { keyframes } from "styled-components";
import Mobile from "../../assets/loginho.svg";



const move = keyframes`
0% { transform: translateY(-5px); }
50% { transform: translateY(10px); }
100% { transform: translateY(-5px); }
`;

const HerosSection = styled.div`
width: 100vw;
height: 45vw;
background-color: var(--black);
color: var(--white);
display: flex;
justify-content: center;
position: relative;

@media only Screen and (max-width: 48em){
  height: 70vw;
  display: block;
}
@media only Screen and (max-width: 420px){
  height: auto;
  padding-bottom: 2rem;
}
`;





const MainContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 70vw;

@media only Screen and (max-width: 48em){
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
`;

const LeftBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 50%;
line-weight: 1.5;
color: var(--white);
position: relative;
z-index: 15;

@media only Screen and (max-width: 48em){
  width: 80%;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin-top: calc(2.5rem + 2.5vw);
  filter: drop-shadow(2px 4px 6px black);
}
@media only Screen and (max-width: 40em) {
  filter: none;
}
`;


const Title = styled.h1`
font-size: calc(2rem + 1vw);
line-height: 1.2;
padding: 0.5rem 0;
font-family: 'Orbitron', sans-serif;
`;

const SubText = styled.h5`
font-size: 20px;
color: red;
`;


const MobileSvg = styled.img`
max-width: 100%;
width: calc(25% + 20vw);
z-index: 7;
height: auto;
animation: ${move} 2.5s ease infinite;

@media only Screen and (max-width: 48em){
  align-self: flex-start;
  position: absolute;
  bottom: 0;
  width: calc(30% + 20vw);
  opacity: 0.5;
}
`;

const HeroSection = () => {
  return (
  <HerosSection id="home">
    
    <MainContent>
      <LeftBlock>
        <Title>Produtora G2</Title>
        <SubText>
          {" "}
          Dando vida aos sonhos.
        </SubText>
      </LeftBlock>
      <MobileSvg src={Mobile} alt="Curse Online" width="400" height="400" /> 
    </MainContent>
  </HerosSection>
  );
};

export default HeroSection;
