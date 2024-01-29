import React from 'react'
import EssentialCard from './EssentialCard'
const Essentials = () => {
  return (
    <div className="mb-36">
        <h2 className="text-2xl mb-6 font-semibold">Skateboarding Essentials</h2>
        <EssentialCard linkHref={"https://www.nike.com/w/skateboarding-shoes-8mfrfzy7ok"} 
        imgSrc={"https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_300,c_limit/d6cfb86c-0a19-49b3-aaea-36b26bfb3564/nike-sb-sou%C4%8D%C3%A1st-nike-skateboarding.png"}
        />
    </div>
  )
}

export default Essentials