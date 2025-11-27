import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ArrowLeft } from "lucide-react";

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Logo from "../components/logo";
import Badge from "../components/badge";
import Notfound from "./404";

import { getArticleBySlug } from "../lib/loadArticles";

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
		<>
			<div className="page-content">
				<NavBar active="articles" />

				<div className="content-wrapper">
					<div className="flex justify-start pt-6">
						<div className="flex fixed rounded-full top-[4vh] z-[1000]">
							<Logo width={46} />
						</div>
					</div>

					<div
						className="flex items-center gap-2 pt-24 pb-2.5 cursor-pointer text-secondary text-base transition-colors duration-200 ease-in-out hover:text-primary"
						onClick={() => navigate("/articles")}
					>
						<ArrowLeft size={20} className="flex-shrink-0" />
						<span>Back to articles</span>
					</div>

					<div className="flex h-full m-0 relative">
						<div className="w-full pt-8">
							<div className="border-l-2 border-l-quaternary text-tertiary text-base items-center h-6">
								<div className="font-primary pl-4">
									{article.date}
								</div>
							</div>

							<div className="title pt-4 pb-8 !w-full">
								{article.title}
							</div>

							{article.tags && article.tags.length > 0 && (
								<div className="pb-8 flex flex-wrap gap-2">
									{article.tags.map((tag, index) => (
										<Badge key={index} tag={tag} />
									))}
								</div>
							)}

							<div
								className="prose prose-zinc max-w-none pb-12
								prose-headings:text-primary
								prose-a:text-link prose-a:no-underline hover:prose-a:underline
								prose-code:before:content-none prose-code:after:content-none
								prose-code:bg-zinc-100 prose-code:rounded-sm prose-code:px-2 prose-code:py-0.5 prose-code:text-primary prose-code:font-mono prose-code:font-normal
								prose-pre:bg-zinc-100 prose-pre:rounded-sm prose-pre:text-primary"
							>
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
		</>
	);
};

export default ReadArticle;
