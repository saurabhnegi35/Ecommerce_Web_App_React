import React, { useEffect } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Header from './components/nav/Header';
import RegisterComplete from './pages/auth/RegisterComplete';

import { auth } from './firebase';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    console.log('Hello World');
    console.log(auth);
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log('user', user);
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            name: user.displayName,
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });
    // cleanup
    return unsubscribe();
  }, []);

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
