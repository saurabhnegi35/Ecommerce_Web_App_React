import React, { useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = process.env.REACT_APP_REGISTER_REDIRECT_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 mt-3">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          placeholder="Enter Your Email"
        />
      </div>
      <input
        type="password"
        className="form-control mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
      />
      {/* <button type="submit" className="btn btn-outline-primary mt-3">
        Login
      </button> */}
      <Button
        onClick={handleSubmit}
        type="primary"
        className="mb-3 "
        block
        shape="round"
        size="large"
        disabled={!email || password.length < 6}
        icon={<MailOutlined />}
      >
        Login With Email/Password
      </Button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Login</h4>
          {loginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
