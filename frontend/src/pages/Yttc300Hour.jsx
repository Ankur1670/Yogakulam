import React, { useState } from 'react';
import yttc from '../assets/yttc.png'
import yttc2 from '../assets/yttc2.png'
import tt2 from '../assets/tt2.jpg'
import { FaCheck } from "react-icons/fa6";
import ScheduleCall from '../components/ScheduleCall/ScheduleCall';
const Yttc300Hour = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const curriculumItems = [
    {
        title: 'Hatha Yoga (Asana and philosophy)',
        content: [
          'What is classical Hatha Yoga?',
          'What is Asana?',
          'Asana with breath',
          'Posture awareness',
          'Sequence of Asanas',
        ],
      },
    
    {
      title: 'Ashtanga Vinyasa (Complete Primary Series, lead in Mysore Style)',
      content: [
        'Utthita Hasta Padangushthasana',
         'Utthita Parshvasahita', 
         'Utthita Hasta Padangushthasana B',
         'Utkatasana',
         'Dandasana'
        ],
    },
    {
      title: 'Pranayama and breath (Practice and Theory)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Yogic Anatomy and Physiology (based on Yogic Point of View)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Asana Alignment and Adjustments (Nectar of the asana)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Yoga Darshan (Philosophy)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Mantra Yoga (Yogic Mantras- Meaning and Purpose)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Dhyana (Meditation- Practice and Theory)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Pratyahara - Yoga Nidra (Practice and Theory)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Shatkarma (Yogic Cleansing Theory and Practice- Neti, Tratak, Kapalbhati)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'History of Yoga (Ancient Purpose of Yogic Practices)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Yogic Lifestyle (Yoga as a life)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Sanskrit (Language of Yoga and Vedic scriptures)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Teaching Methodology (Core of Yoga Teacher Training Course)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Ayurveda (Food and Natural)',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
  ];

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
            300 Hour Yoga Teacher Training in Rishikesh, India
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
              About 300 Hour Yoga Teacher Training in Rishikesh, India
            </h1>
            <p className="text__para">
              Journey to the Himalayan foothills, the land of gods & transformative experiences, the Yoga capital of the world, Rishikesh, India. A place where mind, body, and spirit find an equilibrium through the practice of traditional yoga based on teachings from the sacred Bhagavad Gita and the Yoga Sutras of Patanjali. Study from the yoga masters of India at the India Yogashala. This Yoga Alliance Certified 300 Hour Yoga Teacher Training (YTT) in Rishikesh India is designed for an aspiring yoga practitioner willing to take the first serious step towards self-transformation in the mind, body, & spirit. Become a part of the authentic community of yoga teachers & serious practitioners in the heart of the Yoga capital of the world.
            </p>
          </div>
          <div className="md:w-1/2 px-4 mt-8 md:mt-0">
  <div className="highlights bg-gradient-to-b from-[#f15a29] to-[#501400] rounded-lg text-white p-6">
    <p className="text-[35px] mb-4">Highlights & Overview</p>
    <ul className="space-y-2">
      
      <li className="flex items-start ">
        <FaCheck className="mr-2 mt-1" /> Detailed study of Yoga Asana
      </li>
      <li className="flex items-start">
        <FaCheck className="mr-2 mt-1" /> Detailed study of Pranayama
      </li>
      <li className="flex items-start">
        <FaCheck className="mr-2 mt-1" /> Philosophy
      </li>
      <li className="flex items-start">
        <FaCheck className="mr-2 mt-1" /> Yogic Breathing, Yoga Nidra & Chanting
      </li>
      <li className="flex items-start">
        <FaCheck className="mr-2 mt-1" /> Study and practice of Advanced Vinyasa yoga
      </li>
      <li className="flex items-start">
        <FaCheck className="mr-2 mt-1" /> Anatomy of Respiration, Spine, and Joints in relation to Yogic Practices
      </li>
      <li className="flex items-start">
        <FaCheck className="mr-2 mt-1" /> Detailed study of Yoga Therapy
      </li>
      <li className="flex items-start">
        <FaCheck className="mr-2 mt-1" /> Hatha Yoga postures with alignment, adjustments, and modifications
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

    <ScheduleCall/>
    
    <section className="py-16 text-center bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col">
      <div className="mb-8">
        <h2 className="heading font-semibold mb-4">Why Study 300 Hour Yoga Teacher Training at India Yogashala in Rishikesh?</h2>
        <p className="max-w-3xl mx-auto mb-6 text__para">
          The 300 Hour Yoga Teacher Training Course at India Yogashala is a transformative journey for those who have completed their foundational 200 Hour training and wish to dive deeper into the science and art of yoga. This advanced program is designed to refine your practice, expand your knowledge, and prepare you to teach with more confidence and depth.
        </p>
        <p className="max-w-3xl mx-auto mb-6 text__para">
          As part of this course, you will explore advanced asanas, pranayama, meditation techniques, and in-depth yoga philosophy. The program is meticulously structured to ensure a progressive learning experience, integrating ancient wisdom with modern practices. With a focus on alignment, adjustments, and teaching methodology, you will enhance your ability to guide others on their yoga journey.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="heading font-semibold mb-4">Who is Eligible for 300 Hour Yoga TT in Rishikesh India?</h2>
        <ul className="list-none max-w-3xl mx-auto space-y-4 text-left">
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Yoga practitioners who have successfully completed a 200 Hour Yoga Teacher Training program.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Those looking to deepen their understanding of advanced yoga techniques and philosophy.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Practitioners seeking to enhance their teaching skills and take their practice to the next level.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="heading font-semibold mb-4">300 Hour Yoga Teacher Training Program Outcomes</h2>
        <ul className="list-none max-w-3xl mx-auto space-y-4 text-left">
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Gain a deeper understanding of advanced yoga asanas, pranayama, and meditation techniques.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Learn to teach with more precision and confidence, incorporating advanced alignment and adjustment techniques.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Explore the subtle body, including chakras, nadis, and prana, and how they relate to your practice and teaching.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Delve deeper into yoga philosophy, including the study of classical texts such as the Bhagavad Gita, Upanishads, and more.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Enhance your understanding of anatomy and physiology to prevent injuries and safely guide your students.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Develop the skills to create and lead specialized classes and workshops, catering to the needs of diverse student groups.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Achieve a greater sense of personal growth and spiritual development through immersive practices and self-reflection.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Prepare for the highest level of yoga certification, the 500 Hour Yoga Teacher Training, by mastering the advanced curriculum.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


<div className="mt-5 container">
      <h1 className="mb-3 heading">Curriculum</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          {curriculumItems.map((item, index) => (
            <div className="mb-4" key={index}>
              <div className="relative">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-6 py-2 pr-10 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg"
                >
                  {item.title}
                  <span className="absolute top-1/2 transform -translate-y-1/2 right-4 ">
                    {openDropdown === index ? '▲' : '▼'}
                  </span>
                </button>
                {openDropdown === index && (
                  <ul className="mt-2 bg-white rounded-lg shadow-lg text__para">
                    {item.content.map((contentItem, contentIndex) => (
                      <li
                        key={contentIndex}
                        className="px-4 py-2 hover:bg-orange-100 cursor-pointer text__para"
                      >
                        {contentItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://indiayogashala.com/demo/assets/features.jpg"
            alt="Curriculum"
            className="w-3/4"
          />
        </div>
      </div>
    </div>


    </>
  )
}

export default Yttc300Hour