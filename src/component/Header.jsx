import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, usersignOut } = useContext(AuthContext);

  let handleSignOut = () => {
    usersignOut()
      .then(() => {
        //signout
        toast.success("Logout successfull!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='container mx-auto navbar'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase font-semibold'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/work'>My Work</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <button>
                {user?.email &&
                  <Link to='/userReviews' >MY REVIEWS</Link>
                }
              </button>
            </li>
            <li>
              <button>
                {user ? (
                  <button className='uppercase' onClick={handleSignOut}>
                    LogOut
                  </button>
                ) : (
                  <Link to='/login'>LOGIN</Link>
                )}
              </button>
            </li>
            
          </ul>
        </div>
        <Link to='/'>
          <img
            className='w-2/3'
            src='https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/99/null/external-digital-camera-graphic-design-and-photography-smashingstocks-hand-drawn-black-smashing-stocks.png'
            alt='logo'
          />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0 uppercase font-semibold'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/work'>My Work</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <button>
                {user?.email &&
                  <Link to='/userReviews'>MY REVIEWS</Link>
                }
              </button>
            </li>
          <li>
            <button>
              {user ? (
                <button className='uppercase' onClick={handleSignOut}>
                  LogOut
                </button>
              ) : (
                <Link className='uppercase' to='/login'>
                  LOGIN
                </Link>
              )}
            </button>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='avatar placeholder'>
          <div className='bg-neutral-focus text-neutral-content rounded-full w-12'>
            {user?.photoURL ? (
              <img src={user.photoURL} alt='user'></img>
            ) : (
              <span>MX</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
