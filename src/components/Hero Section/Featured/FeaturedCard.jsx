import React from 'react'
import Button from '../../Button'
const FeaturedCard = (props) => {
  return (
    <div className="mb-16">
        <img src={props.imgSrc} alt="nyjah-pic"/>
        <div className="flex items-center">
            <p className="text-2xl mt-4 mb-6 mr-auto">{props.name}</p>
            <Button btnTitle="Shop"/>
        </div>
    </div>
  )
}

export default FeaturedCard