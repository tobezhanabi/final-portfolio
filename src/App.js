import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styled";
import Navbar from "./components/layout/Navbar";
import HeroSections from "./components/sections/HeroSections";
import { Container } from "./components/styles/common/container.styled";
import AboutSection from "./components/sections/AboutSection";
import { ProjectSection } from "./components/sections/ProjectSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/layout/Footer";

const App = () => {
  const theme = {
    colors: {
      white: "#fff",
      dimBlue: "#0554F2",
      lightBlue: "#1374F2",
      offWhite: "#F2F2F2",
      green: "#0DD965",
      dark: "#181818",
      yellow: "#ffff73",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <HeroSections />
        <Container>
          <AboutSection />
          <ProjectSection />
          <ServicesSection />
          <ContactSection />
        </Container>

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
