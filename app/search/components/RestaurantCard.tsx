import Link from 'next/link';

const RestaurantCard = () => {
  return (
    <div className='border-b flex pb-5'>
        <img src='https://resizer.otstatic.com/v2/photos/wide-large/1/53683599.jpg' alt='' className='w-44 rounded' />
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
          <div className='text-red-600'>
            <Link href='/restaurant/havana-grill'>See More Info</Link>
          </div>
        </div>
    </div>
  );
};
export default RestaurantCard;
