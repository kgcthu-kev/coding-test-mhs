import { items, promotionItems } from '../data'
import SingleItem from './SingleItem'

function ItemList({ title, icon, bg }) {
  return (
    <div className={`${bg ? 'bg-yellow-400 py-2' : ''}`}>
      <div className='max-w-4xl mx-auto my-3'>
        <div className='flex justify-between my-3 mx-3 md:mx-0'>
          <div className='flex justify-center items-center'>
            {icon && <img src={icon} alt='' className='w-12 h-12 mr-2' />}
            <span className='text-xl font-semibold'>{title.toUpperCase()}</span>
          </div>
          <span className='text-gray-500'>View more</span>
        </div>
        {title === 'promotion' ? (
          <div className='grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-3'>
            {promotionItems.map((item) => (
              <SingleItem
                key={item.id}
                name={item.name}
                originalPrice={item.originalPrice}
                discountedPrice={item.discountedPrice}
                image={item.image}
              />
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </div>
  )
}

export default ItemList
