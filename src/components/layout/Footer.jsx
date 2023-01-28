import {
  CodedWith,
  FooterNav,
  StyledFooter,
} from "../styles/layout/Footer.styled";

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <FooterNav>
          <a href="#about">About .</a>
          <a href="#projects">Projects .</a>
          <a href="#services">Services .</a>
          <a href="#contact">Contact</a>
        </FooterNav>

        <CodedWith>Coded with React and Styled Heart💛🖤💙</CodedWith>
      </StyledFooter>
    </>
  );
};
