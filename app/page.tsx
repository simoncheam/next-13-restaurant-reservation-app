'use client';

import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [location, setLocation] = useState('');

  const router = useRouter();

  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      {/* inner bg */}
      <main className='max-w-screen-2xl m-auto bg-white'>
        {/* Navbar */}
        <Navbar />
        {/* Navbar */}
        {/* header */}
        <div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
          <div className='text-center mt-10'>
            <h1 className='text-white text-5xl font-bold mb-5'>Find your table for any occasion</h1>
            {/* search bar */}
            <div className='text-left py-3 m-auto flex justify-center mt-10'>
              <input
                className='rounded text-lg mr-3 p-2 w-[450px] '
                placeholder='state, city, or town'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button
                className='bg-red-600 px-9 py-2 text-white rounded'
                onClick={() => {
                  if (location === 'banana') return;
                  router.push(`/search`);
                }}>
                Let's go
              </button>
            </div>
            {/* search bar */}
          </div>
        </div>

        <div className='py-3 px-36 mt-10 flex flex-wrap'>
          {/* card */}

          {/* // TODO: will update to dynamic route */}
          <Link href='/restaurant/1'>
            <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
              <img
                src='https://resizer.otstatic.com/v2/photos/wide-huge/3/43853991.webp'
                alt=''
                className='w-full h-36'
              />
              <div className='p-1'>
                <h3 className='font-bold text-2xl bb-2'>Havana Grill</h3>
                <div className='flex items-start'>
                  <div className='flex mb-2'>****</div>
                  <p className='ml-2'>77 reviews</p>
                  {/* type of food, city */}
                </div>
                <div className='flex text-reg font-light capitalize'>
                  <p className=' mr-3 '>mexican</p>
                  <p className='mr-3'>$$$</p>
                  <p>miami</p>
                </div>
                <p className='text-reg mt-1 font-bold text-sm'>Booked 3 times today</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Cards */}
      </main>
    </main>
  );
}
