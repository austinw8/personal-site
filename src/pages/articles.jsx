import React, { useEffect } from "react";

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Logo from "../components/logo";
import ArticleCard from "../components/articleCard";

import articlesData from "../lib/loadArticles";

const ArticlesPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="flex justify-start pt-4">
						<div className="flex fixed top-[4vh] z-[1000]">
							<Logo width={46} />
						</div>
					</div>

					<div className="flex flex-col h-full m-0 pt-28">
						<div className="title max-[1024px]:!w-full">
							Articles
						</div>

						<div className="subtitle max-[1024px]:!w-full">
							A collection of my thoughts, insights, and things
							I'm learning from the projects I work on.
						</div>

						<div className="flex flex-col">
							<div className="pt-12 pb-12 flex flex-col">
								{articlesData.map((article) => (
									<div
										className="pt-0 pl-9 pb-5 border-l-2 border-l-zinc-100 w-full"
										key={article.slug}
									>
										<ArticleCard
											key={article.slug}
											date={article.date}
											title={article.title}
											description={article.preview}
											link={"/article/" + article.slug}
											tags={article.tags}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default ArticlesPage;
