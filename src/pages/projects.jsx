import React, { useEffect } from "react";

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Logo from "../components/logo";
import ProjectCard from "../components/projectCard";
import { PROJECTS_DATA } from "../data/projects/projects";

const ProjectsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="flex justify-start pt-4">
						<div className="flex fixed top-[4vh] z-[1000]">
							<Logo width={46} />
						</div>
					</div>
					<div className="flex flex-col h-full m-0 pt-28 max-[600px]:pt-15">
						<div className="title">My Projects</div>

						<div className="subtitle pb-4">
							A collection of projects I've worked on, both
							independently and collaboratively.
						</div>

						<div className="flex flex-wrap items-stretch pt-2 pb-4 -ml-4">
							{PROJECTS_DATA.map((project) => (
								<div
									className="w-1/3 box-border p-2.5 overflow-hidden max-[600px]:w-1/2"
									key={project.id}
								>
									<ProjectCard
										title={project.title}
										description={project.description}
										codeLink={project.codeLink}
										projectLink={project.projectLink}
										articleSlugs={project.articleSlugs}
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
		</>
	);
};

export default ProjectsPage;
