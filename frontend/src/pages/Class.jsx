import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import VY from '../assets/VY.jpg'
import HY from '../assets/HY.webp'
import AY from '../assets/AY.jpg'
import YY from '../assets/YY.jpg'
import PY from '../assets/PY.jpg'
import RY from '../assets/RY.jpg'
import KY from '../assets/KY.jpg'
import IY from '../assets/IY.jpg'
import './Class.css'
import yttc from '../assets/yttc.png'
import yttc2 from '../assets/yttc2.png'
import { Link } from 'react-router-dom';





const classesData = [
  {
    name: "Vinyasa Yoga",
    description: "A dynamic and flowing style of yoga that synchronizes breath with movement.",
    timings: "Monday, Wednesday, Friday - 6:00 PM to 7:00 PM",
    instructor: "Aarav Patel",
    instructorBio: "Certified Yoga Instructor with 10 years of experience in Vinyasa and Hatha Yoga.",
    imgSrc: VY,
  },
  {
    name: "Hatha Yoga",
    description: "A traditional form of yoga focusing on physical postures and breath control.",
    timings: "Tuesday, Thursday - 8:00 AM to 9:00 AM",
    instructor: "Saanvi Sharma",
    instructorBio: "Expert in Hatha Yoga with a passion for helping students achieve balance and wellness.",
    imgSrc: HY,
  },
  {
    name: "Ashtanga Yoga",
    description: "A rigorous style of yoga focusing on a specific sequence of postures and breath control.",
    timings: "Monday, Wednesday - 7:00 AM to 8:00 AM",
    instructor: "Ravi Kumar",
    instructorBio: "Experienced Ashtanga Yoga teacher with a strong focus on discipline and precision.",
    imgSrc: AY,
  },
  {
    name: "Yin Yoga",
    description: "A slow-paced style of yoga that targets deep connective tissues with long-held poses.",
    timings: "Tuesday, Thursday - 6:00 PM to 7:00 PM",
    instructor: "Priya Patel",
    instructorBio: "Specializes in Yin Yoga, helping students release deep-seated tension and stress.",
    imgSrc: YY,
  },
  {
    name: "Power Yoga",
    description: "A vigorous and high-intensity style of yoga that builds strength and flexibility.",
    timings: "Saturday - 9:00 AM to 10:00 AM",
    instructor: "Vikram Singh",
    instructorBio: "Dynamic instructor focused on enhancing physical strength and stamina through Power Yoga.",
    imgSrc: PY,
  },
  {
    name: "Restorative Yoga",
    description: "A gentle style of yoga that uses props to support the body in restful poses.",
    timings: "Sunday - 10:00 AM to 11:00 AM",
    instructor: "Ananya Verma",
    instructorBio: "Expert in Restorative Yoga, guiding students to achieve relaxation and healing.",
    imgSrc: RY,
  },
  {
    name: "Kundalini Yoga",
    description: "A spiritual form of yoga that involves breath work, meditation, and dynamic movement.",
    timings: "Wednesday, Friday - 7:00 PM to 8:00 PM",
    instructor: "Manish Kumar",
    instructorBio: "Kundalini Yoga practitioner with a focus on spiritual awakening and energy flow.",
    imgSrc: KY,
  },
  {
    name: "Iyengar Yoga",
    description: "A style of yoga that emphasizes precision and alignment in the postures.",
    timings: "Monday, Thursday - 5:00 PM to 6:00 PM",
    instructor: "Rina Desai",
    instructorBio: "Experienced Iyengar Yoga instructor dedicated to achieving perfect alignment and form.",
    imgSrc: IY,
  }
];
const Class = () => {
  const [animated, setAnimated] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, classesData.length);
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');
          setAnimated(prev => [...prev, index]);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((card, index) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
            CLASSES OFFERED IN OUR SCHOOL
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
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="heading font-bold mb-4">Our Yoga Classes</h1>
        <p className="text-lg text-gray-700 text__para">
          Explore our range of yoga classes designed to suit all levels. Learn from experienced instructors and improve your well-being.
        </p>
      </header>

      {/* Classes List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-3/4 mx-auto">
        {classesData.map((classData, index) => (
          <div
            key={index}
            data-index={index}
            ref={el => cardRefs.current[index] = el}
            className={`relative bg-gradient-to-b from-[#ff521a] to-[#300c00] rounded-xl text-white text__para flex flex-col items-center pb-4 ${
              animated.includes(String(index)) 
                ? (index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right') 
                : ''
            }`}
          >
            {/* Class Image */}
            <img
              src={classData.imgSrc}
              alt={classData.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            {/* Class Details */}
            <div className="text-center mb-4">
              <h2 className="text-2xl text-white font-bold">{classData.name}</h2>
              <p className="text-base mt-2">{classData.description}</p>
              <p className="text-sm mt-2"><strong>Timings:</strong> {classData.timings}</p>
              <p className="text-sm mt-2"><strong>Instructor:</strong> {classData.instructor}</p>
              <p className="text-sm mt-2 text__para text-white"><strong>Instructor Bio:</strong> {classData.instructorBio}</p>
            </div>
            {/* Enrollment Button */}
            <Link to='/enroll'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-[200px] mx-auto btn text__para">
              Enroll Now
            </button>
            </Link>
            {/* Social Media Icons */}
            
          </div>
        ))}
      </div>
    </div>
    </>
)
}

export default Class