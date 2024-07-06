import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const webLinks = [
    { name: 'About', path: '#' },
    { name: 'Projects', path: '#' },
    { name: 'Open Source', path: '#' },
    { name: 'Guestbook', path: '#' },
  ];

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-sh-dark-500 bg-opacity-80 fixed w-full top-0 z-20 backdrop-filter backdrop-blur-sm shadow-lg mb-28">
      <div className="max-w-[50rem] mx-auto w-full px-5 py-2.5 md:px-10 lg:px-0">
        <div className="flex items-center w-full">
          <div className="w-3/4 justify-start items-center inline-flex">
            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sh-blue-500 rounded-full p-2 bg-sh-dark hover:bg-sh-dark-700 transition ease-in"
              onClick={handleMenuToggle}
            >
              <HiOutlineMenuAlt1 className="text-white text-xl" />
            </button>

            <Link to="/">
              <a className="rounded-full border-2 border-sh-blue flex mr-7 w-10 h-10 scale-90 hover:scale-100 transition ease-in select-none">
                {/* Replace with your profile image */}
                <img
                  className="rounded-full object-cover"
                  src="path/to/your/profile.jpg"
                  alt="Your Avatar"
                />
              </a>
            </Link>

            {/* Desktop navigation */}
            <ul className="hidden md:flex inline-flex flex-row gap-3">
              {webLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <a
                      className={`menu-item ${
                        window.location.pathname === link.path ? 'active' : ''
                      }`}
                    >
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <ul className="absolute mt-3 px-2 py-5 w-64 space-y-5 border border-sh-white-500 bg-sh-dark-500 bg-opacity-[0.97] backdrop-filter shadow-lg shadow-sh-dark-500 rounded-md">
              {webLinks.map((link, index) => (
                <li key={index} onClick={handleMenuToggle}>
                  <Link to={link.path}>
                    <a className="menu-item">{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="w-1/4 justify-end text-xl flex gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/anudeep009"
              aria-label="Github Link"
              className="cursor-pointer p-3 rounded-xl hover:bg-sh-dark transition ease-in"
            >
              <FaGithub className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
