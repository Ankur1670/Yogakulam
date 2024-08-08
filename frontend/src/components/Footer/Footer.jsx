import React from 'react'

const Footer = () => {
  return (
    <>
   <footer className="bg-[#f15a29] mt-60">
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-wrap">
          {/* Contact Details */}
          <div className="w-full lg:w-1/3 bg-[#f15a29] rounded-tr-[15px] text-white py-10">
            <h3 className="text-white mb-4">Contact Details</h3>
            <div className="flex items-center gap-2 mb-5">
              <i className="fas fa-location-dot"></i>
              <span>Rishikesh</span>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <i className="fas fa-envelope"></i>
              <span>info@indiayogashala.com</span>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <i className="fas fa-phone"></i>
              <span>+91 91493 07205</span>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg cursor-pointer">
                <i className="fab fa-facebook-f text-[#f15a29]"></i>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg cursor-pointer">
                <i className="fab fa-instagram text-[#f15a29]"></i>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg cursor-pointer">
                <i className="fab fa-twitter text-[#f15a29]"></i>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg cursor-pointer">
                <i className="fab fa-linkedin-in text-[#f15a29]"></i>
              </div>
            </div>
          </div>

          {/* Training Packages */}
          <div className="w-full lg:w-1/3 relative mb-6 lg:mb-0 bg-white rounded-b-[15px]">
            <div className="relative">
              <div className="absolute w-[30px] h-[30px] bg-[#f15a29] rounded-tr-[15px] top-0 left-[-30px] box-shadow-[15px_0_0_0_#ffffff]"></div>
              <div className="absolute w-[30px] h-[30px] bg-[#f15a29] rounded-tl-[15px] top-0 right-[-30px] box-shadow-[-15px_0_0_0_#ffffff]"></div>
              <ul className="text-center mt-4 space-y-2">
                <li><a href="https://indiayogashala.com/demo/course/200-hour-yoga-teacher-training-in-goa-india" className="text-[#f15a29] no-underline hover:underline">200 Hour Yoga Teacher Training Goa</a></li>
                <li><a href="https://indiayogashala.com/demo/course/200-hour-yoga-teacher-training-in-rishikesh-india" className="text-[#f15a29] no-underline hover:underline">200 Hour Yoga Teacher Training Rishikesh</a></li>
                <li><a href="https://indiayogashala.com/demo/" className="text-[#f15a29] no-underline hover:underline">200 Hour Yoga Teacher Training Mysore</a></li>
                <li><a href="https://indiayogashala.com/demo/" className="text-[#f15a29] no-underline hover:underline">Yoga Retreats in Goa</a></li>
                <li><a href="https://indiayogashala.com/demo/" className="text-[#f15a29] no-underline hover:underline">Yoga Retreats in Rishikesh</a></li>
                <li><a href="https://indiayogashala.com/demo/" className="text-[#f15a29] no-underline hover:underline">Yoga Retreats in Mysore</a></li>
                <li><a href="https://indiayogashala.com/demo/" className="text-[#f15a29] no-underline hover:underline">India Yogashala</a></li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/3 px-4 text-white">
            <h3 className="text-center mb-4">Quick Links</h3>
            <ul className="text-center space-y-2">
              <li><a href="https://indiayogashala.com/demo/mentors" className="hover:underline">Our Trainers</a></li>
              <li><a href="https://indiayogashala.com/demo/blogs" className="hover:underline">Blogs</a></li>
              <li><a href="https://indiayogashala.com/demo/gallery" className="hover:underline">Yoga Gallery</a></li>
              <li><a href="https://indiayogashala.com/demo/faq" className="hover:underline">FAQ</a></li>
              <li><a href="https://indiayogashala.com/demo/testimonial" className="hover:underline">Testimonial</a></li>
              <li><a href="https://indiayogashala.com/demo/about" className="hover:underline">About Us</a></li>
              <li><a href="https://indiayogashala.com/demo/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="https://indiayogashala.com/demo/terms-and-conditions" className="hover:underline">T & C</a></li>
              <li><a href="https://indiayogashala.com/demo/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#5b1600] text-white py-4 text-center">
        <p className="mb-0">Copyright © 2022 | India Yogashala</p>
      </div>
    </footer>
    
   
    </>
  )
}

export default Footer