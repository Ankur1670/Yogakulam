import React, { useState } from 'react';
import yttc from '../assets/yttc.png'
import yttc2 from '../assets/yttc2.png'
import tt2 from '../assets/tt2.jpg'
import C2 from '../assets/C2.png'

import { FaCheck } from "react-icons/fa6";
import ScheduleCall from '../components/ScheduleCall/ScheduleCall';
const Yttc300Hour = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const curriculumItems = [
    {
      title: 'Advanced Hatha Yoga (Asana and Breath Work)',
      content: [
        'Refining classical Hatha Yoga practices',
        'Intermediate to advanced Asanas',
        'Integration of breath with movement',
        'Advanced posture awareness and alignment',
        'Developing personal practice sequences',
      ],
    },
    {
      title: 'Ashtanga Vinyasa (Deepening Primary Series)',
      content: [
        'Complete Primary Series with detailed alignment',
        'Introduction to Intermediate Series',
        'Mysore Style Practice and its benefits',
        'Key transitions and flow',
        'Building strength and flexibility through Vinyasa',
      ],
    },
    {
      title: 'Pranayama (Intermediate Practices and Theory)',
      content: [
        'Intermediate Pranayama techniques',
        'Introduction to Kumbhaka (Breath Retention)',
        'Nadi Shodhana and its benefits',
        'Pranayama and the subtle body',
        'Daily Pranayama practice routine',
      ],
    },
    {
      title: 'Yogic Anatomy and Physiology (In-depth Study)',
      content: [
        'Anatomy of advanced asanas',
        'Understanding the nervous and endocrine systems',
        'The subtle body: Chakras and Nadis',
        'Preventing injuries in yoga practice',
        'Functional anatomy for yoga teachers',
      ],
    },
    {
      title: 'Asana Alignment and Adjustments (Intermediate Techniques)',
      content: [
        'Detailed study of alignment in key postures',
        'Safe and effective adjustments',
        'Modifications for different body types',
        'Therapeutic applications of adjustments',
        'Balancing effort and ease in asanas',
      ],
    },
    {
      title: 'Yoga Philosophy (Advanced Concepts)',
      content: [
        'Deeper exploration of Patanjali’s Yoga Sutras',
        'Introduction to Bhagavad Gita',
        'Understanding the concept of Dharma',
        'Philosophy of Karma Yoga',
        'Integrating philosophy into teaching',
      ],
    },
    {
      title: 'Mantra Yoga (Chanting and Sound Meditation)',
      content: [
        'Introduction to Vedic and Yogic mantras',
        'Chanting practices and their benefits',
        'The science of sound and vibration',
        'Daily mantra meditation practice',
        'Integrating mantras into yoga sessions',
      ],
    },
    {
      title: 'Dhyana (Meditation Practice and Theory)',
      content: [
        'Introduction to various meditation techniques',
        'Guided meditation practices',
        'The role of meditation in yoga',
        'Developing a personal meditation practice',
        'Meditation and mindfulness',
      ],
    },
    {
      title: 'Pratyahara and Yoga Nidra (Sensory Withdrawal and Deep Relaxation)',
      content: [
        'Introduction to Yoga Nidra',
        'Techniques for sensory withdrawal',
        'Exploring different stages of Yoga Nidra',
        'Guided practices for deep relaxation',
        'Incorporating Pratyahara into daily life',
      ],
    },
    {
      title: 'Shatkarma (Yogic Cleansing Techniques)',
      content: [
        'Introduction to basic Shatkarmas: Jala Neti, Kapalbhati',
        'Importance of cleansing in yoga practice',
        'Step-by-step guide to Shatkarmas',
        'Benefits of regular practice',
        'Integrating cleansing practices into your routine',
      ],
    },
    {
      title: 'History and Evolution of Yoga (Foundation and Growth)',
      content: [
        'Overview of Yoga’s history',
        'Evolution of different yoga schools',
        'Yoga’s journey to the West',
        'Modern-day yoga practices',
        'Understanding traditional vs. contemporary yoga',
      ],
    },
    {
      title: 'Yogic Lifestyle and Ethics (Living Yoga)',
      content: [
        'Introduction to yogic diet and nutrition',
        'Principles of Sattvic living',
        'Ethical guidelines for yoga teachers',
        'Yoga as a lifestyle beyond the mat',
        'Balancing personal and professional life as a yogi',
      ],
    },
    {
      title: 'Sanskrit (Language of Yoga)',
      content: [
        'Introduction to key yoga terms in Sanskrit',
        'Basic Sanskrit pronunciation',
        'Chanting in Sanskrit',
        'Understanding the meaning of yoga terms',
        'Reading and chanting from classical texts',
      ],
    },
    {
      title: 'Teaching Methodology (Enhancing Teaching Skills)',
      content: [
        'Developing effective teaching strategies',
        'Creating balanced class sequences',
        'Teaching mixed-level classes',
        'Improving verbal and non-verbal communication',
        'Building confidence as a yoga teacher',
      ],
    },
    {
      title: 'Ayurveda and Yoga (Basic Introduction)',
      content: [
        'Introduction to Ayurveda and its principles',
        'Understanding your dosha (body type)',
        'Ayurvedic diet and lifestyle tips for yogis',
        'Seasonal routines according to Ayurveda',
        'Incorporating Ayurveda into yoga practice',
      ],
    },
  ];

  return (
    <>
       <section className="relative h-[500px] overflow-hidden my-section"data-aos="fade-up" data-aos-duration="1000">
      <div className="container-fluid">
        <div className="relative">
          <img 
            src={yttc} 
            alt="Slider Image" 
            className="w-full h-[500px] object-cover" 
          />
          <p className="text-white my-20  mt-24 text-center text-[35px] max-w-[900px] mx-auto absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
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
            <h1 className="heading  font-bold mb-4 my-section"data-aos="fade-up" data-aos-duration="1000">
              About 300 Hour Yoga Teacher Training in Rishikesh, India
            </h1>
            <p className="text__para my-section" data-aos="fade-up" data-aos-duration="1000">
              Journey to the Himalayan foothills, the land of gods & transformative experiences, the Yoga capital of the world, Rishikesh, India. A place where mind, body, and spirit find an equilibrium through the practice of traditional yoga based on teachings from the sacred Bhagavad Gita and the Yoga Sutras of Patanjali. Study from the yoga masters of India at the India Yogashala. This Yoga Alliance Certified 300 Hour Yoga Teacher Training (YTT) in Rishikesh India is designed for an aspiring yoga practitioner willing to take the first serious step towards self-transformation in the mind, body, & spirit. Become a part of the authentic community of yoga teachers & serious practitioners in the heart of the Yoga capital of the world.
            </p>
          </div>
          <div className="md:w-1/2 px-4 mt-8 md:mt-0">
  <div className="highlights bg-gradient-to-b from-[#f15a29] to-[#501400] rounded-lg text-white p-6">
    <p className="text-[35px] mb-4">Highlights & Overview</p>
    <ul className="space-y-2 my-section" data-aos="fade-up" data-aos-duration="1000">
      
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
    
    <section className="py-16 text-center bg-gray-50 my-section"data-aos="fade-up" data-aos-duration="1000">
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

      <div className="mb-8 my-section" data-aos="fade-up" data-aos-duration="1000">
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
        <h2 className="heading font-semibold mb-4 my-section" data-aos="fade-up" data-aos-duration="1000">300 Hour Yoga Teacher Training Program Outcomes</h2>
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


<div className="mt-5 container my-section" data-aos="fade-up" data-aos-duration="1000">
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
            src={C2}
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