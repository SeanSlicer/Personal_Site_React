import React, { useState } from "react";
import styles from "../../styles/form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <form
      name="contactform"
      className={styles.contactForm}
      onSubmit={async (e) => {
        e.preventDefault();

        fetch("/api/hello", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        })
          .then(() => {
            setSuccess(true);

            setName("");
            setEmail("");
            setMessage("");
          })
          .catch((err) => {
            console.error("Could not submit form", err);
            alert(`Couldn't submit form! Error: ${err.message}`);
          });
      }}
    >
      {success ? (
        <div className={styles.success}>
          Thank you for your message! I will get back to you in 24-48 hours!
        </div>
      ) : (
        <>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            name="message"
            id="message"
            cols="21"
            rows="10"
            placeholder="I'd like to get in touch about..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <br />

          <button type="submit">Send</button>
        </>
      )}
    </form>
  );
}
