import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeFlightInfo from '../components/HomeFlightInfo';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Airlines from '../components/Airlines';
import Amenities from '../components/Amenities';
import Location from '../components/Location';
import Gallery from '../components/Gallery';
import Regulations from '../components/Regulations';
import Operations from '../components/Operations';
import Fees from '../components/Fees';
import Blog from '../components/Blog';
import Emergency from '../components/Emergency';
import PilotInfo from '../components/technical/PilotInfo';
import Weather from '../components/Weather';
import NewsAndAds from '../components/NewsAndAds';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HomeFlightInfo />
      <NewsAndAds />
      <Airlines />
      <Amenities />
      <Services />
      <Location />
      <Gallery />
      <Regulations />
      <Operations />
      <Fees />
      <Blog />
      <Emergency />
      <PilotInfo />
      <Weather />
      <Footer />
    </div>
  );
}