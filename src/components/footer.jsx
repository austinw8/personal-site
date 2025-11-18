import React from "react";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="flex items-center justify-center p-8 mt-8">
				<div className="text-sm text-center text-gray-500">
					© {new Date().getFullYear()} Austin Mangelson. All Rights Reserved.
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
