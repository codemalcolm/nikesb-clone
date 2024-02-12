import React from 'react'
import PromoCard from './PromoCard'
import ShopSection from './ShopSection'

const Hero = () => {
  return (
    <main className="sm:mx-12">
        <h3 className="mt-8 mb-14 text-2xl font-semibold max-lg:mx-5">Nike SB</h3>
        <PromoCard productName={"the Leo 1"}/>
        <ShopSection />
    </main>
  )
}

export default Hero