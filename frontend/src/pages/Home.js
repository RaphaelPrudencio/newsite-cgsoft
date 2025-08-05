import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import ServicesHighlight from '../components/Home/ServicesHighlight';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Testimonials from '../components/Home/Testimonials';
import CallToAction from '../components/Home/CallToAction';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesHighlight />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;