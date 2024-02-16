import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../utility/UserContext';
export default function Navbar() {
  const[auth,setAuth]=useState("Login");
  const {logedInUser} = useContext(userContext)
  return (
    <header className="  text-gray-600 body-font shadow-lg  z-50 block sticky ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="a" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-2xl text-blue-700">Menu<span className='text-red-500'>Mingle</span></span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center text-black text-lg ">
        
          <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link to='/about'
           className="mr-5 hover:text-gray-900">About</Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">Contact Us</Link>
          <Link to="/service"  className="mr-5 hover:text-gray-900">Services</Link>
          <Link to="/grocery"  className="mr-5 hover:text-gray-900">Grocery</Link>
          
        </nav>
        <button className="inline-flex items-center bg-indigo-500 border-0 py-2 px-4 text-white focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">Go to card
        </button>
        <button onClick={()=>{auth==="Login"?setAuth("Logout"):setAuth("Login")}}>
        <h2 className='ml-3 items-center bg-pink-600 border-0 py-2 px-4 text-white focus:outline-none rounded' >{auth}</h2>
        </button>
          <p   className="font-bold ml-5 hover:text-gray-900">{logedInUser}</p>
      </div>
    </header>
  );
}
