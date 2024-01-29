import React from 'react'
import FeaturedCard from './FeaturedCard'
const FeaturedSection = () => {
  return (
    <div>
        <h2 class="text-2xl mb-6 font-semibold">Featured</h2>
        <div className="flex-column"></div>
        <FeaturedCard 
            imgSrc={"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F07%2Fnyjah-huston-nike-sb-njyah-free-2-interview-release-date-info-1.jpg?cbr=1&q=90"}
            name={"Nyjah"}
        />
        <FeaturedCard 
            imgSrc={"https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/3b9a7e16-00ed-4980-8961-23e5e7474c10/nike-sb-inside-nike-skateboarding.png"}
            name={"Grant Taylor"}
        />
    </div>
  )
}

export default FeaturedSection