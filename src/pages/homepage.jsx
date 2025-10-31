import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import INFO from "../data/user";
import SEO from "../data/seo";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="flex justify-start items-center pt-[130px]">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div>
						<div className="flex lg:flex-row flex-col justify-between items-center">
							<div className="flex flex-col items-start order-2 lg:order-none w-full lg:w-auto">
								<div style={{ fontSize: "2rem" }}>Austin Mangelson</div>
								<div className="title w-full lg:w-[85%]">
									{INFO.homepage.title}
								</div>
								<div className="subtitle w-full lg:w-[85%]">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="flex items-center order-1 lg:order-none">
								<div className="w-[370px] h-[370px] lg:order-none order-1 lg:ml-0 ml-2 lg:pt-0 pt-[50px] pb-[50px]">
									<div className="overflow-hidden rounded-[10%] rotate-3">
										<img
											src="headshot_1.jpg"
											alt="headshot_img"
											className="w-full"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="flex justify-start items-center pt-[30px]">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="pr-[20px] text-[25px] transition-colors duration-200 ease-in-out text-secondary hover:text-primary"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="pr-[20px] text-[25px] transition-colors duration-200 ease-in-out text-secondary hover:text-primary"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="pr-[20px] text-[25px] transition-colors duration-200 ease-in-out text-secondary hover:text-primary"
								/>
							</a>
						</div>
					
						{/* My Tech Stack section */}
						<section className="mt-12 w-full">
							<h2 style={{ fontSize: "2rem" }} className="mb-6">
								My Tech Stack
							</h2>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
								{/* Repeat these cards for each technology; add images to public/logos/ */}
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/typescript.png" alt="TypeScript" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">TypeScript</div>
								</div>
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/python.png" alt="Python" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">Python</div>
								</div>
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/react.png" alt="React" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">React</div>
								</div>
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/fastapi.png" alt="FastAPI" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">FastAPI</div>
								</div>
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/nextjs.png" alt="Next.js" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">Next.js</div>
								</div>
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/tailwind.png" alt="Tailwind" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">Tailwind</div>
								</div>
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/git.png" alt="Git" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">Git</div>
								</div>
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/firebase.png" alt="Firebase" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">Firebase</div>
								</div>
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/mongodb.png" alt="MongoDB" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">MongoDB</div>
								</div>
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/postgres.png" alt="Postgres" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">Postgres</div>
								</div>
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/docker.png" alt="Docker" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">Docker</div>
								</div>
								<div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
									<img src="/logos/nodejs.png" alt="Node.js" className="w-16 h-16 mb-4" />
									<div className="text-center font-semibold">Node.js</div>
								</div>
							</div>
						</section>
					
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
