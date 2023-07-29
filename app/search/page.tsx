import { PrismaClient } from '@prisma/client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSidebar from './components/SearchSidebar';

const prisma = new PrismaClient();

const select = {
  id: true,
  name: true,
  main_image: true,
  price: true,
  cuisine: true,
  location: true,
  slug: true,
};

const fetchRestaurantsByCity = (city: string | undefined) => {
  if (!city) {
    return prisma.restaurant.findMany({ select });
  }

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

const Search = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);

  return (
    <>
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar />

        {/* if restaurants found show map of all restaurants, else show "no restaurants found" */}

        <div className='w-5/6 '>
          {restaurants.length ? (
            restaurants.map((restaurant) =>
            <RestaurantCard key={restaurant.id} restaurant={restaurant}/>)
          ) : (
            <div className='w-5/6'>No restaurants found in " {searchParams.city}"</div>
          )}
        </div>
      </div>
    </>
  );
};
export default Search;
