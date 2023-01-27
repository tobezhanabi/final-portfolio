import {
  AboutContent,
  DarkCircle,
  GradientCircle,
  ImageContainer,
  StyledAboutSection,
  StyledEmoji,
  StyledHeading,
  StyledImage,
} from "../styles/AboutSection.styled";
import Typed from "react-typed";
import { CTAButton } from "../styles/common/CTAButton.styled";
const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage src="./images/profile.png" alt="Me" />
          <DarkCircle />
          <GradientCircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Hello <StyledEmoji> 👋🏽</StyledEmoji>
          </StyledHeading>
          <p>
            <Typed
              strings={[
                "I'm a Frontend Developer",
                "I'm a Writer",
                "I'm a Solidity developer",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            pariatur! Sunt aliquid nostrum quis ipsum praesentium hic rerum
            perspiciatis nulla debitis fugit, veritatis error, veniam possimus
            repellendus! Quam, exercitationem mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            magni aperiam officiis, harum similique illo error, sequi tempora
            doloremque placeat molestiae. Beatae voluptatem sint cumque pariatur
            expedita quia odit culpa?
          </p>
          <CTAButton primary href="#" target="_blank">
            Visit Blog
          </CTAButton>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};

export default AboutSection;
