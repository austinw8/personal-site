import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/navBar";
import Logo from "../components/logo";

import INFO from "../data/user";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="overflow-hidden h-screen page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="flex justify-start pt-[25px]">
						<div className="flex fixed top-[4vh] z-[1000]">
							<Logo width={46} />
						</div>
					</div>
					<div className="flex flex-col h-full m-0 pt-[120px]">
						<div className="fixed flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-[500px]:absolute max-[500px]:top-auto max-[500px]:left-auto max-[500px]:w-full max-[500px]:translate-x-0 max-[500px]:translate-y-0">
							<div className="font-secondary text-primary text-[80px] pt-[15px] font-bold max-[500px]:text-[50px]">
								Oops! <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="text-secondary text-[2rem] my-8 text-center max-[500px]:w-full max-[500px]:text-[15px] max-[500px]:mt-2.5 max-[500px]:-ml-[5px] max-[500px]:mr-8">
								We can't seem to find the page you're looking
								for.
								<br />
								The requested URL "{window.location.href}" was
								not found on this server.
							</div>
							<a href="/" className="text-[1.5rem] no-underline text-white bg-link px-8 py-4 rounded-[50px] transition-all duration-300 ease-in-out hover:bg-white hover:text-link hover:shadow-[2px_2px_8px_rgba(0,0,0,0.3)] max-[500px]:text-[15px] max-[500px]:px-[15px] max-[500px]:py-[15px]">
								Go back to the home page
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
