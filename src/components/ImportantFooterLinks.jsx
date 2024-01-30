import React from "react";
import FooterLinkBold from "./Footer/FooterLinkBold";
const ImportantFooterLinks = () => {
	const linkArr = [
		{
			linkHref: "https://www.nike.com/gift-cards",
			linkName: "GIFT CARDS",
		},
		{
			linkHref: "https://www.nike.com/retail",
			linkName: "FIND A STORE",
		},
		{
			linkHref:
				"https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=cbd1ae63fe054ffe93919d0e8ceed8ba&code_challenge=jsi6mcscRN_4410_eR4jbTfVRE2Lxuxw6Srw8J0BeA4&code_challenge_method=S256",
			linkName: "BECOME A MEMBER",
		},
		{
			linkHref: "https://www.nike.com/nikexnba",
			linkName: "NIKE X NBA",
		},
		{
			linkHref: "https://www.nike.com/stories",
			linkName: "NIKE JOURNAL",
		},
	];

	return (
		<div className="px-4 pb-3">
			{linkArr.map((a) => (
				<FooterLinkBold
					key={a.linkName}
					linkHref={a.linkHref}
					linkName={a.linkName}
				/>
			))}
		</div>
	);
};

export default ImportantFooterLinks;
