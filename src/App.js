import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import ProjectsPage from "./pages/projects";
import ArticlesPage from "./pages/articles";
import ReadArticle from "./pages/articleSingle";
import ExperiencePage from "./pages/experience";
import ContactPage from "./pages/contact";
import Notfound from "./pages/404";

import "./app.css";

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/articles" element={<ArticlesPage />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/experience" element={<ExperiencePage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
