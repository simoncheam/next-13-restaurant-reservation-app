const Reviews = () => {
  return (
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
  );
};
export default Reviews;
