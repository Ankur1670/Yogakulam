import React, { useState } from 'react';
import Cform from '../../assets/Cform.jpg';
import { MdSend } from 'react-icons/md'; // Import the send icon
import axios from 'axios';

const Cfrom = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/form', { email });
      alert(response.data.msg);
    } catch (error) {
      alert('Error submitting form');
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '917817025635'; // Replace with the actual phone number
    const message = 'Hello, I have a question regarding your services.'; // Customize your message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section className="leadGeneration py-0 pb-16 relative mt-20 my-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {/* Image Section */}
          <div className="w-full md:w-[80%] lg:w-[1200px] px-5 mb-8 relative z-10">
            <img
              src={Cform}
              alt="Lead Generation"
              className="w-full rounded-t-lg"
            />
          </div>
          {/* Form Box Section */}
          <div className="w-full md:w-[80%] lg:w-[1200px] px-5 relative z-20 -mt-20">
            <div className="formBox bg-white p-8 shadow-lg border border-[#f15a29] rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap">
                  <div className="w-full md:w-5/12 mb-8 md:mb-0">
                    <div className="textSide">
                      <p className="italic font-normal">
                        Feel free to connect
                      </p>
                      <h3 className="text-xl md:text-2xl font-semibold">
                        Still Have Any Questions Or Not Sure How To Start?
                      </h3>
                      <h2 className="text-lg md:text-xl font-bold text-[#f15a29]">
                        Book a package now!
                      </h2>
                    </div>
                  </div>
                  <div className="w-full md:w-7/12">
                    <div className="formside">
                      <div className="sendEmail flex items-center border border-[#f15a29] p-2 rounded-lg gap-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="form-control border-none flex-grow outline-none"
                          required
                        />
                        <button
                          type="submit"
                          className="btn bg-[#f15a29] text-white p-2 rounded-lg"
                        >
                          <MdSend className="text-white text-lg" /> {/* Use the send icon here */}
                        </button>
                      </div>
                      <div className="btn-box my-4 flex flex-col md:flex-row gap-3">
                        <button
                          type="button"
                          onClick={handleWhatsAppClick}
                          className="btn bg-[#f15a29] text-white w-full py-2 rounded-lg"
                        >
                          WhatsApp
                        </button>
                        <button className="btn bg-[#f15a29] text-white w-full py-2 rounded-lg">
                          Contact Us
                        </button>
                      </div>
                      <p className="mb-0 font-medium">
                        We respect your privacy. We will not publish or share your
                        email address in any way.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cfrom;
