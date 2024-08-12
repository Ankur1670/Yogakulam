import React from 'react'
import yttc from '../../assets/yttc.png'
import yttc2 from '../../assets/yttc2.png'
import tt2 from '../../assets/tt2.jpg'
import { FiCheck } from 'react-icons/fi';
const TT2 = () => {
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
            200 Hour Yoga Teacher Training in Rishikesh, India
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

    <section className="aboutUs py-[70px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="md:w-1/2 px-4">
            <h1 className="heading  font-bold mb-4">
              About 200 Hour Yoga Teacher Training in Rishikesh, India
            </h1>
            <p className="text__para">
              Journey to the Himalayan foothills, the land of gods & transformative experiences, the Yoga capital of the world, Rishikesh, India. A place where mind, body, and spirit find an equilibrium through the practice of traditional yoga based on teachings from the sacred Bhagavad Gita and the Yoga Sutras of Patanjali. Study from the yoga masters of India at the India Yogashala. This Yoga Alliance Certified 200 hour Yoga Teacher Training (YTT) in Rishikesh India is designed for an aspiring yoga practitioner willing to take the first serious step towards self-transformation in the mind, body, & spirit. Become a part of the authentic community of yoga teachers & serious practitioners in the heart of the Yoga capital of the world.
            </p>
          </div>
          <div className="md:w-1/2 px-4 mt-8 md:mt-0">
            <div className="highlights bg-gradient-to-b from-[#f15a29] to-[#501400] rounded-lg text-white p-6">
              <p className=" text-[35px] mb-4">Highlights & Overview</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheck className="mr-2 mt-1" /> Serene Venue in the lush green Himalayan forest
                </li>
                <li className="flex items-start">
                  <FiCheck className="mr-2 mt-1" /> Nutritious Sattvik vegetarian meals
                </li>
                <li className="flex items-start">
                  <FiCheck className="mr-2 mt-1" /> 14+ Yogic Subjects to make a complete yoga practitioner and inspiring yoga teacher
                </li>
                <li className="flex items-start">
                  <FiCheck className="mr-2 mt-1" /> Special emphasis on Yogic Philosophy, Pranayama, and Meditation
                </li>
                <li className="flex items-start">
                  <FiCheck className="mr-2 mt-1" /> Spiritual aspect of Yoga Asanas and Yoga practice – on and off the Mat
                </li>
                <li className="flex items-start">
                  <FiCheck className="mr-2 mt-1" /> Sacred ceremonies, festivals, satsangs, and cultural immersions
                </li>
                <li className="flex items-start">
                  <FiCheck className="mr-2 mt-1" /> Ph.D. and Master level yoga teachers
                </li>
                <li className="flex items-start">
                  <FiCheck className="mr-2 mt-1" /> Learn to design a safe and transformative sequence and class with confident teaching style
                </li>
                <li className="flex items-start">
                  <FiCheck className="mr-2 mt-1" /> Guided tours to Ashrams, temples, energy points, and local attractions
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-12">
          <div className="w-full px-4">
            <img
              src={tt2}
              alt="About Yogashala"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>




    </>
  )
}

export default TT2