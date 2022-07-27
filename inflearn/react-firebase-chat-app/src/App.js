import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import ChatPage from './components/ChatPage/ChatPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import firebase from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUser
} from './redux/actions/user_action';

function App(props) {
  let history = useNavigate();
  let dispatch = useDispatch();
  const isLoading = useSelector(state => state.user.isLoading);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(user => {
      console.log('user', user);

      if(user) { // 로그인이 된 상태s
        props.history.push("/");
        dispatch(setUser(user));
      } else { // 로그인이 되지 않은 상태
        props.history.push("/login");
      }
    })
  }, []);

  if(isLoading) {
    return (
      <div>
        ...Loading
      </div>
    )
  } else {
    return (
      <Routes>
        <Route exact path="/" element={<ChatPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    )
  }

  return (
    <Routes>
        <Route exact path="/" element={<ChatPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
  );
}

export default App;
