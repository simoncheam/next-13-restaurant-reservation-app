import { PrismaClient } from '@prisma/client';
import Header from '../components/Header';
import Menu from '../components/Menu';
import RestaurantNavbar from '../components/RestaurantNavbar';


// getting menu items for the menu page

const prisma = new PrismaClient();

const fetchRestaurantMenuItems = async (slug: string) => {

  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      items: true,
    }

  });

  if(!restaurant) {
    throw new Error('No restaurant found');
  }

  return restaurant.items;
}


const RestaurantMenuPage = async ({params}: {params: {slug: string} }) => {

const menu = await fetchRestaurantMenuItems(params.slug);


  return (
    <>
        <div className='bg-white w-[100%] rounded p-3 shadow'>
          <RestaurantNavbar slug={params.slug} />
          <Menu menu={menu} />
        </div>
    </>
  );
};
export default RestaurantMenuPage;
