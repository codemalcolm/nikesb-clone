import React from 'react'
import Button from '../../Button'
const FeaturedCard = (props) => {
  return (
    <div className="mb-16">
        <img src={props.imgSrc} alt="nyjah-pic" width={500} height={600}/>
        <>
            <p className="text-2xl mt-4 mb-6 mr-auto">{props.name}</p>
            <Button btnTitle="Shop"/>
        </>
    </div>
  )
}

export default FeaturedCard