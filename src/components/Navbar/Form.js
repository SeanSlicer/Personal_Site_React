import React from "react";
import styles from "../../styles/form.module.css";

export default function Form() {
  return (
    <form
      name="contactform"
      method="POST"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={styles.contactForm}
    >
      {/* <label htmlFor="name">Name: </label> */}
      <input type="text" name="name" id="name" placeholder="Enter your name" />

      {/* <label htmlFor="email">Email: </label> */}
      <input type="email" name="email" placeholder="Enter your email" />

      {/* <label htmlFor="message">Mssg: </label> */}
      <textarea
        name="message"
        id="message"
        cols="21"
        rows="10"
        placeholder="I'd like to get in touch about..."
      />
      <div data-netlify-recaptcha="true"></div>

      <br />

      <button type="submit">Send</button>
    </form>
  );
}
