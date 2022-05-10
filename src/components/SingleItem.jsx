import { HeartIcon } from '@heroicons/react/solid'

function SingleItem({ name, price, image, color }) {
  return (
    <div className='flex flex-col space-y-1 relative border-3 mx-3 md:mx-0 '>
      <div className='border-2 rounded-full border-black bg-black absolute h-5 w-5 right-2 top-2'>
        <HeartIcon className='text-white' />
      </div>
      <img src={image} alt='' className='rounded-xl' />
      <h3>{name}</h3>
      <span className={color ? 'text-semibold text-red-600' : 'text-semibold'}>
        {price.toLocaleString()} Ks
      </span>
    </div>
  )
}

export default SingleItem
