import React from "react";

import Project from "./project";

const AllProjects = () => {

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
		<div className="flex flex-wrap items-stretch pt-2 pb-4 -ml-[35px] -mr-[35px]">
			{projects.map((project, index) => (
				<div className="w-[calc(100%/3)] box-border p-2.5 overflow-hidden max-[600px]:w-[calc(100%/2)]" key={index}>
					<Project
						title={project.title}
						description={project.description}
						projectLink={project.projectLink}
						articleSlug={project.articleSlug}
						tags={project.tags}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
