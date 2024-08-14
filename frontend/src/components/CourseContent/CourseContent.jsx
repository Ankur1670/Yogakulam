import React, { useState } from 'react';

import CC1 from '../../assets/CC1.svg'
import CC2 from '../../assets/CC2.svg'
import CC3 from '../../assets/CC3.svg'
import CC4 from '../../assets/CC4.svg'
import CC5 from '../../assets/CC5.svg'
import CC6 from '../../assets/CC6.svg'
import CC7 from '../../assets/CC7.svg'
import CC8 from '../../assets/CC8.jpg'



const CourseContent = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const courseContent = [
    {
      icon: CC1,
      title: "Yoga Philosophy, Lifestyle and Ethics",
      content: `Yogic Philosophy is important to understand the purpose of your practice, what motivates and inspires you to practice yoga everyday. Topics in this subject include: 
      1. Easiest translations to learn and understand the ancient texts such as Patanjali Yoga Sutras, Bhagvad Gita, Hatha Yoga Pradipika, and Vedas
      2. The concepts of Dharma and Karma
      3. Understanding Yoga Seva (service) and the value of teaching yoga with devotion`
    },
    {
      icon: CC2,
      title: "Yoga Asanas: Practice, Techniques, Therapy",
      content: `Disciplined practice of Hatha Yoga and Ashtanga Yoga, connecting with breath and Channelising the Prana. 
      1. Identification of common misalignments 
      2. Proper use of Props for maximizing the therapeutic benefits
      3. Legitimate modifications and changes with the capacity of each individual to limit the danger of any injuries`
    },
    {
      icon: CC3,
      title: "Pranayama: Purification & Expansion of Life Force",
      content: `Learn ancient practices of breath work to empower mind and emotions through practical and experiential angles.
      1. Purification of Nadis (Energy Channels in the body)
      2. Nadi – Sodhana, Kapabhati, Sheetakri, Sheetali, Baramari, and Bhastrika
      3. Management of Stress, Depressions, Anger, Fear, and Mental Disorders`
    },
    {
      icon: CC4,
      title: "Meditation: Dhyana and Mindfulness",
      content: `Yoga Sadhana or practice is incomplete without Meditation. Explore deeper layers of your consciousness and discover your inner light through various meditation traditions.
      1. AntarMouna (Detached Mindfulness of Thoughts)
      2. Ajapa Japa, Hridyaksha Dharna (Heart-Space Meditation)
      3. Tratka (Candle Gazing) and Chidakasha Dharana (Yogic Visualization Technique)`
    },
    {
      icon: CC5,
      title: "Anatomy and Physiology (Human and Energy)",
      content: `Explore the Human Body structure and how it functions to understand your strengths and limitations, and to prevent any injury before, during, and after your yoga practice.
      1. Movement of Muscles, Joints, and Bones in each asana
      2. Functionality of Respiratory, Circulatory, Nervous, Digestive, and Endocrine System
      3. Pancha Kosha and Pranic physiology`
    },
    {
      icon: CC6,
      title: "Shat Kriyas or Yogic Cleansing",
      content: `Shat Kriyas, also known as Shat Karmas refers to the six yogic purification techniques in the tradition of Hatha Yoga. Neti, Dhauti, Nauli, Basti, Kapala Bhati, Tratka, and ShankaPrakshalana are major techniques to purify the physical body and energy channels which helps in keeping any disease away. Practiced under the expert guidance, these practices prepare the yogis or practitioners for Asana and Yogic Kriyas.`
    },
    {
      icon: CC7,
      title: "Yoga Methodology and Teaching Techniques",
      content: `These sessions will guide you through the important methods of adjusting and teaching others’ bodies in safer and effective way, with confident voice.
      1. Asana or Posture Clinic: Mobility, Flexibility, and Stability in each Asana
      2. Principles of Sequencing, Demonstration, Observation, and Adjustments
      3. Communication and Presentation Skills`
    }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <section className="courseContent py-12 container my-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="container mx-auto">
        <div className="headingRow text-center mb-8">
          <h1 className="font-bold heading my-section"ata-aos="fade-up" data-aos-duration="1000">Course Content</h1>
          <p className="mt-4 text__para">There are numerous things to consider when anyone chooses a Yoga Teacher Training (200 Hour or 300 Hour), but the Course Content is one thing that should be non-negotiable. The SereneSoul course spread over 4 weeks of intensive yoga content that is important to become not only a registered yoga teacher but an inspiring yoga leader.</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-[900px]">
            <div className="dropdownBox bg-gradient-to-b from-[#f15a29] to-[#d83601] rounded-lg p-4">
              {courseContent.map((item, index) => (
                <div key={index} className="dropdownRow flex items-center mb-4 last:mb-0 my-section ">
                  <div className="icon bg-white p-2 rounded-lg ">
                    <img src={item.icon} alt={item.title } className="w-10 bg-white" />
                  </div>
                  <div className="dropdown w-full ml-4">
                    <button
                      className="btn bg-white text-brown-600 text-left w-full py-2 px-4 rounded-lg relative"
                      type="button"
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.title}
                      <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${activeDropdown === index ? 'rotate-180' : 'rotate-0'}`}>
                        ▼
                      </span>
                    </button>
                    {activeDropdown === index && (
                      <div className="dropdown-menu mt-2 p-2 bg-white rounded-lg shadow">
                        <p className="text-gray-700">{item.content}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center md:justify-start">
            <img src={CC8} alt="Yoga Course" className="w-[395px] rounded-xl lg:m-10 " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
