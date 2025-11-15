import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Badge from "../common/badge";

const ProjectCard = (props) => {
	const { title, description, projectLink, articleSlug, tags } = props;

	return (
		<React.Fragment>
			<div className="w-full mix-blend-normal rounded-2xl opacity-80 h-full hover-effect transition-colors duration-300 ease-in-out max-[600px]:h-[300px] border">
				<div className="p-8 h-full flex flex-col">
					<div className="font-secondary text-primary text-base pt-3 mb-4 font-bold">{title}</div>

					{tags && tags.length > 0 && (
						<div className="pb-4 flex flex-wrap gap-2">
							{tags.map((tag, index) => (
								<Badge key={index} tag={tag} />
							))}
						</div>
					)}

					<div className="text-secondary flex-grow">{description}</div>

					<div className="flex gap-3 pt-5">
						{projectLink && (
						<Link to={projectLink} className="no-underline group">
							<div className="flex items-center text-secondary text-xs group-hover:text-link transition-colors duration-300 ease-in-out">
								<div className="pl-[5px] text-[13px]">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="pl-2 font-bold">View Project</div>
							</div>
						</Link>
						)}
						{articleSlug && (
							<Link to={`/article/${articleSlug}`} className="no-underline group">
								<div className="flex items-center text-secondary text-xs group-hover:text-link transition-colors duration-300 ease-in-out">
									<div className="pl-[5px] text-[13px]">
										<FontAwesomeIcon icon={faNewspaper} />
									</div>
									<div className="pl-2 font-bold">Read Article</div>
								</div>
							</Link>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProjectCard;
