import React, { useEffect, useState } from "react";
import Ionicons from "ionicons";
import $ from "jquery";
import emailjs from "emailjs-com";
import { Form, Input, TextArea } from "semantic-ui-react";
import "./ContactForm.css";
import Swal from "sweetalert2";

const SERVICE_ID = "service_koflg4b";
const TEMPLATE_ID = "template_ns5abkb";
const USER_ID = "0oGemjtbWGzOcRbsw";
const ContactForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     console.log(name);
  //   };
  //   const onNameChange = (name) => {
  //     setName(name.value);
  //   };
  //   const onEmailChange = (email) => {
  //     setEmail(email.value);
  //   };
  //   const onMessageChange = (message) => {
  //     setEmail(message.value);
  //   };

  //   useEffect(() => {}, []);

  //   return (
  //     <div className="ContactForm">
  //       <form id="contact-form" onSubmit={handleSubmit}>
  //         <div className="form-group">
  //           <label className="control-label" htmlFor="name">
  //             Name{" "}
  //           </label>
  //           <div className="input-group">
  //             <div className="input-group-addon">
  //               <ion-icon name="person-outline"></ion-icon>
  //             </div>
  //             <input
  //               type="text"
  //               className="form-control"
  //               value={name}
  //               onChange={onNameChange}
  //             />
  //           </div>
  //         </div>
  //         <div className="form-group">
  //           <label className="control-label" htmlFor="email">
  //             Email address{" "}
  //           </label>
  //           <div className="input-group">
  //             <div className="input-group-addon">
  //               <ion-icon name="mail-outline"></ion-icon>
  //             </div>
  //             <input
  //               id="email"
  //               name="email"
  //               type="text"
  //               className="form-control"
  //               value={email}
  //               onChange={onEmailChange}
  //             />
  //           </div>
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="message">Message </label>
  //           <textarea
  //             className="form-control"
  //             rows="5"
  //             onChange={onMessageChange}
  //           ></textarea>
  //         </div>
  //         <button type="submit" className="btn btn-primary">
  //           <ion-icon name="send"></ion-icon>
  //         </button>
  //       </form>
  //     </div>
  //   );
  // };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="ContactForm" id="contact">
      <h2 style={{ color: "white" }}>Questions, Comments, or Concerns? </h2>
      <h4 style={{ color: "white", fontFamily: "Alta" }}>
        Fill out our contact form!
      </h4>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          // width="80%"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <button type="submit" className="btn btn-primary">
          <ion-icon name="send"></ion-icon>{" "}
        </button>
      </Form>
    </div>
  );
};

export default ContactForm;
