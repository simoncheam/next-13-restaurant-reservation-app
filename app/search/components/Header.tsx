const Header = () => {
  return (
    <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
    {/* search bar */}
    <div className='text-left py-3 m-auto flex justify-center mt-10'>
      <input className='rounded text-lg mr-3 p-2 w-[450px] ' placeholder='state, city, or town' />
      <button className='bg-red-600 px-9 py-2 text-white rounded'>Let's go</button>
    </div>
  </div>
  )
}
export default Header