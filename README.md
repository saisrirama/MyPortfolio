# 👋 Sai Sri Rama Khandavilli

### Senior Full Stack & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-8b5cf6?style=for-the-badge&logo=astro)](https://saisrirama.github.io/MyPortfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sai-sri-rama-k/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/saisrirama)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail)](mailto:saisrirama.apk@gmail.com)

---

## 🚀 About Me

I'm a **Full Stack & AI Engineer** with **5+ years of experience** building production-grade web applications, AI-powered products, and cloud-native systems based in **Bristol, United Kingdom**.

I help companies turn ambitious ideas into reliable software — from scalable APIs and modern React applications to AI agents and LLM-powered workflows that deliver measurable business impact.

---

## 💼 What I Do

| Area | Focus |
|------|-------|
| **Full Stack Development** | React, TypeScript, Python, FastAPI, PostgreSQL, cloud-native architectures |
| **AI Engineering** | Agentic AI, LangGraph, LLM integrations, RAG pipelines, structured outputs, multi-agent systems |
| **Cloud & DevOps** | AWS, GCP, Docker, CI/CD pipelines, containerized deployments |
| **Product Development** | Concept to production, technical strategy, cross-functional collaboration |

---

## 🏢 Experience

### Senior Full Stack & AI Engineer — Whipcream *(April 2025 – Present)*
- Built AI-powered applications leveraging LLMs and agent-based workflows
- Developed React frontends and FastAPI backend services for production
- Implemented LangGraph-powered agent orchestration workflows
- Created structured AI outputs using Pydantic models

### Full Stack Developer — Tata Consultancy Services *(October 2020 – November 2025)*
- Delivered enterprise-grade applications serving large user bases
- Built AI-powered chatbot solutions supporting 10,000+ users
- Designed RESTful and GraphQL APIs for enterprise integrations
- Developed CI/CD pipelines and automated deployment workflows

### Software Engineering Intern — Spikewell Ltd. *(September 2019 – November 2019)*
- Developed chatbot using Node.js, Azure LUIS, and Microsoft Bot Framework

### AI Engineering Intern — CTTC *(June 2019)*
- Developed self-driving car prototype using CNNs and computer vision

---

## 🛠️ Tech Stack

**Backend:** Python · FastAPI · Django · Java · Spring Boot · Node.js · PostgreSQL

**Frontend:** React · TypeScript · Angular · Tailwind CSS

**AI & ML:** Agentic AI · LangGraph · LLM Integration · Prompt Engineering · RAG · Vector Databases · Pydantic · Gemini · DeepSeek

**Cloud & DevOps:** AWS · GCP · Docker · CI/CD · Jenkins · GitLab

---

## 🎯 Featured Projects

### 🔬 KnowledgeHub AI
> AI-Powered Research Assistant — Upload documents and interact with them through conversational AI with semantic search, vector embeddings, and citation-backed responses.

### 🍳 Recipe Generator
> AI-Powered Recipe Creation Platform — Transform available ingredients into personalized recipes using LLMs with dietary preferences and saved recipe management.

---

## 📜 Certifications

- 🏆 **Google Cloud Professional Machine Learning Engineer**
- 🧠 **Deep Learning Certification**
- 🤖 **AI for Real-World Applications**
- ⚙️ **Software Engineering Simulation**

---

## 📊 Portfolio Website

This repository contains my personal portfolio website built with modern web technologies:

- ⚡ **[Astro](https://astro.build/)** — Static Site Generator
- 🎨 **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS
- 🌙 **Dark/Light Mode** — With persistence
- 📱 **Fully Responsive** — Mobile-first design
- ♿ **WCAG Accessible** — Keyboard & screen reader friendly
- 🔍 **SEO Optimized** — Meta tags, Open Graph, sitemap
- 🚀 **GitHub Pages** — Automated deployment via GitHub Actions

---

## 🏗️ Project Structure

```
MyPortfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── resume.pdf              ← Place your resume here
│   └── .nojekyll
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro    ← Sticky glassmorphism nav
│   │   │   ├── Footer.astro
│   │   │   └── ThemeToggle.astro
│   │   ├── ui/
│   │   │   ├── ResumeButton.astro
│   │   │   ├── BackToTop.astro
│   │   │   ├── Badge.astro
│   │   │   └── SectionHeading.astro
│   │   └── sections/
│   │       ├── Hero.astro
│   │       ├── About.astro
│   │       ├── WhatIDo.astro
│   │       ├── Experience.astro
│   │       ├── Skills.astro
│   │       ├── Projects.astro
│   │       ├── AIEngineering.astro
│   │       ├── Certifications.astro
│   │       └── Contact.astro
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── certifications.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Pages auto-deploy
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/saisrirama/MyPortfolio.git
cd MyPortfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# The site will be available at http://localhost:4321/MyPortfolio/
```

### Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Adding Your Resume

Place your resume PDF at:

```
public/resume.pdf
```

All "Download Resume" buttons across the site will automatically link to this file.

---

## 🌐 Deployment

This project is configured for **automatic deployment to GitHub Pages** via GitHub Actions.

### Setup Steps

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/saisrirama/MyPortfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository **Settings** → **Pages**
   - Under **Build and deployment** → **Source**, select **GitHub Actions**

3. **Done!** Every push to `main` will automatically build and deploy your site to:
   ```
   https://saisrirama.github.io/MyPortfolio/
   ```

---

## 📧 Contact

- 📧 **Email:** [saisrirama.apk@gmail.com](mailto:saisrirama.apk@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/sai-sri-rama-k](https://www.linkedin.com/in/sai-sri-rama-k/)
- 🐙 **GitHub:** [github.com/saisrirama](https://github.com/saisrirama)
- 🌍 **Location:** Bristol, United Kingdom

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ⚡ <a href="https://astro.build">Astro</a> + 🎨 <a href="https://tailwindcss.com">Tailwind CSS</a>
</p>
