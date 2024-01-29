import React from 'react'

const HeaderLink = (props) => {
  return (
    <>
        <a className="px-3 py-4.5 font-semibold" href={props.linkURL}>{props.linkTitle}</a>
    </>
  )
}

export default HeaderLink