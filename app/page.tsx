import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client';

export interface RestaurantCardType {
  id?: number;
  name?: string;
  main_image?: string;
  images?: string[];
  description?: string;
  cuisine?: Cuisine;
  location?: Location;
  price?: PRICE;
  createdAt?: Date;
  updatedAt?: Date;
  slug?: string;
}

const prisma = new PrismaClient();

// ! returns promise of RestaurantCardType
const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      images: true,
      description: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return restaurants;


};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  // console.log(restaurants);

  return (
    <>
      <Header />

      <div className='py-3 px-36 mt-10 flex flex-wrap'>
        {restaurants.map((restaurant: RestaurantCardType) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
}
