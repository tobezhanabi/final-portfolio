import {
  ContactInfo,
  DetailsWrapper,
  ImageWrapper,
  StyledContactSection,
} from "../styles/sections/ContactSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import Form from "../layout/Form";
import { FaTwitter } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <>
      <StyledContactSection id="contact">
        <SectionHeading>
          <h1>Let's Talk</h1>
          <p> Get in touch</p>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <p className="p">
              {" "}
              I would love to hear from you. Don't be shy!. There is no crime
              for saying Hey!
            </p>
            <Form />

            <div className="twiitercontact">
              <p>Also reach me on </p>
              <a href="#">
                <FaTwitter />
                <span> Twitter</span>
              </a>
            </div>
          </ContactInfo>

          <ImageWrapper>
            <img src="./images/contact.png" alt="contact" />
          </ImageWrapper>
        </DetailsWrapper>
      </StyledContactSection>
      <hr />
    </>
  );
};
