import React from 'react'
import Link from "../Link"

const PreHeader = () => {
  return (
    <div className="flex flex-column justify-start">
        <a href="https://www.nike.com/cz/jordan"><img src="/nikesb-clone/public/images/jordan-icon.png" alt="jordan-logo" width={24} height={24}/></a>
        <div className="flex">
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