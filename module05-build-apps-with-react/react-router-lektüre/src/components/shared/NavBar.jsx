import { Link } from "react-router";

const NavBar = ({ signedIn, setSignedIn }) => {
  const handleClick = () => {
    setSignedIn((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          MyApp
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Users
            </Link>
          </li>
          <li>
            <button
              onClick={handleClick}
              className={`px-4 py-2 rounded ${
                signedIn
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              } transition duration-300`}
            >
              {signedIn ? "Ausloggen" : "Einloggen"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
