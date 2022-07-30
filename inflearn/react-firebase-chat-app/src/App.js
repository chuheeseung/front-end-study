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
import { authService } from "./fbase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/actions/user_action";
import { useDispatch, useSelector } from 'react-redux';

function App(props) {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      console.log('user', user);

      if(user) { 
        navigate("/");
        dispatch(setUser(user));
      } else { 
        navigate("/login");
        dispatch(setUser(null));
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
}

export default App;
