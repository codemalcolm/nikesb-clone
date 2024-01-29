import React from 'react'
import HeaderLink from './HeaderLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
const categories = ["New & Featured", "Men", "Women", "Kids", "Accessories", "Sale"];
  return (
    <>
        <header className="w-full px-9 h-15 flex justify-center items-center">
            <svg aria-hidden="true" class="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="74.5px" height="74.5px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
            <div className="flex m-auto max-l:hidden">
                {categories.map(a => <HeaderLink key={a} linkURL="#" linkTitle={a} />)}
            </div>
            <div className="w-60 h-10 border border-black rounded-3xl flex items-center ml-auto max-l:hidden"><FontAwesomeIcon className="border border-black rounded-3xl w-7 h-7 p-1" icon={faMagnifyingGlass}/>Search</div>
            <div className="l:hidden ml-auto"><FontAwesomeIcon className="border border-black rounded-3xl w-5 h-5 p-1" icon={faMagnifyingGlass}/></div>
        </header>
    </>

  )
}

export default Header