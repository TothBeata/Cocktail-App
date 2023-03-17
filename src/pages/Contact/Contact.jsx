import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [sendMessage, setSendMessage] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setSendMessage(true);
  };

  return (
    <>
      {!sendMessage ? (
        <div className="contact-me-container">
          <h1 className="contact-me">Contact us</h1>
          <form className="contact-me-form">
            <label htmlFor="nume">Name:</label>
            <input
              type="text"
              id="nume"
              name="nume"
              placeholder="John Doe"
              required
            />
            <br />

            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@dummy.dummy"
              required
            />
            <br />

            <label htmlFor="subiect">Subject:</label>
            <input
              type="text"
              id="subiect"
              name="subiect"
              placeholder="New cocktail on list"
              required
            />
            <br />

            <label htmlFor="mesaj">Message:</label>
            <textarea
              id="mesaj"
              name="mesaj"
              rows="5"
              placeholder="Type your message here..."
              required
            ></textarea>
            <br />

            <input type="submit" value="Send" onClick={clickHandler} />
          </form>
        </div>
      ) : (
        <div className="contact-message">
          <p>The message was sent!</p>
          <Link to="/">
            <button className="btn">
              Go back to cocktails list
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Contact;
