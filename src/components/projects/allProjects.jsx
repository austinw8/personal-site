import React from "react";

import Project from "./project";

import INFO from "../../data/user";

const AllProjects = () => {
	return (
		<div className="flex flex-wrap items-stretch pt-[30px] pb-[30px] -ml-[35px] -mr-[35px]">
			{INFO.projects.map((project, index) => (
				<div className="w-[calc(100%/3)] box-border p-2.5 overflow-hidden max-[600px]:w-[calc(100%/2)]" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
