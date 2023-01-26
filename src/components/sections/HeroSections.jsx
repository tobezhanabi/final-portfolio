import {
  HeroContent,
  StyledArrowDown,
  StyledHeroSection,
  HeroSocialIcons,
  SocialIcon,
} from "../styles/sections/HeroSection.styled";
import React from "react";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { FaArrowDown, FaGithub, FaTwitter } from "react-icons/fa";
import Typed from "react-typed";

const HeroSections = () => {
  return (
    <StyledHeroSection>
      <HeroContent>
        <h1>Hi I'm Tobezzi</h1>
        <span>
          {/* <Typed
            strings={[
              "I'm a Frontend Developer",
              "I'm a Writer",
              "I'm a Solidity developer",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          /> */}
        </span>
        <h3> Here to make your life easier </h3>
        <hr />
        <p>HTML . CSS . Javascript . React . Solidity . SEO . Copywriting</p>
        <div>
          <CTAButton href="#projects"> Projects</CTAButton>
          <CTAButton href="#contact" primary margin="0 0 0 20px">
            Chat Me
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon href="" target="_blank">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="" target="_blank">
          <FaTwitter />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};

export default HeroSections;
