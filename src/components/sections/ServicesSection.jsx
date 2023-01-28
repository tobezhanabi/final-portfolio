import { FaCode, FaCopy, FaEthereum } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  IconWrapper,
  ServicesItems,
  SingleService,
  StyledServicesSection,
} from "../styles/sections/ServicesSection.styled";

export const ServicesSection = () => {
  return (
    <>
      <StyledServicesSection id="services">
        <SectionHeading>
          <h1>Services</h1>
          <p>Treat your business like it's mine</p>
        </SectionHeading>
        <ServicesItems>
          <SingleService>
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <h1>Web Development</h1>
            <p>
              Use my knowledge of HTML, CSS, REACT, and JavaScript to create
              websites that will meet the needs and exceed the expectations of
              your customers
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaEthereum />
            </IconWrapper>
            <h1>EVM Cordial dApp</h1>
            <p>
              Utilize my expertise in Solidity, Hardhat, and Node.js to create
              decentralized applications that are efficient, secure, and
              cost-effective for your business needs
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaCopy />
            </IconWrapper>
            <h1>SEO/copywriting </h1>
            <p>
              With my effective use of keywords and persuasive language, your
              website will rank higher on search engines, driving more traffic
              and ultimately increasing your revenue.
            </p>
          </SingleService>
        </ServicesItems>
      </StyledServicesSection>
      <hr />
    </>
  );
};
