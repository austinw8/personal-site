import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import INFO from "../data/user";

const Socials = () => {
	return (
		<div>
			<div className="flex pb-5">
				<a
					href={INFO.socials.github}
					target="_blank"
					rel="noreferrer"
					className="no-underline"
				>
					<div className="text-sm text-secondary">
						<FontAwesomeIcon
							icon={faGithub}
							className="text-sm text-secondary"
						/>
					</div>
					<div className="text-secondary pl-8 -mt-5 font-semibold text-sm">
						Follow on GitHub
					</div>
				</a>
			</div>

			<div className="flex pb-5">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
					className="no-underline"
				>
					<div className="text-sm text-secondary">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="text-sm text-secondary"
						/>
					</div>
					<div className="text-secondary pl-8 -mt-5 font-semibold text-sm">
						Follow on LinkedIn
					</div>
				</a>
			</div>

			<div>
				<div className="flex pb-5">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
						className="no-underline"
					>
						<div className="text-sm text-secondary">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="text-secondary pl-8 -mt-5 font-semibold text-sm">
							{INFO.main.email}
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
