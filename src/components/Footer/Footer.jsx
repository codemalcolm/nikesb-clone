import React from "react";
import ImportantFooterLinks from "../ImportantFooterLinks";
import MobileFooterLinks from "./MobileFooterLinks";
const Footer = () => {
	return (
		<div className="bg-footer-black px-2 pt-8 text-white">
			<ImportantFooterLinks />
			<MobileFooterLinks />
		</div>
	);
};

export default Footer;
