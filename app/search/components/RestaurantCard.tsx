import { Cuisine, Location, PRICE, Review } from '@prisma/client';
import Link from 'next/link';
import calculateReviewRatingAverage from '../../../utilities/calculateReviewRatingAverage';
import Price from '../../components/Price';
import Stars from '../../components/Stars';

interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  reviews: Review[];
}

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantCardType }) => {
  // Calculates average rating
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);

    // conditional rating text logic

    // above 4
    if (rating > 4) return 'Awesome';
    // between 3 and 4
    else if (rating > 3 && rating <= 4) return 'Good';
    // between 2 and 3
    else if (rating > 0 && rating <= 3) return 'Average';
    else return ''; // unrated
  };

  return (
    <div className='border-b flex pb-5 ml-4'>
      <img src={restaurant.main_image} alt='' className='w-44 h-36 rounded' />
      <div className='pl-5'>
        <h2 className='text-3xl'>{restaurant.name}</h2>
        <div className='flex items-start'>
          <div className='flex mb-2'>
            <Stars reviews={restaurant.reviews} />
          </div>
          <p className='ml-2 text-sm'>{renderRatingText()}</p>
          <p className='ml-2 text-sm'>
            {restaurant.reviews.length} Review{restaurant.reviews.length === 1 ? '' : 's'}
          </p>
        </div>

        <div className='mb-9'>
          <div className='font-light flex text-reg'>
            <Price price={restaurant.price} />
            <p className='mr-4 capitalize'>{restaurant.cuisine.name}</p>
            <p className='mr-4 capitalize'>{restaurant.location.name}</p>
          </div>
        </div>
        <div className='text-red-600'>
          <Link href={`/restaurant/${restaurant.slug}`}>See More Info</Link>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
