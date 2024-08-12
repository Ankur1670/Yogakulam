import React from 'react';
import scheduleCallImg from '../../assets/scheduleCall.jpg'; // Adjust the import path as needed

const ScheduleCall = () => {
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
              <div className="mb-4">
                <label htmlFor="date" className="block text-black mb-2">Date</label>
                <input
                  type="date"
                  id="date"
                  className="form-input border border-[#f15a29] rounded-md bg-[#ffe4dc] py-2 px-4 focus:outline-none focus:ring-0 w-full"
                />
              </div>
              <div>
  <label htmlFor="Packages" className="block text-black mb-2">Packages</label>
  <select
    id="Packages"
    className="form-select border border-[#f15a29] rounded-md bg-[#ffe4dc] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#f15a29] w-full"
  >
    <option  value="">Select a package</option>
    <option value="private">Private</option>
    <option value="shared">Shared</option>
    <option value="triple-shared">Triple Shared</option>
  </select>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCall;
