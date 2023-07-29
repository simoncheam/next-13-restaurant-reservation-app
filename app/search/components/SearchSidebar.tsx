import { Cuisine, Location, PRICE } from '@prisma/client';
import Link from 'next/link';
import Price from '../../components/Price';

const SearchSidebar = ({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string | undefined; cuisine?: string | undefined; price?: string | undefined };
}) => {
  // create DRY price array
  const prices = [
    { price: PRICE.CHEAP, label: '$',
    className: 'border w-full text-reg text-center font-light rounded-l p2' },
    { price: PRICE.REGULAR, label: '$$',
    className: 'border w-full text-reg text-center font-light p2' },
    { price: PRICE.EXPENSIVE, label: '$$$',
    className: 'border w-full text-reg text-center font-light rounded-r p2' },
  ];

  return (
    <div className='w-1/5'>
      <div className='border-b pb-4 flex flex-col'>
        <h1>Regions</h1>
        {locations.map((location) => (
          // ! use link to add query params to url
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams, // destructuring searchParams
                city: location.name,
              },
            }}
            key={location.id}
            className='font-light text-reg capitalize'>
            {location.name}
          </Link>
        ))}
      </div>
      <div className='border-b pb-4 flex flex-col'>
        <h1>Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams, // destructuring searchParams
                cuisine: cuisine.name,
              },
            }}
            key={cuisine.id}
            className='font-light text-reg capitalize'>
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className='mt-3 pb-4'>
        <h1 className='mb-2'>Price</h1>
        <div className='flex'>
          {prices.map(({ price, label, className }) => (
            <Link
              href={{
                pathname: '/search',
                query: {
                  ...searchParams, // destructuring searchParams
                  price: price, // destructuring
                },
              }}
              className={className}>
              {label}
            </Link>
          ))}

          {/* <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams, // destructuring searchParams
                price: PRICE.CHEAP,
              },
            }}
            className='border w-full text-reg font-light rounded-l p2'>
            $
          </Link>
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams, // destructuring searchParams
                price: PRICE.REGULAR,
              },
            }}
            className='border-r border-t border-b w-full text-reg font-light  p2'>
            $$
          </Link>
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams, // destructuring searchParams
                price: PRICE.EXPENSIVE,
              },
            }}
            className='border-r border-t border-b w-full text-reg font-light rounded-r p2'>
            $$$
          </Link> */}
        </div>
      </div>
    </div>
  );
};
export default SearchSidebar;
