import { Link, NavLink } from "react-router-dom";
import profile from "../../../assets/profile.png";

const Navbar = () => {
  const navData = (
    <>
      <div className="flex gap-5 hover:bg-none">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/career"}>Career</NavLink>
        </li>
      </div>
    </>
  );
  return (
    <div className="navbar bg-base-100 py-0">
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
            {navData}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navData}</ul>
      </div>
      <div className="navbar-end flex gap-3">
        <div className="w-10 rounded-full">
          <img src={profile} />
        </div>
        <Link to={'/login'}>
          <button className="px-7 py-2 bg-neutral-700 text-bgAll">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
