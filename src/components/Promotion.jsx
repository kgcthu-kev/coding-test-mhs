import { promotionItems } from '../data'
import PromotionSingleItem from './PromotionSingleItem'

function Promotion() {
  return (
    <div className='max-w-4xl mx-auto my-3 py-3'>
      <div className='flex justify-between my-3 mx-3 md:mx-0'>
        <h2 className='text-xl font-semibold'>PROMOTIONS</h2>
        <span className='text-gray-500'>View more</span>
      </div>
      <div className='grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-3'>
        {promotionItems.map((item) => (
          <PromotionSingleItem
            key={item.id}
            name={item.name}
            originalPrice={item.originalPrice}
            discountedPrice={item.discountedPrice}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Promotion
