'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Description from './components/Description';
import Header from './components/Header';
import Images from './components/Images';
import Ratings from './components/Ratings';
import ReservationCard from './components/ReservationCard';
import RestaurantNavbar from './components/RestaurantNavbar';
import Reviews from './components/Reviews';
import Title from './components/Title';

const RestaurantDetails = () => {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      {/* inner bg */}
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navbar />

        <Header />

        {/* Description section */}
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[70%] rounded p-3 shadow'>
            <RestaurantNavbar />
            <Title />
            <Ratings />
            <Description />
            <Images />
            <Reviews />
          </div>

          <div className='relative w-[27%] text-reg'>
           <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  );
};
export default RestaurantDetails;
