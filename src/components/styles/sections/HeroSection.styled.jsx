import styled from "styled-components";

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 90vh;
  margin-top: 40px;
  background: linear-gradient(
      135deg,
      rgba(0, 13, 77, 0.9) 0%,
      rgba(2, 23, 37, 0.8) 100%
    ),
    url("./images/hacker-coderbackground.png") center no-repeat;
  background-size: contain;
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 158rem;
  color: ${({ theme }) => theme.colors.white};
`;
