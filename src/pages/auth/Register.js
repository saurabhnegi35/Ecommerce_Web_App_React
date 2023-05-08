import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Register = () => {
  const [email, setEmail] = useState('');
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  const url = process.env.REACT_APP_REGISTER_REDIRECT_URL;

  useEffect(() => {
    if (user && user.token) {
      navigate('/');
    }
  }, [user]);

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
        placeholder="Enter Your Email"
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
