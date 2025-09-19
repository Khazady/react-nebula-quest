# React Nebula Quest

## Overview

React Nebula Quest is a space‑themed landing page.
The project is structured according to the Atomic Design methodology,
and styling is implemented with SASS (without CSS modules) using the BEM convention.

## Node and npm versions

Use the Node and npm versions specified in `package.json` under the `engines` field.
Because `.npmrc` has `engine-strict=true`, using other versions will cause `npm install` to fail.

For convenience, a `.nvmrc` file is provided:

- Run `nvm use` in the project root (reads `.nvmrc`). If the version isn’t installed, run `nvm install` first.

## Installation

1. Clone the repository to your local machine using `git clone https://github.com/Khazady/react-nebula-quest.git`.
2. Navigate to the root project directory.
3. Install dependencies `npm install`.
4. Start the development server `npm run dev`.
5. Build and preview the production bundle: `npm run build` then `npm run preview`.

## Technologies Used

React TypeScript SASS (BEM, no modules) Vite

## Project Architecture

Atomic Design – components are organized into atoms, molecules, organisms, templates, and pages.
BEM methodology – naming convention for class selectors in SASS.
