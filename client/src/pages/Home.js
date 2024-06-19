import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { StudentDashboard } from '../components/StudentDashboard';
import { useAuth } from '../store/auth';

export const Home = () => {
  const {logoutUser} =useAuth();
  return (
    <div >
      <Navbar/>
      {logoutUser ? <StudentDashboard/> : `Loading`}
      
      
    </div>
  );
};
