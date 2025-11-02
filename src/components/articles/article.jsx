import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Article = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="w-full">
				<Link to={link}>
					<div className="w-full mix-blend-normal rounded-[20px] opacity-80 p-4 hover:bg-[#f0f0f0] hover:opacity-100 transition-colors duration-300 ease-in-out">
						<div className="text-md font-semibold">{title}</div>
						<div className="pt-2 text-small text-tertiary">{date}</div>
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
