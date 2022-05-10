import { items } from '../data'
import SingleItem from './SingleItem'
import phoneIcon from '../icons/CategoryIcons/Asset42.png'

function Phone() {
  console.log(items)
  return (
    <div className='max-w-4xl mx-auto my-3'>
      <div className='flex justify-between my-3'>
        <div className='flex justify-center items-center mx-3 md:mx-0'>
          <img src={phoneIcon} alt='' className='w-12 h-12 mr-2' />
          <span className='text-xl font-semibold'>PHONE</span>
        </div>
        <span className='text-gray-500'>View more</span>
      </div>
      <div className='flex flex-col space-y-2 md:flex-row md:space-x-3 md:space-y-0'>
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

export default Phone
