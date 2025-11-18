import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Article = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="w-[90%] mix-blend-normal rounded-[20px] opacity-80 hover:bg-[#fafafa] hover:opacity-100 transition-colors duration-300 ease-in-out max-[600px]:w-full">
				<div className="p-[30px]">
					<div className="opacity-100 text-tertiary text-xs mb-4">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="opacity-100 text-primary text-base mb-4 font-bold">{title}</div>
					<div className="opacity-100 text-secondary text-xs leading-[1.5]">
						{description}
					</div>
					<div className="opacity-100 pt-5 text-[15px] font-bold">
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
