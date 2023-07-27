'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
const RestaurantReservation = () => {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      {/* inner bg */}
      <main className='max-w-screen-2xl m-auto bg-white'>
        {/* Navbar */}
        <Navbar />
        {/* navbar */}

        <div className='border-t h-screen'>
          <div className='py-9 w-3/5 m-auto'>
            {/* Header */}
            <div>
              <h3 className='font-bold'>You're almost done</h3>
              <div className='mt-t flex'>
                <img
                  className='w-32 h-18 rounded'
                  src='https://resizer.otstatic.com/v2/photos/xlarge/3/42676988.webp'
                  alt=''
                />
                <div className='ml-4'>
                  <h1 className='text-3xl font-bold'> Restaurant Collective</h1>
                  <div className='flex mt-3'>
                    <p className='mr-6'>Tues, 22, 2023</p>
                    <p className='mr-6'>7:30</p>
                    <p className='mr-6'>3 people</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Header */}

            {/* Form */}
            <div className='mt-10 flex flex-wrap justify-between w-[660px]'>
              <input placeholder='first name' type='text' className='border rounded p-3 w-80 mb-4' />
              <input placeholder='last name' type='text' className='border rounded p-3 w-80 mb-4' />
              <input placeholder='phone number' type='text' className='border rounded p-3 w-80 mb-4' />
              <input placeholder='email' type='text' className='border rounded p-3 w-80 mb-4' />
              <input placeholder='special occasion? (optional)' type='text' className='border rounded p-3 w-80 mb-4' />
              <input placeholder='special request? (optional)' type='text' className='border rounded p-3 w-80 mb-4' />
              <button className='bg-red-600 w-full p-3 font-bold disabled:bg-gray-300 rounded text-white'>
                Complete Reservation
              </button>
              <p className='mt-4 text-sm'>
                {' '}
                By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Standard
                text message rates may apply. You may opt out of receiving text messages at any time.
              </p>
            </div>
            {/* Form */}
          </div>
        </div>
      </main>
    </main>
  );
};
export default RestaurantReservation;
