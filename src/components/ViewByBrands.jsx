import { ReactComponent as AppleIcon } from '../icons/brand-logo/apple.svg'
import { ReactComponent as AsusIcon } from '../icons/brand-logo/asus.svg'
import { ReactComponent as HuaweiIcon } from '../icons/brand-logo/huawei.svg'
import { ReactComponent as LgIcon } from '../icons/brand-logo/lg.svg'
import { ReactComponent as NokiaIcon } from '../icons/brand-logo/nokia.svg'
import { ReactComponent as SamsungIcon } from '../icons/brand-logo/samsung.svg'
import { ReactComponent as SonyIcon } from '../icons/brand-logo/sony.svg'

function ViewByBrands() {
  return (
    <div className='max-w-4xl mx-auto my-6'>
      <h1 className='text-xl font-semibold my-3 mx-3 md:mx-0'>
        VIEW BY BRANDS
      </h1>
      <div className='flex justify-between items-center space-y-3 mx-3 md:flex-row md:space-y-0 md:mx-0'>
        <AppleIcon className='h-14 w-14 md:h-24 md:w-24' />
        <SamsungIcon className='h-14 w-14 md:h-24 md:w-24' />
        <HuaweiIcon className='h-14 w-14 md:h-24 md:w-24' />
        <LgIcon className='md:h-24 md:w-24 hidden md:block' />
        <NokiaIcon className='md:h-24 md:w-24 hidden md:block' />
        <AsusIcon className='md:h-24 md:w-24 hidden md:block' />
        <SonyIcon className='md:h-24 md:w-24 hidden md:block' />
        <span className='text-red-600 py-4 md:py-0 cursor-pointer'>
          View All
        </span>
      </div>
    </div>
  )
}

export default ViewByBrands
