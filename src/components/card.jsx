import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
	const { icon, title, body } = props;
	return (
		<div className="mix-blend-normal rounded-[20px] outline outline-2 outline-[#f4f4f5]">
			<div className="p-[30px] pb-[5px]">
				<div className="flex items-center">
					<div className="text-[15px] text-tertiary">
						<FontAwesomeIcon icon={icon} />
					</div>
					<div className="text-secondary text-[14px] pl-5 font-[650]">{title}</div>
				</div>
				<div className="pt-10 text-[15px]">
					<div>{body}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
