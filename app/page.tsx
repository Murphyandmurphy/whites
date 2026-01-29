'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = next, -1 = prev

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setActiveSlide((prev) => (prev + 1) % 3)
    }, 8000) // Changed from 5000 to 8000 for slower transitions

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FBF7FA' }}>
      <Header />
      
      {/* Hero Section */}
      <main className="px-6 md:px-12 lg:px-24 pt-16 md:pt-24">
        {/* Rest of your content stays exactly the same... */}
        <div className="max-w-[1800px] mx-auto">
          {/* Animated Headline */}
          <motion.h1 
            className="text-[24px] md:text-[36px] font-normal leading-tight mb-12 w-full md:w-2/3"
            style={{ color: '#115E3C' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From the glitz of the Ritz, to a pizza van on the coast, we&apos;re a creative collective focused on the folk who serve, feed & host.
          </motion.h1>
          
          {/* Animated Video Section */}
          <motion.div 
            className="w-full aspect-video bg-sky-200 rounded-lg mb-20 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2"></div>
              <div className="w-1 h-6 bg-red-500 mx-auto"></div>
            </div>
          </motion.div>

          {/* Animated Services Section */}
          <div className="grid md:grid-cols-2 gap-16 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-[18px] md:text-[23px] leading-relaxed mb-6" style={{ color: '#115E3C' }}>
                We help hospitality and F&B brands create distinctive experiences that resonate with their guests and getting them coming back for more.
              </p>
               <span className="underline" style={{ color: '#115E3C' }}>Our expertise</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
                <h2
                className="text-[45px] md:text-[220px] leading-[0.75] uppercase custom-heading"
                style={{ color: '#115E3C' }}
              >
                BRANDING, DESIGN<br />& DIGITAL
              </h2>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Full-width Client Logos Section */}
      <section className="mb-32">
        <div className="md:px-12 lg:px-24">
          <div className="max-w-[1800px] mx-auto">
            <motion.div 
              className="mb-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="px-6 md:px-0">
                <p className="text-[18px] md:text-[40px] custom-heading mb-12" style={{ color: '#115E3C' }}>We&apos;ve worked with</p>
              </div>
              
              <div className="relative h-[600px] overflow-hidden">
                {[
                  // First set of 10 logos
                  [
                    { name: 'THE MAYFAIR CHIPPY', image: '/logos/THE_MAYFAIR_CHIPPY.jpg' },
                    { name: 'THE RITZ', image: '/logos/TheRitz.jpg' },
                    { name: 'THISTLY CROSS', image: '/logos/ThistlyCrossCider.jpg' },
                    { name: 'AKARUA', image: '/logos/Akarua.jpg' },
                    { name: 'LITTLE WOLD', image: '/logos/LittleWold_Vineyard.jpg' },
                    { name: 'THE ORPINGTON', image: '/logos/The_Orpington.jpg' },
                    { name: 'BON VIVANT', image: '/logos/BON_VIVANT.jpg' },
                    { name: 'CROWNE PLAZA', image: '/logos/COWNE_PLAZA.jpg' },
                    { name: 'CHARD FARM', image: '/logos/Chard_Farm.jpg' },
                    { name: 'POLUPOKE', image: '/logos/Polupoke.jpg' },
                  ],
                  // Second set of 10 logos
                  [
                    { name: 'QUALITY CHOP', image: '/logos/The_Quality_Chop_House.jpg' },
                    { name: 'GREENHOUSES', image: '/logos/The_Greenhouses.jpg' },
                    { name: 'SOHO FARMHOUSE', image: '/logos/Soho_Farmhouse.jpg' },
                    { name: 'QUIRINALE', image: '/logos/Quirinale.jpg' },
                    { name: 'L&G', image: '/logos/LandG.jpg' },
                    { name: 'NOVOTEL', image: '/logos/Novotel.jpg' },
                    { name: 'JAVA WHISKERS', image: '/logos/JavaWhiskers.jpg' },
                    { name: 'NATOORA', image: '/logos/Natoora.jpg' },
                    { name: 'MUCCIS', image: '/logos/Muccis.jpg' },
                    { name: 'GARGOTTE', image: '/logos/Gargotte.jpg' },
                  ],
                  // Third set of 10 logos
                  [
                    { name: 'RARE TEA', image: '/logos/Rare_Tea_Co.jpg' },
                    { name: 'PICTURE', image: '/logos/Picture.jpg' },
                    { name: 'ARROSTO', image: '/logos/Arrosto.jpg' },
                    { name: 'AKOKO', image: '/logos/Akoko.jpg' },
                    { name: 'OKN1', image: '/logos/OKN1.jpg' },
                    { name: 'NOMAD', image: '/logos/Nomad.jpg' },
                    { name: 'EL&H', image: '/logos/ELandh.jpg' },
                    { name: 'PORTLAND', image: '/logos/Portland.jpg' },
                    { name: 'CLIPSTONE', image: '/logos/Clipstone.jpg' },
                    { name: 'THE IVY', image: '/logos/Thelvy.jpg' },
                  ]
                ].map((logoSet, setIndex) => (
                  <motion.div
                    key={setIndex}
                    className="absolute inset-0 w-full mix-blend-multiply"
                    initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
                    animate={{ 
                      x: activeSlide === setIndex ? "0%" : direction === 1 ? "-100%" : "100%",
                      opacity: activeSlide === setIndex ? 1 : 0 
                    }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  >
                    {/* Changed grid-cols-5 to grid-cols-3 for mobile */}
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-0 md:gap-2 px-6 md:px-0">
                      {logoSet.map((logo, index) => (
                        <motion.div
                          key={logo.name}
                          className="flex items-center justify-center p-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <img
                            src={logo.image}
                            alt={logo.name}
                            className="w-full h-auto max-w-[140px] md:max-w-[180px] lg:max-w-[280px] object-contain"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}