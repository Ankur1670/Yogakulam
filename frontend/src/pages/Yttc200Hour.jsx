import React, { useState } from 'react';
import TT2 from '../components/TT2/TT2.jsx'
import C1 from '../assets/C1.png'

import ScheduleCall from '../components/ScheduleCall/ScheduleCall.jsx'
import { FaCheck } from "react-icons/fa6";
const Yttc200Hour = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const curriculumItems = [
    {
      title: 'Hatha Yoga (Asana and Basics)',
      content: [
        'Introduction to Hatha Yoga',
        'Fundamental Asanas',
        'Proper alignment and posture',
        'Understanding the breath in asanas',
        'Basic sequence of Hatha Yoga postures',
      ],
    },
    {
      title: 'Ashtanga Vinyasa (Primary Series Introduction)',
      content: [
        'Introduction to Ashtanga Vinyasa Yoga',
        'Surya Namaskar A & B (Sun Salutations)',
        'Standing postures of the Primary Series',
        'Seated postures of the Primary Series',
        'Introduction to Vinyasa flow',
      ],
    },
    {
      title: 'Pranayama (Breathing Techniques and Theory)',
      content: [
        'Introduction to Pranayama',
        'Basic breathing techniques: Ujjayi, Nadi Shodhana',
        'Understanding the breath and its connection to mind and body',
        'Introduction to breath retention (Kumbhaka)',
        'Daily Pranayama practice routine',
      ],
    },
    {
      title: 'Yogic Anatomy and Physiology (Basics)',
      content: [
        'Introduction to the human body in relation to yoga',
        'Basic anatomy relevant to yoga practice',
        'Understanding the muscular and skeletal systems',
        'Basic understanding of the nervous system',
        'Effects of yoga on the body systems',
      ],
    },
    {
      title: 'Asana Alignment and Adjustments (Foundations)',
      content: [
        'Principles of safe alignment in basic postures',
        'Introduction to hands-on adjustments',
        'Understanding different body types and limitations',
        'Common misalignments and corrections',
        'Balancing stability and flexibility in asanas',
      ],
    },
    {
      title: 'Yoga Philosophy (Introduction)',
      content: [
        'Introduction to the Eight Limbs of Yoga (Ashtanga Yoga)',
        'Basic concepts of Patanjali’s Yoga Sutras',
        'Introduction to Yamas and Niyamas (Ethical Guidelines)',
        'Understanding the concept of Dharma',
        'Introduction to the philosophy of Karma Yoga',
      ],
    },
    {
      title: 'Mantra Yoga (Introduction to Chanting)',
      content: [
        'Introduction to basic yoga mantras',
        'The significance of OM and its variations',
        'Chanting practices and their mental effects',
        'Introduction to Vedic chanting',
        'Incorporating mantra into daily practice',
      ],
    },
    {
      title: 'Dhyana (Meditation Basics)',
      content: [
        'Introduction to meditation and its purpose',
        'Basic meditation techniques',
        'Guided meditation practices',
        'Developing concentration and focus',
        'Establishing a personal meditation practice',
      ],
    },
    {
      title: 'Pratyahara (Introduction to Sensory Withdrawal)',
      content: [
        'Introduction to Pratyahara and its importance in yoga',
        'Basic techniques for sensory withdrawal',
        'Exploring Yoga Nidra (Yogic Sleep)',
        'Guided Yoga Nidra practice',
        'Incorporating Pratyahara into daily life',
      ],
    },
    {
      title: 'Shatkarma (Yogic Cleansing Basics)',
      content: [
        'Introduction to Shatkarma',
        'Basic cleansing techniques: Jala Neti, Kapalbhati',
        'Understanding the benefits of cleansing practices',
        'Daily cleansing routine for yogis',
        'Preparation for advanced Shatkarma practices',
      ],
    },
    {
      title: 'History of Yoga (Foundations)',
      content: [
        'Overview of the history of yoga',
        'Evolution of yoga from ancient to modern times',
        'Introduction to key figures in yoga history',
        'The spread of yoga to the West',
        'Understanding the relevance of historical practices today',
      ],
    },
    {
      title: 'Yogic Lifestyle (Foundational Practices)',
      content: [
        'Introduction to yogic diet and nutrition',
        'Principles of a Sattvic lifestyle',
        'Ethical considerations for yogis',
        'Daily routines and practices for a yogic lifestyle',
        'Balancing personal life with yogic practices',
      ],
    },
    {
      title: 'Sanskrit (Introduction to the Language of Yoga)',
      content: [
        'Introduction to key Sanskrit terms used in yoga',
        'Basic Sanskrit pronunciation',
        'Understanding common yoga-related Sanskrit words',
        'Introduction to chanting in Sanskrit',
        'The significance of Sanskrit in yoga',
      ],
    },
    {
      title: 'Teaching Methodology (Foundations of Teaching)',
      content: [
        'Introduction to the principles of teaching yoga',
        'Creating a safe and supportive environment',
        'Basic sequencing of a yoga class',
        'Effective communication skills for teachers',
        'Introduction to teaching different levels of students',
      ],
    },
    {
      title: 'Ayurveda and Yoga (Basic Concepts)',
      content: [
        'Introduction to Ayurveda and its connection to yoga',
        'Basic understanding of the three doshas (body types)',
        'Simple Ayurvedic dietary recommendations',
        'Daily routines according to Ayurveda',
        'Incorporating Ayurvedic principles into yoga practice',
      ],
    },
  ];


  return (
    <>
    <TT2/>
<ScheduleCall/>
<section className="py-16 text-center bg-gray-50 my-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <div className="mb-8">
            <h2 className="heading font-semibold mb-4 my-section" data-aos="fade-up" data-aos-duration="1000">Why Study 200 Hour Yoga Teacher Training at India Yogashala in Rishikesh?</h2>
            <p className="max-w-3xl mx-auto mb-6 text__para">
              If you are curious about unraveling the essence of the self and life as a whole, then it is time to step into the world of yoga with our intensive 200 Hour Yoga TTC at India Yogshala. Begin your journey towards self-discovery & open yourself to limitless experiences of the mind, body, and spirit. The course is about creating alignment, bringing stability and strength to perform advanced postures and meditation techniques.
            </p>
            <p className="max-w-3xl mx-auto mb-6 text__para my-section"data-aos="fade-up" data-aos-duration="1000">
              Learn how to let go of the held up stress in your body and mind & attain a state of complete balance through traditional Yoga immersions consisting of Asana practices, Pranayama (Breath work), Yoga Philosophy, and intensive Yoga Anatomy. Become a serious yoga practitioner and lead the way to help others undergo transformative experiences as a recognized yoga teacher. Spread the pure & healthy way of living. Become a Yoga Alliance certified Yoga teacher and carry forward the 5000-year-old legacy of the greatest mind-body art form.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="heading font-semibold mb-4 my-section" data-aos="fade-up" data-aos-duration="1000">Who is Eligible for 200 Hour Yoga TT in Rishikesh India?</h2>
            <ul className="list-none max-w-3xl mx-auto space-y-4 text-left my-section"data-aos="fade-up" data-aos-duration="1000">
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
            <h2 className="heading font-semibold mb-4 my-section"data-aos="fade-up" data-aos-duration="1000">200 Hour Yoga Teacher Training Program Outcomes</h2>
            <ul className="list-none max-w-3xl mx-auto space-y-4 text-left my-section"data-aos="fade-up" data-aos-duration="1000">


                
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

    <div className="mt-5 container my-section" data-aos="fade-up" data-aos-duration="2000">
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
        <div className="md:w-1/2 h-1/2 flex justify-center">
          <img
            src={C1}
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