import React, { useEffect } from "react";

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Logo from "../components/logo";
import Socials from "../components/socials";

import INFO from "../data/user";

const ContactPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="flex justify-start pt-4">
						<div className="flex fixed top-[4vh] z-[1000]">
							<Logo width={46} />
						</div>
					</div>

					<div className="flex flex-col justify-around mt-28">
						<div className="title">
							Ways to Connect with Me
						</div>

						<div className="subtitle !w-full">
							Thanks for reaching out! I'd love to hear your thoughts, questions, or ideas.
							<br></br>Just shoot me an email at {" "}
							<a href={`mailto:${INFO.main.email}`} className="text-link">
								{INFO.main.email}
							</a>.
							I usually reply within a day (unless things get crazy 🤪).
							<br></br>You can also check out my links below to connect elsewhere.
						</div>
					</div>

					<div className="flex flex-col mt-16">
						<div className="flex justify-start items-center">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
