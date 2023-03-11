import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    // Check for email validation
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    // Check for password validation
    if (!password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // TODO: Add code to submit form data
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        {errors.email && <div className="error">{errors.email}</div>}
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        {errors.password && <div className="error">{errors.password}</div>}
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;
