/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary-color)",
				secondary: "var(--secondary-color)",
				tertiary: "var(--tertiary-color)",
				quaternary: "var(--quaternary-color)",
				link: "var(--link-color)",
			},
			fontFamily: {
				primary: "var(--primary-font)",
				secondary: "var(--secondary-font)",
			},
		},
	},
	plugins: [],
};
