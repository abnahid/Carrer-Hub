import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";
import { AuthContext } from "./../context/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("register");
  const fullName = user?.displayName || "";
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0];
  const activeStyle =
    "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]";

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeStyle : "text-gray-600 hover:text-gray-800"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive ? activeStyle : "text-gray-600 hover:text-gray-800"
          }
        >
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/applied"
          className={({ isActive }) =>
            isActive ? activeStyle : "text-gray-600 hover:text-gray-800"
          }
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? activeStyle : "text-gray-600 hover:text-gray-800"
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? activeStyle : "text-gray-600 hover:text-gray-800"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#eef2ff]">
      <div className="navbar max-w-6xl mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Career Hub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>
        <div className="navbar-end">
          <p className="normal-case text-lg font-semibold mr-3 hidden md:block">
            {firstName}
          </p>
          {user && user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Avatar" src={user?.photoURL} />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-60 p-2 shadow"
              >
                <li>
                  <Link to="/applied" className="justify-between">
                    Profile
                    <span className="badge bg-green-200 text-green-800">
                      New
                    </span>
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <button onClick={signOutUser} className="text-red-600">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className={`${
                  activeTab === "login"
                    ? "text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  animate-gradient"
                    : "text-cyan-900"
                } px-6 py-2 rounded-lg text-sm font-normal `}
                onClick={() => setActiveTab("login")}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={`${
                  activeTab === "register"
                    ? "text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  animate-gradient"
                    : "text-cyan-900"
                } px-6 py-2 rounded-lg text-sm font-normal`}
                onClick={() => setActiveTab("register")}
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
