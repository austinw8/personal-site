import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBar from "../components/navBar";
import Logo from "../components/logo";

import { faPoop } from "@fortawesome/free-solid-svg-icons";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | Austin Mangelson Portfolio Site`;
	}, []);

	return (
		<>
			<div className="overflow-hidden h-screen page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="flex justify-start pt-6">
						<div className="flex fixed top-[4vh] z-[1000]">
							<Logo width={46} />
						</div>
					</div>
					<div className="flex flex-col h-full m-0 pt-32">
						<div className="fixed flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-[500px]:absolute max-[500px]:top-auto max-[500px]:left-auto max-[500px]:w-full max-[500px]:translate-x-0 max-[500px]:translate-y-0">
							<div className="font-secondary text-primary text-6xl pt-4 font-bold max-[500px]:text-5xl">
								Oopsie poopsie!{" "}
								<FontAwesomeIcon icon={faPoop} />
							</div>
							<div className="text-secondary text-xl my-8 text-center max-[500px]:w-full max-[500px]:text-sm max-[500px]:mt-2.5 max-[500px]:-ml-1 max-[500px]:mr-8">
								We can't seem to find the page you're looking
								for.
								<br />
								The requested URL "{window.location.href}" was
								not found on this server.
							</div>
							<a
								href="/"
								className="text-xl no-underline text-white bg-link px-8 py-4 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-link hover:shadow-md max-[500px]:text-sm max-[500px]:px-4 max-[500px]:py-4"
							>
								Go back to the home page
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Notfound;
