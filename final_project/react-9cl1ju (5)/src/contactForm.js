import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.currentTarget.id == 'contact_name_input') {
      setName(e.currentTarget.value);
    } else if (e.currentTarget.id == 'contact_email_input') {
      setEmail(e.currentTarget.value);
    } else if (e.currentTarget.id == 'contact_message_area') {
      setMessage(e.currentTarget.value);
    }
  };

  const handleSubmit = (e) => {
    console.log(name);
    console.log(email);
    console.log(message);

    var foundError = false;

    // name
    if (name.length == 0) {
      // name is empty.
      foundError = true;
      alert('Name cannot be empty.');
    }

    // email
    if (email.length == '') {
      // email is empty.
      foundError = true;
      alert('Email Address cannot be empty');
    } else if (!email.includes('@')) {
      // email does not contain @ sign.
      foundError = true;
      alert('Invalid Email Address');
    }

    if (message.length == '') {
      // email is empty.
      foundError = true;
      alert('Message cannot be empty');
    }

    if (foundError == true) {
      // error was found
      e.preventDefault();
    } else {
      // no errors were found so submit form
      alert('Form Submitted');
      navigate('/');
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group" id="contact_name_div">
          <label htmlFor="contact_name">Name:</label>
          <input
            id="contact_name"
            class="contact_text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group" id="contact_email_div">
          <label id="contact_email_label" htmlFor="contact_email">
            Email:
          </label>
          <input
            id="contact_email"
            class="contact_text"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group" id="contact_message_div">
          <label htmlFor="contact_message_area">Message:</label>
          <textarea
            id="contact_message_area"
            name="message"
            value={message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
