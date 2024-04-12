import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter from react-router-dom
import { Home } from './pages/Home'
import { Student } from './pages/Student';
import { Admin } from './pages/Admin';
import { Student_login } from './pages/Student_login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/administrator' element={<Admin/>}></Route>
        <Route path='/student/login' element={<Student_login/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
