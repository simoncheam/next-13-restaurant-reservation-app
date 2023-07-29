import Header from './components/Header';

const RestaurantLayout = ({
  children,
  params
}: { children: React.ReactNode;
params: {slug: string} }) => {

// const slug = params.slug;

  return (
    <main>
      <Header name={params.slug} />

      {/* Description section */}
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        {children}
      </div>
    </main>
  );
};
export default RestaurantLayout;
