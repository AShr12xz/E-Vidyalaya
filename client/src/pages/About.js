import React from 'react';
import about from "./../assets/About.jpg";
import learn from "./../assets/learn.jpg";
import pic from "./../assets/pic.jpg";
const About = () => {
  return (
    <div>
      <section className="py-14 lg:py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="max-w-2xl mx-auto text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-montserrat">
            Transform Learning with our <span className="text-indigo-600">Innovative Platform</span>
          </h1>
          <p className="max-w-xl mx-auto text-base leading-7 text-gray-600 mb-2 font-lora">
            Empower your knowledge and skills with interactive and engaging e-learning experiences tailored for every learner.
          </p>
        </div>
      </section>

      <section className="py-4 lg:py-4 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="">
              <img
                src={about}
                alt="About Us"
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="lg:pl-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-playfair-display">About Us</h2>
              <p className="text-lg leading-8 text-gray-600 font-open-sans">
                Our e-learning platform is designed to revolutionize education by making learning accessible, engaging, and effective. With a vast library of courses, expert instructors, and a supportive community, we aim to help learners achieve their goals, whether academic, professional, or personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 lg:py-4 bg-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img
                src={pic}
                alt="Interactive Learning"
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="lg:pr-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-roboto">
                Interactive Learning Since 2010
              </h2>
              <p className="text-lg leading-8 text-gray-600 font-open-sans">
                Our journey began with the mission to make education more interactive and learner-centric. From virtual classrooms to AI-powered learning assistants, every feature is crafted to enhance the learning experience, ensuring students stay engaged and motivated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 font-poppins">Our Achievements in Numbers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-2xl">
              <div className="text-indigo-600 text-3xl font-extrabold mb-4">500K+</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 font-roboto">Active Learners</h4>
              <p className="text-sm text-gray-600 font-open-sans">
                Join a thriving community of learners from around the globe who trust our platform for their education.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-2xl">
              <div className="text-indigo-600 text-3xl font-extrabold mb-4">10K+</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 font-roboto">Courses Offered</h4>
              <p className="text-sm text-gray-600 font-open-sans">
                A diverse range of courses designed to cater to every learning need, from coding to creative arts.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-2xl">
              <div className="text-indigo-600 text-3xl font-extrabold mb-4">98%</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 font-roboto">Satisfaction Rate</h4>
              <p className="text-sm text-gray-600 font-open-sans">
                Consistently high satisfaction rates reflect our commitment to quality and learner success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 font-poppins">Our Vision</h2>
          <p className="max-w-3xl mx-auto text-lg leading-8 text-gray-600 font-open-sans">
            We aspire to create a world where education knows no boundaries. Through cutting-edge technology, a learner-first approach, and a commitment to innovation, we aim to bridge the gap between knowledge and opportunity for learners worldwide.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="">
              <img
                src={learn}
                alt="Team Collaboration"
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="lg:pl-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-roboto">Collaborative Learning</h2>
              <p className="text-lg leading-8 text-gray-600 font-open-sans">
                Collaboration lies at the heart of effective learning. Our platform fosters connections between students, instructors, and peers, ensuring an enriching experience where ideas thrive and learning becomes a shared journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
