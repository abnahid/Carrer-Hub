import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  font-extrabold text-[#FFFFFF] animate-gradient">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
