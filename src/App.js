import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Header from './components/nav/Header';
import RegisterComplete from './pages/auth/RegisterComplete';

const App = () => {
  return (
    <>
      <Header></Header>
      <ToastContainer />
      <Switch>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/register/complete" Component={RegisterComplete} />
      </Switch>
    </>
  );
};

export default App;
