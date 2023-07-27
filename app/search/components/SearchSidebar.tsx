const SearchSidebar = () => {
  return (
    <div className='w-1/5'>
    <div className='border-b pb-4'>
      <h1>Regions</h1>
      <p className='font-light text-reg'>Toronto</p>
      <p className='font-light text-reg'>Ottawa</p>
      <p className='font-light text-reg'>Montreal</p>
      <p className='font-light text-reg'>Hamilton</p>
      <p className='font-light text-reg'>Kingston</p>
      <p className='font-light text-reg'>Niagara</p>
    </div>
    <div className='border-b pb-4'>
      <h1>Cuisine</h1>
      <p className='font-light text-reg'>Mexican</p>
      <p className='font-light text-reg'>Indian</p>
      <p className='font-light text-reg'>Italian</p>
      <p className='font-light text-reg'>Japanese</p>
    </div>
    <div className='mt-3 pb-4'>
      <h1 className='mb-2'>Price</h1>
      <div className='flex'>
        <button className='border w-full text-reg font-light rounded-l p2'>$</button>
        <button className='border-r border-t border-b w-full text-reg font-light  p2'>$$</button>
        <button className='border-r border-t border-b w-full text-reg font-light rounded-r p2'>$$$</button>
      </div>
    </div>
  </div>
  )
}
export default SearchSidebar