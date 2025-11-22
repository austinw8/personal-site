import React from "react";

// Mapping of tech tags to their badge configurations
const BADGE_CONFIG = {
	"R": {
		color: "276DC3",
		logo: "r",
		logoColor: "white"
	},
	"JavaScript": {
		color: "F7DF1E",
		logo: "javascript",
		logoColor: "black"
	},
	"Streamlit": {
		color: "FF4B4B",
		logo: "streamlit",
		logoColor: "white"
	},
	"React": {
		color: "61DAFB",
		logo: "react",
		logoColor: "black"
	},
	"Python": {
		color: "3776AB",
		logo: "python",
		logoColor: "white"
	},
	"Typescript": {
		color: "3178C6",
		logo: "typescript",
		logoColor: "white"
	},
	"Node.js": {
		color: "339933",
		logo: "nodedotjs",
		logoColor: "white"
	},
	"Vue": {
		color: "4FC08D",
		logo: "vuedotjs",
		logoColor: "white"
	},
	"Docker": {
		color: "2496ED",
		logo: "docker",
		logoColor: "white"
	},
	"PostgreSQL": {
		color: "4169E1",
		logo: "postgresql",
		logoColor: "white"
	},
	"MongoDB": {
		color: "47A248",
		logo: "mongodb",
		logoColor: "white"
	},
	"AWS": {
		color: "232F3E",
		logo: "amazonaws",
		logoColor: "white"
	},
	"Git": {
		color: "F05032",
		logo: "git",
		logoColor: "white"
	},
	"R Shiny": {
		color: "276DC3",
		logo: "rshiny",
		logoColor: "white"
	},
	"CSS": {
		color: "663399",
		logo: "css",
		logoColor: "white"
	},
	"HTML": {
		color: "E34F26",
		logo: "html5",
		logoColor: "white"
	},
	"Tailwind": {
		color: "06B6D4",
		logo: "tailwindcss",
		logoColor: "white"
	},
	"FastAPI": {
		color: "009688",
		logo: "fastapi",
		logoColor: "white"
	},
	"SQLAlchemy": {
		color: "D71F00",
		logo: "sqlalchemy",
		logoColor: "white"
	},
	"Gemini": {
		color: "8E75B2",
		logo: "googlegemini",
		logoColor: "white"
	},
	"BigQuery": {
		color: "669DF6",
		logo: "googlebigquery",
		logoColor: "white"
	},
	"Plotly": {
		color: "7A76FF",
		logo: "plotly",
		logoColor: "white"
	},
};

// more icons can be found at https://simpleicons.org/

const Badge = ({ tag }) => {
	// Get configuration for the tag, or use defaults
	const config = BADGE_CONFIG[tag] || {
		color: "blue",
		logo: null,
		logoColor: "white"
	};

	// Normalize the tag for the badge text
	const normalizedTag = tag.replace(/ /g, "_");

	// Build the shields.io URL
	let badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(normalizedTag)}-${config.color}?style=flat`;

	// Add logo if available
	if (config.logo) {
		badgeUrl += `&logo=${config.logo}&logoColor=${config.logoColor}`;
	}

	return (
		<img
			src={badgeUrl}
			alt={tag}
			className="inline-block"
		/>
	);
};

export default Badge;
