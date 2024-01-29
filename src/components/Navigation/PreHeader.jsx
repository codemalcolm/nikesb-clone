import React from 'react'
import Link from "../Link"

const PreHeader = () => {
  return (
    <div className="flex flex-column justify-start px-9 max-l:hidden bg-nav-gray h-9
    leading-9 align-middle">
        <a href="https://www.nike.com/cz/jordan"><img src="./public/images/jordan-icon.png" alt="jordan-logo" width={24} height={24}/></a>
        <div className="flex ml-auto text-xs font-bold leading-9 align-middle">
            <Link linkURL="#" linkName="Find a Store"/>
            <span>|</span>
            <Link linkURL="#" linkName="Help"/>
            <span>|</span>
            <Link linkURL="#" linkName="Join Us"/>
            <span>|</span>
            <Link linkURL="#" linkName="Sign In"/>
        </div>
    </div>
  )
}

export default PreHeader