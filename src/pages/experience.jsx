import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Works from "../components/homepage/works";

const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="flex justify-start pt-[25px]">
						<div className="flex fixed top-[4vh] z-[1000]">
							<Logo width={46} />
						</div>
					</div>

					<div className="flex flex-col justify-around mt-[120px]">
						<div className="title">
							Experience Details Coming Soon...
						</div>
						<br></br>
						<div>
							<Works />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;
