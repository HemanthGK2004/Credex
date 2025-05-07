import React from 'react';
import { Shield, TrendingUp, Clock, BadgeCheck, Users, Globe, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CountUp from 'react-countup';
import { Tilt } from 'react-tilt';

const WhyChooseUs: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const featureVariants = {
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

  const features = [
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: 'Best Market Value',
      description: 'Our extensive network of buyers ensures you get the highest possible value for your software licenses.',
      benefits: ['Market analysis', 'Competitive pricing', 'Value optimization'],
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: 'Fast Processing',
      description: 'Get valuations within 24 hours and complete transactions in as little as 3 business days.',
      benefits: ['Quick valuation', 'Streamlined process', 'Rapid payment'],
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: 'Secure Transactions',
      description: 'Our secure platform and escrow service protect both sellers and buyers throughout the entire process.',
      benefits: ['Encrypted data', 'Secure transfers', 'Protected payments'],
    },
    {
      icon: <Award className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: 'License Compliance',
      description: 'Our team of licensing experts ensures all transfers are compliant with vendor policies and regulations.',
      benefits: ['Legal verification', 'Policy compliance', 'Risk management'],
    },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: 2000, label: 'Happy Clients', prefix: '+' },
    { icon: <Globe className="w-8 h-8" />, value: 50, label: 'Countries Served', prefix: '+' },
    { icon: <TrendingUp className="w-8 h-8" />, value: 100, label: 'Million in Sales', prefix: '$' },
    { icon: <Shield className="w-8 h-8" />, value: 99.9, label: 'Success Rate', suffix: '%' },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Why Choose SoftSell
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We've helped thousands of businesses recover value from their unused software assets
          </motion.p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <Tilt
              key={index}
              options={{
                max: 25,
                scale: 1.05,
                speed: 1000,
              }}
            >
              <motion.div
                custom={index}
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl p-6 text-center text-white relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="flex justify-center mb-4 text-blue-200 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.prefix}
                <CountUp end={stat.value} duration={2.5} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                {stat.suffix}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;