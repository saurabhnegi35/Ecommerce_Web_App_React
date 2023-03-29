import React, { useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');
  const url = process.env.REACT_APP_REGISTER_REDIRECT_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log('env no ---->', url);
      const config = {
        url: url,
        handleCodeInApp: true,
      };
      await auth.sendSignInLinkToEmail(email, config);
      toast.success(
        `Email is sent to ${email}. Click the link to complete your registration.`
      );
    } catch (err) {
      toast.error(err.message);
    }

    //Save User Email in Local Storage
    window.localStorage.setItem('emailForRegistration', email);

    //Clear State
    setEmail('');
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />
      <button type="submit" className="btn btn-outline-primary mt-3">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
