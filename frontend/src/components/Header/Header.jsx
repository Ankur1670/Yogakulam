import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu, BiX } from 'react-icons/bi';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navTabs = [
    { path: '/home', label: 'Home' },
    {
      label: 'About', hasSubTabs: true, subTabs: [
        { path: '/serene-soul', label: 'SereneSoul' },
        { path: '/teachers', label: 'Teachers' },
      ]
    },
    {
      label: 'YTTC', hasSubTabs: true, subTabs: [
        { path: '/200-hour', label: '200 Hour Yoga Teacher Training in Rishikesh' },
        { path: '/300-hour', label: '300 Hour Yoga Teacher Training in Rishikesh' },
        { path: '/500-hour', label: '500 Hour Yoga Teacher Training in Rishikesh' },
      ]
    },
  
    { path: '/class', label: 'Classes' },
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

          {/* Mobile Menu */}
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
                  className={`relative w-full rounded-md py-2 cursor-pointer ${activeTab === tab.label ? 'bg-white text-[#5b1600] rounded-[16px]' : 'text-[#ffe4dc] hover:bg-[#f15a29] hover:text-white'}`}
                  onMouseEnter={() => setActiveTab(tab.label)}
                  onMouseLeave={() => setActiveTab('')}
                >
                  <Link to={tab.path} className="block text-center">
                    {tab.label}
                  </Link>
                  {tab.hasSubTabs && activeTab === tab.label && (
                    <ul className="subTabs bg-white shadow-lg rounded-lg w-[200px] absolute left-0 top-full mt-1 z-50 opacity-100 transition-opacity duration-300 ease-in-out">
                      {tab.subTabs.map((subTab, idx) => (
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

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center justify-center w-full ${
              isMenuOpen ? 'hidden' : 'block'
            }`}
          >
            <ul className="bg-gradient-to-r from-[#5b1600] to-[#f15a29] flex justify-center items-center rounded-[30px_8px] p-4 text-[16px] space-x-6">
              {navTabs.map((tab, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveTab(tab.label)}
                  onMouseLeave={() => setActiveTab('')}
                >
                  <Link
                    to={tab.path}
                    className={`block px-4 py-2 rounded-[16px] ${
                      activeTab === tab.label ? 'bg-white text-[#5b1600]' : 'text-[#ffe4dc] hover:bg-[#f15a29] hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </Link>
                  {tab.hasSubTabs && (
                    <ul
                      className={`subTabs bg-white shadow-lg rounded-lg w-[200px] absolute left-0 top-full mt-1 z-50 transition-opacity duration-300 ease-in-out ${
                        activeTab === tab.label ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {tab.subTabs.map((subTab, idx) => (
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
