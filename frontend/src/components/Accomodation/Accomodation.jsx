import React from 'react';

const Accomodation = () => {
  const sections = [
    {
      title: 'Accomodation',
      content:
        'India Yogshala is dedicated to making your stay experience as comfortable as possible, so you can focus completely on your yoga teacher training and yoga retreats and can do the best. We have chosen all our accommodation venues for Yoga Teacher Training and Yoga Retreat in India keeping in mind the proper connectivity to roads so that the student can easily reach the doorsteps with their luggage without any difficulty. Our clean and spacious rooms are well ventilated and equipped with attached bathrooms, 24X7 hot water supply, neat and clean linens, Wifi Access, etc. We also provide rooms with balcony views of the Himalayas in Rishikesh, Beach views in Goa, Ocean views in Kerala. Most of these properties are closer to nature where you can enjoy melodies of Indian birds and sometimes playful moments with monkeys and cows. These yoga venues have spacious lounge settings for students to relax, read, and discuss with like-minded yoga and travel lovers.',
      imgSrc: 'https://indiayogashala.com/demo//assets/accomodation.png',
    },
    {
      title: 'Food',
      content:
        'SereneSoul puts special emphasis on ‘Ahara’ (diet) and Anna (Food) offered to students because it’s the most important means of energy. A good food not only makes us strong to practice yoga, it also affects the feelings or moods. A good mood or positive feelings inspire us to enjoy the journey. During our yoga programs, we offer nutritious Ayurvedic food with skillfully combined ingredients, flavor, consistency, and preparation methods. Our meals are wholesome and well-balanced in every regard with the required building blocks of Protein, Carbs, Minerals, and Vitamins. Our cooking team prepares every food item using the freshest vegetables, fruits, or ingredients sourced from organic vendors. In addition to three meals, we also offer special Chai and beverages during the breaks in the classes of Yoga Retreats and 200, 300, and 500 Hour Yoga Teacher Training in India.',
      imgSrc: 'https://indiayogashala.com/demo//assets/food.png',
    },
    {
      title: 'Activities',
      content:
        'Courses or Retreats at SereneSoul are more than just learning inside the yoga halls. A yoga course, short or long, is a rigorous and demanding program and it takes a toll on the mind and body of the participants. Therefore, these course schedules also include other activities like local excursions, sunrise and sunset trips, outdoor yoga sessions, fun activities, guided visits to spiritual and cultural attractions. During these visits, students can also enjoy shopping at colorful local markets. In addition, we also conduct Kirtans or Satsangs which are integral parts of yogic lifestyles. Rishikesh and Himalayan locations like Dharamshala have amazing waterfalls to visit whereas beach locations like Goa and Kerala are known for cultural tours to villages and farms of local spices and herbs.',
      imgSrc: 'https://indiayogashala.com/demo//assets/activities.png',
    },
  ];

  return (
    <section className="accomodation bg-[#FFE4DC] rounded-lg p-6 container my-section" data-aos="fade-up" data-aos-duration="1000">
    <div className="container mx-auto space-y-8 md:space-y-16">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="md:w-1/2 p-4">
            <div className="content text-center md:text-left">
              <h1 className="heading font-bold mb-4">{section.title}</h1>
              <p className="texttext__para">{section.content}</p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center p-4">
            <img
              src={section.imgSrc}
              alt={section.title}
              className="lg:w-3/5 h-auto rounded-lg sm:w-2/4 "
            />
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Accomodation;
