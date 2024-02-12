import React from 'react'
import Essentials from './EssentialsSection.jsx/Essentials'
import FeaturedSection from './Featured/FeaturedSection'
import MoreSection from './About/MoreSection'
import LogoSb from './LogoSb'
const ShopSection = () => {
  return (
    <div className="max-lg:px-5 mt-20">
        <Essentials />
        <FeaturedSection />
        <MoreSection />
        <LogoSb />
    </div>
  )
}

export default ShopSection