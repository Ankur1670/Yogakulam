import React, { useState } from 'react';
import TT2 from '../components/TT2/TT2.jsx'
import ScheduleCall from '../components/ScheduleCall/ScheduleCall.jsx'
import { FaCheck } from "react-icons/fa6";
const Yttc200Hour = () => {
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
    <TT2/>
<ScheduleCall/>
<section className="py-16 text-center bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <div className="mb-8">
            <h2 className="heading font-semibold mb-4">Why Study 200 Hour Yoga Teacher Training at India Yogashala in Rishikesh?</h2>
            <p className="max-w-3xl mx-auto mb-6 text__para">
              If you are curious about unraveling the essence of the self and life as a whole, then it is time to step into the world of yoga with our intensive 200 Hour Yoga TTC at India Yogshala. Begin your journey towards self-discovery & open yourself to limitless experiences of the mind, body, and spirit. The course is about creating alignment, bringing stability and strength to perform advanced postures and meditation techniques.
            </p>
            <p className="max-w-3xl mx-auto mb-6 text__para">
              Learn how to let go of the held up stress in your body and mind & attain a state of complete balance through traditional Yoga immersions consisting of Asana practices, Pranayama (Breath work), Yoga Philosophy, and intensive Yoga Anatomy. Become a serious yoga practitioner and lead the way to help others undergo transformative experiences as a recognized yoga teacher. Spread the pure & healthy way of living. Become a Yoga Alliance certified Yoga teacher and carry forward the 5000-year-old legacy of the greatest mind-body art form.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="heading font-semibold mb-4">Who is Eligible for 200 Hour Yoga TT in Rishikesh India?</h2>
            <ul className="list-none max-w-3xl mx-auto space-y-4 text-left">
              <li className="flex items-center text__para">
                <FaCheck className="text-orange-500 mr-2" />
                Aspiring yoga teachers & practitioners seeking the path of authentic immersions of the traditional forms of yoga.
              </li>
              <li className="flex items-center text__para">
                <FaCheck className="text-orange-500 mr-2" />
                Those who aim at laying the most intensive foundation of the mind, body, and spirit as a serious yoga practitioner.
              </li>
              <li className="flex items-center text__para" >
                <FaCheck className="text-orange-500 mr-2" />
                Those who want to acquire yoga as a way of life in its purest form.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="heading font-semibold mb-4">200 Hour Yoga Teacher Training Program Outcomes</h2>
            <ul className="list-none max-w-3xl mx-auto space-y-4 text-left">


                
              <li className="flex items-center text__para">
                <FaCheck className="text-orange-500 mr-2" />
                Teach the traditional form of yoga as a serious yoga teacher & practitioner. <br /> Engage in helping others attain yogic transformation and self-discovery.
              </li>
              <li className="flex items-center">
                <FaCheck className="text-orange-500 mr-2 text__para" />
                Gain Yoga Alliance certified recognition as a yoga teacher of the most traditional scientific yoga forms.
              </li>
              <li className="flex items-center">
                <FaCheck className="text-orange-500 mr-2 text__para" />
                Establish a deeper connection with the mind, body, and spirit, find your state of utter <br /> equilibrium and  prepare the body and mind to perform advanced yoga  asanas and <br />perform deeper meditation techniques.
              </li>
              <li className="flex items-center">
                <FaCheck className="text-orange-500 mr-2 text__para" />
                Prepare yourself for the next level of yoga teacher training in India, the 300 Hour Yoga TTC, 500 Hour Yoga TTC.
              </li>
              <li className="flex items-center">
                <FaCheck className="text-orange-500 mr-2 text__para" />
                Get empowered physically, mentally, and emotionally by imbibing teachings <br /> from Yoga Philosophy that are derived from none other than the Yoga Sutras of Patanjali.
              </li>
             
              <li className="flex items-center">
                <FaCheck className="text-orange-500 mr-2 text__para" />
                Understand the Sanskrit meaning and pronunciation of each asana.
              </li>
             
              <li className="flex items-center">
                <FaCheck className="text-orange-500 mr-2 text__para" />
                Study and perform the foundation asanas without sustaining any injuries by applying the teachings of Yoga Anatomy.
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

export default Yttc200Hour