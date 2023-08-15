import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="contactText">
        <h1>Questions or Comments?</h1>
        <h3>
          Fill out the form below and we will reach out as quickly as possible!
        </h3>
      </div>
      <ContactForm />
      <div style={{ height: "50vh" }}></div>
      <Footer />
    </>
  );
};

export default Contact;
