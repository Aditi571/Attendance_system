import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const Home = () => {
  
  const {isloggedIn} =useAuth()
  return (
    <div className='flex flex-row w-[100vw] h-[100vh] items-center justify-center'>
      <div className='flex flex-col justify-center items-center'>

      <NavLink to="/student"> 
      <button type="button" className="mb-3 btn btn-primary" data-bs-toggle="popover" title="Popover Header" data-bs-content="Some content inside the popover">Student Registration</button>      
       </NavLink>

      <NavLink to="/administrator"> 
      <button type="button" className="mb-3 btn btn-primary" data-bs-toggle="popover" title="Popover Header" data-bs-content="Some content inside the popover">Admin</button>
      </NavLink>

      {isloggedIn ? (
      <NavLink to="/logout"> 
      <button type="button" className="mb-3 btn btn-primary" data-bs-toggle="popover" title="Popover Header" data-bs-content="Some content inside the popover">Logout</button>
      </NavLink>)
      :
      (<NavLink to="/student/login"> 
      <button type="button" className="mb-3 btn btn-primary" data-bs-toggle="popover" title="Popover Header" data-bs-content="Some content inside the popover">Login</button>
      </NavLink>)}
      

      
      </div>
      <div className='flex flex-row '>

      </div>
    </div>
  );
};
