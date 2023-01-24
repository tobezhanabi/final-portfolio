import styled, { keyframes, css } from "styled-components";

const navItemFade = keyframes`
from{
opacity: 0;
transform: translate(50px);
}

to{
opacity: 1;
transform: translate(0px);
}
`;
const navItemAnimation = ({ index }) => css`
  animation: ${navItemFade} 0.5s ease forwards ${index / 7 + 0.5}s;
`;
export const Nav = styled.nav`
  height: 50px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 98px;
  transition: all 1s ease-in-out;
  background: rgba(16, 20, 246, 0.12);
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  padding-top: 10px;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  background: ${({ theme, menuOpen }) =>
    menuOpen ? "none" : theme.colors.dimBlue};
  padding: 0.18rem;
  transition: ${({ theme }) => theme.transition};
  border-radius: 5px;
  display: none;
  position: absolute;
  right: 20px;
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
`;

export const LineOne = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(217, 236, 14, 1) 10%,
    rgba(100, 242, 29, 1) 90%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg) translate(-4px, 11px) scaleX(2.5) " : "none"};
`;
export const LineTwo = styled.div`
  width: 30px;
  height: 2px;
  margin: 5px 0;
  background: linear-gradient(
    -135deg,
    rgba(217, 236, 14, 1) 20%,
    rgba(100, 242, 29, 1) 80%
  );
  opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
  transition: ${({ theme }) => theme.transition};
`;
export const LineThree = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${({ menuOpen }) => (menuOpen ? 0 : "15px")};
  background: linear-gradient(
    135deg,
    rgba(217, 236, 14, 1) 20%,
    rgba(100, 242, 29, 1) 80%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg) translate(-4px, -11px) scaleX(2.5) " : "none"};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 15px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24rem;
    height: 100vh;
    background: ${({ theme }) => theme.colors.dimBlue};
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? "0" : "-24rem")};
    position: fixed;
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 990;
    transition: ${({ theme }) => theme.transition};
  }
`;

export const NavItemStyled = styled.li`
  margin: 0.2rem 0.7rem;
  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    ${({ menuOpen }) => (menuOpen ? navItemAnimation : null)}
  }
`;

export const NavLink = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.5px;

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background: ${({ theme }) => theme.colors.yellow};
    transition: all ease-in-out 300ms;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
