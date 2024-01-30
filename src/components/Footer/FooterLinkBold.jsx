import React from 'react'

const FooterLinkBold = (props) => {
  return (
    <div className='py-2'>
        <a href={props.linkHref} className="font-medium text-sm">{props.linkName}</a>
    </div>
  )
}

export default FooterLinkBold