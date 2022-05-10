import { DotsHorizontalIcon } from '@heroicons/react/outline'
import image from '../icons/CategoryIcons/Asset42.png'

function Categories() {
  return (
    <div className='max-w-4xl mx-auto my-6'>
      <h1 className='text-center font-bold text-xl mb-4'>CATEGORIES</h1>
      <div className='flex justify-center my-8 items-center space-x-4 text-center'>
        <div className='flex flex-col items-center justify-center h-24 w-24'>
          <img src={image} alt='' />
          <h3 className='font-semibold'>Simple Category</h3>
        </div>
        <div className='flex flex-col items-center justify-center h-24 w-24'>
          <img src={image} alt='' />
          <h3 className='font-semibold'>Simple Category</h3>
        </div>{' '}
        <div className='flex flex-col items-center justify-center h-24 w-24'>
          <img src={image} alt='' />
          <h3 className='font-semibold'>Simple Category</h3>
        </div>{' '}
        <div className=' flex-col items-center justify-center h-24 w-24 hidden md:flex'>
          <img src={image} alt='' />
          <h3 className='font-semibold'>Simple Category</h3>
        </div>{' '}
        <div className=' flex-col items-center justify-center h-24 w-24 hidden md:flex'>
          <img src={image} alt='' />
          <h3 className='font-semibold'>Simple Category</h3>
        </div>{' '}
        <div className=' flex-col items-center justify-center h-24 w-24 hidden md:flex'>
          <img src={image} alt='' />
          <h3 className='font-semibold'>Simple Category</h3>
        </div>{' '}
        <div className=' flex-col items-center justify-center h-24 w-24 hidden md:flex'>
          <img src={image} alt='' />
          <h3 className='font-semibold'>Simple Category</h3>
        </div>
        <div className='flex flex-col items-center justify-center h-24 w-24'>
          <div className='border-2 rounded-full  bg-gray-300 '>
            <DotsHorizontalIcon className='text-gray-600 h-12 w-12' />
          </div>
          <h3 className='font-semibold'>View all</h3>
        </div>
      </div>
    </div>
  )
}

export default Categories
