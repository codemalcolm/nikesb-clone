import React from 'react'

const EssentialCard = (props) => {
  return (
    <div>
        <a href={props.linkHref}>
            <img 
            className="object-fit bg-cover"
            width={720}
            height={720}
            src={props.imgSrc} 
            alt="essentials-img"
            />
          <p className="text-2xl font-normal mt-1 mb-4 max-lg:text-xl">{props.cardName}</p>
        </a>

    </div>
  )
}

export default EssentialCard