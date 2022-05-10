import { HeartIcon } from '@heroicons/react/solid'

function SingleItem({
  name,
  price,
  image,
  color,
  originalPrice,
  discountedPrice,
}) {
  return (
    <div className='flex flex-col space-y-1 relative border-3 mx-3 md:mx-0 cursor-pointer'>
      <div className='border-2 rounded-full border-black bg-black absolute h-5 w-5 right-2 top-2'>
        <HeartIcon className='text-white' />
      </div>
      {discountedPrice && (
        <div className='absolute bg-red-600 px-3 text-white'>
          <span>00% off</span>
        </div>
      )}
      <img src={image} alt='' className='rounded-xl' />
      <h3>{name}</h3>
      {price && (
        <span className={color ? 'text-red-600 font-bold' : 'font-bold'}>
          {price.toLocaleString()} Ks
        </span>
      )}
      {discountedPrice && (
        <span className='text-red-600 font-bold'>
          {discountedPrice.toLocaleString()} Ks
        </span>
      )}
      {originalPrice && (
        <span className='text-gray-500 line-through'>
          {originalPrice.toLocaleString()} Ks
        </span>
      )}
    </div>
  )
}

export default SingleItem
