import React from 'react'
import T1 from '../assets/T1.png'
import T2 from '../assets/T2.png'
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import Teacher1 from '../assets/Teacher1.png'
import Teacher2 from '../assets/Teacher2.png'
import Teacher3 from '../assets/Teacher3.png'
import Teacher4 from '../assets/Teacher4.png'



const Teachers = () => {
  const teachers = [
    { name: 'Millie Harper', title: 'Yoga Teacher', imgSrc:Teacher1 },
    { name: 'Millie Harper', title: 'Yoga Teacher', imgSrc: Teacher2},
    { name: 'Millie Harper', title: 'Yoga Teacher', imgSrc: Teacher3 },
    { name: 'Millie Harper', title: 'Yoga Teacher', imgSrc: Teacher4 }
];

  return (
    <>
    <section className="relative h-[500px] overflow-hidden">
      <div className="container-fluid">
        <div className="relative">
          <img 
            src={T1} 
            alt="Slider Image" 
            className="w-full h-[500px] object-cover" 
          />
          <p className="text-white my-20  mt-24 text-center text-[35px] max-w-[900px] mx-auto absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
OUR YOGA MASTERS          </p>
          <img 
            src={T2}
            alt="" 
            className="absolute bottom-[-2px] left-0 w-full z-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff521a] to-[#300c00] opacity-70 z-0"></div>
        </div>
      </div>
    </section>

    <section className="yogaTraine py-16 text-center">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h1 className="heading text-3xl md:text-4xl font-bold">
                        We have Some Highly Experienced Teachers for Your Training
                    </h1>
                    <p className="max-w-3xl text__para mx-auto mt-4 text-lg">
                        At India Yogashala, learn from the best lights of the Indian Yoga World. Masters of Vedas and
                        Graduated from Yoga Universities, these passionate yogis transmit yogic theory and practice of
                        yoga subjects in a professional, safe, and nurturing environment.
                    </p>
                </div>
                <div className="mt-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {teachers.map((teacher, index) => (
                        <div key={index} className="relative bg-[#FFA88E] p-4 rounded-xl text-brown-800 flex flex-col items-center bottom-16 my-16 ">
                            <img
                                src={teacher.imgSrc}
                                alt={teacher.name}
                                className=" absolute bottom-20 left-1/2 transform -translate-x-1/2 rounded-xl w-48   "
                            />
                            <div className="pt-24 text-center">
                                <p className="font-bold uppercase text-lg">{teacher.name}</p>
                                <p className="text-base">{teacher.title}</p>
                            </div>
                            <div className="flex items-center justify-center bg-[#FF764E] rounded-md p-2 absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
                                <FaInstagram className="text-brown-800 mx-1" />
                                <span className="mx-1">|</span>
                                <FaYoutube className="text-brown-800 mx-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    </>
  )
}

export default Teachers