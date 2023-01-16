# Bloobloom Assignment

Visit [https://bloobloom.ghazi.dev/](https://bloobloom.ghazi.dev/) to view the assignment live.

### Table of contents
* [General Info](#general-info)
* [Folder Structure](#folder-structure)
* [Setup](#setup)

### General Info
I build the site using Nuxt 3, Vue composition API, Typescript and TailwindCSS.

I Implemented the design as requested including the bonus section, with performance and accessability in mind.

#### Extra bounuses
* Side menu uses the collections API to list navigation items
* Loading placeholder for the glasses
* Carousel for the glasses

### Folder Structure

    .
    ├── build
    ├── assets
    │   └── css
    ├── static
    │   └── robot.txt
    ├── public
    │   ├── favicon.ico
    │   └── images
    ├── components
    │   └── ...
    ├── composables
    │   └── ...
    ├── pages
    │   └── index.vue
    │   └── [id].vue                # glasses by collection id
    ├── utils
    │   ├── functions.ts
    │   └── types.ts                # Typescript interfaces
    ├── nuxt.config.ts
    ├── package.json
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── LICENSE
    └── README.md

### Setup
```bash
# Install the dependencies:
npm install

# Start the development server on http://localhost:3000
npm run dev

# Build the application for production:
npm run build
```