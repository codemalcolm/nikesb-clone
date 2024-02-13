import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

const CardCarousel = ({ children: slides }) => {
  return (
    <div className="overflow-hidden relative">
        <div className="flex ">{slides}</div>
        <div>
          <button>
            <ChevronLeft />
          </button>
          <button>
            <ChevronRight />
          </button>
        </div>
    </div>
  )
}

export default CardCarousel