import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import ProjectCard from "../components//projects/projectCard";


const ProjectsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const projects = [
		{
			title: "Project 1",
			description: [
				"Lorem ipsum dolor sit amet.",
				"Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
			].join(" "),
			projectLink: "https://github.com",
			articleSlug: "ancient-shipwreck-explorer",
			tags: ["Javascript", "React", "Node.js"],
		},
		{
			title: "Project 2",
			description: [
				"Lorem ipsum dolor sit amet.",
				"Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
			].join(" "),
			projectLink: "https://github.com",
			tags: ["Python", "Docker"],
		},
		{
			title: "Project 3",
			description: [
				"Lorem ipsum dolor sit amet.",
				"Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
			].join(" "),
			projectLink: "https://github.com",
		},
		{
			title: "Project 4",
			description: [
				"Lorem ipsum dolor sit amet.",
				"Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
			].join(" "),
			projectLink: "https://github.com",
			tags: ["Javascript", "Vue"],
		},
		{
			title: "Project 5",
			description: [
				"Lorem ipsum dolor sit amet.",
				"Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
			].join(" "),
			projectLink: "https://github.com",
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
							A collection of projects I've worked on, both
							independently and collaboratively.
						</div>

						<div className="flex flex-wrap items-stretch pt-2 pb-4 -ml-4">
							{projects.map((project, index) => (
								<div className="w-[calc(100%/3)] box-border p-2.5 overflow-hidden max-[600px]:w-[calc(100%/2)]" key={index}>
									<ProjectCard
										title={project.title}
										description={project.description}
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
