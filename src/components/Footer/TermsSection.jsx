import React from 'react'
import TermsLink from './TermsLink'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faToggleOn } from "@fortawesome/free-solid-svg-icons"
const TermsSection = () => {
    const linkArr = [
        {
          linkHref: 'https://agreementservice.svs.nike.com/us/en_us/rest/agreement?agreementType=termsOfSale&uxId=com.nike.commerce.nikedotcom.web&country=US&language=en&requestType=redirect',
          linkName: 'Terms of Sale'
        },
        {
          linkHref: 'https://agreementservice.svs.nike.com/us/en_us/rest/agreement?agreementType=termsOfUse&uxId=com.nike.commerce.nikedotcom.web&country=US&language=en&requestType=redirect',
          linkName: 'Terms of Use'
        },
        {
          linkHref: 'https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.commerce.nikedotcom.web&country=US&language=en&requestType=redirect',
          linkName: 'Nike Privacy Policy'
        }
      ]
  return (
    <div className="my-8">
        <div className="flex flex-col gap-6">
            {/* TODO : GUIDES POPUP */}
            {linkArr.map(a => <TermsLink key={a.linkName} linkHref={a.linkHref} linkName={a.linkName}/>
            )}   
            <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faToggleOn} className="w-4 h-4 mt-1"/>
                <TermsLink 
                    linkHref={"https://www.nike.com/guest/settings/do-not-share-my-data"} 
                    linkName={"Your Privacy Choices"}
                />
            </div>
            <div><TermsLink 
                linkHref={"https://about.nike.com/en/newsroom/statements/statement-on-forced-labor"}
                linkName={"CA Supply Chains Act"}
            /></div>
        </div>
    </div>

  )
}

export default TermsSection