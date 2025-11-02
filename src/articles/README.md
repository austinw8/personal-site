# Articles

This folder contains all blog articles for my portfolio site. Each article is a separate markdown (.md) file.

## Adding a New Article

1. Create a new `.md` file in this directory with a descriptive filename (e.g., `my-new-article.md`)

2. Add frontmatter at the top of the file with the following required fields:

```markdown
---
title: "Your Article Title"
date: "YYYY-MM-DD"
description: "A brief description of your article (this will be shown in the preview)"
keywords: ["keyword1", "keyword2", "keyword3"]
slug: "your-article-slug"
---

# Article Title

Your article content follows here in markdown format...
```

### Frontmatter Fields

- **title**: The title of the article
- **date**: Publication date in YYYY-MM-DD format
- **description**: A short description shown in article preview
- **keywords**: Array of keywords for SEO
- **slug**: URL-friendly identifier for the article - this will be used in the URL path

## How It Works

The articles are automatically discovered and loaded by the `markdownLoader.js` utility, which:
1. Finds all `.md` files in this directory
2. Parses the frontmatter metadata
3. Extracts the content
4. Makes them available to the articles page

No need to manually register new articles - just add a new `.md` file and it will appear automatically!
