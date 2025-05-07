import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
      },
    }),
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechNova Solutions',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'SoftSell helped us recover over $50,000 from unused Microsoft and Adobe licenses. The process was incredibly smooth, and their team was professional throughout. I highly recommend their service.',
      stars: 5,
    },
    {
      name: 'Michael Chen',
      position: 'IT Director',
      company: 'Global Industries',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'After downsizing our operations, we had numerous unused Oracle licenses. SoftSell provided a fair valuation and handled the entire transfer process. We received payment within a week. An excellent service!',
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Trusted by companies of all sizes to maximize the value of their software assets
          </motion.p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={testimonialVariants}
              initial="hidden"
              animate={controls}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-blue-100 dark:text-gray-700" />
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 shadow-md">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;