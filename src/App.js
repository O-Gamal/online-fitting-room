/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import User from './components/user/User'
import Admin from './components/admin/Admin'
import Main from './components/main/Main';
import UserApp from './components/userApp/UserApp';
import './App.scss';

function App() {

  return (
    // <AnimatePresence exitBeforeEnter>
      <motion.div  className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/user" element={<User/>} />
            <Route path="/user/app" element={<UserApp/>} />
          </Routes>
        </ Router>
      </motion.div>
    // </AnimatePresence>
  );
}

export default App;
