import { HeartIcon } from '@heroicons/react/solid'

function PromotionSingleItem({ name, originalPrice, discountedPrice, image }) {
  return (
    <div className='flex flex-col space-y-1 relative border-3 mx-3 md:mx-0'>
      <div className='border-2 rounded-full border-black bg-black absolute h-5 w-5 right-2 top-2'>
        <HeartIcon className='text-white' />
      </div>
      <div className='absolute bg-red-600 px-3 text-white'>
        <span>00% off</span>
      </div>
      <img src={image} alt='' className='rounded-xl' />
      <h3>{name}</h3>
      <span className='text-red-600 font-bold'>
        {discountedPrice.toLocaleString()} Ks
      </span>
      <span className='text-gray-500 line-through'>
        {originalPrice.toLocaleString()} Ks
      </span>
    </div>
  )
}

export default PromotionSingleItem
