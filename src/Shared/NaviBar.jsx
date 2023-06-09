import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";

const NaviBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("carDoc-access-token");
      })
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/about">About</Link>
      </li> */}
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {/* <li>
        <Link to="/contact">Contact</Link>
      </li> */}
      {user?.email ? (
        <>
          <li>
            <Link onClick={handleLogOut}>Log Out</Link>
          </li>
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Log In</Link>
        </li>
      )}
    </>
  );
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
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
            {" "}
            <img
              src="/src/assets/icons8-car-100.png"
              alt=""
              className="w-14 h-10 pe-2 pb-2"
            />{" "}
            CarDoctor{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default NaviBar;
