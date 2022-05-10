import SearchIcon from '../icons/WebBannerAndAD/NavBarIcons/Asset32.png'
import Banner from '../icons/WebBannerAndAD/Banner1.jpg'
import logo from '../icons/WebBannerAndAD/logo.png'
import { ReactComponent as NavIcon1 } from '../icons/WebBannerAndAD/NavBarIcons/Asset33.svg'
import { ReactComponent as NavIcon2 } from '../icons/WebBannerAndAD/NavBarIcons/Asset34.svg'
import { ReactComponent as NavIcon3 } from '../icons/WebBannerAndAD/NavBarIcons/Asset35.svg'
import { ReactComponent as NavIcon4 } from '../icons/WebBannerAndAD/NavBarIcons/Asset36.svg'
import { useState } from 'react'
import { ViewListIcon, XIcon } from '@heroicons/react/solid'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '26rem',
      }}
    >
      {/* mobile */}

      <div className='max-w-4xl mx-auto flex py-4 items-center justify-between'>
        <div className='relative hidden md:block'>
          <img
            src={SearchIcon}
            alt=''
            className='absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer'
          />
          <input
            type='text'
            placeholder='Search product'
            aria-label='Search product'
            className='px-3 py-2 font-semibold text-white placeholder-gray-400 rounded-2xl border-0 ring-2 ring-gray-800 focus:ring-2 bg-black focus:border-0'
          />
        </div>
        <div>
          <img src={logo} alt='' className='h-14 w-14' />
        </div>
        {/* mobile */}
        <div className='block md:hidden'>
          {isOpen ? (
            <XIcon
              className='h-12 w-12 cursor-pointer z-50'
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <ViewListIcon
              className='h-12 w-12 cursor-pointer z-50'
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        {isOpen && (
          <div className='fixed top-0 left-0 h-auto space-x-1 w-full z-40 flex items-center justify-center bg-gray-50 dark:bg-gray-800 p-5 shadow-lg md:hidden rounded'>
            <nav>
              <ul>
                <ul className='flex-col space-y-4'>
                  <li>
                    <NavIcon1 className='h-11 w-11' />
                  </li>
                  <li>
                    <NavIcon2 className='h-11 w-11' />
                  </li>
                  <li>
                    <NavIcon3 className='h-11 w-11' />
                  </li>
                  <li>
                    <NavIcon4 className='h-11 w-11' />
                  </li>
                </ul>
              </ul>
            </nav>
          </div>
        )}
        <div className='hidden md:block'>
          <nav>
            <ul className='flex space-x-3'>
              <li>
                <NavIcon1 className='h-11 w-11' />
              </li>
              <li>
                <NavIcon2 className='h-11 w-11' />
              </li>
              <li>
                <NavIcon3 className='h-11 w-11' />
              </li>
              <li>
                <NavIcon4 className='h-11 w-11' />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
