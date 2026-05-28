---
title: "Jumpy Boi"
date: "2025-04-09"
description: "An experiment in a physics-based platformer game."
slug: "jumpy-boi"
tags: [HTML, CSS, JavaScript]
---

[**Jumpi Boi**](https://austinw8.github.io/jumpy_boi/) is a small experiment in a physics-based platformer game. I wanted something fast and playful. The final result mixes Canvas rendering, custom physics, collision detection, and a simple checkpoint system.

This project pushed me to think differently about animation loops, object movement, player state, and how much complexity hides behind what looks like a simple jump.

<p align="center">
  <img src="/article_images/jumpy-boi/start.png" width="550" />
</p>

## Building the Player Physics

The main character is very minimalist. Just a rotating square that tumbles through the air and jumps off platforms. But behind that square is surprisingly complex code involving physics logic. I implemented gravity, horizontal velocity, double-jumps, ground detection, and rotation animations tied to every jump.

### Platforms and Collision Logic

Platforming seems simple until you start implementing collision detection. Jumpi Boi uses multiple detection rules to determine when the player should land on top of a platform, bump into a wall, or ignore collisions entirely. Each rule checks a different combination of bounding-box conditions to decide how the player should react.

I ended up writing several distinct rule sets: one for landing on platforms, one for knocking into the right side, one for bottom collisions, because merging everything into one “catch-all” condition got messy fast. It became a great exercise in debugging motion frame-by-frame and learning how to prevent janky physics.

### The “Scrolling World” Illusion

The player never actually travels far across the canvas. Instead, when you move right or left, the world shifts around you: platforms and checkpoints slide horizontally to create the illusion of a big, continuous level. It’s a simple trick, but it makes the game feel much larger than the screen.

This meant tying horizontal movement to two separate behaviors:

1. When the player is in the early part of the screen, they move.

2. When they get near the middle, the world moves instead.

### Checkpoints and Game Flow

I added checkpoints to break up the level and give players a sense of progress. Each checkpoint checks for collision, verifies that the previous checkpoint has been claimed, and displays a brief message. Once the final checkpoint is reached, collision detection shuts off and the player can’t move anymore, signaling the end of the level.

<p align="center">
  <img src="/article_images/jumpy-boi/checkpoint.png" width="550" />
</p>

## Lessons Learned

Jumpi Boi taught me how much thought and code actually goes into even the most basic 2D platformer mechanics. Keeping physics stable, avoiding jitter, rendering, movement, collision, input, and so on.

Canvas turned out to be a perfect playground for learning this stuff. It’s barebones, fast, and forces you to handle everything manually, which is painful at first but rewarding when the game starts feeling smooth.

I learned how to structure a game loop, handle physics in a browser environment, and build a scrolling world that feels bigger than the canvas suggests. Most importantly, I got to build something playful.

If you want to try the game or peek into the code, you'll find it on my [projects page](/projects).
