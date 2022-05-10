function Footer() {
  return (
    <div>
      <div className='bg-red-700 text-white py-5'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 text-center md:text-left md:grid-cols-3'>
            <div className='flex flex-col space-y-3'>
              <span>Customer Service</span>
              <span>Terms & Privacy Policy</span>
              <span>Return Policy</span>
            </div>
            <div className='flex flex-col space-y-3'>
              <span>Language</span>
              <span>Myanmar(Unicode)</span>
              <span>English</span>
            </div>
            <div className='flex flex-col space-y-3'>
              <span>Contact Us</span>
              <span>No 178,MyayKha St, Mayangone, 6miles, Yangon, Myanmar</span>
              <span>+95 9 345 454 345</span>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center py-3'>
        All rights reserved. Made with all the love in ShopDoora Co., Ltd
      </p>
    </div>
  )
}

export default Footer
