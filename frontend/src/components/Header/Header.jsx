import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
   <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Contact Details */}
          <div className="col-lg-4 col-sm-6 contactDetails">
            <h3>Contact Details</h3>
            <div className="detail">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="text">Rishikesh</div>
            </div>
            <div className="detail">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="text">info@indiayogashala.com</div>
            </div>
            <div className="detail">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="text">+91 91493 07205</div>
            </div>
            <div className="socialMedia">
              <div className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>

          {/* Training Packages */}
          <div className="col-lg-4 trainingPackages">
            <img src="./assets/logo.svg" alt="Logo" />
            <ul>
              <li><a href="https://indiayogashala.com/demo/course/200-hour-yoga-teacher-training-in-goa-india">200 Hour Yoga Teacher Training Goa</a></li>
              <li><a href="https://indiayogashala.com/demo/course/200-hour-yoga-teacher-training-in-rishikesh-india">200 Hour Yoga Teacher Training Rishikesh</a></li>
              <li><a href="https://indiayogashala.com/demo/">200 Hour Yoga Teacher Training Mysore</a></li>
              <li><a href="https://indiayogashala.com/demo/">Yoga Retreats in Goa</a></li>
              <li><a href="https://indiayogashala.com/demo/">Yoga Retreats in Rishikesh</a></li>
              <li><a href="https://indiayogashala.com/demo/">Yoga Retreats in Mysore</a></li>
              <li><a href="https://indiayogashala.com/demo/">India Yogashala</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-sm-6 quickLinks">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="https://indiayogashala.com/demo/mentors">Our Trainers</a></li>
              <li><a href="https://indiayogashala.com/demo/blogs">Blogs</a></li>
              <li><a href="https://indiayogashala.com/demo/gallery">Yoga Gallery</a></li>
              <li><a href="https://indiayogashala.com/demo/faq">FAQ</a></li>
              <li><a href="https://indiayogashala.com/demo/testimonial">Testimonial</a></li>
              <li><a href="https://indiayogashala.com/demo/about">About Us</a></li>
              <li><a href="https://indiayogashala.com/demo/contact">Contact Us</a></li>
              <li><a href="https://indiayogashala.com/demo/terms-and-conditions">T & C</a></li>
              <li><a href="https://indiayogashala.com/demo/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row copyright">
          <div className="col">
            <p className="mb-0">Copyright © 2022 | India Yogashala</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Header