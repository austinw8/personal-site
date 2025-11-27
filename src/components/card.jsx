import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
	const { icon, title, body } = props;
	return (
		<div className="mix-blend-normal rounded-2xl outline outline-2 outline-zinc-100">
			<div className="p-8 pb-1">
				<div className="flex items-center">
					<div className="text-sm text-tertiary">
						<FontAwesomeIcon icon={icon} />
					</div>
					<div className="text-secondary text-sm pl-5 font-semibold">
						{title}
					</div>
				</div>
				<div className="pt-10 text-sm">
					<div>{body}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
