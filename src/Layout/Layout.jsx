import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Layout = ({ children }) => {
  return (


    <div className='min-h-screen'>
      <Header />
      <div>
        {children}
      </div>

      <Footer />

    </div>



  )
}

export default Layout