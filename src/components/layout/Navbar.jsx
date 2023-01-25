import { useState } from "react";
import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  Nav,
  NavItemStyled,
  NavLink,
  NavList,
  SocialIcons,
} from "../styles/layout/Navbar.styled";
import useScrollDirection from "../../hooks/useScrollDirection";
import { NavItems } from "../../data/NavItems";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { CTAButton } from "../styles/common/CTAButton.styled";

const Navbar = () => {
  const scrollDirection = useScrollDirection("down");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav scrollDirection={scrollDirection}>
        <div>
          <a href="#hero-section">
            <Logo src="./images/Logo.png"></Logo>
          </a>
        </div>
        <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>

        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemStyled
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                <NavLink href={navItem.href}>
                  <span>{navItem.text}</span>
                </NavLink>

                {navItem.hasSocialIcons ? (
                  <SocialIcons>
                    <NavLink href="#" target="_blank">
                      <FaTwitter />
                    </NavLink>
                    <NavLink href="#" target="_blank">
                      <FaGithub />
                    </NavLink>
                  </SocialIcons>
                ) : null}

                {navItem.hasCTA ? (
                  <CTAButton href="" target="_blank">
                    Visit Blog
                    {/* pass a props here as primary */}
                  </CTAButton>
                ) : null}
              </NavItemStyled>
            ))}
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
