import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu, BiX } from 'react-icons/bi';
import logo from '../../assets/logo.svg';
import './Header.css'; // Import custom CSS

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navTabs = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About', hasSubTabs: true },
    { path: '/class', label: 'Classes' },
    { path: '/tt', label: 'YTTC', hasSubTabs: true },
    { path: '/schedule', label: 'Schedule' },
    { path: '/contactus', label: 'Contact' },
  ];

  return (
    <>
      <section className="header_top"></section>
      <header className="mt-[-50px]">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>
          <button
            className="md:hidden text-3xl text-orange-500"
            onClick={toggleMenu}
          >
            <BiMenu />
          </button>

          {/* Centered Tabs */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } fixed top-0 left-0 right-0 bg-gradient-to-r from-[#5b1600] to-[#f15a29] z-50 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out transform ${
              isMenuOpen ? 'translate-y-0' : 'translate-y-[-100%]'
            }`}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={toggleMenu}
            >
              <BiX />
            </button>
            <ul className="flex flex-col items-center space-y-4 mt-16 w-full px-4">
              {navTabs.map((tab, index) => (
                <li
                  key={index}
                  className={`w-full rounded-md py-2 cursor-pointer ${activeTab === tab.label ? 'bg-white text-[#5b1600]' : 'text-[#ffe4dc] hover:bg-[#f15a29] hover:text-white'}`}
                  onClick={() => setActiveTab(tab.label)}
                >
                  <Link to={tab.path} className="block text-center">
                    {tab.label}
                  </Link>
                  {tab.hasSubTabs && activeTab === tab.label && (
                    <ul className="subTabs bg-white shadow-lg mt-2 rounded-lg">
                      {tab.subTabs && tab.subTabs.map((subTab, idx) => (
                        <li key={idx}>
                          <Link to={subTab.path} className="block px-4 py-2 text-[#5b1600] hover:bg-[#f15a29] hover:text-white">
                            {subTab.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop view tabs */}
          <div
            className={`hidden md:flex items-center justify-center w-full ${
              isMenuOpen ? 'hidden' : 'block'
            }`}
          >
            <ul className="bg-gradient-to-r from-[#5b1600] to-[#f15a29] flex justify-center items-center rounded-[30px_8px] p-4 text-[16px] space-x-6">
              {navTabs.map((tab, index) => (
                <li
                  key={index}
                  className={`rounded-[20px] px-4 py-2 cursor-pointer ${activeTab === tab.label ? 'bg-white text-[#5b1600]' : 'text-[#ffe4dc] hover:bg-[#f15a29] hover:text-white'}`}
                  onClick={() => setActiveTab(tab.label)}
                >
                  <Link to={tab.path} className="block">
                    {tab.label}
                  </Link>
                  {tab.hasSubTabs && activeTab === tab.label && (
                    <ul className="subTabs bg-white shadow-lg mt-2 rounded-lg">
                      {tab.subTabs && tab.subTabs.map((subTab, idx) => (
                        <li key={idx}>
                          <Link to={subTab.path} className="block px-4 py-2 text-[#5b1600] hover:bg-[#f15a29] hover:text-white">
                            {subTab.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex md:items-center">
            <Link to="/login">
              <button className="btn mr-8">Login</button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
