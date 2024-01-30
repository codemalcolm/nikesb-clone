import React from 'react'
import FooterLinkPop from './FooterLinkPop'
import SocialStack from './SocialStack'
import Location from './Location'
import Rights from './Rights'
import TermsSection from './TermsSection'
const MobileFooterLinks = () => {
  return (
    <div className="border-t px-4 pb-1">
        <FooterLinkPop linkName="HELP"/>
        <FooterLinkPop linkName="COMPANY"/>
        <FooterLinkPop linkName="PROMOTIONS & DISCOUNTS"/>
        <SocialStack />
        <Location />
        <Rights />
        <TermsSection />
    </div>
  )
}

export default MobileFooterLinks