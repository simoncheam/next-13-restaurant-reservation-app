'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {

  const [location, setLocation] = useState('');


  const router = useRouter();

  return (
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
        if (location === '') return;
        router.push(`/search?city=${location}`);
        setLocation('');
      }}>
      Let's go
    </button>
  </div>
  )
}
export default SearchBar