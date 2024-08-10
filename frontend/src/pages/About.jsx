import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutMainImg from '../assets/aboutMain.jpg'; // Adjust the path to your image
import mainImage from '../assets/mainImage2.jpg'; // Adjust the path to your image
import Cfrom from '../components/Cform/Cfrom';


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <section
        className="aboutpage bg-cover bg-center bg-fixed h-[80vh] relative container"
        style={{ backgroundImage: `url(${aboutMainImg})` }} // Correct way to reference the image
      >
        <div className="container-fluid">
          <div className="row aboutMain">
            <div className="col-12">
              <h5 className="text-white text-[30px] max-w-[500px] absolute left-[6%] top-1/2 transform -translate-y-1/2">
                "It's not about being good at something. It's about being good to yourself."
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutContent py-16 container">
        <div className="container mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-md-12">
              <h3 className='text-[25px] font-medium text-[#404040;]'>About us</h3>
              <p className='text__para'>
                Welcome to SereneSoul – A sacred sanctuary of Authentic Yoga where the ancient science of Yoga comes to life through Yoga Alliance certified 200 Hour (RYT 200), 300 Hour (RYT 300), 500 Hour (RYT 500) Teacher Training Course and Continuing Education Programs (YACEP).
                Yoga Teacher Training is the common phrase in today’s big wellness industry. The mission of SereneSoul is to first make you a good yoga practitioner, guide you into the traditional yoga path, the science of prosperity and self-realisation, and then give you the yogic methods, tools and support so you can inspire and guide others in the same way.
                SereneSoul was created and conceptualised after years of devoted research and practices with numerous yoga gurus and at various ashrams and studios. After sharing its experience and purpose in different yogic and wellness platforms, including offline and online yoga classes and yoga workshops, the Yogashala team refined various techniques and methods and decided to outline a Yoga Alliance USA certified Yoga Teacher Training which are more authentic and easier to understand and practice.
              </p>
              <button className="btn btn-main mt-3">Connect Us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="Course mb-3" >
        <div className="container mx-auto">
          <div
            className="imageContainer mb-3 rounded-lg"
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          ></div>
          <h1 className="heading font-bold mb-4 my-section" >Our Essence</h1>
          <p className="text__para mb-6">
            The roots of SereneSoul are firmly planted in Ancient Indian Yogic Methodology inspired from Bhagwad Gita, Yoga Sutras of Patanjali, Gheranda Samhita, Hatha Yoga Pradapika and the Upanishads.
          </p>

          <h1 className="heading font-bold mb-4">A Decade of Dedication</h1>
          <p className="text__para mb-6">
            Over a decade, we’ve nurtured a community of experienced teachers and practitioners. Our international programs reflect years of research and collaboration with renowned Indian yoga schools, creating a platform for a healthier, more enlightened life.
          </p>
        </div>
      </section>

      <section className="Course mb-3">
        <div className="container mx-auto">
          <div
            className="imageContainer mb-3 rounded-lg"
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          ></div>
          <h1 className="heading font-bold mb-4">Our Approach</h1>
          <p className="text__para mb-6">
            SereneSoul offers a systematic application of Yoga’s ancient tradition to modern living. Embracing students’ uniqueness, our approach caters to individual’s strengths and limitations, ensuring safe and fulfilling progress.
            Our Yoga Sangha, a community of devoted Yoga Masters and Facilitators from India and Nepal, is committed to nurturing dedicated practitioners and teachers, ensuring the timeless wisdom of Yoga flourishes. With these dedicated souls, we offer a transformative journey through authentic yoga practice, emphasizing Yoga Asanas, Meditation, Pranayama, Yoga Philosophy, and Yoga Anatomy. Our unique teaching approach harmonizes age-old yogic teachings with contemporary scientific insights, enriching all aspects of life, from personal growth to professional success.
          </p>

          <h1 className="heading font-bold mb-4">Our Mantra</h1>
          <p className="text__para">
            “Lokah Samastah Sukhino Bhavantu” – May all beings everywhere be happy and free. Join us at SereneSoul, where the journey of self-discovery and authentic yoga begins.
          </p>
        </div>
      </section>

      <Cfrom/>
    </>
  );
};

export default About;
