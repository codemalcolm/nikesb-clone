import React from 'react'

const FooterLinkPop = (props) => {
  return (
    <div className="flex py-5">
        <button className="font-medium text-sm flex items-center"><span>{props.linkName}</span></button>
        <button className="ml-auto text-xl">+</button>
    </div>
  )
}

export default FooterLinkPop