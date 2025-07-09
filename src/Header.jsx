import React from 'react'
import { Link } from 'react-router';
import About from './About';
const Header = () => {
  return (
    <>
      <header className="bg-gray-100 shadow-lg py-7 px-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-black-300">Luxurious Hotel</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-gray-900 hover:text-yellow-300 text-1xl transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-yellow-300 text-1xl transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <About />
    </>
  );
}

export default Header