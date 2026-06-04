import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
	const { active } = props;

	return (
		<>
			<div className="m-0 flex justify-center items-center">
				<nav className="flex justify-center items-center fixed top-[3vh] z-[999]">
					<div className="w-fit px-5 py-2.5 h-10 bg-white shadow-md rounded-full">
						<ul className="flex justify-between list-none items-center m-0 p-0 gap-5">
							<li className="font-bold text-sm">
								<Link
									to="/"
									className={`no-underline transition-colors duration-300 ease-in-out hover:text-link ${
										active === "home"
											? "text-link"
											: "text-primary"
									}`}
								>
									Home
								</Link>
							</li>
							<li className="font-bold text-sm">
								<Link
									to="/projects"
									className={`no-underline transition-colors duration-300 ease-in-out hover:text-link ${
										active === "projects"
											? "text-link"
											: "text-primary"
									}`}
								>
									Projects
								</Link>
							</li>
							<li className="font-bold text-sm">
								<Link
									to="/articles"
									className={`no-underline transition-colors duration-300 ease-in-out hover:text-link ${
										active === "articles"
											? "text-link"
											: "text-primary"
									}`}
								>
									Articles
								</Link>
							</li>
							<li className="font-bold text-sm">
								<Link
									to="/contact"
									className={`no-underline transition-colors duration-300 ease-in-out hover:text-link ${
										active === "contact"
											? "text-link"
											: "text-primary"
									}`}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
