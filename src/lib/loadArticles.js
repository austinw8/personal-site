// Dynamically import all markdown files from articles folder
const articleModules = import.meta.glob("../data/articles/*.md", {
	as: "raw",
	eager: true,
});

/**
 * Simple frontmatter parser (no dependencies needed)
 */
function parseMarkdown(content) {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
	const match = content.match(frontmatterRegex);

	if (!match) {
		return {
			content: content,
			preview: content.substring(0, 200) + "...",
		};
	}

	const frontmatterText = match[1];
	const markdownContent = match[2];

	// Parse frontmatter YAML manually
	const data = {};
	frontmatterText.split("\n").forEach((line) => {
		const colonIndex = line.indexOf(":");
		if (colonIndex > 0) {
			const key = line.substring(0, colonIndex).trim();
			let value = line.substring(colonIndex + 1).trim();

			// Remove quotes if present
			if (
				(value.startsWith('"') && value.endsWith('"')) ||
				(value.startsWith("'") && value.endsWith("'"))
			) {
				value = value.slice(1, -1);
			}

			// Parse arrays
			if (value.startsWith("[") && value.endsWith("]")) {
				value = value
					.slice(1, -1)
					.split(",")
					.map((v) => v.trim().replace(/['"]/g, ""));
			}

			data[key] = value;
		}
	});

	// Extract preview (first 200 characters of content, excluding frontmatter and title)
	const contentWithoutTitle = markdownContent.replace(/^#.*\n/, "").trim();
	const preview = contentWithoutTitle.substring(0, 200).trim() + "...";

	return {
		...data,
		content: markdownContent,
		preview: data.description || preview,
	};
}

// Parse all articles dynamically from the imported modules
const articles = Object.entries(articleModules)
	.filter(([path]) => !path.includes("README.md")) // Exclude README if present
	.map(([, content]) => {
		const article = parseMarkdown(content);
		return {
			...article,
			slug: article.slug,
		};
	})
	.sort((a, b) => new Date(b.date) - new Date(a.date));

export default articles;

export function getArticleBySlug(slug) {
	return articles.find((article) => article.slug === slug);
}
