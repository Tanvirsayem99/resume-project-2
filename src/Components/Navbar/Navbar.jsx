import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut =() =>{
        logOut()
    }
    
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
             <NavLink to="/" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>Home</NavLink>
            <NavLink to="/toys" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>All Toys</NavLink>
            {
              user? <div className="grid md:grid-cols-2">
              <NavLink to="/myToys" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>My Toys</NavLink>
              <NavLink to="/add" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>Add A Toy</NavLink>
              </div> : ''
            }
            {
                user? <NavLink onClick={handleLogOut} className="btn btn-active btn-secondary">Log Out</NavLink> : <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>Login</NavLink>
            }
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>Blog</NavLink>
            </ul>
          </div>
          <img src="https://t4.ftcdn.net/jpg/02/48/27/97/360_F_248279748_Re9qnj7RFjtf2lbLVqnr5SAQ7hWGx3DE.jpg" alt="" className="w-12"/>
          <a className="btn btn-ghost normal-case text-xl">Cars Toy</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-10">
          
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>Home</NavLink>
            <NavLink to="/toys" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>All Toys</NavLink>
            {
              user? <div className="grid md:grid-cols-2">
              <NavLink to="/myToys" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>My Toys</NavLink>
              <NavLink to="/add" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>Add A Toy</NavLink>
              </div> : ''
            }
            {
                user? <NavLink onClick={handleLogOut} className="btn btn-active btn-secondary">Log Out</NavLink> : <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>Login</NavLink>
            }
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}>Blog</NavLink>
          
        </div>
        <div className="navbar-end flex gap-3">
          
          {
            user?.photoURL? <div className="tooltip tooltip-left" data-tip={user?.displayName}>
            <img src={user.photoURL} className="w-10 rounded-full"/>
          </div>: ''
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
