import React from 'react'
import { Navbar, Footer,Welcome,Pricing } from '../Components'
function Home() {
  return (
    <>
      <Navbar className='sticky top-0 z-50' />
       
    
      <Welcome />
      <Pricing />
      <Footer />
    </>
  )
}

export default Home