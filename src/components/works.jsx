import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "./card";

const Works = () => {
	return (
		<div>
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="mb-2.5">

						{/* Legrande */}
						<div className="flex pb-10 w-[400px]">
							<img
								src="./images/legrande-logo.png"
								alt="facebook"
								className="h-[30px] w-[30px] rounded-full outline outline-[6px] outline-white shadow-[0px_7px_10px_rgba(0,0,0,0.25)]"
							/>
							<div className="text-[15px] font-bold pl-5 mt-[-3px] text-secondary">Legrande Health (DataThink consultant)</div>
							<div className="absolute text-[12px] text-secondary pt-[22px] pl-[50px]">
								Software Developer / Lead Data Analyst
							</div>
							<div className="absolute w-[350px] text-[12px] pt-5 text-right text-tertiary">2024 - Present</div>
						</div>

						{/* Mountain West */}
						<div className="flex pb-10 w-[400px]">
							<img
								src="./images/mwa-logo.png"
								alt="facebook"
								className="h-[30px] w-[30px] rounded-full outline outline-[6px] outline-white shadow-[0px_7px_10px_rgba(0,0,0,0.25)]"
							/>
							<div className="text-[15px] font-bold pl-5 mt-[-3px] text-secondary">Mountain West Anesthesiology (DataThink consultant)</div>
							<div className="absolute text-[12px] text-secondary pt-[22px] pl-[50px]">
								Data Scientist
							</div>
							<div className="absolute w-[350px] text-[12px] pt-5 text-right text-tertiary">2024 - 2025</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
