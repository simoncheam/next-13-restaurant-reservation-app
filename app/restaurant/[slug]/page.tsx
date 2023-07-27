'use client'

import Link from "next/link"
import Navbar from "../../components/Navbar"

const RestaurantDetails = () => {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
  {/* inner bg */}
  <main className='max-w-screen-2xl m-auto bg-white'>
    {/* Navbar */}
    <Navbar />
    {/* navbar */}

    {/* Header */}
    <div className='h-96 overflow-hidden'>
      <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
        <h1 className='text-7xl text-white capitalize text-shadow text-center'>Havana Grill (Miami)</h1>
      </div>
    </div>
    {/* Header */}

    {/* Description section */}
    <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        {/* Restaurant navbar */}
        <nav className='flex text-reg border-b pb-2'>
          {/* //TODO: update to dynamic routes */}
          <Link href='/restaurant/havana-grill' className='mr-7'>
            Overview
          </Link>
          <Link href='/restaurant/havana-grill/menu' className='mr-7'>
            Menu
          </Link>
        </nav>
        {/* Restaurant navbar */}
        {/* Title */}
        <div className='mt-4 border-b pb-6'>
          <h1 className='font-bold text-6xl'>Havana Grill</h1>
        </div>

        {/* Title */}

        {/* Ratings */}
        <div className='flex items-end'>
          <div className='ratings mt-2 flex items-center'>
            <p>****</p>
            <p className='text-reg ml-3'>4.9</p>
          </div>
          <div>
            <p className='text-reg ml-3'>300 reviews</p>
          </div>
        </div>
        {/* Ratings */}
        {/* Description */}
        <div className='mt-4'>
          <p className='text-lg font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab aut ipsam quam at veritatis, nobis dicta,
            quos, quo reiciendis ut temporibus! Illum eius delectus quaerat voluptate optio dolorum saepe.
          </p>
        </div>

        <div>
          <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>5 photos</h1>
          <div className='flex flex-wrap'>
            <img
              src='https://resizer.otstatic.com/v2/photos/xlarge/3/42676988.webp'
              alt=''
              className='w-56 h-44 mr-1 mb-1'
            />
            <img
              src='https://resizer.otstatic.com/v2/photos/xlarge/2/48537316.webp'
              alt=''
              className='w-56 h-44 mr-1 mb-1'
            />
            <img
              src='https://resizer.otstatic.com/v2/photos/xlarge/3/51307747.webp'
              alt=''
              className='w-56 h-44 mr-1 mb-1'
            />
            <img
              src='https://resizer.otstatic.com/v2/photos/xlarge/3/51307749.webp'
              alt=''
              className='w-56 h-44 mr-1 mb-1'
            />
            <img
              src='https://resizer.otstatic.com/v2/photos/xlarge/2/43853967.webp'
              alt=''
              className='w-56 h-44 mr-1 mb-1'
            />
          </div>
        </div>
        {/* Description section */}
        {/* Images */}

        {/* Images */}

        <div>
          <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>What people are saying...</h1>
          <div>
            {/* Review card */}
            <div className='border-bottom-b mb-7 pb7'>
              <div className=' flex'>
                <div className='w-1/6 flex flex-col items-center'>
                  <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center'>
                    <h2 className='text-white text-2xl'>MJ</h2>
                  </div>
                  <p className='text-center'>Michael Jordan</p>
                </div>
                <div className='ml-10 w-5/6'>
                  <div className='flex items-center'>
                    <div className='flex mr-5'>****</div>
                  </div>
                  <div className='mt-5'>
                    <p className='text-lg font-light'>This place is good!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review card */}
          </div>
        </div>
      </div>

      {/* //! reservation card portion */}
      <div className='relative w-[27%] text-reg'>
        <div className='fixed bg-white rounded p-3 shadow w-[15%]'>
          <div className='text-center border-b pb-2 font-bold'>
            <h4 className='mr-7 text-lg'>Make a reservation</h4>
          </div>
          <div className='my-3 flex flex-col'>
            <label htmlFor=''>Party Size</label>
            <select name='' id='' className='py-3 border-b font-light'>
              <option value=''>1 person</option>
              <option value=''>2 person</option>
              <option value=''>3 person</option>
            </select>
          </div>
          <div className=' flex justify-between'>
            <div className='flex flex-col w-[48%]'>
              <label htmlFor=''>Date</label>
              <input type='text' className='py-3 border-b font-light w-28' />
            </div>
            <div className='flex flex-col w-[48%]'>
              <label htmlFor=''>Time</label>
              <select name='' id='' className='py-3 border-b font-light'>
                <option value=''>7:30 AM</option>
                <option value=''>9:30 AM</option>
              </select>
            </div>
          </div>
        <div className="mt-5">
          <button className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'>Find a time</button>
        </div>
        </div>
      </div>

    </div>
  </main>
</main>
  )
}
export default RestaurantDetails