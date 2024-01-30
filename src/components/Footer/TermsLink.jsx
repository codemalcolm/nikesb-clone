import React from 'react'

const TermsLink = (props) => {

  return (
    <div className="">
        <a href={props.linkHref} className="text-social-icon-gray font-semibold text-sm text-hover">
            {props.linkName}
        </a>   
    </div>
 

  )
}

export default TermsLink