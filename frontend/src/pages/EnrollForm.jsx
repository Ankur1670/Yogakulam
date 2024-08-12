import React, { useState } from 'react';
import yttc from '../assets/yttc.png'
import yttc2 from '../assets/yttc2.png'
const EnrollForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    address: '',
    gender: '',
    program: '',
    year: '',
    month: '',
    accommodation: '',
    experience: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
     <section className="relative h-[500px] overflow-hidden">
      <div className="container-fluid">
        <div className="relative">
          <img 
            src={yttc} 
            alt="Slider Image" 
            className="w-full h-[500px] object-cover" 
          />
          <p className="text-white my-20  mt-24 text-center text-[35px] max-w-[900px] mx-auto absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            ENROLLMENT FORM
          </p>
          <img 
            src={yttc2}
            alt="" 
            className="absolute bottom-[-2px] left-0 w-full z-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff521a] to-[#300c00] opacity-70 z-0"></div>
        </div>
      </div>
    </section>
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-b from-[#f15a29] to-[#501400] rounded-lg  shadow-md">
      <h2 className="text-white text-4xl font-bold mb-6 text-center">Enrollment Form</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-[#ff521a]rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-[#ff521a] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">E-mail*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-[#ff521a] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        {/* Country */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Country*</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-[#ff521a] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Address*</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-[#ff521a] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Gender*</label>
          <div className="mt-1 flex">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleInputChange}
                className="form-radio"
                required
              />
              <span className="ml-2 text-white">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleInputChange}
                className="form-radio text-white"
                required
              />
              <span className="ml-2 text-white">Female</span>
            </label>
          </div>
        </div>
        {/* Program */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Program*</label>
          <select
            name="program"
            value={formData.program}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-[#ff521a] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option  value="">Select a program</option>
            <option value="RYT 200">RYT 200</option>
            <option value="RYT 300">RYT 300</option>
            <option value="RYT 500">RYT 500</option>
          </select>
        </div>
        {/* Year */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Year*</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-[#ff521a] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        {/* Month */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Month*</label>
          <input
            type="text"
            name="month"
            value={formData.month}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-[#ff521a] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        {/* Accommodation */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Accommodation*</label>
          <div className="mt-1 flex">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="accommodation"
                value="Yes"
                onChange={handleInputChange}
                className="form-radio"
                required
              />
              <span className="ml-2 text-white">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="accommodation"
                value="No"
                onChange={handleInputChange}
                className="form-radio"
                required
              />
              <span className="ml-2 text-white">No</span>
            </label>
          </div>
        </div>
        {/* Experience */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Experience Level*</label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-[#ff521a] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select experience level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 btn mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default EnrollForm;
