import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import ArticleCard from "../components/articles/articleCard";

import INFO from "../data/user";
import articlesData from "../lib/loadArticles";

const ArticlesPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
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
							{INFO.articles.title}
						</div>

						<div className="subtitle max-[1024px]:!w-full">
							{INFO.articles.description}
						</div>

						<div className="flex flex-col">
							<div className="pt-[50px] pb-[50px] flex flex-col">
								{articlesData.map((article) => (
									<div
										className="pt-0 pl-[35px] pb-5 border-l-2 border-l-[#f4f4f5] w-full"
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
		</React.Fragment>
	);
};

export default ArticlesPage;
