import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/login.jpg'; // Update with the correct path to your image
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      localStorage.setItem('token', response.data.token); // Store token in local storage
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Optionally store user data
      navigate('/dashboard'); // Redirect to a protected route
    } catch (err) {
      setError('Invalid email or password');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="flex h-screen container my-section" data-aos="fade-up" data-aos-duration="1000">
      {/* Left side: Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gray-100">
        <h2 className="heading font-bold mb-8 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className='w-full max-w-md py-4'>
          <div className="mb-5">
            <input
              type="email"
              placeholder='Enter Your Email'
              name='email' 
              value={formData.email}
              onChange={handleInputChange}
              className='w-full py-3 border-b p-2 border-solid border-[#F15A29] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-[#F15A29] cursor-pointer'
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
            <Link to='/'>
          
            <button type='submit' className="w-full btn text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">Login</button>
            </Link>
          </div>
          <p className='mt-5 text-textColor text-center'>
            Don't have an account? <Link to='/register' className=' text-[#F15A29] font-medium ml-1'>Register</Link>
          </p>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Image container */}
      </div>
    </div>
  );
};

export default Login;
