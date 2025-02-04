

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <a href="/">MyApp</a>
        </div>
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="/" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/product" className="hover:text-gray-300">Product</a>
          </li>
          <li>
            <a href="/quiz" className="hover:text-gray-300">Quiz</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
