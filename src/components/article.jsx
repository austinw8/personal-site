import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Article = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="w-[90%] mix-blend-normal rounded-2xl opacity-80 hover:bg-zinc-50 hover:opacity-100 transition-colors duration-300 ease-in-out max-[600px]:w-full">
				<div className="p-8">
					<div className="opacity-100 text-tertiary text-xs mb-4">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="opacity-100 text-primary text-base mb-4 font-bold">{title}</div>
					<div className="opacity-100 text-secondary text-xs leading-normal">
						{description}
					</div>
					<div className="opacity-100 pt-5 text-sm font-bold">
						<Link to={link} className="text-link no-underline">
							Read article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
