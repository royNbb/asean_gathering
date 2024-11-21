"use client";

import { useState, useRef, useEffect } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const items: string[] = ['Indonesia.png', 'Malaysia.png', 'Philippines.png', 'Vietnam.png', 'Singapore.png', 'Thailand.png'];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768); // Your mobile breakpoint
      };

      checkIfMobile(); // Initial check on mount
      window.addEventListener('resize', checkIfMobile); // Update on resize

      // Cleanup on unmount
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, []); // Empty dependency array ensures this only runs once on mount
  
  const updateCarousel = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = isMobile ? carouselRef.current.offsetWidth : carouselRef.current.offsetWidth / 3;
      carouselRef.current.style.transform = `translateX(-${index * itemWidth}px)`;
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      updateCarousel(currentIndex);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex]);

  const getNextIndex = (increment: boolean) => {
    let nextIndex = increment ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex === items.length) {
      nextIndex = isMobile ? 0 : 3;
    }
    if (nextIndex === -1) {
      nextIndex = isMobile ? items.length - 1 : 3;
    }
    
    return nextIndex;
  };

  const nextSlide = () => {
    const nextIndex = getNextIndex(true);
    setCurrentIndex(nextIndex);
    updateCarousel(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = getNextIndex(false);
    setCurrentIndex(prevIndex);
    updateCarousel(prevIndex);
  };
  return (
    <section id="home" className="relative bg-gradient-to-b from-amber-800 to-red-900 text-amber-50 shadow-xl">
      <div className="bg-gradient-to-b from-[#101212] to-[#08201D] relative">
        <section className="relative pt-12 pb-10 sm:pt-0 sm:pb-8 lg:py-20 "
          style={{
            backgroundImage: "url('/batik.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
          {/* Headline */}
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-12 lg:px-50">
              {/* Right: Logo */}
              <div className="flex items-center justify-center lg:mt-0 lg:,x-12">
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
                    src="indonesia-title.png"
                    alt="Indonesia Title"
                  />
                </div>
                {/* Date and Place */}
                <p className="mb-2 text-lg text-center font-semibold text-yellow-100 sm:text-l lg:text-xl">
                  Saturday, December 7th, 2024 • Madrid
                </p>
                <p className="text-center text-base text-white sm:text-xl mb-2">
                  Join us for a night of traditional arts, music, and unforgettable connections.
                </p>
                <div className="flex justify-center items-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSea2BmtfnynStiuGv9KVEMxDE8y7ZbcIjtreo6VcsWVL1YEOQ/viewform?usp=sf_link"
                    className="inline-flex justify-center items-center px-6 py-3 font-semibold text-white bg-red-600 rounded-lg lg:mt-5 sm:mt-20 hover:bg-red-700"
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

        <section className="relative py-5 bg-black">
          {/* Countries list */}
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl text-center mb-6">
              Calling All ASEAN Students in Spain
            </h2>

            {/* Carousel Wrapper */}
            <div className="relative">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (window.innerWidth <= 768 ? 100 : 33.33)}%)` }}
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                  >
                    <img
                      src={item}
                      alt={`Country ${index + 1}`}
                      className="w-full drop-shadow-[0_0_30px_rgba(250,211,132,0.6)]"
                      loading="eager"
                    />
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 text-white"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                &larr;
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 text-white"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                &rarr;
              </button>
            </div>
          </div>
        </section>

        <section id="vision" className="relative py-20"
          style={{
            backgroundImage: "url('/awan.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black z-0"></div>

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-amber-200 sm:text-4xl shadow-lg">
                The Vision
              </h2>
              <p className="mt-6 text-lg text-amber-100 max-w-4xl mx-auto">
                To create a vibrant ASEAN student community in Spain by uniting students through culture, art, and connection. 
                <span className="font-semibold text-amber-200">The Indonesia for ASEAN Students Network Gathering </span> 
                will celebrate the rich diversity of Southeast Asian traditions with captivating performances and meaningful 
                social interactions. Together, we aim to strengthen ties and build a thriving network for future collaborations.
              </p>
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
                <div className="flex-shrink-0 w-64 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src="/networking.jpg"
                    alt="Activity 1"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-amber-200">Networking Session</h3>
                    <p className="text-white mt-2">Connect with like-minded individuals from various ASEAN countries, building friendships and future opportunities.</p>
                  </div>
                </div>

                {/* Activity Box 2 */}
                <div className="flex-shrink-0 w-64 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src="/orchestra.jpg"
                    alt="Activity 2"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-amber-200">Mini Orchestra</h3>
                    <p className="text-white mt-2">Experience a captivating performance of ASEAN music by a talented modern orchestra.</p>
                  </div>
                </div>

                {/* Activity Box 3 */}
                <div className="flex-shrink-0 w-64 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src="/saman.png"
                    alt="Activity 3"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-amber-200">Tari Saman Performance</h3>
                    <p className="text-white mt-2">Witness the mesmerizing synchronization of Indonesia&#39;s traditional dance.</p>
                  </div>
                </div>

                {/* Activity Box 4 */}
                <div className="flex-shrink-0 w-64 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src="/snack.jpg"
                    alt="Activity 4"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-amber-200">Indonesian Snacks Try-On</h3>
                    <p className="text-white mt-2">Savor a variety of authentic Indonesian treats.</p>
                  </div>
                </div>

                {/* Activity Box 5 */}
                <div className="flex-shrink-0 w-64 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-lg shadow-lg overflow-hidden">
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

              {/* Carousel Controls (optional) */}
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 text-white"
                onClick={() => { /* Add slide prev functionality */ }}
              >
                &larr;
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 text-white"
                onClick={() => { /* Add slide next functionality */ }}
              >
                &rarr;
              </button>
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
                  { time: "16:00", title: "Networking Session", subtitle: "Sesión de networking" },
                  { time: "18:00", title: "Mini Orchestra - ASEAN Song, Let Us Move Ahead", subtitle: "Mini orquesta - ASEAN Song, Let Us Move Ahead" },
                  { time: "18:20", title: "Tari Saman - Indonesian Traditional Group Dance", subtitle: "Tari Saman - Danza grupal tradicional de Indonesia" },
                  { time: "18:30", title: "Break - With Indonesian Traditional Snack", subtitle: "Descanso - Con merienda tradicional de Indonesia" },
                  { time: "18:45", title: "Fashion Show", subtitle: "La demostración de moda" },
                  { time: "19:00", title: "Closing Ceremony", subtitle: "Ceremonia de Clausura" },
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
      </div>
    </section>
  );
};

export default Hero;
