import React from 'react'

const HeaderLink = (props) => {
  return (
    <li>
        <a className="px-3 py-4.5 font-semibold" href={props.linkURL}>{props.linkTitle}</a>
    </li>
  )
}

export default HeaderLink