import { PRICE, PrismaClient } from '@prisma/client';
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
  reviews: true,
};

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

// * create where object for prisma query (where)
interface whereParams {
  location?: { name: { equals: string } };
  cuisine?: { name: { equals: string } };
  price?: { equals: PRICE };
}

const fetchRestaurantsBySearchParams = (searchParams: SearchParams) => {
  // ! construct where object based on searchParams
  const where: whereParams = {};

  // ! checks for city, cuisine, price
  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    // * add location property to where object
    where.location = location;
  }
  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };

    where.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };

    where.price = price;
  }
  console.log({ where })

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

//fetch locations
const fetchLocations = async () => {
  return prisma.location.findMany();
};

//fetch cuisines
const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

const Search = async ({ searchParams }: { searchParams: { city?: string; cuisine?: string; price?: PRICE } }) => {
  const restaurants = await fetchRestaurantsBySearchParams(searchParams);

  // ! get all locations and cuisines
  // ! pass them to SearchSidebar
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();

  return (
    <>
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar locations={location} cuisines={cuisine} searchParams={searchParams} />

        {/* //! if restaurants found show map of all restaurants, else show "no restaurants found" */}

        <div className='w-5/6 '>
          {restaurants.length ? (
            restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
          ) : (
            <div className='w-5/6'>No restaurants found in " {searchParams.city}"</div>
          )}
        </div>
      </div>
    </>
  );
};
export default Search;
