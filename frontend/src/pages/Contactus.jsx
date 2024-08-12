import React from 'react';
import contact1 from '../assets/contact1.png'
import contact2 from '../assets/contact2.png'

const Contactus = () => {
  return (
    <>
      <section className="relative h-[500px] overflow-hidden">
        <div className="container-fluid">
          <div className="relative">
            <img 
              src={contact1} 
              alt="Slider Image" 
              className="w-full h-[500px] object-cover" 
            />
            <p className="text-white my-20 mt-24 text-center text-[35px] max-w-[900px] mx-auto absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              Contact Us
            </p>
            <img 
              src={contact2}
              alt="" 
              className="absolute bottom-[-2px] left-0 w-full z-20" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff521a] to-[#300c00] opacity-70 z-0"></div>
          </div>
        </div>
      </section>
    
      <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 px-6 py-8 bg-white rounded-lg shadow-md border border-orange-500">
            <h2 className="text-2xl font-bold mb-4 text-[#A4A4A4]">Customer care</h2>
            <h3 className="text-xl font-bold mb-4 text-orange-500">How can we help you?</h3>
            <p className="text__para mb-6">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Phasellus Nec Pretium
              Mi. Curabitur Facilisis Ornare Velit Non Vulputate. Aliquam Metus Tortor, Auctor Id
              Gravida Condimentum, Viverra Quis Sem. Lorem Ipsum Dolor Sit Amet,
              Consectetur Adipiscing Elit. Phasellus Nec Pretium Mi.
            </p>
            <div className="bg-[#F15A29] w-full h-auto sm:h-20 rounded-2xl">
              <p className="p-4 sm:p-5 text-white text-[14px] sm:text-[16px] text-center sm:text-left">
                Our Team Will Respond To You As Quickly As Possible, Normally
                Within 1 Business Day.
              </p>
            </div>

            <form className="mt-5 space-y-4">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#FFF5F2] w-full md:w-1/2 py-2 px-3 text-gray-700 rounded focus:outline-none focus:shadow-outline placeholder-[#F15A29]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#FFF5F2] w-full md:w-1/2 py-2 px-3 text-gray-700 rounded focus:outline-none focus:shadow-outline placeholder-[#F15A29]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="bg-[#FFF5F2] w-full py-2 px-3 text-gray-700 rounded focus:outline-none focus:shadow-outline placeholder-[#F15A29]"
              />
              <textarea
                placeholder="Message"
                className="bg-[#FFF5F2] w-full py-2 px-3 text-gray-700 rounded focus:outline-none focus:shadow-outline placeholder-[#F15A29] h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-[#F15A29] hover:bg-[#F15A29] text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </form>
          </div>
          
          <div className="w-[370px] h-[350px] px-6 py-8 bg-[#F15A29] rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-white mb-4">Email</p>
            <p className="text-white mb-4">cys@myemail.com</p>
            <p className="text-white mb-4">Address</p>
            <p className="text-white mb-4">Lorem Ipsum, an auto-generated text</p>
            <p className="text-white mb-4">Social</p>
            <div className="flex justify-center">
              <a href="#" className="text-white mr-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white mr-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[700px]">
  <div className="w-full h-[600px] rounded-lg shadow-md overflow-hidden mt-10">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.569147667236!2d-122.45119252475441!3d37.76995657965874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808ac2aece3f%3A0x3b0b6a5f9b780e3!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sus!4v1629235895405!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: "2px orange red" }}
      allowFullScreen=""
      loading="lazy"
      title="Google Map"
    ></iframe>
  </div>
</div>


      </div>
    </>
  );
};

export default Contactus;
