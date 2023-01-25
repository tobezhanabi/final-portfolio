import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styled";
import Navbar from "./components/layout/Navbar";
import HeroSections from "./components/sections/HeroSections";

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
      </ThemeProvider>
    </>
  );
};

export default App;
