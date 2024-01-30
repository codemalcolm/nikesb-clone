import React from 'react'
import MoreCard from './MoreCard'

const MoreSection = () => {
  const cardObj = [
     {imgSrc: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_300,c_limit/cca3758f-f732-408b-9536-9b00f4d35de9/nike-sb-sou%C4%8D%C3%A1st-nike-skateboarding.png",
      cardTitle: "The SB Vault"},
      {imgSrc:"https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_300,c_limit/2b656f1e-b982-4122-aa62-e898a7316da5/nike-sb-inside-nike-skateboarding.jpg",
      cardTitle:"Meet the Team"},
      {imgSrc:"https://www.nikesb.com/assets/uploads/hero/NAMCHI_SLAG_DUNK-01.jpg",
      cardTitle:"Skate Like a girl"},
    ]
  return (
    <div>
        <h2 class="text-xl mb-6 font-medium">More from Nike Skateboarding</h2>
        <MoreCard imgSrc={"https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_300,c_limit/cca3758f-f732-408b-9536-9b00f4d35de9/nike-sb-sou%C4%8D%C3%A1st-nike-skateboarding.png"} 
        cardTitle={"The SB Vault"}
        linkHref={"https://www.nikesb.com/the-vault"}
        />
    </div>
  )
}

export default MoreSection