import React from 'react'

const MoreCard = (props) => {
  return (
    <div>
        <img src={props.imgSrc} alt="card-img"/>
        <p className="">{props.cardTitle}</p>
    </div>
  )
}

export default MoreCard