import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { authService } from "./fbase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/actions/user_action";

function App(props) {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const isLoading = useSelector(state => state.user.isLoading);
  
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        navigate('/');
        dispatch(setUser(user));
      } else {
        navigate('/login');
        dispatch(setUser(null));
      }
    })
  }, [])

  if (isLoading) {
    return (
      <div>...loading</div>
    )
  } else {
    return (
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    );
  }
}

export default App;
