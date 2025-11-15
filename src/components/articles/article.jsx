import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Badge from "../common/badge";

const Article = (props) => {
	const { date, title, description, link, tags } = props;

	return (
		<React.Fragment>
			<div className="w-full">
				<Link to={link}>
					<div className="w-full mix-blend-normal opacity-80 p-4 transition-colors duration-300 ease-in-out border rounded-2xl hover-effect">
						<div className="text-md font-semibold">{title}</div>
						<div className="pt-2 text-small text-tertiary">{date}</div>
						{tags && tags.length > 0 && (
							<div className="pt-2 flex flex-wrap gap-2">
								{tags.map((tag, index) => (
									<Badge key={index} tag={tag} />
								))}
							</div>
						)}
						<div className="pt-2 text-sm text-secondary font-medium leading-6">{description}</div>
						<div className="pt-2 text-sm text-link font-bold">
							Read Article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Article;
