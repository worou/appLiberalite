import React from 'react';

import ButtonList from './components/ButtonList';
import MyCalendar from './components/MyCalendar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Nav() {
  return (
      <Routes>
        <Route path="/" element={<ButtonList />} />
        <Route path="/calendar" element={<MyCalendar />} />
        {/* D'autres routes */}
      </Routes>
  );
}

export default Nav