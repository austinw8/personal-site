import React, { useEffect } from "react";

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Logo from "../components/logo";
import Works from "../components/works";

const ExperiencePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="flex justify-start pt-4">
						<div className="flex fixed top-[4vh] z-[1000]">
							<Logo width={46} />
						</div>
					</div>

					<div className="flex flex-col justify-around mt-28">
						<div className="title">
							My Work Experience
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

export default ExperiencePage;
