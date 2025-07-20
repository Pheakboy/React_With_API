const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <a href="/">MyApp</a>
        </div>
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <a href="/" className="hover:text-gray-300 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a
              href="/student"
              className="hover:text-gray-300 transition duration-300"
            >
              Students
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-gray-300 transition duration-300"
            >
              About
            </a>
          </li>
          {/* <li>
            <a
              href="/product"
              className="hover:text-gray-300 transition duration-300"
            >
              Product
            </a>
          </li> */}
          {/* <li>
            <a
              href="/materiUI"
              className="hover:text-gray-300 transition duration-300"
            >
              MateriUI
            </a>
          </li> */}
        </ul>
        <div className="md:hidden">
          <button className="text-white">Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
