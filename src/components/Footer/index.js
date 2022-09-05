import styled from "styled-components";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--black);
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const LeftText = styled.div`
  text-align: left;
  color: white;
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        Todos os direitos reservados © 2022.
      </LeftText>
    </FOOTER>
  );
};

export default Footer;
