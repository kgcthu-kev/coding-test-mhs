import { items } from '../data'
import SingleItem from './SingleItem'
import tabletIcon from '../icons/CategoryIcons/Asset45.png'

function Tablet() {
  console.log(items)
  return (
    <div className='max-w-4xl mx-auto my-3'>
      <div className='flex justify-between my-3 mx-3 md:mx-0'>
        <div className='flex justify-center items-center'>
          <img src={tabletIcon} alt='' className='w-12 h-12 mr-2' />
          <span className='text-xl font-semibold'>TABLET</span>
        </div>
        <span className='text-gray-500'>View more</span>
      </div>
      <div className='grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-3 md:space-y-0'>
        {items.map((item) => (
          <SingleItem
            key={item.id}
            name={item.name}
            price={item.price}
            color
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Tablet
