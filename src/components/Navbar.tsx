import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return (
    <nav className="bg-cyan-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <a href="/">MyApp</a>
        </div>
        <ul className="flex space-x-6 text-white">
          <Tooltip title="Click to see loading">
            <IconButton onClick={() => setLoading(true)} loading={loading}>
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/product" className="hover:text-gray-300">
              Product
            </a>
          </li>
          <li>
            <a href="/materiUI" className="hover:text-gray-300">
              MateriUI
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
