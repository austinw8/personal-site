import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="mix-blend-normal rounded-[20px] opacity-80 h-full hover:bg-[#fafafa] hover:opacity-100 transition-colors duration-300 ease-in-out max-[600px]:h-[300px] group">
				<Link to={link} className="no-underline">
					<div className="p-[30px]">
						<div className="w-[30px]">
							<img src={logo} alt="logo" className="w-full" />
						</div>
						<div className="font-secondary text-primary text-base pt-[15px] mb-4 font-bold">{title}</div>
						<div className="text-secondary">{description}</div>
						<div className="flex items-center text-secondary text-xs pt-5 group-hover:text-link transition-colors duration-300 ease-in-out">
							<div className="pl-[5px] text-[13px]">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="pl-5 font-bold">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
