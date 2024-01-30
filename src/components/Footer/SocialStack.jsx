import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faFacebook, faYoutube, faInstagram} from "@fortawesome/free-brands-svg-icons"

const SocialStack = () => {
  return (
    <div className="flex flex-start gap-4 mt-8">
        <div className="p-1.5 border-none rounded-full flex bg-social-icon-gray text-footer-black icon-hover"><FontAwesomeIcon icon={faXTwitter} className="w-5 h-5"/></div>
        <div className="p-1.5 border-none rounded-full flex bg-social-icon-gray text-footer-black icon-hover"><FontAwesomeIcon icon={faFacebook} className="w-5 h-5" /></div>
        <div className="p-1.5 border-none rounded-full flex bg-social-icon-gray text-footer-black icon-hover"><FontAwesomeIcon icon={faYoutube} className="w-5 h-5" /></div>
        <div className="p-1.5 border-none rounded-full flex bg-social-icon-gray text-footer-black icon-hover"><FontAwesomeIcon icon={faInstagram} className="w-5 h-5" /></div>
    </div>
  )
}

export default SocialStack