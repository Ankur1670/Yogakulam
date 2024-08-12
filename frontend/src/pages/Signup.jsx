import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/login.jpg'; // Update with the correct path to your image

const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '', mobile: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="flex h-screen container">
      {/* Left side: Image */}
      <div className="hidden md:flex md:w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Image container */}
      </div>

      {/* Right side: Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-full bg-gray-200 p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className='w-full max-w-md py-4'>
          <div className="mb-5">
            <input
              type="text"
              placeholder='Enter Your Name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className='w-full py-3 p-2 border-b border-solid border-[#F15A29] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-[#F15A29] cursor-pointer'
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              placeholder='Enter Your Email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full py-3 p-2 border-b border-solid border-[#F15A29] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-[#F15A29] cursor-pointer'
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder='Enter Your Mobile Number'
              name='mobile'
              value={formData.mobile}
              onChange={handleInputChange}
              className='w-full py-3 p-2 border-b border-solid border-[#F15A29] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-[#F15A29] cursor-pointer'
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full py-3 p-2 border-b border-solid border-[#F15A29] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-[#F15A29] cursor-pointer'
              required
            />
          </div>
          <div className="mt-7">
            <button type='submit' className="w-full btn text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">Sign Up</button>
          </div>
          <p className='mt-5 text-textColor text-center'>Already have an account? <Link to='/login' className='text-[#F15A29] font-medium ml-1'>Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
