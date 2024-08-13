import React, { useState } from 'react';
import scheduleCallImg from '../../assets/scheduleCall.jpg'; // Adjust the import path as needed

const ScheduleCall = () => {
  const [formData, setFormData] = useState({
    date: '',
    packageType: ''
  });
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(''); // To handle error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
  
    try {
      console.log('Submitting form with data:', formData); // Debugging line
  
      const response = await fetch('http://localhost:5000/api/schedule', { // Update URL if needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      let result;
      try {
        result = await response.json(); // Attempt to parse JSON
      } catch (e) {
        console.error('Failed to parse JSON:', e);
        result = { msg: 'Unexpected response from server' }; // Handle non-JSON responses
      }
  
      if (response.ok) {
        alert(result.msg); // Display success message
        setFormData({ date: '', packageType: '' }); // Clear form
        setError(''); // Clear error message
      } else {
        setError(result.msg || 'There was an error processing your request'); // Display server error message
      }
    } catch (error) {
      console.error('Error:', error);
      setError('There was an error submitting the form');
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  

  return (
    <section
      className="scheduleCall bg-cover bg-no-repeat bg-top py-16 md:py-[70px] relative"
      style={{ backgroundImage: `url(${scheduleCallImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="md:w-7/12 p-6">
            <p className="italic font-medium text-center md:text-left text-gray-800">Reservation Deposit: Only $499!</p>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4 text-center md:text-left">
              Build your yoga career or deepen your practice and knowledge with this 200 Hour Yoga Teacher Training in Rishikesh, India
            </h3>
            <h4 className="text-base md:text-lg lg:text-xl text-[#f15a29] mt-2 text-center md:text-left font-medium">
              Become a certified yoga teacher in Rishikesh
            </h4>
            <button className="mt-3 bg-transparent border-2 border-[#f15a29] text-[#f15a29] py-2 px-4 rounded-md hover:bg-[#f15a29] hover:text-white block mx-auto md:mx-0">
              Schedule a call
            </button>
          </div>
          <div className="md:w-5/12 p-6">
            <div className="form border border-[#f15a29] p-4 rounded-md bg-white">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="date" className="block text-black mb-2">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input border border-[#f15a29] rounded-md bg-[#ffe4dc] py-2 px-4 focus:outline-none focus:ring-0 w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="packageType" className="block text-black mb-2">Packages</label>
                  <select
                    id="packageType"
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleChange}
                    className="form-select border border-[#f15a29] rounded-md bg-[#ffe4dc] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#f15a29] w-full"
                    required
                  >
                    <option value="">Select a package</option>
                    <option value="private">Private</option>
                    <option value="shared">Shared</option>
                    <option value="triple-shared">Triple Shared</option>
                  </select>
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button 
                  type="submit" 
                  className="mt-3 bg-[#f15a29] text-white py-2 px-4 rounded-md hover:bg-[#e14e00]"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCall;
