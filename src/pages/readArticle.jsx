import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Notfound from "./404";

import { getArticleBySlug } from "../lib/loadArticles";

import "./styles/readArticle.css";

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = getArticleBySlug(slug);

	useEffect(() => {
		if (article) {
			window.scrollTo(0, 0);
		}
	}, [article]);

	if (!article) {
		return <Notfound />;
	}

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{article.date}
								</div>
							</div>

							<div className="title read-article-title">
								{article.title}
							</div>

							<div className="read-article-body">
								<ReactMarkdown
									remarkPlugins={[remarkGfm]}
									rehypePlugins={[rehypeRaw]}
								>
									{article.content}
								</ReactMarkdown>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
