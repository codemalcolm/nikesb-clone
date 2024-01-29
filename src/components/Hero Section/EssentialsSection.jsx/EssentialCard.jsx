import React from 'react'

const EssentialCard = (props) => {
  return (
    <>
        <a href={props.linkHref}>
          <div className="flex flex-column">
            <img src={props.imgSrc} alt="essentials-img"/>
          </div>
          <p className="text-2xl font-normal mt-2">Shoes</p>
        </a>
    </>
  )
}

export default EssentialCard