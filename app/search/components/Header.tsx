import SearchBar from '../../components/SearchBar';

const Header = () => {
  return (
    <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>

      {/* client component */}
      <SearchBar />
    </div>
  );
};
export default Header;
