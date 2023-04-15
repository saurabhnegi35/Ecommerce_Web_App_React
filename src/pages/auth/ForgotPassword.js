import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const url = process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const config = {
      url: url,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail('');
        setLoading(false);
        toast.success('Check Your Email for Password Reset Link');
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
        console.log('Error Msg in Forgot Password ', err);
      });
  };

  return (
    <div className="container col-md-6 offset-md-3 p-5">
      {loading ? (
        <h4 className="text-danger">Loading</h4>
      ) : (
        <h4>Forgot Password</h4>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Type Your Email"
          autoFocus
        />
        <br />
        <button className="btn btn-outline-primary " disabled={!email}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
