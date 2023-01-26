import styled, { keyframes } from "styled-components";
const typing = keyframes`

40%{
  width: 0ch;
  color: ${({ theme }) => theme.colors.white}
}
100%{
  width: 20ch;
}

`;

const blink = keyframes`
0%{
  border-right: 4px solid rgba(255, 255, 255 ,0)
}
100%{
  border-right: 4px solid rgba(255, 255, 255 ,1)
}
`;
const bounce = keyframes`
0% , 20%, 50%, 80%, 100%{
 transform: translateY(0);
}
40%{
  transform: translateY(-30px);
}
60%{
  transform: translateY(-15px);
}
`;
const rotate = keyframes`
from {
 transform: rotate(0deg);
}
to {
 transform: rotate(360deg);
}
`;
export const StyledHeroSection = styled.section`
  width: 100%;
  height: 90vh;

  margin-top: 52px;
  background: linear-gradient(
      -95deg,
      rgba(0, 13, 17, 0.9) 40%,
      rgba(2, 0, 0, 0.8) 60%
    ),
    url("./images/hacker-coderbackground.png") center no-repeat;
  background-size: contain;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* z-index: -1; */
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 58rem;

  color: ${({ theme }) => theme.colors.white};

  h1 {
    letter-spacing: 1rem;
    font-size: 2.5rem;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    width: 18ch;
    margin: auto;
    animation: ${typing} 5s steps(19), ${blink} 1s ease-in-out 8s infinite;
    border-right: 4px solid #fafafa;
  }

  h3 {
    font-size: 4rem;
    margin: 1.5rem 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.dimBlue} 12%,
      ${({ theme }) => theme.colors.white} 88%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  div {
    margin: 2.5rem 0;
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
    padding-top: 10px;
    font-family: "Ubuntu", sans serif;
  }
  span {
    margin: 0;
    padding: 10px 0;
    font-size: 2rem;
    color: #ffffff;
    background: #232323;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18,
      0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18;
    color: #ffffff;
    background: #232323;
    max-height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      letter-spacing: 0.6rem;
      font-size: 1.5rem;
      width: 20ch;
    }
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
export const StyledArrowDown = styled.a`
  position: absolute;
  bottom: 50px;
  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.yellow};
    animation: ${bounce} 1s infinite 8s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.dimBlue};
    }
  }
`;
export const HeroSocialIcons = styled.div`
  position: fixed;
  right: 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    bottom: 50px;
  }
`;
export const SocialIcon = styled.a`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.green};
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: rgba(5, 84, 242, 0.1);
  cursor: pointer;
  font-size: 18px;
  svg {
    transition: ${({ theme }) => theme.transition};
  }

  &:hover {
    animation: ${rotate} 1.5s linear infinite;
    color: yellow;
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 2.2rem;
    width: 2.2rem;
  }
`;
