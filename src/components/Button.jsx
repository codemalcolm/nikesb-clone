import React from 'react'

const Button = (props) => {
  return (
    <button className="w-20 h-10 bg-black text-white rounded-3xl font-bold">{props.btnTitle}</button>
  )
}

export default Button