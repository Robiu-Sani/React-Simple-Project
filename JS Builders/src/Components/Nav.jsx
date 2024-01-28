export default function Nav(){
    return <nav className="container mx-auto px-4">
    <div className="navbar w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a className="text-Primary"> Home </a></li>
                <li><a> About </a></li>
                <li><a> Blog </a></li>
                <li><a> Contact </a></li>
                <li>
                  <details>
                    <summary>Account</summary>
                    <ul className="p-2">
                      <li><a>User</a></li>
                      <li><a>Admin</a></li>
                    </ul>
                  </details>
                </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-2xl"><span className="text-Primary text-xl md:text-2xl">JS </span> Builders</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="text-Primary"> Home </a></li>
            <li><a> About </a></li>
            <li><a> Blog </a></li>
            <li><a> Contact </a></li>
            <li>
              <details className="relative">
                <summary>Account</summary>
                <ul className="p-2 absolute z-10 rounded-md">
                  <li><a>User</a></li>
                  <li><a>Admin</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="bg-Primary py-2 px-8 rounded-md text-white cursor-pointer">Hot Line</a>
        </div>
      </div>
</nav>
}