import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
const Location = () => {
  return (
    <div className="flex gap-2 items-center py-6 mt-2 text-sm">
        <FontAwesomeIcon icon={faLocationDot} />
        <p className="font-medium">United States</p>
    </div>
  )
}

export default Location