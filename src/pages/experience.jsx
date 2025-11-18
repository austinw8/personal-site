import React, { useEffect, useState } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../components/card";

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Logo from "../components/logo";

const ExperiencePage = () => {
	const [showResumeModal, setShowResumeModal] = useState(false);

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
						<div className="flex items-center justify-between">
							<div className="title">
								My Work Experience
							</div>
							<button
								onClick={() => setShowResumeModal(true)}
								className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg text-sm"
							>
								View Resume
							</button>
						</div>
						<br></br>
		<div className="w-full">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="mb-2.5">

						{/* DataThink - Parent Company */}
						<div className="pb-6">
							<div className="flex">
								<a
									href="https://datathink.io/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex-shrink-0"
								>
									<img
										src="./images/datathink-logo.png"
										alt="DataThink"
										className="h-10 w-10 rounded-full outline outline-1 outline-white shadow-md hover:opacity-80 transition-opacity cursor-pointer"
									/>
								</a>
								<div className="pl-5">
									<div className="text-lg font-bold text-secondary">DataThink</div>
									<div className="text-sm text-secondary pt-1">
										Consultant
									</div>
									<div className="text-sm text-tertiary pt-1 italic">
										2024 - Present
									</div>
								</div>
							</div>

							{/* Nested Client Engagements */}
							<div className="pl-16 pt-8 space-y-8">

								{/* Legrande Client */}
								<div className="relative">
									<div className="flex">
										<a
											href="https://legrandehealth.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex-shrink-0"
										>
											<img
												src="./images/legrande-logo.png"
												alt="Legrande Health"
												className="h-8 w-8 rounded-full outline outline-1 outline-white shadow-md hover:opacity-80 transition-opacity cursor-pointer"
											/>
										</a>
										<div className="pl-5">
											<div className="text-base font-semibold text-secondary">Legrande Health</div>
											<div className="text-xs text-tertiary pt-1">
												Software Developer / Lead Data Analyst
											</div>
											<div className="text-xs text-tertiary pt-1 italic">
												2024 - Present
											</div>
										</div>
									</div>
									<ul className="pl-12 pt-3 space-y-2 text-xs text-tertiary list-disc">
										<li>Maintained Legrande Health’s order management platform, a full-stack web app processing 200+ weekly orders for 115+ medical practices using React, Python, FastAPI, and PostgreSQL.</li>
										<li>Developed interactive analytics dashboards and custom reporting tools both inside and outside the portal, empowering clinics and admins to track performance, inventory, and patient metrics.</li>
										<li>Built and automated ETL data migration pipelines with PostgreSQL, BigQuery, Meltano, and Google Cloud Run, enabling business reporting and cost-saving insights.</li>
									</ul>
								</div>

								{/* Mountain West Client */}
								<div className="relative">
									<div className="flex">
										<a
											href="https://mountainwestanesthesia.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex-shrink-0"
										>
											<img
												src="./images/mwa-logo.png"
												alt="Mountain West Anesthesiology"
												className="h-8 w-8 rounded-full outline outline-1 outline-white shadow-md hover:opacity-80 transition-opacity cursor-pointer"
											/>
										</a>
										<div className="pl-5">
											<div className="text-base font-semibold text-secondary">Mountain West Anesthesiology</div>
											<div className="text-xs text-tertiary pt-1">
												Data Scientist
											</div>
											<div className="text-xs text-tertiary pt-1 italic">
												2024 - 2025
											</div>
										</div>
									</div>
									<ul className="pl-12 pt-3 space-y-2 text-xs text-tertiary list-disc">
										<li>Maintained an R Shiny app for a network of anesthesiologists, reducing manual reporting time from 40 hours per month to only a couple hours of maintenance per month.</li>
										<li>Developed R packages and system testing for easier reporting and app maintenance.</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				}
			/>
		</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>

			{/* Resume Modal */}
			{showResumeModal && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-[2000] flex items-center justify-center p-4"
					onClick={() => setShowResumeModal(false)}
				>
					<div
						className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex items-center justify-between p-4 border-b">
							<h2 className="text-xl font-bold text-secondary">Resume</h2>
							<button
								onClick={() => setShowResumeModal(false)}
								className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
							>
								×
							</button>
						</div>
						<div className="flex-1 overflow-hidden">
							<iframe
								src="https://docs.google.com/document/d/e/2PACX-1vSNAvd7njGfmlCuSbSxQNSNNolPfsW_9A8JlPa1pNKfx6-gfoMR9bGncQIMOV-Qog/pub?embedded=true"
								className="w-full h-full border-0"
								title="Resume"
							/>
							{/* Resume published via Google Docs here: https://docs.google.com/document/d/1YGOwn97s-P-aTqgiQh6Kw_o93oG2uT5E/edit?usp=sharing&ouid=107821836686343140727&rtpof=true&sd=true */}
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default ExperiencePage;
