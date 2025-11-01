// Tech Stack Configuration

const TECH_STACK = {
	languages: {
		title: "Languages",
		items: [
			{
				name: "TypeScript",
				logo: "/logos/typescript_logo.png",
				enabled: true,
			},
			{ name: "Python", logo: "/logos/python_logo.png", enabled: true },
			{
				name: "JavaScript",
				logo: "/logos/javascript_logo.png",
				enabled: true,
			},
			{ name: "SQL", logo: "/logos/sql_logo.png", enabled: true },
			{ name: "R", logo: "/logos/r_logo.png", enabled: true },
			{ name: "HTML", logo: "/logos/html_logo.png", enabled: true },
			{ name: "CSS", logo: "/logos/css_logo.png", enabled: true },
		],
	},

	frameworks: {
		title: "Frameworks & Libraries",
		items: [
			{ name: "React", logo: "/logos/react_logo.png", enabled: true },
			{ name: "Next.js", logo: "/logos/nextjs_logo.png", enabled: false },
			{
				name: "FastAPI",
				logo: "/logos/fastapi_logo.png",
				enabled: false,
			},
			{ name: "Node.js", logo: "/logos/nodejs_logo.png", enabled: false },
			{
				name: "Tailwind",
				logo: "/logos/tailwind_logo.png",
				enabled: true,
			},
			{
				name: "SQLAlchemy",
				logo: "/logos/sqlalchemy_logo.png",
				enabled: false,
			},
			{
				name: "Streamlit",
				logo: "/logos/streamlit_logo.png",
				enabled: true,
			},
		],
	},

	tools: {
		title: "Tools & Platforms",
		items: [
			{ name: "Docker", logo: "/logos/docker_logo.png", enabled: true },
			{ name: "Git", logo: "/logos/git_logo.png", enabled: true },
			{ name: "GCP", logo: "/logos/gcp_logo.png", enabled: true },
			{ name: "DBeaver", logo: "/logos/dbeaver_logo.png", enabled: true },
			{
				name: "Looker Studio",
				logo: "/logos/looker_studio_logo.png",
				enabled: true,
			},
			{ name: "Meltano", logo: "/logos/meltano_logo.png", enabled: true },
			{
				name: "PostgreSQL",
				logo: "/logos/postgres_logo.png",
				enabled: true,
			},
			{
				name: "BigQuery",
				logo: "/logos/bigquery_logo.png",
				enabled: true,
			},
			{ name: "MySQL", logo: "/logos/mysql_logo.png", enabled: true },
			{
				name: "Firebase",
				logo: "/logos/firebase_logo.png",
				enabled: false,
			},
			{
				name: "MongoDB",
				logo: "/logos/mongobd_logo.png",
				enabled: false,
			},
		],
	},
};

export default TECH_STACK;
