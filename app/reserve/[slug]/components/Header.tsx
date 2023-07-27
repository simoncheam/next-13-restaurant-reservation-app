const Header = () => {
  return (
    <div>
    <h3 className='font-bold'>You're almost done</h3>
    <div className='mt-t flex'>
      <img
        className='w-32 h-18 rounded'
        src='https://resizer.otstatic.com/v2/photos/xlarge/3/42676988.webp'
        alt=''
      />
      <div className='ml-4'>
        <h1 className='text-3xl font-bold'> Restaurant Collective</h1>
        <div className='flex mt-3'>
          <p className='mr-6'>Tues, 22, 2023</p>
          <p className='mr-6'>7:30</p>
          <p className='mr-6'>3 people</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Header