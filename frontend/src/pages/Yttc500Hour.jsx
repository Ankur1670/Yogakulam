import React, { useState } from 'react';
import yttc from '../assets/yttc.png'
import yttc2 from '../assets/yttc2.png'
import tt2 from '../assets/tt2.jpg'
import C3 from '../assets/C3.png'
import { FaCheck } from "react-icons/fa6";
import ScheduleCall from '../components/ScheduleCall/ScheduleCall';

const Yttc500Hour = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const curriculumItems = [
    {
      title: 'Advanced Hatha Yoga (Asana, Philosophy, and Breath Work)',
      content: [
        'In-depth study of classical Hatha Yoga',
        'Advanced Asana practices',
        'Integration of breath with movement',
        'Advanced posture awareness and alignment',
        'Sequencing for advanced practitioners',
        'Energetic aspects of asanas',
      ],
    },
    {
      title: 'Advanced Ashtanga Vinyasa (Primary and Secondary Series)',
      content: [
        'Complete Primary and Secondary Series',
        'Mysore Style Advanced Practice',
        'Transitions and Vinyasa Krama',
        'Advanced Standing and Seated Poses',
        'Arm Balances and Inversions',
        'Bandhas and their role in Vinyasa',
      ],
    },
    {
      title: 'Advanced Pranayama (Breath Control and Energy Expansion)',
      content: [
        'Nadi Shodhana (Advanced level)',
        'Bhastrika and Kapalbhati (Advanced variations)',
        'Ujjayi and Bhramari (Advanced practices)',
        'Kumbhaka (Breath Retention Techniques)',
        'Working with prana and energy channels',
      ],
    },
    {
      title: 'Yogic Anatomy and Physiology (Advanced Concepts)',
      content: [
        'The Subtle Body: Chakras, Nadis, and Kundalini',
        'Anatomy of Pranayama',
        'Musculoskeletal system in advanced asanas',
        'Injury prevention and management',
        'Understanding body mechanics in depth',
      ],
    },
    {
      title: 'Advanced Asana Alignment and Adjustments (Mastery of Asanas)',
      content: [
        'Principles of advanced alignment',
        'Hands-on adjustments for complex poses',
        'Therapeutic applications of asanas',
        'Adjusting for different body types',
        'Balancing effort and ease in poses',
      ],
    },
    {
      title: 'Yoga Darshan (Advanced Philosophy and Spiritual Wisdom)',
      content: [
        'Study of classical texts: Bhagavad Gita, Upanishads, Yoga Sutras',
        'Integration of philosophy into practice',
        'Exploring Samkhya and Vedanta',
        'Concepts of Dharma and Karma',
        'The path of Bhakti, Jnana, and Karma Yoga',
      ],
    },
    {
      title: 'Advanced Mantra Yoga (Sound and Vibration)',
      content: [
        'Chanting of advanced Vedic and Yogic mantras',
        'Mantra Sadhana and Meditation',
        'Exploring the power of sound',
        'Understanding the deeper meanings of mantras',
        'Integration of mantra in daily practice',
      ],
    },
    {
      title: 'Dhyana (Meditation- Advanced Practices)',
      content: [
        'Advanced meditation techniques: Vipassana, Trataka, Antar Mouna',
        'Exploration of the different states of consciousness',
        'Meditation and mindfulness in daily life',
        'Guided and unguided meditation practices',
        'Developing a personal meditation practice',
      ],
    },
    {
      title: 'Pratyahara and Yoga Nidra (Deepening Inner Awareness)',
      content: [
        'Advanced Yoga Nidra practices',
        'Techniques for sensory withdrawal',
        'Exploring the states of consciousness through Yoga Nidra',
        'Developing a deep sense of inner awareness',
        'Guiding others in Yoga Nidra',
      ],
    },
    {
      title: 'Shatkarma (Advanced Yogic Cleansing Techniques)',
      content: [
        'Advanced Neti (Jala, Sutra, and Dugdha)',
        'Advanced Trataka and Kapalbhati',
        'Agnisara and Nauli Kriya',
        'Detoxification through Shatkarma',
        'Integrating Shatkarma into a regular practice',
      ],
    },
    {
      title: 'History and Evolution of Yoga (Deeper Insights)',
      content: [
        'Yoga through the ages: Historical perspectives',
        'Exploring different schools of yoga',
        'Modern interpretations and evolution',
        'Yoga in the context of contemporary society',
        'Impact of yoga on global culture',
      ],
    },
    {
      title: 'Yogic Lifestyle and Ethics (Living Yoga Off the Mat)',
      content: [
        'Yogic principles in daily life',
        'Sattvic living and its impact on mind and body',
        'Ethical guidelines for yoga teachers',
        'Developing a sustainable yogic lifestyle',
        'Yoga as a holistic life practice',
      ],
    },
    {
      title: 'Sanskrit (Advanced Study of Yogic Language)',
      content: [
        'Sanskrit pronunciation and chanting',
        'Advanced study of key yoga terms and concepts',
        'Reading and understanding original yoga texts',
        'Sanskrit grammar and syntax basics',
        'Sanskrit in teaching yoga',
      ],
    },
    {
      title: 'Teaching Methodology (Mastering the Art of Teaching Yoga)',
      content: [
        'Advanced teaching techniques',
        'Designing and leading specialized workshops',
        'Developing your teaching voice and style',
        'Class planning and sequencing for advanced levels',
        'Managing and leading group dynamics',
      ],
    },
    {
      title: 'Ayurveda and Yoga (Integrating the Sister Sciences)',
      content: [
        'Advanced concepts of Ayurveda',
        'Ayurvedic diet for yoga practitioners',
        'Yoga practices according to dosha types',
        'Seasonal routines and Ayurvedic cleansing practices',
        'Holistic health through Ayurveda and Yoga',
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
      <p className="text-white my-20 mt-24 text-center text-[35px] max-w-[900px] mx-auto absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        500 Hour Yoga Teacher Training in Rishikesh, India
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

<section className="aboutUs py-[70px] my-section" data-aos="fade-up" data-aos-duration="1000">
  <div className="container mx-auto">
    <div className="flex flex-wrap">
      <div className="md:w-1/2 px-4">
        <h1 className="heading font-bold mb-4 my-section" data-aos="fade-up" data-aos-duration="1000">
          About 500 Hour Yoga Teacher Training in Rishikesh, India
        </h1>
        <p className="text__para">
          Embark on an advanced journey into the world of yoga with our 500 Hour Yoga Teacher Training in Rishikesh, India. This comprehensive course is designed for dedicated practitioners who are ready to deepen their understanding and practice. Set in the serene environment of Rishikesh, the Yoga Capital of the World, this training integrates traditional teachings from the Bhagavad Gita and the Yoga Sutras of Patanjali, offering a holistic approach to yoga. Under the guidance of experienced Indian yoga masters, you will evolve into a skilled yoga teacher with profound knowledge in asanas, pranayama, meditation, and more. Join us at India Yogashala to become a part of the global community of certified yoga teachers.
        </p>
      </div>
      <div className="md:w-1/2 px-4 mt-8 md:mt-0">
        <div className="highlights bg-gradient-to-b from-[#f15a29] to-[#501400] rounded-lg text-white p-6">
          <p className="text-[35px] mb-4">Highlights & Overview</p>
          <ul className="space-y-2 my-section" data-aos="fade-up" data-aos-duration="1000">
            <li className="flex items-start">
              <FaCheck className="mr-2 mt-1" /> Advanced study of Yoga Asana and Alignment
            </li>
            <li className="flex items-start">
              <FaCheck className="mr-2 mt-1" /> In-depth Pranayama and Breathwork Techniques
            </li>
            <li className="flex items-start">
              <FaCheck className="mr-2 mt-1" /> Advanced Philosophy and Ethics of Yoga
            </li>
            <li className="flex items-start">
              <FaCheck className="mr-2 mt-1" /> Mastery in Yogic Breathing, Yoga Nidra & Chanting
            </li>
            <li className="flex items-start">
              <FaCheck className="mr-2 mt-1" /> Intensive Study and Practice of Advanced Vinyasa Yoga
            </li>
            <li className="flex items-start">
              <FaCheck className="mr-2 mt-1" /> Anatomy and Physiology with a Focus on Advanced Yoga Practices
            </li>
            <li className="flex items-start">
              <FaCheck className="mr-2 mt-1" /> Therapeutic Applications of Yoga for Health and Wellness
            </li>
            <li className="flex items-start">
              <FaCheck className="mr-2 mt-1" /> Advanced Hatha Yoga Postures with Alignment and Modifications
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

<section className="py-16 text-center bg-gray-50 my-section" data-aos="fade-up" data-aos-duration="1000">
  <div className="container mx-auto px-4">
    <div className="flex flex-col">
      <div className="mb-8">
        <h2 className="heading font-semibold mb-4 my-section" data-aos="fade-up" data-aos-duration="1000">Why Study 500 Hour Yoga Teacher Training at India Yogashala in Rishikesh?</h2>
        <p className="max-w-3xl mx-auto mb-6 text__para">
          The 500 Hour Yoga Teacher Training Course at India Yogashala is an intensive and comprehensive program designed for those who are committed to deepening their practice and teaching skills. This advanced training combines the foundational elements of yoga with advanced techniques, philosophy, and teaching methodology, offering a complete immersion into the yogic lifestyle.
        </p>
        <p className="max-w-3xl mx-auto mb-6 text__para">
          As part of this course, you will delve into advanced asanas, pranayama, meditation practices, and yoga philosophy. The program is meticulously crafted to provide an in-depth understanding of yoga, allowing you to integrate ancient teachings with modern practice. With a focus on advanced alignment, adjustments, and teaching strategies, you will gain the expertise needed to lead students of all levels with confidence and precision.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="heading font-semibold mb-4 my-section" data-aos="fade-up" data-aos-duration="1000">Who is Eligible for 500 Hour Yoga TT in Rishikesh, India?</h2>
        <ul className="list-none max-w-3xl mx-auto space-y-4 text-left">
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Yoga practitioners who have completed a 200 or 300 Hour Yoga Teacher Training program.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Individuals seeking to deepen their understanding of advanced yoga techniques, philosophy, and teaching methods.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Practitioners committed to pursuing the highest level of yoga certification and teaching expertise.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="heading font-semibold mb-4 my-section"data-aos="fade-up" data-aos-duration="1000">500 Hour Yoga Teacher Training Program Outcomes</h2>
        <ul className="list-none max-w-3xl mx-auto space-y-4 text-left my-section" data-aos="fade-up" data-aos-duration="1000">
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Master advanced yoga asanas, pranayama, and meditation techniques for personal and professional growth.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Teach with confidence and precision, incorporating advanced alignment and adjustment techniques into your classes.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Explore the subtle body in depth, including chakras, nadis, and prana, and their significance in yoga practice.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Engage deeply with yoga philosophy, studying classical texts such as the Bhagavad Gita, Upanishads, and Yoga Sutras.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Advance your understanding of anatomy and physiology to prevent injuries and safely guide your students.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Develop the expertise to create and lead specialized classes and workshops for diverse student needs.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Achieve significant personal growth and spiritual development through immersive yoga practices and self-reflection.
          </li>
          <li className="flex items-center text__para">
            <FaCheck className="text-orange-500 mr-2" />
            Attain the highest level of yoga certification, the 500 Hour Yoga Teacher Training, equipping you with a complete yoga education.
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
            src={C3}
            alt="Curriculum"
            className="w-3/4"
          />
        </div>
      </div>
    </div>
</>
  )
}

export default Yttc500Hour