import React, { useEffect } from "react";

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Logo from "../components/logo";
import ProjectCard from "../components/projectCard";


const ProjectsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// add new projects to the TOP
	const projects = [
		{
			title: "Legrande Health Web App",
			description:
				"Contributed to a full-stack healthcare web application serving 100+ U.S. medical practices nationwide as part of a team of 7 developers in an Agile environment.",
			codeLink: "https://github.com/austinw8/personal-site",
			projectLink: "https://legrandehealth.com/",
			tags: ["React", "Typescript", "Python", "FastAPI", "PostgreSQL", "Tailwind", "SQLAlchemy"],
		},
		{
			title: "This Portfolio Website",
			description:
				"A responsive portfolio site built with React, featuring dynamic article loading from Markdown files, project showcases, and custom component system.",
			codeLink: "https://github.com/austinw8/personal-site",
			tags: ["React", "JavaScript", "Tailwind"],
		},
		{
			title: "Jumpy Boi",
			description:
				"An experiment in a physics-based platformer game.",
			codeLink: "https://github.com/austinw8/jumpy_boi",
			projectLink: "https://austinw8.github.io/jumpy_boi/",
			articleSlug: "jumpy-boi",
			tags: ["HTML", "CSS", "JavaScript"],
		},
		{
			title: "Dragon Bane",
			description:
				"Save Lumeria from the gruesome dragon terrorizing the kingdom in this text-based RPG fantasy game.",
			codeLink: "https://github.com/austinw8/dragon_bane",
			projectLink: "https://austinw8.github.io/dragon_bane/dragon_bane.html",
			articleSlug: "dragon-bane",
			tags: ["HTML", "CSS", "JavaScript"],
		},
		{
			title: "MiddleEarth",
			description:
				"Mapping Tolkein's Middle-Earth using R-based GIS tools and spatial data to recreate iconic locations from the novels.",
			codeLink: "https://github.com/austinw8/MiddleEarth",
			articleSlug: "mapping-middle-earth",
			tags: ["R"],
		},
		{
			title: "Ancient Shipwreck Explorer",
			description:
				"An interactive web app of ancient shipwrecks around the Meditteranean Sea using data from GeoDatabase.",
			codeLink: "https://github.com/austinw8/ancient_shipwrecks",
			projectLink: "https://austinw8.shinyapps.io/ancient_shipwrecks_app/",
			articleSlug: "shipwreck-explorer",
			tags: ["R", "RShiny"],
		},
	]

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="flex justify-start pt-4">
						<div className="flex fixed top-[4vh] z-[1000]">
							<Logo width={46} />
						</div>
					</div>
					<div className="flex flex-col h-full m-0 pt-28 max-[600px]:pt-15">
						
						<div className="title">
							My Projects
						</div>

						<div className="subtitle pb-4">
							A collection of projects I've worked on, both independently and collaboratively.
						</div>

						<div className="flex flex-wrap items-stretch pt-2 pb-4 -ml-4">
							{projects.map((project, index) => (
								<div className="w-1/3 box-border p-2.5 overflow-hidden max-[600px]:w-1/2" key={index}>
									<ProjectCard
										title={project.title}
										description={project.description}
										codeLink={project.codeLink}
										projectLink={project.projectLink}
										articleSlug={project.articleSlug}
										tags={project.tags}
									/>
								</div>
							))}
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

export default ProjectsPage;
