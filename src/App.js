// components
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Ads from './components/Ads'
import ViewByBrands from './components/ViewByBrands'
import Footer from './components/Footer'
import ItemList from './components/ItemList'

// icons
import phoneIcon from './icons/CategoryIcons/Asset42.png'
import laptopIcon from './icons/CategoryIcons/Asset43.png'
import tabletIcon from './icons/CategoryIcons/Asset45.png'

function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <ItemList title='buy 1 get 1' bg />
      <ItemList title='promotion' />
      <div className='w-full h-1 bg-gray-200'></div>
      <ItemList title='new arrivals' />
      <Ads />
      <ViewByBrands />
      <div className='w-full h-1 bg-gray-200'></div>
      <ItemList title='phone' icon={phoneIcon} />
      <div className='w-full h-1 bg-gray-200'></div>
      <ItemList title='laptop' icon={laptopIcon} />
      <div className='w-full h-1 bg-gray-200'></div>
      <ItemList title='tablet' icon={tabletIcon} />
      <Footer />
    </>
  )
}

export default App
