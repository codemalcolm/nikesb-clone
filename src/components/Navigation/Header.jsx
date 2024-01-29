import React from 'react'
import HeaderLink from './HeaderLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons"
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons"


const Header = () => {
const categories = ["New & Featured", "Men", "Women", "Kids", "Accessories", "Sale"];
  return (
    <>
        <header className="relative w-full px-9 h-15 flex items-center justify-between max-l:px-5">
            <svg aria-hidden="true" class="" focusable="false" viewBox="0 0 24 24" role="img" width="74.5px" height="74.5px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
            <ul className="absolute left-1/2 transform -translate-x-1/2 flex w-full max-l:hidden text-custom-large justify-center mx-auto">
                {categories.map(a => <HeaderLink key={a} linkURL="#" linkTitle={a} />)}
            </ul>
            <div className="flex items-center max-l:hidden">
              <div className="w-44 h-10 border-none bg-nav-gray flex items-center rounded-3xl max-xl:hidden text-custom-large font-semibold"><FontAwesomeIcon icon={faMagnifyingGlass} className="border-none rounded-3xl w-7 h-7 px-2"/>Search</div>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="border-none rounded-3xl w-7 h-7 px-2 xl:hidden"/>
              <FontAwesomeIcon icon={faHeart} className="w-7 h-7 px-4 max-l:hidden"/>
              <FontAwesomeIcon icon={faBagShopping} className="w-7 h-7 px-1"/>
              <FontAwesomeIcon icon={faUser} className="w-7 h-7 px-1 l:hidden"/>
            </div>
            {/* screen width < 960px */}
            <div className="flex items-center l:hidden ml-auto">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="rounded-3xl w- h-6 p-1 mx-1"/>
              <FontAwesomeIcon icon={faBagShopping} className="w-6 h-6 px-1 mx-1"/>
              <FontAwesomeIcon icon={faUser} className="w-6 h-6 px-1 mx-1"/>
              <FontAwesomeIcon icon={faBars} className="w-6 h-6 px-1 mx-1"/>
            </div>
        </header>
    </>

  )
}

export default Header