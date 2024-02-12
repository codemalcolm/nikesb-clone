import React from 'react'

const EssentialCard = (props) => {
  return (
    <>
        <a href={props.linkHref}>
          <div className="flex flex-column">
            <div className="">
              <img 
              className="object-fit bg-cover"
              width={720}
              height={720}
              src={props.imgSrc} 
              alt="essentials-img"
              />
            </div>
          </div>
          <p className="text-2xl font-normal mt-4">{props.cardName}</p>
        </a>

    </>
  )
}

export default EssentialCard