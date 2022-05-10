import { items } from '../data'
import SingleItem from './SingleItem'

function NewArrivals() {
  console.log(items)
  return (
    <div className='max-w-4xl mx-auto my-3'>
      <div className='flex justify-between my-3 mx-3 md:mx-0'>
        <h2 className='text-xl font-semibold'>New Arrivals</h2>
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

export default NewArrivals
