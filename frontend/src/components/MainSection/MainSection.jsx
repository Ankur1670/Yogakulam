import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import mainImage from '../../assets/mainImage.jpg';
import './MainSection.css'; // Import your custom CSS file
import slider1 from '../../assets/slider-1.jpg'
import slider2 from '../../assets/slider-2.jpg'
import slider3 from '../../assets/slider-3.jpg'
import slider4 from '../../assets/slider-4.jpg'
import slider5 from '../../assets/slider-5.jpg'
import yogaImg1 from '../../assets/yogaImg-1.jpg'
import yogaImg2 from '../../assets/yogaImg-2.jpg'
import yogaImg3 from '../../assets/yogaImg-3.jpg'
import pose1 from '../../assets/pose1.jpg'
import pose2 from '../../assets/pose2.jpg'
import pose3 from '../../assets/pose3.jpg'




const slides = [
  { src: slider1 , alt: "Goa", text: "Explore Goa" },
  { src: slider2, alt: "Rishikesh", text: "Discover Rishikesh" },
  { src: slider3 , alt: "Bali", text: "Experience Bali" },
  { src: slider4, alt: "Dharmshala", text: "Visit Dharamsala" },
  { src: slider5, alt: "Mysore", text: "See Mysore" },
  { src: slider1, alt: "Nepal", text: "Adventure in Nepal" },
  { src: slider2, alt: "Thailand", text: "Explore Thailand" },
];

