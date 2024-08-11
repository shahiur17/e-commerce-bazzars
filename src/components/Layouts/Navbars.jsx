import { Link } from "react-router-dom";

const Navbars = () => {
    return (
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/fashion" className="font-bold hover:text-blue-500">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/shous" className="font-bold hover:text-blue-500">
                  Shous
                </Link>
              </li>
              <li>
                <Link to="/watch" className="font-bold hover:text-blue-500">
                  Watches
                </Link>
              </li>
              <li>
                <Link to="/electronic" className="font-bold hover:text-blue-500">
                  Electronic
                </Link>
              </li>
              <li>
                <Link to="/garden" className="font-bold hover:text-blue-500">
                  Home & Garden
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/home" className="btn btn-ghost text-xl">
            <span className="text-red-500">EC</span>
            <span className="text-blue-500">_BAZZAR</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex lg:px-20">
          <ul className="menu menu-horizontal font-bold space-x-4">
            <li>
              <Link to="/fashion" className="font-bold hover:text-blue-500">
                Fashion
              </Link>
            </li>
            <li>
              <Link to="/shous" className="font-bold hover:text-blue-500">
                Shous
              </Link>
            </li>
            <li>
              <Link to="/watch" className="font-bold hover:text-blue-500">
                Watches
              </Link>
            </li>
            <li>
              <Link to="/electronic" className="font-bold hover:text-blue-500">
                Electronic
              </Link>
            </li>
            <li>
              <Link to="/garden" className="font-bold hover:text-blue-500">
                Home & Garden
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search.."
              className="input input-bordered w-20 h-9 md:w-auto"
            />
            <button className="absolute right-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
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
                  d="M10 14l2-2m0 0l2-2m-2 2a5 5 0 11-7 0 5 5 0 017 0zm0 0l5 5"
                />
              </svg>
            </button>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbars;
