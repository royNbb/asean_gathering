"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Hero = () => {

  const countries: string[] = [
    "Indonesia.png",
    "Malaysia.png",
    "Philippines.png",
    "Vietnam.png",
    "Singapore.png",
    "Thailand.png",
  ];
  const testimonials = [
    {
      image: "/testi-2.png",
      text: "This ASEAN gathering is an amazing opportunity to connect and build stronger ties across ASEAN students in Spain. Thanks to social media, we can bond even further—breaking borders, sharing moments, and beyond. So, save the date and don't miss the event!",
      name: "Alyssa (Sasa) Kusnoto",
      title: "Social Media Coordinator",
    },
    {
      image: "/testi-1.png",
      text: "Indonesia's rich cultural diversity has always fascinated me. Wearing traditional attire for the fashion show allowed me to connect with these cultures deeply. Meeting fellow ASEAN volunteers further enriched my appreciation of our shared backgrounds.",
      name: "Megan Chan",
      title: "Model, UC3M Exchange Student",
    },
  ];
  
  const [slidesPerView, setSlidesPerView] = useState(1); // Default to 1

  useEffect(() => {
    // Update slidesPerView based on screen width
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth <= 768 ? 1 : 3);
    };

    updateSlidesPerView(); // Set initial value
    window.addEventListener("resize", updateSlidesPerView); // Update on resize

    return () => window.removeEventListener("resize", updateSlidesPerView); // Cleanup
  }, []);



  return (
    <section id="home" className="relative bg-gradient-to-b from-amber-800 to-red-900 text-amber-50">
      <div className="bg-gradient-to-b from-[#101212] to-[#08201D] relative">
        <section className="relative pb-10 sm:pt-0 sm:pb-8 "
          style={{
            backgroundImage: "url('/batik.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>

          <div className="text-center pb-10 pt-5 sm:pt-10 text-amber-50 px-2 relative z-20">
            <h1 className="text-2xl text-white font-extrabold sm:text-5xl shadow-white]">
              ASEAN Students in Spain
            </h1>
            <p className="mt-2 sm:mt-4 text-md sm:text-xl text-amber-200 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Proudly presents our first event,
              uniting Southeast Asian students to celebrate the spirit of community.           
            </p>
          </div>
          {/* Headline */}
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-12 lg:px-50">
              {/* Right: Logo */}
              <div className="flex items-center justify-center lg:mt-5 lg:,x-12">
                <img
                  className="w-36 sm:w-44 lg:w-80 drop-shadow-[0_0_30px_rgba(250,211,132,0.6)]"
                  src="logo.png"
                  alt="Event Logo"
                />
              </div>

              {/* Left: Indonesia Title + Description */}
              <div className="text-center lg:text-left lg:max-w-lg ">
                <div className="flex justify-center">
                  <img
                    className="lg:mx-0 lg:w-96 w-64 sm:w-80"
                    src="indonesia_title.png"
                    alt="Indonesia Title"
                  />
                </div>
                {/* Date and Place */}
                <p className="text-lg text-center font-semibold text-yellow-200 sm:text-l lg:text-xl">
                  Saturday, December 7th 2024
                </p>
                <p className="mb-2 text-lg text-center font-semibold text-yellow-100 sm:text-l lg:text-xl">
                  Galileo Cultural Center, Madrid
                </p>
                <p className="text-center text-base text-white sm:text-xl lg:mb-2">
                  Join us for a night of traditional arts, music, and unforgettable connections.
                </p>
                <div className="flex justify-center items-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSea2BmtfnynStiuGv9KVEMxDE8y7ZbcIjtreo6VcsWVL1YEOQ/viewform?usp=sf_link"
                    className="inline-flex justify-center items-center px-6 py-3 font-semibold text-white bg-red-600 rounded-lg mt-5 md:mt-16 lg:mt-8 hover:bg-red-700"
                  >
                    Get Tickets
                    <svg
                      className="w-6 h-6 ml-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </section>

        {/* Countries Carousel */}
        <section className="relative py-5 bg-black lg:pt-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl text-center mb-2">
              Calling All ASEAN Students in Spain
            </h2>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={slidesPerView}
              autoplay={{ delay: 1500 }}
              loop={true}
              className="w-full"
            >
              {countries.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full flex justify-center">
                    <img
                      src={item}
                      alt={`Country ${index + 1}`}
                      className="drop-shadow-[0_0_30px_rgba(250,211,132,0.6)]"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section
          id="vision"
          className="relative py-20"
          style={{
            backgroundImage: "url('/awan.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black z-0"></div>

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
            {/* Text Content */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-amber-200 sm:text-4xl shadow-lg">
                The Vision
              </h2>
              <p className="mt-6 text-lg text-amber-100 max-w-4xl mx-auto">
                To create a vibrant ASEAN student community in Spain by uniting students through culture, art, and connection. The{" "}
                <span className="font-semibold text-amber-200">
                  Indonesia Calling for ASEAN Students
                </span>{" "}
                network gathering will celebrate the rich diversity of Southeast Asian traditions with captivating performances and meaningful social interactions. Together, we aim to strengthen ties and build a thriving network for future collaborations.
              </p>
            </div>
          </div>

          {/* Responsive Video */}
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex justify-center mt-10">
            <div className="w-56 h-96 ">
              <iframe
                title="YouTube video player"
                src="https://www.youtube.com/embed/dnYyupyYf8I"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
                style={{
                  maxHeight: "800px",
                  height: "100%",
                }}
              ></iframe>
            </div>
          </div>   

        </section>
        

        <section id="activities" className="relative py-10 pt-20 bg-gradient-to-b from-black to-customDark animate-on-scroll">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-amber-200 sm:text-4xl text-center mb-12">
              Activities
            </h2>

            {/* Carousel Wrapper */}
            <div className="relative">
              <div className="flex overflow-x-auto space-x-6 pb-4">
                {/* Activity Box 1 */}
                <div className="flex-shrink-0 w-64 md:w-80 lg:w-128 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src="/networking.png"
                    alt="Activity 1"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-amber-200">Networking Session</h3>
                    <p className="text-white mt-2">Connect with like-minded individuals from various ASEAN countries, building friendships and future opportunities.</p>
                  </div>
                </div>

                {/* Activity Box 2 */}
                <div className="flex-shrink-0 w-64 md:w-80 lg:w-128 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src="/orchestra.png"
                    alt="Activity 2"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-amber-200">Mini Orchestra</h3>
                    <p className="text-white mt-2">Experience a captivating performance of ASEAN music by a talented modern orchestra.</p>
                  </div>
                </div>

                {/* Activity Box 3 */}
                <div className="flex-shrink-0 w-64 md:w-80 lg:w-128 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src="/saman.jpg"
                    alt="Activity 3"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-amber-200">Tari Saman Performance</h3>
                    <p className="text-white mt-2">Witness the mesmerizing synchronization of Indonesia&#39;s traditional dance.</p>
                  </div>
                </div>

                {/* Activity Box 4 */}
                <div className="flex-shrink-0 w-64 md:w-80 lg:w-128 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src="/snack.png"
                    alt="Activity 4"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-amber-200">Indonesian Snacks Try-On</h3>
                    <p className="text-white mt-2">Savor a variety of authentic Indonesian treats.</p>
                  </div>
                </div>

                {/* Activity Box 5 */}
                <div className="flex-shrink-0 w-64 md:w-80 lg:w-128 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src="/fashion.jpg"
                    alt="Activity 5"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-amber-200">Fashion Show</h3>
                    <p className="text-white mt-2">Admire the fusion of traditional and modern Indonesian attire on the runway.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        

        <section id="rundown" className="pb-12 bg-gradient-to-b from-amber-300 via-amber-100 to-amber-50">
          {/* Image Border Between Sections */}
          <div className="overflow-x-auto">
            <img
              src="/roofing.png"
              alt="Decorative Border"
              className="w-full h-auto"            
            />
          </div>
          <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
            <h2 className="text-4xl font-bold text-center text-amber-700 mb-12 mt-5">
              Rundown
            </h2>
            <div className="relative">
              {/* Vertical Timeline */}
              <div className="absolute left-1/2 top-0 h-full w-1 bg-amber-500 transform -translate-x-1/2"></div>

              <div className="space-y-10">
                {[
                  { time: "15:45", title: "Registration", subtitle: "Registro" },
                  { time: "16:15", title: "Opening Session", subtitle: "Sesión de apertura" },                
                  { time: "16:25", title: "Mini Orchestra - ASEAN Song, Let Us Move Ahead", subtitle: "Mini orquesta - ASEAN Song, Let Us Move Ahead" },                
                  { time: "16:55", title: "Quick Break for Networking Session", subtitle: "Pausa Rápida para Sesión de Networking" },
                  { time: "17:15", title: "Networking Session", subtitle: "Sesión de networking" },                
                  { time: "18:20", title: "Tari Saman - Indonesian Traditional Group Dance", subtitle: "Tari Saman - Danza grupal tradicional de Indonesia" },                  
                  { time: "18:35", title: "Fashion Show", subtitle: "La demostración de moda" },
                  { time: "19:00", title: "Closing Ceremony", subtitle: "Ceremonia de Clausura" },
                  { time: "End", title: "Snack and Socializing in Maracuyá Cafe", subtitle: "Refrigerio y Socialización en el Café Maracuyá" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Time Box */}
                    <div
                      className={`flex-none w-1/4 ${
                        index % 2 === 0 ? "pr-6 text-right" : "pl-6 text-left"
                      }`}
                    >
                      <p className="text-lg font-semibold text-amber-800">{item.time}</p>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1">
                      <div className="p-6 bg-white rounded-lg shadow-lg border border-amber-200">
                        <h3 className="text-lg font-bold text-amber-700">{item.title}</h3>
                        <p className="text-sm text-amber-600">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-5 bg-amber-50 lg:pt-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pb-20">
          <h2 className="text-2xl font-bold text-amber-800 sm:text-3xl text-center mb-6">
            What Our Members Say
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row items-center lg:items-start bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-lg shadow-lg px-6 py-8 max-w-xl mx-auto drop-shadow-[0_0_30px_rgba(250,211,132,0.8)]">
                  {/* Image */}
                  <div className="w-32 h-32 lg:w-48 lg:h-48 mb-6 lg:mb-0 lg:mr-8 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}'s testimonial`}
                      className="w-full h-full rounded-full object-cover shadow-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="text-center lg:text-left">
                    <p className="text-white text-lg italic mb-4">
                      "{testimonial.text}"
                    </p>
                    <h3 className="text-amber-200 font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <h4 className="text-amber-100 text-sm">{testimonial.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      </div>
    </section>
  );
};

export default Hero;
