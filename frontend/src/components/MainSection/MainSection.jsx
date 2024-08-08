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
  );
};

export default MainSection;
