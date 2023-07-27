import Link from "next/link";
import Navbar from "../../../components/Navbar";
const RestaurantMenuPage = () => {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      {/* inner bg */}
      <main className='max-w-screen-2xl m-auto bg-white'>
        {/* Navbar */}
        <Navbar />
        {/* navbar */}

        {/* Header */}
        <div className='h-96 overflow-hidden'>
          <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
            <h1 className='text-7xl text-white capitalize text-shadow text-center'>Havana Grill (Miami)</h1>
          </div>
        </div>
        {/* Header */}

        {/* Menu section */}
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[100%] rounded p-3 shadow'>
            {/* Restaurant navbar */}
            <nav className='flex text-reg border-b pb-2'>
            <Link href='/restaurant/havana-grill' className='mr-7'>
            Overview
          </Link>
          <Link href='/restaurant/havana-grill/menu' className='mr-7'>
            Menu
          </Link>
            </nav>
            {/* //* Restaurant navbar */}

            <main className='bg-white mt-5'>
              <div>
                <div className='mt-4 pb-1 mb-1'>
                  <h1 className='font-bold text-4xl'>Menu</h1>
                </div>
                <div className='flex flex-wrap justify-between'>
                  <div className='border rounded p-3 w-[49%] mb-3'>
                    <h3 className='font-bold text-lg'>Steak and wine</h3>
                    <p className='font-light mt-1 text-sm'>A good steak with wine</p>
                    <p className='mt-7'>$99</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </main>
  );
};
export default RestaurantMenuPage;