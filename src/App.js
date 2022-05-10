import Ads from './components/Ads'
import Buy1get1 from './components/Buy1get1'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Laptop from './components/Laptop'
import Navbar from './components/Navbar'
import NewArrivals from './components/NewArrivals'
import Phone from './components/Phone'
import Promotion from './components/Promotion'
import Tablet from './components/Tablet'
import ViewByBrands from './components/ViewByBrands'

function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <Buy1get1 />
      <Promotion />
      <div className='w-full h-1 bg-gray-200'></div>
      <NewArrivals />
      <Ads />
      <ViewByBrands />
      <div className='w-full h-1 bg-gray-200'></div>
      <Phone />
      <div className='w-full h-1 bg-gray-200'></div>
      <Laptop />
      <div className='w-full h-1 bg-gray-200'></div>
      <Tablet />
      <Footer />
    </>
  )
}

export default App
