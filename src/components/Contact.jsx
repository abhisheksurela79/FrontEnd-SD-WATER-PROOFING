import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./css/contact.css";

function Contact() {
  // const navigate = useNavigate();
  const [nameInput, setNameInput] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [messageError, setMessageError] = useState("");
  const [messageLength, setMessageLength] = useState(1000);
  const [messageLengthError, setMessageLengthError] = useState("");
  const [submitButtonText, setSubmitButtonText] = useState("Submit");
  const [showModal, setShowModal] = useState(false);

  const sendContactRequest = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: nameInput.trim(),
        email: emailInput.trim(),
        phone: phoneInput.trim(),
        message: messageInput.trim(),
      }),
    };

    try {
      setSubmitButtonText("Please wait...");
      const response = await fetch(
        "http://api-sd-waterproofing.abhisheksurela.in/helpdesk/",
        requestOptions
      );
      const data = await response.json();

      setSubmitButtonText("Success");
      setShowModal(true); // Show the modal upon successful API response

      setTimeout(() => {
        setSubmitButtonText("Submit");
      }, 5001);

      // navigate('/portfolio');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const inputName = async (event) => {
    let userInput = "";
    if (event === undefined) {
      userInput = nameInput;
      setNameInput(userInput);
    } else {
      setNameInput(event.target.value);
    }

    const pattern = /^[a-zA-Z\s]{4,40}$/;

    if (pattern.test(nameInput)) {
      setNameError("");
      return true; // No errors
    } else {
      setNameError("Please enter your full name.");
      return false; // Errors found
    }
  };

  const inputEmail = async (event) => {
    let userInput = "";
    if (event === undefined) {
      userInput = emailInput;
      setEmailInput(userInput);
    } else {
      setEmailInput(event.target.value);
    }

    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z\s]{2,}$/;

    if (pattern.test(emailInput)) {
      setEmailError("");
      return true; // No errors
    } else {
      setEmailError("Please enter your valid email address.");
      return false; // Errors found
    }
  };

  const inputPhone = async (event) => {
    let userInput = "";
    if (event === undefined) {
      userInput = phoneInput;
      setPhoneInput(userInput);
    } else {
      setPhoneInput(event.target.value);
    }

    const pattern = /^[6-9][0-9\s]{9}$/;

    if (pattern.test(phoneInput)) {
      setPhoneError("");
      return true; // No errors
    } else {
      setPhoneError(
        "Please enter a valid 10-digit Indian phone number starting with a digit between 6 to 9."
      );
      return false; // Errors found
    }
  };

  const inputMessage = async (event) => {
    let userInput = "";
    if (event === undefined) {
      userInput = messageInput;
      setMessageInput(userInput);
    } else {
      setMessageInput(event.target.value);
    }

    setMessageLength(1000 - messageInput.length);
    messageLength <= -1
      ? setMessageLengthError("text-danger")
      : setMessageLengthError("");

    const pattern = /^.{10,1000}$/;

    if (pattern.test(messageInput)) {
      setMessageError("");
      return true; // No errors
    } else {
      setMessageError(
        "Please enter your query message, which must be between 10 and 1000 characters in length."
      );
      return false; // Errors found
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Await all input validation functions
    const [nameValid, emailValid, phoneValid, messageValid] = await Promise.all(
      [inputName(), inputEmail(), inputPhone(), inputMessage()]
    );

    // Check if any of the validation functions found errors
    if (!nameValid || !emailValid || !phoneValid || !messageValid) {
      window.scrollTo(0, 0);
      console.log("There are validation errors. Please check the form.");
      return;
    }

    await sendContactRequest();
  };

  return (
    <>
      <div className="text-center mt-5 mb-5 m-auto">
        <div className="m-auto">
          <h4>Contact Us</h4>
          <p className="contact-message">
            If you have any questions or queries, please feel free to contact us
            using the form below:
          </p>
        </div>
      </div>

      <div className="container">
        <form className="contact-form" action="" method="get">
          <div className="mb-3">
            <label htmlFor="full-name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="full-name"
              placeholder="Demo Demo"
              required={true}
              value={nameInput}
              onChange={inputName}
              onBlur={inputName}
            />

            <div className="error-container mt-2 mb-2 text-danger small">
              <p className="mt-2 mb-2">{nameError}</p>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="demo.demo@demomail.com"
              required={true}
              value={emailInput}
              onChange={inputEmail}
              onBlur={inputEmail}
            />

            <div className="error-container mt-2 mb-2 text-danger small">
              <p className="mt-2 mb-2">{emailError}</p>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="9876543210"
              required={true}
              value={phoneInput}
              onChange={inputPhone}
              onBlur={inputPhone}
            />

            <div className="error-container mt-2 mb-2 text-danger small">
              <p className="mt-2 mb-2">{phoneError}</p>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              required={true}
              value={messageInput}
              onChange={inputMessage}
              onBlur={inputMessage}
            />

            <div
              className={`message-length-container text-secondary mt-2 mb-2 small ${messageLengthError}`}
            >
              <p className="mt-2 mb-2">{messageLength} characters remaining</p>
            </div>

            <div className="error-container mt-2 mb-2 text-danger small">
              <p className="mt-2 mb-2">{messageError}</p>
            </div>
          </div>
          <div className="mb-3">
            <button type="submit" onClick={handleSubmit}>
              {submitButtonText}
            </button>
          </div>
        </form>

        {showModal && (
          <div className="overlay">
            <div
              className="modal fade show d-flex align-items-center"
              tabIndex="-1"
              style={{ display: "block" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Contact Request Submitted</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowModal(false)} // Close modal when button is clicked
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Your contact request has been successfully submitted!</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)} // Close modal when button is clicked
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="divider"></div>

        <div className="map-container text-center">
          <iframe
            title="Google Map of S.D Waterproofing"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.217505531081!2d77.02312497209138!3d28.623242580752333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0541588a57f5%3A0xe9e51d49f8b48d55!2sDwarka%20Mor%2C%20Vipin%20Garden%2C%20Nawada%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1695857764707!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
