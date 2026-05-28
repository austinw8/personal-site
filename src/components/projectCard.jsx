import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Badge from "./badge";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = (props) => {
	const { title, description, codeLink, projectLink, articleSlugs, tags } =
		props;

	return (
		<>
			<div className="w-full mix-blend-normal rounded-2xl opacity-80 h-full hover-effect transition-colors duration-300 ease-in-out max-[600px]:h-72 border">
				<div className="p-8 h-full flex flex-col">
					<div className="font-secondary text-primary text-base pt-3 mb-4 font-bold">
						{title}
					</div>

					{tags && tags.length > 0 && (
						<div className="pb-4 flex flex-wrap gap-2">
							{tags.map((tag, index) => (
								<Badge key={index} tag={tag} />
							))}
						</div>
					)}

					<div className="text-secondary flex-grow">
						{description}
					</div>

					<div className="flex gap-3 pt-5">
						{projectLink && (
							<a
								href={projectLink}
								target="_blank"
								rel="noopener noreferrer"
								className="no-underline group"
							>
								<div className="flex items-center text-secondary text-xs group-hover:text-link transition-colors duration-300 ease-in-out">
									<div className="pl-1 text-xs">
										<FontAwesomeIcon
											icon={faExternalLink}
										/>
									</div>
									<div className="pl-2 font-bold">
										Check It Out
									</div>
								</div>
							</a>
						)}

						{codeLink && (
							<a
								href={codeLink}
								target="_blank"
								rel="noopener noreferrer"
								className="no-underline group"
							>
								<div className="flex items-center text-secondary text-xs group-hover:text-link transition-colors duration-300 ease-in-out">
									<div className="pl-1 text-xs">
										<FontAwesomeIcon icon={faGithub} />
									</div>
									<div className="pl-2 font-bold">
										View Code
									</div>
								</div>
							</a>
						)}

						{articleSlugs && articleSlugs.map(({ slug, label }) => (
							<Link
								key={slug}
								to={`/article/${slug}`}
								className="no-underline group"
							>
								<div className="flex items-center text-secondary text-xs group-hover:text-link transition-colors duration-300 ease-in-out">
									<div className="pl-1 text-xs">
										<FontAwesomeIcon icon={faNewspaper} />
									</div>
									<div className="pl-2 font-bold">
										{label}
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
