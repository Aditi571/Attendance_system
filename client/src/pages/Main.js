import React from 'react'
import { MainNavbar } from '../components/MainNavbar'
import { NavLink } from 'react-router-dom'

export const Main = () => {
  return (
    <div className=''>
        <MainNavbar/>
        <div className='flex flex-row items-center ml-12 h-[100vh] text-white'>
            <button className='bg-blue-600 p-3 rounded'><NavLink to='/joinSchool'>Join School</NavLink></button>
            <button className='ml-5 bg-blue-600 p-3 rounded'><NavLink to='/registerSchool'>Create School</NavLink></button>
        </div>
    </div>
  )
}
