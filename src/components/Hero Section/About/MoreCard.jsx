import React from 'react'

const MoreCard = (props) => {
  return (
    <div className="mb-28">
      <a href={props.linkHref}>
        <img src={props.imgSrc} alt="card-img"/>
        <p className="mt-3 mb-6 text-xl font-normal">{props.cardTitle}</p>
        <button className="font-medium border-b-2 border-black ">Learn More</button>
      </a>
    </div>

  )
}

export default MoreCard