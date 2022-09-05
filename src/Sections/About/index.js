// This is About component, It will contain about us info.
import styled from "styled-components";
import wave from "../../assets/waves.svg";
import bianca from "../../assets/images/bianca.jpeg";
import guilherme from "../../assets/images/guilherme.jpeg";
import wallison from "../../assets/images/wallison.jpeg";
import malu from "../../assets/images/malu.jpeg";

const AboutSection = styled.div`
width: 100vw;
position: relative;
display: flex;
justify-content: center;
align-items: center
`;


const Waves = styled.img`
width: 100%;
position: absolute;
top: -1rem;
`;

const Main = styled.div`
margin: 0 15rem;
margin-top: 15rem;
display: flex;
justify-content: center;
flex-direction: column;

@media only Screen and (max-width: 64em){
  margin: 3rem calc(5rem + 5vw);
  margin-top: 10rem;
}

@media only Screen and (max-width: 40em){
  align-items: center;
  margin: 3rem calc(3rem + 3vw);

`;

const Title = styled.h1`
display: inline-block;
font-size: 2rem;
`;

const CurvedLine = styled.div`
width: 7rem;
height: 2rem;
border: 5px solid red;
border-color: red transparent transparent transparent;
border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


@media only Screen and (max-width: 40em){
  flex-direction: column;
}
`;

const AboutText = styled.div`
position: relative;
width: 100%;

@media only Screen and (max-width: 40em){
  width: 100%;
}
`;

const Text = styled.h4`
font-size: calc(0.5rem + 0.7vw);
line-height: 1.5;
color: var(--nav2);
`;



const Images = styled.img`
margin-top: 15rem;
display: inline-block;
width: 10rem;
height: 10rem;
border-radius: 50%;
background-color: var(--black);
margin-left: 1.5rem;
margin-top: 0.5rem;
margin-bottom: 1.5rem;
`;

const About = () => {
  return (
  <AboutSection id="about">
    <Waves src={wave} alt="waves" width="400" height="400"/>
    <Main>
      <div>
        <Title>Sobre</Title>
        <CurvedLine/>
      </div>
      <Content>
        <AboutText>
          <Text>
            Olá, somos alunos do curso de Produção AudioVisual, PUC Minas. Inciamos este desafio com
            amor e dedicação para resolver as questões dos clientes de forma criativa e inovadora.
            Nosso propósito é ter transparência e organização em todos os processos criativos.
            <br></br>
            <br></br>Para isso, contamos com seis colaboradores incríveis que não medirão
            esforços para resolver de forma clara e objetiva suas necessiadades: Bianca, Guilherme,
            Malu, Wallison, Rodolfo e Jacinaira. Nós somos a G2.<br></br>
            <br></br>
          </Text>

        <Images src={bianca} alt="waves" width="400" height="400"/>
        <Images src={guilherme} alt="waves" width="400" height="400"/>
        <Images src={wallison} alt="waves" width="400" height="400"/> 
        <Images src={malu} alt="waves" width="400" height="400"/>
        </AboutText>

      </Content>
    </Main>
  </AboutSection>
  );
};

export default About;
