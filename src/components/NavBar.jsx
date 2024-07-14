import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const webLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Open Source', path: '/open-source' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#1a202c] bg-opacity-80 fixed w-full top-0 z-20 backdrop-filter backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <HiOutlineMenuAlt1 className="block h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-10 w-10 rounded-full border-2 border-blue-500"
                  src="https://i.imghippo.com/files/fPSQG1720455771.jpg"
                  alt="avatar"
                  draggable="false"
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {webLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="https://github.com/anudeep009"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full text-gray-400 hover:text-white"
            >
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {webLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
