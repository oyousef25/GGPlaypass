import React, { useState, FormEvent } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setSubmitted(true);
    setError("");
    // Handle email submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ color: '#ffffff', backgroundColor: '#495057' }} // Dark background with white text
        />
      </div>
      <button type="submit" className="btn btn-primary btn-center mx-auto center">
        Notify Me 🚀
      </button>
      {submitted && <p className="text-success">You're on the list 🎉🚀</p>}
      {error && <p className="text-danger">{error}</p>}
    </form>
  );
};

export default EmailForm;