import React from 'react'

const Link = (props) => {
  return (
    <div className="px-4">
        <a href={props.linkURL}>{props.linkName}</a>
    </div>
  )
}

export default Link