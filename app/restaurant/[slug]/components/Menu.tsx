import { Item } from '@prisma/client';
import MenuCard from './MenuCard';

const Menu = ({ menu }: { menu: Item[] }) => {
  return (
    <main className='bg-white mt-5'>
      <div>
        <div className='mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>Menu</h1>
        </div>
        {menu.length ? (
          <div className='flex flex-wrap justify-between'>
            {menu.map((menuItem) => (
              <MenuCard key={menuItem.id} menuItem={menuItem} />
            ))}
          </div>
        ) : (
          <div className='flex flex-wrap justify-between'>
            <p>Sorry, no menu offered at this time</p>
          </div>
        )}
      </div>
    </main>
  );
};
export default Menu;
