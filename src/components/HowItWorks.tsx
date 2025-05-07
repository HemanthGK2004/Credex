import React from 'react';
import { ArrowRight, Upload, DollarSign, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HowItWorks: React.FC = () => {
  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  const { ref, controls } = useScrollAnimation();

  const steps = [
    {
      icon: <Upload className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: 'Upload License',
      description: 'Upload your software license information through our secure portal. We support all major vendors including Microsoft, Adobe, Oracle, and more.',
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: 'Get Valuation',
      description: 'Our team of experts will evaluate your license assets and provide a competitive valuation within 24 hours based on current market rates.',
    },
    {
      icon: <CreditCard className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment through your preferred method. Most transactions complete within 3-5 business days.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Our simple three-step process makes selling your software licenses quick and hassle-free
          </motion.p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={stepVariants}
              initial="hidden"
              animate={controls}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 dark:bg-gray-700 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                  <ArrowRight className="w-8 h-8 text-blue-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
          >
            Ready to sell your licenses? Get started now
            <ArrowRight size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;