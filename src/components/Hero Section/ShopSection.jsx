import React from 'react'
import Essentials from './EssentialsSection.jsx/Essentials'
import FeaturedSection from './Featured/FeaturedSection'
import MoreSection from './About/MoreSection'
const ShopSection = () => {
  return (
    <div className="px-5 mt-20">
        <Essentials />
        <FeaturedSection />
        <MoreSection />
    </div>
  )
}

export default ShopSection