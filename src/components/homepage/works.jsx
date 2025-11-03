import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

const Works = () => {
	return (
		<div>
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="mb-2.5">
						<div className="flex pb-10 w-[400px]">
							<img
								src="./facebook.png"
								alt="facebook"
								className="h-[30px] w-[30px] rounded-full outline outline-[6px] outline-white shadow-[0px_7px_10px_rgba(0,0,0,0.25)]"
							/>
							<div className="text-[15px] font-bold pl-5 mt-[-3px] text-secondary">Facebook</div>
							<div className="absolute text-[12px] text-secondary pt-[22px] pl-[50px]">
								Software Engineer
							</div>
							<div className="absolute w-[350px] text-[12px] pt-5 text-right text-tertiary">2019 - Present</div>
						</div>

						<div className="flex pb-10 w-[400px]">
							<img
								src="./github.png"
								alt="github"
								className="h-[30px] w-[30px] rounded-full outline outline-[6px] outline-white shadow-[0px_7px_10px_rgba(0,0,0,0.25)]"
							/>
							<div className="text-[15px] font-bold pl-5 mt-[-3px] text-secondary">Github</div>
							<div className="absolute text-[12px] text-secondary pt-[22px] pl-[50px]">
								Software Engineer
							</div>
							<div className="absolute w-[350px] text-[12px] pt-5 text-right text-tertiary">2019 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
