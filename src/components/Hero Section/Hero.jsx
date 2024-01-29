import React from 'react'
import PromoCard from './PromoCard'
import ShopSection from './ShopSection'

const Hero = () => {
  return (
    <main className="w-full sm:hidden">
        <h3 className="px-5 mt-8 mb-20 text-2xl font-semibold">Nike SB</h3>
        <PromoCard productName={"the Leo 1"}/>
        <ShopSection />
    </main>
  )
}

export default Hero