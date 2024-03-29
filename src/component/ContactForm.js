// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ContactForm = ({ lang, setEmailStatus, setWarning }) => {
  const [payload, setPayload] = useState({
    mail: "",
    typeOfService: "",
    shortDescription: "",
  });

  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);

  const checkEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleHoneypot = (e) => {
    setHoneypot(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...payload };
    setLoading(true);
    if (honeypot) {
      alert("Sorry, your submission could not be processed at this time.");
      return;
    }
    if (!checkEmail(payload.mail)) {
      setLoading(false);
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
      return;
    }
    try {
      const response = await axios.post(process.env.REACT_APP_MAIL_ROUTE, data);
      response.data.success && setEmailStatus(true);
      setPayload({ mail: "", typeOfService: "", shortDescription: "" });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  return (
    <Wrapper>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="phone"
          value={honeypot}
          onChange={handleHoneypot}
        />
        <input
          id="mail"
          type="email"
          name="mail"
          value={payload.mail}
          onChange={handleChange}
          placeholder={lang ? "Please enter your email." : "Εδώ το email σου."}
          className="input email"
        />
        <select
          id="pickupTime"
          name="typeOfService"
          value={payload.typeOfService}
          onChange={handleChange}
          className="input select"
          required
        >
          <option value="" disabled hidden>
            {lang
              ? "What kind of service are you interested in?"
              : "Τι υπηρεσία σε ενδιαφέρει;"}
          </option>
          <option value="general">
            {lang ? "Plumbing Services" : "Υδραυλικές Υπηρεσίες"}
          </option>
          <option value="heat pump">
            {lang ? "Heat Pump Installation" : "Εγκατάσταση Αντλίας Θερμότητας"}
          </option>
          <option value="water filter">
            {lang ? "Water Filter Installation" : "Εγκατάσταση Φίλτρου Νερού"}
          </option>
        </select>
        <textarea
          id="shortDescription"
          name="shortDescription"
          value={payload.shortDescription}
          onChange={handleChange}
          placeholder={lang ? "Short Description.." : "Μία σύντομη περιγραφή.."}
          className="input description"
        />
        <button className="btn" type="submit">
          {loading ? "loading " : lang ? "Send" : "Στείλτο"}
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #1c1e6c;
    padding: 1rem;
    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
    border-radius: 9px;
    width: 60rem;
  }

  .input {
    font-family: "Roboto", sans-serif;
    border: none;
    border-radius: 9px;
    padding: 1rem;
    outline: none;
  }

  .input:focus {
    box-shadow: inset 0 0 0 3px #4dd8c7;
  }

  .email {
    font-size: 1.6rem;
    color: #666;
  }

  .select {
    font-size: 1.6rem;
    color: #666;
  }

  select:required:invalid {
    color: #888;
  }

  .description {
    font-size: 1.6rem;
    color: #666;
  }

  .btn {
    font-family: "Roboto", sans-serif;
    color: #fff;
    background-color: #259cd3;
    border-radius: 9px;
    font-size: 2rem;
    transition: all 0.3s;
    align-self: flex-end;
    border-style: none;
    padding: 1rem 2rem;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #51b0dc;
  }

  @media (max-width: 600px) {
    .form-container {
      width: auto;
    }
  }
`;
export default ContactForm;
