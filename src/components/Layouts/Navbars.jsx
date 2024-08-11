

const Navbars = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Fashion</a></li>
        <li><a>Jewellry</a></li>
        <li><a>Watches</a></li>
        <li><a>Phones</a></li>
        <li><a>Electronics</a></li>
        <li><a>Home & Garden</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">EC_BAZZAR</a>
  </div>
  <div className="navbar-center px-48 hidden lg:flex">
    <ul className="menu menu-horizontal font-bold ">
    <li><a>Fashion</a></li>
        <li><a>Jewellry</a></li>
        <li><a>Watches</a></li>
        <li><a>Phones</a></li>
        <li><a>Electronics</a></li>
        <li><a>Home & Garden</a></li>
    </ul>
  </div>


   <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search.." className="input input-bordered w-20 h-9  md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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