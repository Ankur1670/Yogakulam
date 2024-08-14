import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Schedule.css';
import yttc from '../assets/yttc.png'
import yttc2 from '../assets/yttc2.png'

// Example class data with additional details
const classData = [
  {
    name: "Vinyasa Yoga",
    description: "A dynamic and flowing style of yoga that synchronizes breath with movement.",
    timings: {
      Monday: ["6:00 PM to 7:00 PM"],
      Wednesday: ["6:00 PM to 7:00 PM"],
      Friday: ["6:00 PM to 7:00 PM"]
    },
    accommodation: "Yoga Retreat Center, Room 101",
    food: "Vegetarian meals included",
    curriculum: "Focus on breath work and flow sequences"
  },
  {
    name: "Hatha Yoga",
    description: "A traditional form of yoga focusing on physical postures and breath control.",
    timings: {
      Tuesday: ["8:00 AM to 9:00 AM"],
      Thursday: ["8:00 AM to 9:00 AM"]
    },
    accommodation: "Yoga Lodge, Suite 202",
    food: "Gluten-free options available",
    curriculum: "Introduction to postures and alignment"
  },
  {
    name: "Ashtanga Yoga",
    description: "A rigorous style of yoga focusing on a specific sequence of postures and breath control.",
    timings: {
      Monday: ["7:00 AM to 8:00 AM"],
      Wednesday: ["7:00 AM to 8:00 AM"]
    },
    accommodation: "Zen Retreat, Room 303",
    food: "Organic meals provided",
    curriculum: "Advanced postures and sequence practice"
  },
  {
    name: "Kundalini Yoga",
    description: "A spiritual practice focused on awakening the energy at the base of the spine.",
    timings: {
      Sunday: ["5:00 PM to 6:00 PM"],
      Tuesday: ["7:00 AM to 8:00 AM"],
      Thursday: ["7:00 AM to 8:00 AM"]
    },
    accommodation: "Serenity House, Room 204",
    food: "Vegan meals available",
    curriculum: "Mantra chanting and energy work"
  },
  {
    name: "Restorative Yoga",
    description: "A gentle and relaxing form of yoga using props to support the body.",
    timings: {
      Wednesday: ["6:00 PM to 7:00 PM"],
      Friday: ["6:00 PM to 7:00 PM"]
    },
    accommodation: "Calmness Retreat, Room 305",
    food: "Ayurvedic meals provided",
    curriculum: "Deep relaxation and gentle stretches"
  },
  {
    name: "Iyengar Yoga",
    description: "A form of Hatha Yoga that emphasizes precision and alignment in postures.",
    timings: {
      Monday: ["8:00 AM to 9:00 AM"],
      Thursday: ["6:00 PM to 7:00 PM"],
      Saturday: ["9:00 AM to 10:00 AM"]
    },
    accommodation: "Mountain View Lodge, Room 106",
    food: "Whole foods and plant-based diet",
    curriculum: "Alignment and use of props in postures"
  },
  {
    name: "Power Yoga",
    description: "A fast-paced and intense style of yoga aimed at building strength and stamina.",
    timings: {
      Tuesday: ["7:00 PM to 8:00 PM"],
      Thursday: ["7:00 PM to 8:00 PM"],
      Saturday: ["10:00 AM to 11:00 AM"]
    },
    accommodation: "Energy Boost Lodge, Room 207",
    food: "High-protein meals",
    curriculum: "Strength training and vigorous sequences"
  },
  {
    name: "Yin Yoga",
    description: "A slow-paced style of yoga with poses held for longer periods.",
    timings: {
      Monday: ["5:00 PM to 6:00 PM"],
      Wednesday: ["5:00 PM to 6:00 PM"],
      Friday: ["5:00 PM to 6:00 PM"]
    },
    accommodation: "Peaceful Haven, Room 108",
    food: "Plant-based and detox meals",
    curriculum: "Deep tissue stretching and mindfulness"
  },
  {
    name: "Bikram Yoga",
    description: "A series of 26 challenging postures performed in a heated room.",
    timings: {
      Tuesday: ["6:00 AM to 7:30 AM"],
      Thursday: ["6:00 AM to 7:30 AM"],
      Saturday: ["8:00 AM to 9:30 AM"]
    },
    accommodation: "Heat Therapy Retreat, Room 309",
    food: "Hydration-focused diet",
    curriculum: "Sequence of postures in a heated environment"
  },
  // Add other classes with similar structure
];

const Schedule = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Extract the day of the week from the selected date
  const getDayOfWeek = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  // Function to handle date selection
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setSelectedDate(getDayOfWeek(selectedDate));
  };

  // Get the schedule for the selected day
  const getScheduleForDay = (day) => {
    // Ensure there are at least 3 classes
    const filteredClasses = classData.filter(classInfo => classInfo.timings[day]);
    return filteredClasses.length >= 3 ? filteredClasses : filteredClasses.concat(filteredClasses.slice(0, 3 - filteredClasses.length));
  };

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
          <p className="text-white my-20  mt-24 text-center text-[35px] max-w-[900px] mx-auto absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            SCHEDULE
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
    <div className="container mx-auto px-4 py-16 my-section" data-aos="fade-up" data-aos-duration="1000">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-orange-600">Yoga Classes Schedule</h1>
        <p className="text-lg text-gray-700">
          Check our weekly schedule for all 100 and 200 YTTC yoga classes.
        </p>
      </header>

      {/* Calendar View */}
      <div className="flex justify-center mb-12 my-section " data-aos="fade-up" data-aos-duration="1000">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="shadow-lg"
        />
      </div>

      {/* Display schedule for the selected date */}
      {selectedDate && (
        <div>
          <h1 className=" font-bold mb-4 text-center heading my-section"data-aos="fade-up" data-aos-duration="1000">Schedule for {selectedDate}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getScheduleForDay(selectedDate).map((classInfo, index) => (
              <div key={index} className="selected-date-card p-6 border-[05px] border-[#F15A29] my-section"data-aos="fade-up" data-aos-duration="1000">
                <h3 className="text-2xl font-bold mb-2 text-orange-600 ">{classInfo.name}</h3>
                <p className="text-base mb-2 text__para">{classInfo.description}</p>
                <ul className="list-disc list-inside mb-4">
                  {classInfo.timings[selectedDate]?.map((timing, idx) => (
                    <li key={idx} className="text-gray-700">{timing}</li>
                  ))}
                </ul>
                <div className="mb-4">
                  <strong className='text-orange-600'>Accommodation:</strong> {classInfo.accommodation}
                </div>
                <div className="mb-4">
                  <strong className='text-orange-600'>Food:</strong> {classInfo.food}
                </div>
                <div>
                  <strong className='text-orange-600'>Curriculum:</strong> {classInfo.curriculum}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Schedule;
