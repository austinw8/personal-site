---
title: "Dragon Bane"
date: "2025-02-06"
description: "A JavaScript browser RPG featuring cave exploration, weapon upgrading, and battling monsters."
slug: "dragon-bane"
tags: [HTML, CSS, JavaScript]
---


[**Dragon Bane**](https://austinw8.github.io/dragon_bane/dragon_bane.html) started as a small JavaScript project from a FreeCodeCamp module. The original assignment was straightforward: build a simple RPG with a few buttons, a monster, a player health bar, and some basic stats. I wanted practice with JavaScript and DOM manipulation, but once I started building, I found myself having way too much fun with it! One feature led to another, and before long the “simple project” had grown into a surprisingly expansive game idea.

I really wanted to expand the base idea into something that felt like a captivating game. Below are some of the major features I added, and what I learned while building them.

<p align="center">
  <img src="../public/article_images/dragon-bane/start.png" width="550" />
</p>

## Creating a More Dynamic Game

### Monsters

I really enjooyed making the game feel alive through dynamic content. Instead of fighting the same monster every time, I built a system that randomly selects from a pool of enemies, each with its own stats, images, and personality. Adding variety pushed me to think more carefully about game balance and how to scale difficulty in a way that felt fair. 

Some of my favorite monsters I incorporated include goofy ones like Shrek, the *Rabbit of Caerbannog*, and *Stay Puft Marshmallow Man*, alongside more serious fantasy creatures such as a bloodshade, cavestalker, and slime balls. 

<p align="center">
  <img src="../public/article_images/dragon-bane/cave-stalker.png" width="550" />
</p>

### Cave System

I also built a cave exploration system. Entering the cave triggers a set of random, event-driven encounters: treasure chests, traps, high-risk enemies, or sometimes nothing at all. This ended up being a great exercise in designing branching logic and thinking through edge cases. Every path needed clear outcomes, and every outcome needed a UI update, which forced me to become more intentional with DOM updates.

### Leveling and Scaling

To tie everything together, I added an experience and leveling system. Enemy stats adjust as the player grows, which keeps the game from becoming trivial. Crafting the progression curve required a lot of trial and error. Too easy felt boring, but too hard felt frustrating. Eventually I found a balance that felt entertaining and rewarding.

### Loot, Upgrades, and Inventory

One of my favorite features to build was the treasure chest system. Every chest is a roll of the dice: you might get gold, items, a new weapon... or you might open a mimic, triggering a surprise attack. Or poison that slowly steals your health. It added tension to the game and gave me the chance to build something that felt more challenging.

<p align="center">
  <img src="../public/article_images/dragon-bane/treasure-chest.png" width="550" />
</p>

Then came the shop system: buying, selling, and managing your gold. That introduced its own balancing challenges. I wanted players to make interesting choices with their gold, not hoard it or spend it instantly. Wil you upgrade your weapon, making it easier to kill the next monster, or spend your gold on a health potion, making sure your next attacker isn't your last?

## Lessons Learned

The biggest takeaway from building Dragon Bane is how much depth can emerge from simple DOM interactions when you start layering systems together. Each new mechanic forced me to evaluate how information moved through the app, and how to avoid the kind of spaghetti code that small hobby projects often drift into.

I also learned to think more modularly. Early on, the game relied heavily on direct DOM updates scattered throughout the logic. As the game expanded, I refactored large chunks into more reusable structures—data arrays, config objects, and functions dedicated specifically to updating the UI. That made it far easier to add new mechanics without breaking existing ones.

It sounds cheesy, but ultimately building Dragon Bane taught me to have fun with coding! One of the best responses to the game I got was from a coworked who said he wasted an hour trying to defeat the final dragon boss. Hearing that someone got so immersed in something I built was incredibly rewarding.

If you want to dive into the code or try the game yourself, you'll find it on my [projects page](/projects).
