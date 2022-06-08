import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Auth from './components/auth';
import Home from "./screen/home";
import { useEffect } from "react";
import { refresh } from "./redux/action/authaction";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector(State => State.auth);
  useEffect(() => {
    if (!auth.isLoggedIn && auth.token) {
      dispatch(refresh(auth.token));
    }
  })
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
