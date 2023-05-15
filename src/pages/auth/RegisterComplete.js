import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createOrUpdateUser } from '../../functions/auth';

const RegisterComplete = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user } = useSelector((state) => ({ ...state }));

  const history = useNavigate();

  useEffect(() => {
    // console.log(window.localStorage.getItem('emailForRegistration'));
    setEmail(window.localStorage.getItem('emailForRegistration'));
    console.log(window.location.href);
    console.log(window.localStorage.getItem('emailForRegistration'));
  }, []);

  let dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Validation
    if (!email || !password) {
      toast.error('Email and Password is Required');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      console.log('Result', result);
      if (result.user.emailVerified) {
        //Remove User Email from local Storage
        window.localStorage.removeItem('emailFormRegistration');

        //Get user Id Token
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();

        //Populate User in Redux Store
        console.log('user', user, 'idTokenResult', idTokenResult);

        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: 'LOGGED_IN_USER',
              payload: {
                name: res.data.displayName,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data_id,
              },
            });
          })
          .catch();

        //Redirect
        history('/');
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" value={email} disabled />
      <input
        type="password"
        className="form-control mt-2"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        autoFocus
      />
      <button type="submit" className="btn btn-outline-primary mt-3">
        Complete Registration
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Complete Your Registration</h4>
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
