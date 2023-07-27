const Form = () => {
  return (
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
                By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Standard
                text message rates may apply. You may opt out of receiving text messages at any time.
              </p>
            </div>
  )
}
export default Form