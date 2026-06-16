# Aurora Brew — Premium Coffee Experience

> *Crafting exceptional experiences, one cup at a time.*

---

## Live Demo

**[View Live Website →](https://coffie-shop-neon.vercel.app/)**

---

## About The Project

**Aurora Brew** is a premium, cinematic single-page coffee brand website inspired by luxury brands like Starbucks. It features a scroll-controlled parallax WebP animation hero, multiple coffee flavor variants, and a dark-mode-first design — all built with pure HTML, CSS, and JavaScript.

The project was built using AI-powered tools (Antigravity + Gemini) with assets generated via Google Whisk and Gemini Veo 3.

---

## Features

- **Scroll-Linked WebP Animation** — Hero background plays frame-by-frame as you scroll
- **3 Coffee Variants** — Switch between Caramel Gold, Midnight Mocha & Matcha Cloud
- **Dark Mode Design** — Cinematic near-black background with Gold (#C8960C) accents
- **Preloader Experience** — Smooth loading screen before hero reveals
- **Fully Responsive** — Works beautifully on mobile, tablet & desktop
- **PREV / NEXT Navigation** — Right-side flavor switcher with fade animations
- **Sticky Navigation Bar** — Active section tracking while scrolling
- **Full Page Sections** — Our Story, Menu, Experience, Reviews, FAQ, CTA & Footer

---

## Coffee Variants

| # | Name | Subtitle | Price |
|---|------|----------|-------|
| 01 | **Caramel Gold** | Signature Blend | Rs. 450 |
| 02 | **Midnight Mocha** | Dark Indulgence | Rs. 480 |
| 03 | **Matcha Cloud** | Zen Reserve | Rs. 520 |

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| HTML / CSS / JavaScript | Core website (single file) |
| Supabase Storage | Hosting WebP frame sequences |
| Vercel | Website deployment & hosting |
| Google Whisk | AI product image generation |
| Gemini Veo 3 | AI cinematic video generation |
| ezgif.com | Video to WebP frame conversion |
| Antigravity (VS Code) | AI-powered code generation |

---

## Project Structure

```
aurora-brew/
├── index.html          # Main website (HTML + CSS + JS)
├── README.md           # Project documentation
└── assets/             # Local assets (if any)
```

**WebP Frames hosted on Supabase:**
```
caramel-gold/     → frame_000_delay-0.04s.webp ... frame_199...
midnight-mocha/   → frame_000_delay-0.04s.webp ... frame_199...
matcha-cloud/     → frame_000_delay-0.04s.webp ... frame_199...
```

---

## How It Was Built

This project was built using a full **AI-powered vibe-coding workflow**:

1. **Product Images** — Generated premium floating coffee cup images using Google Whisk with detailed cinematic prompts
2. **Ingredient Burst Images** — Created last-frame explosion shots (coffee beans, caramel, matcha) using Whisk
3. **Cinematic Videos** — Generated scroll animation videos using Gemini Veo 3
4. **WebP Conversion** — Converted videos to WebP frame sequences via ezgif.com
5. **Cloud Storage** — Uploaded all frames to Supabase public storage buckets
6. **Website Generation** — Built entire website using Antigravity AI in VS Code with a detailed system prompt
7. **Deployment** — Deployed to Vercel in one click

---

## Supabase Storage Setup

Three public buckets were created on Supabase:

```
caramel-gold    (PUBLIC)
midnight-mocha  (PUBLIC)
matcha-cloud    (PUBLIC)
```

Base URL pattern:
```
https://[project-id].supabase.co/storage/v1/object/public/[bucket]/frame_{index}_delay-0.04s.webp
```

---

## Design System

| Element | Value |
|---------|-------|
| Primary Font | Elegant Serif / Caps |
| Background | #0a0a0a (Near Black) |
| Accent Color | #C8960C (Gold) |
| Text Primary | #FFFFFF |
| Text Secondary | #888888 |
| Mode | Dark Only |

---

## Deployment

The site is deployed on **Vercel** with zero configuration:

1. Push code to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Deploy — done!

---

## Credits

- **Design Inspiration** — Olipop website (Andy Lo YouTube tutorial)
- **AI Tools** — Google Whisk, Gemini Veo 3, Antigravity
- **Storage** — Supabase
- **Hosting** — Vercel

---

## License

This project is for portfolio and educational purposes.

---

<p align="center">Made with passion and AI by <strong>Aurora Brew</strong></p>