const MainSection = () => {
  return (

  <>
    <section
      className="relative bg-cover bg-no-repeat bg-center h-[550px] w-full"
      style={{ backgroundImage: `url(${mainImage})` }} // Adjust path if necessary
    >
 <div className="absolute inset-0 flex items-center justify-center z-20 animate-fade-in mt-[-50px]">
        <div className=" p-2 rounded-lg bg-white shadow-lg text-center max-w-[80%] mx-auto transition-transform duration-500 transform hover:scale-105 scale-75 translate-x-4 skew-y-3 md:transform-none carousel-box ">
          <p className="text-[30px] font-semibold text-[#5B1600] ">
            "Discover the world through our <br /> yoga retreats and find your <br /> inner peace in beautiful locations."
          </p>
        </div>
      </div>
       <div className="container mx-auto pt-[70px]">
        <div className="absolute bottom-[80px] right-[30px] flex gap-4 z-10">
          {/* Your buttons or additional content here */} 
        </div>

        {/* Carousel for Desktop */}
        <div className="hidden md:block absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={slides.length}
            visibleSlides={5} // Show 5 images per view on desktop
            infinite={true}
            isPlaying={true}
            interval={3000}
            className="w-full"
          >
            <Slider>
              {slides.map((slide, index) => (
                <Slide key={index}>
                  <div className="carousel-box mx-2 p-2 flex flex-col items-center">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-[200px] object-cover rounded-[12px]"
                    />
                    <p className="mt-[15px] text-[20px] text-[#5B1600] font-[500]">{slide.text}</p>
                  </div>
                </Slide>
              ))}
            </Slider>
            <DotGroup className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2" />
          </CarouselProvider>
        </div>

        {/* Carousel for Mobile */}
        <div className="block md:hidden absolute bottom-[-360px] left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={slides.length}
            visibleSlides={1} // Show 1 image per view on mobile
            infinite={true}
            isPlaying={true}
            interval={3000}
            className="w-full"
          >
            <Slider>
              {slides.map((slide, index) => (
                <Slide key={index}>
                  <div className="carousel-box mx-12 p-2 flex flex-col items-center w-[300px] justify-center">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-[200px] object-cover rounded-[12px]"
                    />
                    <p className="mt-[15px] text-[20px] text-[#5B1600] font-[500]">{slide.text}</p>
                  </div>
                </Slide>
              ))}
            </Slider>
            <DotGroup className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2" />
          </CarouselProvider>
        </div>
      </div>
    </section>

    <section className="mt-[250px] text-center container">
  <div className="container mx-auto">
    <div className="row">
      <div className="col">
        <h1 className="text-[35px] font-bold mb-12 heading">WHAT YOU CAN EXPECT FROM SERENESOUL YOGA COURSES</h1>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 items-center mt-12">
      <div className="content">
        <img src={yogaImg1} alt="Authenticity" className="lg:h-[400px] sm:h-[300px] rounded-3xl mx-auto  " />
      </div>
      <div className="content mt-4 md:mt-0">
        <h2 className="font-semibold mb-4 sm:text-[20px]">AUTHENTICITY</h2>
        <p className='text__para'>Experience the essence of true yoga with our SereneSoul Yoga Courses. We prioritize authenticity, drawing from ancient scriptures like the Bhagavad Gita and Patanjali Yoga Sutras. Our programs offer genuine teachings, ensuring a pure and transformative journey that aligns with traditional yoga practices. Perfect for dedicated yoga seekers.</p>
      </div>
      <div className="content mt-4 md:mt-0">
        <img src={yogaImg2} alt="Safety and Integrity" className="lg:h-[400px] sm:h-[300px] rounded-3xl mx-auto" />
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 items-center mt-12">
      <div className="content">
        <h2 className="font-semibold mb-4 sm:text-[20px]">SAFETY AND INTEGRITY</h2>
        <p className='text__para '>At SereneSoul, our commitment to safety and integrity is paramount. We prioritize your well-being, offering carefully designed yoga practices that ensure both physical and emotional safety. With expert guidance, each session is crafted to prevent injury and maintain the highest standards of practice, promoting trust and holistic growth.</p>
      </div>
      <div className="content mt-4 md:mt-0">
        <img src={yogaImg3} alt="Cultural Immersions" className="lg:h-[400px] sm:h-[300px] rounded-3xl mx-auto" />
      </div>
      <div className="content mt-4 md:mt-0">
        <h2 className="font-semibold mb-4">CULTURAL IMMERSIONS</h2>
        <p className='text__para'>SereneSoul invites you to embark on a transformative journey through India's rich cultural heritage. Experience authentic yoga practices, visit sacred sites, and immerse yourself in the spiritual traditions that have shaped yoga. Our guided tours offer deep insights into ancient rituals and customs, connecting you with the true essence of yoga.</p>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 items-center mt-12">
      <div className="content">
        <img src={yogaImg2} alt="Safety and Integrity" className="lg:h-[400px] sm:h-[300px] rounded-3xl mx-auto" />
      </div>
      <div className="content mt-4 md:mt-0">
        <h2 className="font-semibold mb-4">VALUE</h2>
        <p className='text__para'>SereneSoul provides exceptional value through our yoga retreats and teacher training programs. Investing in our courses means investing in profound personal growth and healing. Our programs deliver transformative experiences that elevate your physical, mental, and emotional well-being, offering lifelong benefits and inspiring changes in every aspect of your life.</p>
      </div>
      <div className="content mt-4 md:mt-0">
        <img src={yogaImg1} alt="Authenticity" className="lg:h-[400px] sm:h-[300px] rounded-3xl mx-auto" />
      </div>
    </div>
  </div>
</section>


<section className="py-16 text-center">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className=" font-bold mb-4 heading">YOGA CERTIFICATION: YOGA TEACHER TRAININGS AND YOGA ALLIANCE CONTINUING EDUCATION PROGRAMS</h1>
          <p className="max-w-3xl mx-auto mb-12">Certified with Yoga Alliance, SereneSoul offers 200 Hour (RYT 200), 300 Hour (RYT300), 500 Hour (RYT500) Yoga Teacher Training Courses in India and short duration Continuing Education Programs (YACEP) as per the ethical and educational framework set by Yoga Alliance around the World.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-t from-white via-[#f15a29] to-[#5b1600] rounded-lg p-4 w-max mx-auto  ">
              <div className="bg-white p-2 rounded-lg">
                <img src={pose1} alt="RYT 300 Certification" className="w-[300px]" />
                <h4 className="mt-4 text-xl font-semibold text-[#5b1600]">RYT 300 Certification</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-t from-white via-[#f15a29] to-[#5b1600] rounded-lg p-4 w-max mx-auto  ">
              <div className="bg-white p-2 rounded-lg">
                <img src={pose2} alt="RYT 200 Certification" className="w-[300px] " />
                <h4 className="mt-4 text-xl font-semibold text-[#5b1600]">RYT 200 Certification</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-t from-white via-[#f15a29] to-[#5b1600] rounded-lg p-4 w-max mx-auto  ">
              <div className="bg-white p-2 rounded-lg">
                <img src={pose3} alt="YACEP Continuing Education" className="w-[300px]" />
                <h4 className="mt-4 text-xl font-semibold text-[#5b1600]">YACEP Continuing Education</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </>
    
  );
};

export default MainSection;
