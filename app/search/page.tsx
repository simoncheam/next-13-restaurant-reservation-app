'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'

const Search = () => {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
    {/* inner bg */}
    <main className='max-w-screen-2xl m-auto bg-white'>
      {/* Navbar */}
      <Navbar />
      {/* navbar */}

      {/* Header */}
      <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
        {/* search bar */}
        <div className='text-left py-3 m-auto flex justify-center mt-10'>
          <input className='rounded text-lg mr-3 p-2 w-[450px] ' placeholder='state, city, or town' />
          <button className='bg-red-600 px-9 py-2 text-white rounded'>Let's go</button>
        </div>
      </div>

      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <div className='w-1/5'>
          <div className='border-b pb-4'>
            <h1>Regions</h1>
            <p className='font-light text-reg'>Toronto</p>
            <p className='font-light text-reg'>Ottawa</p>
            <p className='font-light text-reg'>Montreal</p>
            <p className='font-light text-reg'>Hamilton</p>
            <p className='font-light text-reg'>Kingston</p>
            <p className='font-light text-reg'>Niagara</p>
          </div>
          <div className='border-b pb-4'>
            <h1>Cuisine</h1>
            <p className='font-light text-reg'>Mexican</p>
            <p className='font-light text-reg'>Indian</p>
            <p className='font-light text-reg'>Italian</p>
            <p className='font-light text-reg'>Japanese</p>
          </div>
          <div className='mt-3 pb-4'>
            <h1 className='mb-2'>Price</h1>
            <div className='flex'>
              <button className='border w-full text-reg font-light rounded-l p2'>$</button>
              <button className='border-r border-t border-b w-full text-reg font-light  p2'>$$</button>
              <button className='border-r border-t border-b w-full text-reg font-light rounded-r p2'>$$$</button>
            </div>
          </div>
        </div>
        <div className='w-5/6'>
          {/* restaurant card */}
          <div className='border-b flex pb-5'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-large/1/53683599.jpg'
              alt=''
              className='w-44 rounded'
            />
            <div className='pl-5'>
              <h2 className='text-3xl'>Some Restaurant Name</h2>
              <div className='flex items-start'>
                <div className='flex mb-2'>****</div>
                <p className='ml-2 text-sm'>Awesome</p>
              </div>

              <div className='mb-9'>
                <div className='font-light flex text-reg'>
                  <p className='mr-4'>$$$</p>
                  <p className='mr-4'>Mexican</p>
                  <p className='mr-4'>Toronto</p>
                </div>
              </div>
              <div className="text-red-600">
                <a href="">See More Info</a>
              </div>
            </div>
            {/* more info */}
          </div>
        </div>
      </div>
      {/* Search side bar */}

      {/* </div> */}
      {/* Header */}


    </main>
  </main>
  )
}
export default Search