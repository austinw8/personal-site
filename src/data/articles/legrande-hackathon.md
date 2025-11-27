---
title: "AI at Legrande Hackathon"
date: "2025-11-05"
description: "24 hours of integrating AI into Legrande's order management web app."
slug: "legrande-heackathon"
tags: [React, Gemini, BigQuery, Plotly]
---

The CEO of Legrande Health, a perscription management healthcare company, has been hearing a lot about AI and wanted to see how it could be integrated into their existing order management web application. To explore this the team at DataThink, Legrande's software development and data management consultants, organized a hackathon to bring AI into their order management app.

The goal wasn’t to ship something perfect. It was to explore, experiment, and walk away with a clearer sense of what's practical and worth putting more development time into.

## The 4 Teams

We split into four teams, each focusing on a different way to integrate AI into the app.

1. Patient summary generator based on phone call transcripts and text messages.
2. Forecasting bulk-order sales from historical data.
3. An app-wide chat assistant to guide users and answer basic questions.
4. An analytics assistant that answers data questions and generates charts.

## My Team: Analytics AI Assistant

My team took on the analytics use case: an AI that could answer natural-language questions about orders and automatically generate charts.

We used Gemini Pro for the reasoning and text generation layer, paired with a custom BigQuery table designed specifically for clean, structured AI querying. From there, Gemini would interpret user prompts, decide what SQL to write, run the query, and hand the results to a generic Plotly chart generator that we built to visualize anything it returned.

## Outcome

By the end of the 24 hours, we had a working prototype we named TθN1 (Tony), a nod to Legrande's CEO. It handled prompts like “_How many orders came in last month?_” or “_Give me a breakdown by product category,_” wrote the SQL query, pulled the data from BigQuery, and produced Plotly visualizations in seconds.

<p align="center" style="display: flex; gap: 20px; justify-content: center;">
  <img src="../public/article_images/legrande-hackathon/tony-assistant.png" width="45%" />
  <img src="../public/article_images/legrande-hackathon/tony-outcome.png" width="45%" />
</p>

### Where it fell short:

We realized quickly that analytics is a place where AI CAN'T be wrong. And out data outcomes were... wrong. (ex. the same prompt entered back to back would return with wildly different plots). If you need perfect accuracy, you end up adding so many guardrails that you might as well rebuild your existing charts manually, something we were already doing for Legrande. The accuracy gap made it clear this prototype wasn’t ready to be a production analytics tool without heavy human oversight.

### What we learned:

AI is excellent for exploration, brainstorming, and rapid iteration. It’s less reliable when precision and correctness are non-negotiable. Sometimes a prototype’s biggest value is showing you where not to use it.

Despite the limitations, we still considered the hackathon a win. We walked away with a clearer understanding of where AI adds real value inside Legrande’s ecosystem and where traditional engineering is still the better call.

<p align="center">
  <img src="../public/article_images/legrande-hackathon/legrande-hackathon-teams.jpeg" width="550" />
</p>
