import React from 'react'
import EssentialCard from './EssentialCard'

const cards = [
        <EssentialCard linkHref={"https://www.nike.com/w/skateboarding-shoes-8mfrfzy7ok"} 
        imgSrc={"https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_300,c_limit/d6cfb86c-0a19-49b3-aaea-36b26bfb3564/nike-sb-sou%C4%8D%C3%A1st-nike-skateboarding.png"}
        cardName={"Shoes"}

        />,
        <EssentialCard linkHref={"https://www.nike.com/w/skateboarding-shoes-8mfrfzy7ok"} 
        imgSrc={"https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_300,c_limit/022189b5-188e-4cc7-8171-9b4afa7e6ab6/nike-sb-inside-nike-skateboarding.png"}
        cardName={"Clothing"}

        />,
        <EssentialCard linkHref={"https://www.nike.com/w/skateboarding-shoes-8mfrfzy7ok"} 
        imgSrc={"https://media.them.us/photos/5f5af2acd9f8a42ab2d561c1/1:1/w_800%2Ch_450%2Cc_limit/LeoBaker5-SpainSBGirlsTrip-SamMcGuire.jpg"}
        cardName={"Accessories"}

        />
]

const Essentials = () => {
  return (
    <div className="mb-36">
        <h2 className="text-2xl mb-6 font-semibold">Skateboarding Essentials</h2>
        <div className="sm:flex gap-4 max-lg:flex-col">
        
        </div>
        
    </div>
  )
}

export default Essentials