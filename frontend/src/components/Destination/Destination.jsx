import React from 'react';
import Des1 from '../../assets/Des1.png'
import Des2 from '../../assets/Des2.jpg'
import Des3 from '../../assets/Des3.jpg'


const Destination = () => {
  const destinations = [
    {
      name: 'Rishikesh',
      imgSrc: Des1,
      details: [
        "I believe SereneSoul School’s",
        "Energetic little things",
        "Multi-style courses",
      ],
    },
    {
      name: 'Haridwar',
      imgSrc: Des2,
      details: [
        "I believe SereneSoul School’s",
        "Energetic little things",
        "Multi-style courses",
      ],
    },
    {
      name: 'Dehradun',
      imgSrc: Des3,
      details: [
        "I believe SereneSoul School’s",
        "Energetic little things",
        "Multi-style courses",
      ],
    },
  ];

  return (
    <section className="destination py-16 container">
      <div className="container mx-auto">
        <div className="headingRow text-center mb-12">
          <h1 className="text-4xl font-bold">Our Best Yoga Destination</h1>
          <p className="mt-4 text-gray-700">
            SereneSoul has chosen the best yoga-centred getaways in India and abroad to get you an ultimate zen experience. 
            There is not better way to recharge your mind, body and soul than practicing yoga and meditation in a fabulous setting, 
            full of amazing nature and landscapes.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {destinations.map((destination, index) => (
            <div key={index} className="destinationContent lg:w-1/3 mb-12 lg:mb-0 relative">
              <div className="image rounded-3xl overflow-hidden">
                <img 
                  src={destination.imgSrc} 
                  alt={destination.name} 
                  className="w-full h-[300px] object-cover" 
                />
              </div>
              <div className="text relative border border-orange-600 rounded-lg p-6 mt-4">
                <div className="destinationName absolute left-1/2 transform -translate-x-1/2 -top-6 bg-orange-100 border border-orange-600 px-4 py-2  rounded-lg">
                  <p className="text-orange-800 font-medium ">{destination.name}</p>
                </div>
                <ul className="mt-8">
                  {destination.details.map((detail, idx) => (
                    <li key={idx} className="text-orange-600 mb-2">{detail}</li>
                  ))}
                </ul>
              </div>
              <button className="btn-main bg-orange-600 text-white px-6 py-2 rounded-lg absolute left-1/2 transform -translate-x-1/2 -bottom-6">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    
  );
};

export default Destination;
