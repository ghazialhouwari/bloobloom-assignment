# Bloobloom Assignment

Visit [https://bloobloom.ghazi.dev/](https://bloobloom.ghazi.dev/) to view the assignment live.

## Table of contents
* [Tech Stack](#tech-stack)
* [Folder Structure](#folder-structure)
* [Setup](#setup)

## Tech Stack

* Nuxt3
* Vue3
* TailwindCSS
* Typescript

## Folder Structure

    .
    ├── build
    ├── assets
    │   └── css
    │       └── tailwind.css        
    ├── components
    │   └── CollectionItemCard.vue
    ├── pages
    │   └── index.vue
    ├── utils
    │   └── types.ts                # Typescript interfaces
    ├── nuxt.config.ts
    ├── package.json
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── LICENSE
    └── README.md

## Setup
```bash
# Install the dependencies:
npm install

# Start the development server on http://localhost:3000
npm run dev

# Build the application for production:
npm run build
```