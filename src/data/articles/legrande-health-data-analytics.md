---
title: "Data Analytics at Legrande Health"
date: "2026-05-27"
description: "What I’ve learned working on the Legrande Health data analytics."
slug: "legrande-health-data-analytics"
tags: [SQL, SQLAlchemy, Meltano, Python, Recharts, BigQuery, Looker]
---

Over the past 18 months, I’ve worked on data analytics for [Legrande Health](https://legrandehealth.com/), an order management platform serving medical practices and suppliers nationwide. What began as simple CSV exports quickly evolved into a career-defining technical experience.

## The Project

Legrande Health’s platform powers workflows for eye care practices and suppliers: patient orders, communications, fulfillment, inventory, and warehouse logistics. My role spanned nearly all of these, building data pipelines and analytics tools to deliver actionable insights to stakeholders and users.

## The Technical Work

The tech stack: Python/FastAPI backend, React frontend, PostgreSQL with SQLAlchemy, plus a growing data infrastructure using Postgres, BigQuery, and Meltano.

### SQL
SQL and SQLAlchemy were my go-to tools, writing complex queries with joins, CTEs, aggregations, and views. Much of my impact came from translating stakeholder questions (like “What’s our patient retention rate?”) into queries that delivered real answers.

### ETL
Learning Meltano for ELT was new for me. We used it to extract and load data, replicating our analytics database in BigQuery. I configured taps and targets, mapped the pipeline structure, and debugged extraction issues along the way.

### Dashboards and Visualization
A big part of my role was dashboards and reporting: (1) Data Studio for lightweight reports, (2) React with Recharts for custom, interactive portal views, and (3) periodic static reports for stakeholders and warehouse teams.

<figure>
  <img src="/images/nomp_calling_analytics.png" alt="NOMP Calling Analytics Dashboard" style="width: 50%; max-width: 500px;" />
  <figcaption>Legrande Portal Calling Analytics Dashboard</figcaption>
</figure>

Building finance analytics dashboards was particularly challenging but exciting. Legrande needed clear visibility into cash flow and profit margins. We defined key metrics, organized data intake, and built tools to surface patterns in revenue, COGS, and more.

### Python
Python was essential for backend development (FastAPI endpoints, SQLAlchemy models, CRUD ops). polars and Matplotlib were invaluable for forecasting and order projections.

## What I Learned

Technical skills are easy to document. The harder stuff to articulate (but perhaps more valuable in the long run) is what I learned about working in a real production environment with stakeholders.

### 1. Definitions don’t come predefined
Business terms sound precise until you actually try to measure them. “Conversion rate”,  “lifetime value”, or even something as seemingly straightforward as “recurring patients” mean different things depending on who you ask, what data exists, and what decision the metric is supposed to support. I learned to treat these requests as the start of a conversation, not a specification. I often do research, propose a definition, and get on the same page about what we’re trying to measure before writing a single query. As John Tukey said, “Far better an approximate answer to the right question, which is often vague, than an exact answer to the wrong question, which can always be made precise.”

### 2. Be ready to defend methodology
If the data tells a story stakeholders don’t like, the first instinct is often to question the data. I learned to expect this and to walk people through how I got a number. I learned to tell the difference between "the result is wrong" and "the result just isn’t what we hoped for." Sharing results honestly, and explaining the process in plain language, ended up building a lot of trust.

### 3. Sometimes a Google Sheet does the job
Not everything needs to be a dashboard. One of the more counterintuitive things I learned was that giving executives raw data in a spreadsheet and letting them sort, filter, and get their hands dirty with it often produced better outcomes than building something polished too early. Their exploration told me what they actually cared about, and I could then build something durable from it. Giving executives data in this format wasn’t a step backward. It was often the fastest path to a tool people actually used.

## Closing Thoughts
Working on this project challenged me to grow technically and adapt to new business needs. I look forward to tackling even more complex data problems ahead.