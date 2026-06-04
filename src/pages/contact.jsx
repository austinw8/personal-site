import React, { useEffect, useState } from "react";

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Logo from "../components/logo";
import Socials from "../components/socials";
import ResumeModal from "../components/resumeModal";

import INFO from "../data/user";

const ContactPage = () => {
	const [showResumeModal, setShowResumeModal] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{showResumeModal && (
				<ResumeModal onClose={() => setShowResumeModal(false)} />
			)}
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="flex justify-start pt-4">
						<div className="flex fixed top-[4vh] z-[1000]">
							<Logo width={46} />
						</div>
					</div>

					<div className="flex flex-col justify-around mt-28">
						<div className="title">Ways to Connect with Me</div>

						<div className="subtitle !w-full">
							Thanks for reaching out! I'd love to hear your
							thoughts, questions, or ideas.
							<br></br>Just shoot me an email at{" "}
							<a
								href={`mailto:${INFO.main.email}`}
								className="text-link"
							>
								{INFO.main.email}
							</a>
							. I usually reply within a day (unless things get
							crazy 🤪).
							<br></br>You can also check out my links below to
							connect elsewhere.
						</div>
					</div>

					<div className="flex justify-start mt-8">
						<button
							onClick={() => setShowResumeModal(true)}
							className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg text-sm"
						>
							View Resume
						</button>
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
