import React from 'react'
import PreHeader from "./PreHeader"
import Header from './Header'
import PromoStrip from './PromoStrip'

const NavBar = () => {
  return (
    <div className="w-full">
        <PreHeader />
        <Header />
        <PromoStrip />
    </div>
  )
}

export default NavBar