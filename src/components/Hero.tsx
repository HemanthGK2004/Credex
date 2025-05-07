import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const scrollToNextSection = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Parallax
      blur={0}
      bgImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      bgImageAlt="Business professionals reviewing software licenses"
      strength={200}
      className="relative"
    >
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ y }}
              className="text-white"
            >
              <motion.div 
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <TypeAnimation
                  sequence={[
                    'Transform Your',
                    1000,
                    'Monetize Your',
                    1000,
                    'Optimize Your',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <br />
                <span className="text-blue-400">Unused</span> Licenses
              </motion.div>
              
              <motion.p 
                className="mt-6 text-xl text-gray-200 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Join thousands of businesses who have recovered millions in value from their dormant software assets through SoftSell's secure marketplace.
              </motion.p>

              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-blue-600 text-white font-medium rounded-lg inline-flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                >
                  Get Your Free Valuation
                  <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#how-it-works"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 text-white font-medium rounded-lg inline-flex items-center justify-center backdrop-blur-sm transition-all border border-white/30"
                >
                  See How It Works
                </motion.a>
              </motion.div>

              <motion.div 
                className="mt-12 flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.img
                      key={i}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      src={`https://images.pexels.com/photos/${3182812 + i}/pexels-photo-${3182812 + i}.jpeg?auto=compress&cs=tinysrgb&w=100`}
                      alt={`Trusted client ${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover transition-transform"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-200">
                    Trusted by <span className="font-semibold">2,000+</span> companies
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                    <span className="ml-2 text-gray-200 text-sm">4.9/5 rating</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.button
          onClick={scrollToNextSection}
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          whileHover={{ y: 5 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} className="text-white" />
        </motion.button>
      </section>
    </Parallax>
  );
};

export default Hero;