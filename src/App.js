import React,{useRef} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import User from './components/user/User'
import Admin from './components/admin/Admin'
import Main from './components/main/Main';
import UserApp from './components/userApp/UserApp';
import './App.scss';

function App() {
  const teamRef = useRef();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/user/app" element={<UserApp name='user-1289'/>} />
        </Routes>
    </ Router>
    </div>
  );
}

export default App;
