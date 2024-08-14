import React from 'react';
import logo from '../../assets/logo.svg';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f15a29] mt-3">
      <div className="container mx-auto px-4 pb-10">
        <div className="flex flex-wrap -mx-4">
          
          {/* Training Packages */}
          <div className="order-1 sm:order-2 w-full sm:w-1/2 lg:w-1/3 px-4 relative my-section"data-aos="fade-up" data-aos-duration="1000">
            <div className="bg-white rounded-b-lg pt-10 pb-8 relative z-10">
              <img src={logo} alt="Logo" className="mx-auto mb-5" />
              <ul className="text-center">
                
                <li className="mb-2">
                  <a href="" className="text-[#f15a29]">200 Hour Yoga Teacher Training Rishikesh </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-[#f15a29]">300 Hour Yoga Teacher Training Rishikesh</a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-[#f15a29]">500 Hour Yoga Teacher Training Rishikesh</a>
                </li>
                
                
                
                <li className="mb-2">
                  <a href="" className="text-[#f15a29]">SereneSoul</a>
                </li>
              </ul>
            </div>
            {/* <div className="absolute top-0 left-[-30px] bg-[#f15a29] h-[30px] w-[30px] rounded-tr-[15px]"></div>
            <div className="absolute top-0 right-[-30px] bg-[#f15a29] h-[30px] w-[30px] rounded-tl-[15px]"></div> */}
          </div>

          {/* Contact Details */}
          <div className="order-2 sm:order-1 w-full sm:w-1/2 lg:w-1/3 px-4 rounded-t-xl">
      <div className="bg-[#f15a29] rounded-tr-[15px] pt-10 pb-8 text-white">
        <h3 className="text-lg font-semibold">Contact Details</h3>
        <div className="mt-5">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-white mr-3" />
            <span>Rishikesh</span>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-white mr-3" />
            <span>SS@gmail.com</span>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-white mr-3" />
            <span>+91 7817025635</span>
          </div>
        </div>
        <div className="flex mt-5 space-x-4">
          <div className="bg-white p-2 rounded-md cursor-pointer">
            <FaFacebookF className="text-[#f15a29]" />
          </div>
          <div className="bg-white p-2 rounded-md cursor-pointer">
            <FaInstagram className="text-[#f15a29]" />
          </div>
          <div className="bg-white p-2 rounded-md cursor-pointer">
            <FaTwitter className="text-[#f15a29]" />
          </div>
          <div className="bg-white p-2 rounded-md cursor-pointer">
            <FaLinkedinIn className="text-[#f15a29]" />
          </div>
        </div>
      </div>
    </div>


          {/* Quick Links */}
          <div className="order-3 w-full sm:w-1/2 lg:w-1/3 px-4">
            <div className="bg-[#f15a29] rounded-tl-[15px] pt-10 pb-8 text-white">
              <h3 className="text-lg font-semibold text-center">Quick Links</h3>
              <ul className="mt-5 text-center">
                <li className="mb-2">
                  <a href="" className="text-white">About SS</a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-white">Teachers</a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-white">YTTC</a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-white">Classes</a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-white">Schedulw</a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-white">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-white">Contact Us</a>
                </li>
              
               
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#5b1600] py-2 text-center text-white">
        <p className="mb-0">Copyright © 2024 | SereneSoul</p>
      </div>
    </footer>
  );
};

export default Footer;
