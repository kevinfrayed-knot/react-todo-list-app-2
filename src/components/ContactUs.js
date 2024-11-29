

import { useState } from "react";

function ContactUs() {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comment: "",
  });
  const [msg, setMsg] = useState("");

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form validation
  const validateForm = () => {
    if (!formState.firstname.trim()) return "Please enter a valid first name.";
    if (!formState.lastname.trim()) return "Please enter a valid last name.";
    if (!formState.email.trim() || !/\S+@\S+\.\S+/.test(formState.email))
      return "Please enter a valid email address.";
    if (!formState.comment.trim()) return "Please enter a valid comment.";
    return "";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setMsg(validationError);
      return;
    }

    console.log(
      `Form submitted: ${formState.firstname} ${formState.lastname} - ${formState.email} - ${formState.comment}`
    );

    setMsg("Form submitted successfully!");
    setFormState({
      firstname: "",
      lastname: "",
      email: "",
      comment: "",
    });
  };

  const handleFormReset = (e) => {
    e.preventDefault();
    setFormState({
      firstname: "",
      lastname: "",
      email: "",
      comment: "",
    });
    setMsg("");
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p className="form-msg" aria-live="polite">
        {msg}
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">* First Name:</label>
          <input
            id="firstname"
            name="firstname"
            value={formState.firstname}
            onChange={handleInputChange}
            type="text"
            maxLength={20}
            placeholder="First name required"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">* Last Name:</label>
          <input
            id="lastname"
            name="lastname"
            value={formState.lastname}
            onChange={handleInputChange}
            type="text"
            maxLength={20}
            placeholder="Last name required"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">* Email:</label>
          <input
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            type="email"
            maxLength={30}
            placeholder="Email required"
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">* Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={formState.comment}
            onChange={handleInputChange}
            rows={5}
            cols={30}
            placeholder="Comment required"
          />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="reset" onClick={handleFormReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;

  