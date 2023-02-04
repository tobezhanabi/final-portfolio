import React from "react";
//import { CTAButton } from "../styles/common/CTAButton.styled";
import { FormBody } from "../styles/layout/Form.styled";
const Form = () => {
  // const [formStatus, setFormStatus] = React.useState("Send");
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setFormStatus("Submitting...");
  //   const { name, email, message } = e.target.elements;
  //   let conFom = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   console.log(conFom);
  // };

  const [formData, setFormData] = React.useState({
    fullname: "",
    email: "",
    comments: "",
  });
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    console.log(formData);
  }
  return (
    <FormBody>
      <h2> Contact Me!</h2>

      <form onSubmit={handleSubmit} netfily>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            name="fullname"
            onChange={handleChange}
            value={formData.fullname}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            placeholder="What do you want create? A portfolio or you just want to say Hi! 🥰"
            value={formData.comments}
            onChange={handleChange}
            name="comments"
            required
          />
        </div>
        <button>Send</button>
      </form>
    </FormBody>
  );
};
export default Form;
