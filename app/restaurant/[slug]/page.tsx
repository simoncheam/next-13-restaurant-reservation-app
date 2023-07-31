// 'use client';

import { PrismaClient, Review } from '@prisma/client';
import Description from './components/Description';
import Images from './components/Images';
import Ratings from './components/Rating';
import ReservationCard from './components/ReservationCard';
import RestaurantNavbar from './components/RestaurantNavbar';
import Reviews from './components/Reviews';
import Title from './components/Title';

const prisma = new PrismaClient();

interface Restaurant {
  id?: number;
  name?: string;
  images?: string[];
  description?: string;
  slug?: string;
  reviews: Review[];
}

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant?.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      cuisine: true,
      slug: true,
      createdAt: true,
      updatedAt: true,
      reviews: true,
    },
  });
  return restaurant;
};

const RestaurantDetails = async ({params}:{params: {slug: string}}) => {
  // get slug by url params
  const slug = await params.slug;

  const restaurant = await fetchRestaurantBySlug(slug);

  console.log(restaurant);

  if (!restaurant) {
    throw new Error();
  }

  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        {/* //* restaurant navbar needs slug */}
        <RestaurantNavbar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Ratings reviews={restaurant.reviews} />
        <Description description={restaurant.description}/>
        <Images images={restaurant.images}/>
        <Reviews reviews={restaurant.reviews} />
      </div>

      <div className='relative w-[27%] text-reg'>
        <ReservationCard />
      </div>
    </>
  );
};
export default RestaurantDetails;
