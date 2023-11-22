import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../../assets/logo.png'


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin,setLogin]=useState(false)
  const Navigate=useNavigate()
  const Image = () => (
    <img className='w-[60px] mx-2' src={Logo} />
  )
  useEffect(()=>{
    const checkLogin=()=>{
      const checkToken=localStorage.getItem('turfToken')
      if(checkToken){
        setLogin(true)
      }
    }
    checkLogin()
  })
  const logoutTurf=()=>{
    localStorage.removeItem('turfToken')
    Navigate('/login')
  }

  return (
    <>
     <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>
            <Image />
            PlayTime
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                onClick={() => Navigate("/turfOwner/dashBoard")}
              >
                Dashboard
              </a>
              <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  onClick={()=> Navigate('/turfOwner/turf-bookings')}  
                >
                Bookings
              </a>
              
              <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  onClick={() => Navigate("/turfOwner/turf-profile")}
              >
                Profile
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">isOpen main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden md:block">
            {isLogin ? (

              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={logoutTurf}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => Navigate("/login")}
              >
                Get Started
              </button>
            )
            }
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={() => Navigate("/turfs")}
          >
            Dashboard
          </a>
          <a  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={()=> Navigate('/turf-bookings')} 
          >
            Bookings
          </a>
          <a  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={() => Navigate("/turf-reports")}
          >
            Booking Reports
          </a>
          <a  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={() => Navigate("/turf-profile")}
          >
            Profile
          </a>

          <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium">
            {isLogin ? (

              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={logoutTurf}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => Navigate("/login")}
              >
                Get Started
              </button>
            )
            }
          </div>

        </div>
      </div>
    </nav>
    </>
  );
};

export default Nav;
