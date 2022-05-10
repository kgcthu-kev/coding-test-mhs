import { items } from '../data'
import SingleItem from './SingleItem'

function Buy1get1() {
  console.log(items)
  return (
    <div className='bg-yellow-400 py-4'>
      <div className='max-w-4xl mx-auto my-3'>
        <div className='flex justify-between my-3 mx-3 md:mx-0'>
          <h2 className='text-xl font-semibold'>BUY 1 GET 1</h2>
          <span className='font-semibold'>View more</span>
        </div>
        <div className='flex flex-col space-y-2 md:flex-row md:space-x-3 md:space-y-0'>
          {items.map((item) => (
            <SingleItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Buy1get1
