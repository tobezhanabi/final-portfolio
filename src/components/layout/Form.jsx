import React from "react";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { FormBody } from "../styles/layout/Form.styled";
const Form = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <FormBody>
      <h2> Contact Me!</h2>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" required />
        </div>
        <CTAButton className="buttonSend">{formStatus}</CTAButton>
      </form>
    </FormBody>
  );
};
export default Form;
