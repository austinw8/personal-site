// Projects Data Configuration
export const PROJECTS_DATA = [
	{
		id: "legrande-health",
		title: "Legrande Health Web App",
		description:
			"Contributed to a full-stack healthcare web application serving 100+ U.S. medical practices nationwide as part of a team of 7 developers in an Agile environment.",
		articleSlugs: [
			{ slug: "legrande-health-web-app", label: "Web App Article" },
			{ slug: "legrande-health-data-analytics", label: "Data Analytics Article" },
		],
		tags: [
			"React",
			"Typescript",
			"Python",
			"FastAPI",
			"PostgreSQL",
			"Tailwind",
			"SQLAlchemy",
		],
	},
	{
		id: "portfolio-website",
		title: "This Portfolio Website",
		description:
			"A responsive portfolio site built with React, featuring dynamic article loading from Markdown files, project showcases, and custom component system.",
		codeLink: "https://github.com/austinw8/personal-site",
		tags: ["React", "JavaScript", "Tailwind"],
	},
	{
		id: "jumpy-boi",
		title: "Jumpy Boi",
		description: "An experiment in a physics-based platformer game.",
		codeLink: "https://github.com/austinw8/jumpy_boi",
		projectLink: "https://austinw8.github.io/jumpy_boi/",
		articleSlugs: [{ slug: "jumpy-boi", label: "Read Article" }],
		tags: ["HTML", "CSS", "JavaScript"],
	},
	{
		id: "dragon-bane",
		title: "Dragon Bane",
		description:
			"Save Lumeria from the gruesome dragon terrorizing the kingdom in this text-based RPG fantasy game.",
		codeLink: "https://github.com/austinw8/dragon_bane",
		projectLink: "https://austinw8.github.io/dragon_bane/dragon_bane.html",
		articleSlugs: [{ slug: "dragon-bane", label: "Read Article" }],
		tags: ["HTML", "CSS", "JavaScript"],
	},
	{
		id: "middle-earth",
		title: "MiddleEarth",
		description:
			"Mapping Tolkein's Middle-Earth using R-based GIS tools and spatial data to recreate iconic locations from the novels.",
		codeLink: "https://github.com/austinw8/MiddleEarth",
		articleSlugs: [{ slug: "mapping-middle-earth", label: "Read Article" }],
		tags: ["R"],
	},
	{
		id: "ancient-shipwreck-explorer",
		title: "Ancient Shipwreck Explorer",
		description:
			"An interactive web app of ancient shipwrecks around the Meditteranean Sea using data from GeoDatabase.",
		codeLink: "https://github.com/austinw8/ancient_shipwrecks",
		projectLink: "https://austinw8.shinyapps.io/ancient_shipwrecks_app/",
		articleSlugs: [{ slug: "shipwreck-explorer", label: "Read Article" }],
		tags: ["R", "RShiny"],
	},
];