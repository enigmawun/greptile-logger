# Code Differences between dev and modularization

## Summary
- Total files changed: 94
- Total additions: 10331
- Total deletions: 4996

## File Changes

  File: .gitignore
  Status: modified
  Additions: 2
  Deletions: 0
  Changes: 2
  
Patch:
@@ -28,3 +28,5 @@ dist-ssr
 
 # dotenv environment variables file
 .env
+
+mightymeld.secrets
\ No newline at end of file
  ---
  File: CoCreateDemo.mp4
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: README.md
  Status: modified
  Additions: 47
  Deletions: 50
  Changes: 97
  
Patch:
@@ -1,50 +1,47 @@
-# React + TypeScript + Vite
-
-This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
-
-Currently, two official plugins are available:
-
-- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
-
-## Expanding the ESLint configuration
-
-If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:
-
-- Configure the top-level `parserOptions` property like this:
-
-```js
-export default tseslint.config({
-  languageOptions: {
-    // other options...
-    parserOptions: {
-      project: ['./tsconfig.node.json', './tsconfig.app.json'],
-      tsconfigRootDir: import.meta.dirname,
-    },
-  },
-})
-```
-
-- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-- Optionally add `...tseslint.configs.stylisticTypeChecked`
-- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:
-
-```js
-// eslint.config.js
-import react from 'eslint-plugin-react'
-
-export default tseslint.config({
-  // Set the react version
-  settings: { react: { version: '18.3' } },
-  plugins: {
-    // Add the react plugin
-    react,
-  },
-  rules: {
-    // other rules...
-    // Enable its recommended rules
-    ...react.configs.recommended.rules,
-    ...react.configs['jsx-runtime'].rules,
-  },
-})
-```
+<!-- ABOUT THE PROJECT -->
+
+# About the Project
+
+CoCreate is a collaborative note-taking app for images, designed for architects and clients to communicate ideas and preferences. It is a private product that is currently in development mode and has not yet been deployed to production. This user guide provides a minimal setup to get CoCreate working on your local environment.
+
+<!--FRAMEWORKS AND LIBRARIES USED IN THE PROJECT -->
+
+# Built With
+
+- [![Next][Next.js]][Next-url]
+- [![React v18][React.js]][https://react.dev/]
+- [![Tailwind v3][TailwindCSS]][https://v3.tailwindcss.com/]
+- [![Node][Node.js]][https://nodejs.org/]
+- [![Vite][Svelte.dev]][Svelte-url]
+- [![Typescript][Typescriptlang.org]][https://www.typescriptlang.org/]
+- [![PostGRESql][PostGRESql]][https://www.postgresql.org/]
+- [![Express][Express.js]][https://expressjs.com/]
+- [![Cypress][Cypress.io][https://www.cypress.io/]]
+- [![Vitest][Vitest][https://vitest.dev/]]
+
+<!-- SET UP -->
+
+# Prerequisites
+
+1. Open your terminal and clone this repository in Github with `git clone git@github.com:CoCreate-Labs/cocreate.git`. See [https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository] for info on how to clone a repository. NOTE: You'll need to be added as a contributor to our repo in order to gain access. Please send a request to [https://github.com/CoCreate-Labs].
+2. Change to the root directory of the cloned repository with the command `cd cocreate` and then run `npm install` dependencies.
+
+# Set up the server
+
+By following these instructions, you can set up your own server for development purposes using Supabase (free).
+
+1. Setup an account and a new project with [Supabase] (https://supabase.com/). You'll need to create a new organization if you're setting up for the first time.
+2. Assign the project name `cocreate` then copy and save the password.
+3. Copy the IPv4 compatible connection string for a transaction pooler and store it in a .env file in the CoCreate root directory as `SUPABASE_URI`. Be sure to replace [YOUR-PASSWORD] in the string with the password you saved.
+4. Go back to the terminal and enter `npm run server` to start the server and test your routes. Or, skip ahead to the next section for route integration with the front-end.
+
+# Start the dev server
+
+Enter `npm start` in your terminal to navigate to [http://localhost:5173/] in your browser to see the UI in progress. This will also start up the server.
+
+# Project Roadmap
+
+- [x] Wireframe user design and prototype React components on Excalidraw. See [excalidraw-planning.png] [excalidraw-planning.png]
+- [x] Create a visual demo in VanillaJS/HTML/CSS to ensure alignment with clients. Accessible via: [CoCreateDemo.mp4]
+- [x] MVP: The MVP scope will be an app where users can upload a photo or blueprint to a canvas, allowing them to create a project where they can add highlighted box areas and comments directly to the photo or blueprint. It will allow users to deploy the app on their machine locally via their web browser, and it will send photos to Supabase to be processed.
+- [ ] Further product development: Upon receiving client feedback, we will continue developing our roadmap for future features. We also plan to implement OAuth in the future, allowing users to create accounts via Github or Google authentication. Initial deployment will be done on Heroku for testing purposes.
  ---
  File: __tests__/unit/App.unit.test.tsx
  Status: modified
  Additions: 16
  Deletions: 1
  Changes: 17
  
Patch:
@@ -1 +1,16 @@
-// Example unit test for App component (frontend)
\ No newline at end of file
+// Frontend unit test for App component (frontend)
+
+import { render, screen, fireEvent } from '@testing-library/react';
+import App from '../../src/App';
+
+describe('App Component Tests', () => {
+  it('create a new box on canvas click', () => {
+    render(<App />);
+    const canvas = screen.getByRole('canvas');
+    // Trigger a mouse down
+    fireEvent.mouseDown(canvas, { clientX: 100, clientY: 100 });
+    // Assert box is added to the DOM
+    const boxes = screen.getAllByTestId('box');
+    expect(boxes.length).toBe(1);
+  });
+});
  ---
  File: __tests__/unit/utils.unit.test.ts
  Status: modified
  Additions: 72
  Deletions: 1
  Changes: 73
  
Patch:
@@ -1 +1,72 @@
-// Example unit test for utility functions (backend)
\ No newline at end of file
+// Backend unit tests for utility functions
+import pg from 'pg';
+const { Pool } = pg;
+import initializeDatabase, {
+  checkTableExists,
+  createProjectsTable,
+  createImagesTable,
+  createCommentsTable
+} from '../../server/utility/initializeDatabase';
+
+console.log(process.env.SUPABASE_URI);
+console.log(process.env.ANNON_PUBLIC_API_KEY);
+
+const pool = new Pool({
+  connectionString: process.env.SUPABASE_URI,
+  ssl: { rejectUnauthorized: false },
+});
+
+describe('Database connection', () => {
+  it('should connect to the database successfully', async () => {
+    const result = await pool.query('SELECT NOW()');
+    console.log(result);
+    console.log(result.rows);
+    expect(result.rows[0]).toHaveProperty('now');
+  });
+});
+
+// create mock data
+vi.mock('pg', () => ({ // mock pg.Pool to simulate database interaction
+  default: {
+    Pool: vi.fn().mockImplementation(() => ({ // mock fn for Pool constructor fn that returns query
+      query: vi.fn(), // mock Pool query method
+    })),
+  },
+}));
+
+// test checkTableExists, queries db to check if table exists
+describe('checkTableExists', () => {
+  let mockQuery;
+
+  beforeEach(() => { // before each test, reset mock fn
+    mockQuery = vi.fn();
+    Pool.mockImplementation(() => ({
+      query: mockQuery, // uses mockQuery
+    }));
+    console.log("Mock is set up");
+  });
+  
+  it('returns true if the table exists', async () => {
+    mockQuery.mockResolvedValueOnce({ "rows": [{ "exists": true }] });
+    console.log(mockQuery.mock.calls);
+    const result = await checkTableExists('projects');
+    console.log(result);
+    expect(result).toBe(true);
+  });
+  
+  it('returns false if the table does not exist', async () => {
+    mockQuery.mockResolvedValueOnce({ "rows": [{ "exists": false }] });
+    console.log(mockQuery.mock.calls);
+    const result = await checkTableExists('projects');
+    console.log(result);
+    expect(result).toBe(false);
+  });
+});
+
+// test createProjectsTable, creates project table if it does not exist
+// test createImagesTable, creates images table if it does not exist
+// test createCommentsTable, creates comments table if it does not exist
+
+// test initializeDatabase, calls all prior funcs to initialize tables
+
+// mock the database interaction using vi.fn() to mock the pg Pool methods and other related parts of the code
\ No newline at end of file
  ---
  File: components.json
  Status: added
  Additions: 21
  Deletions: 0
  Changes: 21
  
Patch:
@@ -0,0 +1,21 @@
+{
+  "$schema": "https://ui.shadcn.com/schema.json",
+  "style": "default",
+  "rsc": false,
+  "tsx": true,
+  "tailwind": {
+    "config": "tailwind.config.js",
+    "css": "src/index.css",
+    "baseColor": "zinc",
+    "cssVariables": true,
+    "prefix": ""
+  },
+  "aliases": {
+    "components": "@/components",
+    "utils": "@/lib/utils",
+    "ui": "@/components/ui",
+    "lib": "@/lib",
+    "hooks": "@/hooks"
+  },
+  "iconLibrary": "lucide"
+}
\ No newline at end of file
  ---
  File: excalidraw-planning-api.png
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: excalidraw-planning.png
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: index.html
  Status: modified
  Additions: 12
  Deletions: 2
  Changes: 14
  
Patch:
@@ -2,9 +2,19 @@
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
-    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
+    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
+    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
+    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
+    <link rel="manifest" href="/site.webmanifest" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <title>Vite + React + TS</title>
+    <title>CoCreate</title>
+    <link rel="preconnect" href="https://fonts.googleapis.com" />
+    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
+    <link
+      href="https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap"
+      rel="stylesheet"
+    />
+    <link href="./output.css" rel="stylesheet" />
   </head>
   <body>
     <div id="root"></div>
  ---
  File: package-lock.json
  Status: modified
  Additions: 7048
  Deletions: 4104
  Changes: 11152
  
  ---
  File: package.json
  Status: modified
  Additions: 25
  Deletions: 2
  Changes: 27
  
Patch:
@@ -1,5 +1,5 @@
 {
-  "name": "react-rnd-ts",
+  "name": "cocreate",
   "private": true,
   "version": "0.0.0",
   "type": "module",
@@ -19,35 +19,58 @@
     "type-check": "tsc --noEmit"
   },
   "dependencies": {
+    "@headlessui/react": "^2.2.0",
+    "@heroicons/react": "^2.2.0",
+    "@radix-ui/react-dropdown-menu": "^2.1.6",
+    "@radix-ui/react-label": "^2.1.2",
+    "@radix-ui/react-progress": "^1.1.2",
+    "@radix-ui/react-select": "^2.1.6",
+    "@radix-ui/react-slot": "^1.1.2",
     "@reduxjs/toolkit": "^2.0.1",
     "@supabase/supabase-js": "^2.47.11",
+    "axios": "^1.7.9",
+    "bcryptjs": "^3.0.2",
+    "class-variance-authority": "^0.7.1",
+    "clsx": "^2.1.1",
     "concurrently": "^9.1.2",
     "cookie-parser": "^1.4.7",
     "dotenv": "^16.4.7",
     "express": "^4.21.2",
+    "express-session": "^1.18.1",
     "image-size": "^1.2.0",
     "interactjs": "^1.10.27",
+    "lucide-react": "^0.475.0",
     "multer": "^1.4.5-lts.1",
     "nodemon": "^3.1.9",
     "pg": "^8.13.1",
     "react": "18.2.0",
     "react-dom": "18.2.0",
     "react-redux": "^9.1.0",
-    "react-rnd": "10.4.12"
+    "react-rnd": "10.4.12",
+    "tailwind-merge": "^3.0.2",
+    "tailwindcss-animate": "^1.0.7"
   },
   "devDependencies": {
     "@eslint/js": "^9.17.0",
+    "@tanstack/router-devtools": "^1.105.0",
+    "@tanstack/router-plugin": "^1.105.0",
     "@testing-library/jest-dom": "^6.6.3",
     "@testing-library/react": "^16.1.0",
+    "@types/node": "^22.13.4",
     "@types/react": "^18.2.0",
     "@types/react-dom": "18.2.0",
     "@vitejs/plugin-react": "^4.3.4",
+    "autoprefixer": "^10.4.20",
+    "concurrently": "^9.1.2",
     "cypress": "^13.17.0",
     "eslint": "^9.17.0",
     "eslint-plugin-react-hooks": "^5.0.0",
     "eslint-plugin-react-refresh": "^0.4.16",
     "globals": "^15.14.0",
     "jsdom": "^25.0.1",
+    "postcss": "^8.5.1",
+    "tailwindcss": "^3.4.17",
+    "typedoc": "^0.27.7",
     "typescript": "^5",
     "typescript-eslint": "^8.18.2",
     "vite": "^6.0.5",
  ---
  File: postcss.config.js
  Status: added
  Additions: 6
  Deletions: 0
  Changes: 6
  
Patch:
@@ -0,0 +1,6 @@
+export default {
+  plugins: {
+    tailwindcss: {},
+    autoprefixer: {},
+  },
+}
  ---
  File: public/about.txt
  Status: added
  Additions: 6
  Deletions: 0
  Changes: 6
  
Patch:
@@ -0,0 +1,6 @@
+This favicon was generated using the following graphics from Twitter Twemoji:
+
+- Graphics Title: 1f3e0.svg
+- Graphics Author: Copyright 2020 Twitter, Inc and other contributors (https://github.com/twitter/twemoji)
+- Graphics Source: https://github.com/twitter/twemoji/blob/master/assets/svg/1f3e0.svg
+- Graphics License: CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
  ---
  File: public/android-chrome-192x192.png
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: public/android-chrome-512x512.png
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: public/apple-touch-icon.png
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: public/favicon-16x16.png
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: public/favicon-32x32.png
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: public/favicon.ico
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: public/layer1.svg
  Status: added
  Additions: 5
  Deletions: 0
  Changes: 5
  
Patch:
@@ -0,0 +1,5 @@
+<svg width="527" height="478" viewBox="0 0 527 478" fill="none" xmlns="http://www.w3.org/2000/svg">
+<path fill-rule="evenodd" clip-rule="evenodd" d="M220.9 0.706436L406.454 330.965L200.189 331.08L160.625 401.794L525.843 401.851L303.041 0.5L220.9 0.706436Z" fill="white" stroke="white" stroke-linejoin="round"/>
+<path fill-rule="evenodd" clip-rule="evenodd" d="M220.89 0.679199L0.5 401.786L40.9061 474.516L223.744 143.186L325.769 331.075H406.581L220.89 0.679199Z" fill="#7D7E7C" stroke="#7D7E7C" stroke-linejoin="round"/>
+<path fill-rule="evenodd" clip-rule="evenodd" d="M223.786 143.249L264.077 217.468L160.449 401.848L525.864 402.037L487.393 476.537L40.9224 474.49L223.786 143.249Z" fill="black" stroke="black" stroke-linejoin="round"/>
+</svg>
  ---
  File: public/site.webmanifest
  Status: added
  Additions: 1
  Deletions: 0
  Changes: 1
  
Patch:
@@ -0,0 +1 @@
+{"name":"","short_name":"","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"theme_color":"#ffffff","background_color":"#ffffff","display":"standalone"}
\ No newline at end of file
  ---
  File: public/vite.svg
  Status: removed
  Additions: 0
  Deletions: 1
  Changes: 1
  
Patch:
@@ -1 +0,0 @@
-<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
\ No newline at end of file
  ---
  File: server/controllers/cookieController.js
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: server/controllers/getProjectController.js
  Status: modified
  Additions: 7
  Deletions: 5
  Changes: 12
  
Patch:
@@ -114,13 +114,13 @@ getProjectController.formatQueryResult = async (_req, res, next) => {
   // ]
 
   const { rows } = res.locals;
-
+  console.log(rows);
   // The first row will have the image info
   const { image_url, canvas_size_x, canvas_size_y } = rows[0];
   res.locals.image_url = image_url || null;
   res.locals.canvas_dimensions = {
-    width: `${canvas_size_x || 0}px`,
-    height: `${canvas_size_y || 0}px`,
+    width: canvas_size_x,
+    height: canvas_size_y,
   };
 
   // Build the array of comment_objects
@@ -153,12 +153,14 @@ getProjectController.formatQueryResult = async (_req, res, next) => {
 
 // respond with the formatted data
 getProjectController.respondProjectData = (_req, res) => {
-  const { image_url, canvas_dimensions, comment_objects } = res.locals;
+  const { image_url, canvas_dimensions, comment_objects, project_id } =
+    res.locals;
 
   return res.json({
     comment_objects: comment_objects || [],
     image_url: image_url || null,
-    canvas_dimensions: canvas_dimensions || { width: '0px', height: '0px' },
+    canvas_dimensions: canvas_dimensions || { width: 0, height: 0 },
+    project_id: project_id || null,
   });
 };
 
  ---
  File: server/controllers/imageController.js
  Status: modified
  Additions: 22
  Deletions: 5
  Changes: 27
  
Patch:
@@ -13,12 +13,29 @@ export const checkImageDimensions = (req, res, next) => {
 
     const imageFile = req.file.buffer;
     const dimensions = sizeOf(imageFile); // get image dimensions
-    const { width, height } = dimensions;
+    let { width, height } = dimensions;
 
-    console.log('Detected image width x height:', width, height);
-
-    res.locals.canvas_size_x = Math.round(width);
-    res.locals.canvas_size_y = Math.round(width);
+    console.log(
+      'Detected image width x height:',
+      'width:',
+      width,
+      'height:',
+      height
+    );
+    const aspectRatio = width / height;
+    console.log(aspectRatio);
+    if (width > 1600 && width > height) {
+      res.locals.canvas_size_x = 1600;
+      height = 1600 / aspectRatio;
+      res.locals.canvas_size_y = Math.round(height);
+    } else if (height > 1200 && height > width) {
+      res.locals.canvas_size_y = 1200;
+      width = aspectRatio * 1200;
+      res.locals.canvas_size_x = Math.round(width);
+    } else {
+      res.locals.canvas_size_x = Math.round(width);
+      res.locals.canvas_size_y = Math.round(height);
+    }
 
     return next();
   } catch (error) {
  ---
  File: server/controllers/patchProjectController.js
  Status: modified
  Additions: 2
  Deletions: 2
  Changes: 4
  
Patch:
@@ -6,8 +6,8 @@ import pool from '../config/pool.js';
 
 const fakePatchRequestBody = {
   project_name: 'my project',
-  project_id: 1,
-  image_id: 1,
+  project_id: 4,
+  image_id: 3,
   comment_objects: [
     {
       functionality: true,
  ---
  File: server/controllers/postProjectController.js
  Status: modified
  Additions: 13
  Deletions: 4
  Changes: 17
  
Patch:
@@ -39,6 +39,7 @@ postProjectController.extractProjectParams = (req, res, next) => {
 
     res.locals.projectName = projectName;
     res.locals.file = file;
+    res.locals.canvasRatio = parseInt(canvasSizeX) / parseInt(canvasSizeY);
     res.locals.canvasSizeX = canvasSizeX;
     res.locals.canvasSizeY = canvasSizeY;
 
@@ -56,6 +57,7 @@ postProjectController.extractProjectParams = (req, res, next) => {
 postProjectController.createProjectRecord = async (_req, res, next) => {
   try {
     const { projectName } = res.locals;
+    console.log('attempted project name', projectName);
 
     const insertProjectQuery = `
         INSERT INTO projects (
@@ -212,17 +214,24 @@ postProjectController.insertImageRecord = async (_req, res, next) => {
 };
 
 postProjectController.formatResponse = (_req, res) => {
-  const { signedImageUrl, fileName, projectId, canvasSizeX, canvasSizeY } =
-    res.locals;
+  const {
+    signedImageUrl,
+    fileName,
+    projectId,
+    canvasSizeX,
+    canvasSizeY,
+    canvasRatio,
+  } = res.locals;
   console.log('post request to /api/project successful');
   return res.json({
     image_url: signedImageUrl,
     image_name: fileName,
     project_id: projectId,
     canvas_dimensions: {
-      width: `${canvasSizeX}px`,
-      height: `${canvasSizeY}px`,
+      width: canvasSizeX,
+      height: canvasSizeY,
     },
+    canvas_ratio: canvasRatio,
   });
 };
 
  ---
  File: server/controllers/sessionController.js
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: server/controllers/userController.js
  Status: added
  Additions: 107
  Deletions: 0
  Changes: 107
  
Patch:
@@ -0,0 +1,107 @@
+import bcrypt from 'bcryptjs';
+import axios from 'axios';
+import session from 'express-session';
+import express from 'express';
+import pool from '../config/pool.js';
+import { supabaseClient } from '../config/supabaseClient.js';
+import dotenv from 'dotenv';
+dotenv.config();
+
+const storageBucketName = process.env.SUPABASE_STORAGE_BUCKET_NAME;
+const expireTime = process.env.SUPABASE_STORAGE_BUCKET_EXPIRATION_SECONDS;
+const userController = {};
+
+userController.createUser = async (req, res, next) => {
+  const { username, password } = req.body;
+  if (!username || typeof username !== 'string' || typeof password !== 'string')
+    res.status(400).send('Error: Invalid username or password format');
+  try {
+    const newUserQuery = `
+        INSERT INTO users (
+          username, password
+        )
+        VALUES
+          ($1, $2)
+        RETURNING
+          id;
+      `;
+    const result = await pool.query(newUserQuery, [username, password]);
+    if (!result.rows.length) {
+      return next({
+        log: 'failed to create user',
+        status: 500,
+        message: { err: 'could not create user' },
+      });
+    }
+    res.locals.cookieSSID = result.rows[0].id;
+    return next();
+  } catch (err) {
+    return next({
+      message: {
+        err: 'unable to create a new user. try a different username.',
+      },
+    });
+  }
+};
+
+userController.verifyUser = async (req, res, next) => {
+  const { username, password } = req.body;
+  if (!username || typeof username !== 'string' || typeof password !== 'string')
+    res.status(400).send('Error: Invalid username or password format');
+  try {
+    const existingUserQuery = `
+          SELECT *
+          FROM users
+          WHERE username=$1 AND password=$2
+          VALUES [$1, $2]
+        `;
+    const result = await pool.query(existingUserQuery, [username, password]);
+    if (!result.rows.length) {
+      return next({
+        log: 'failed to retrieve user',
+        status: 500,
+        message: { err: 'failed to retrieve user' },
+      });
+    }
+    res.locals.cookieSSID = result.rows[0].id;
+    return next();
+  } catch (err) {
+    return next({
+      message: {
+        err: 'unable to create a new user. try a different username.',
+      },
+    });
+  }
+};
+
+userController.verifyGit = async (req, res, next) => {
+  return res.redirect(
+    'https://github.com/login/oauth/authorize?client_id=Ov23li3BadKKnHvnimP6&redirect_uri=http://localhost:3000/auth/github/callback'
+  );
+};
+
+userController.handleToken = async (req, res, next) => {
+  console.log('logging request.url', req.query.code);
+  const code = req.query.code;
+  try {
+    const tokenResponse = await axios.post(
+      'https://github.com/login/oauth/access_token',
+      {
+        client_id: 'Ov23li3BadKKnHvnimP6',
+        client_secret: '0887a23a4cc003107825c0eae333a147466853fd',
+        code,
+      },
+      { headers: { accept: 'application/json' } }
+    );
+    console.log('token response data', tokenResponse.data);
+    const accessToken = tokenResponse.data.access_token;
+    console.log('access token', accessToken);
+    req.session.accessToken = accessToken;
+    return next();
+  } catch (err) {
+    console.error('Error exchanging code for token:', err);
+    res.status(500).send('Authentication error');
+  }
+};
+
+export default userController;
  ---
  File: server/server.js
  Status: modified
  Additions: 28
  Deletions: 0
  Changes: 28
  
Patch:
@@ -6,6 +6,9 @@ import multer from 'multer'; //maybe need for image upload
 import projectRoutes from './routes/projectRoutes.js';
 import initializeDatabase from './utility/initializeDatabase.js';
 import initializeStorageBucket from './utility/initializeStorageBucket.js';
+import userController from './controllers/userController.js';
+import path, { dirname } from 'path';
+import { fileURLToPath } from 'url';
 
 const app = express();
 
@@ -39,6 +42,31 @@ app.use((req, res, next) => {
 });
 
 // Routes
+
+//create a new user
+
+app.post(
+  '/signup',
+  userController.createUser,
+  // cookieController.setSSIDCookie,
+  // sessionController.startSession,
+  (req, res) => {
+    console.log(res.locals.cookieSSID);
+    res.redirect('/project');
+  }
+);
+
+app.post('/login', userController.verifyUser, (req, res) => {
+  res.redirect('/project');
+});
+//GitAuth
+app.get('/gitauth', userController.verifyGit, (req, res) => {
+  res.status(200);
+});
+app.get('/auth/github/callback', userController.handleToken, (req, res) => {
+  // create session with token
+  res.redirect('/profile');
+});
 app.use('/api', projectRoutes);
 
 // Error Handling
  ---
  File: server/utility/initializeDatabase.js
  Status: modified
  Additions: 7
  Deletions: 0
  Changes: 7
  
Patch:
@@ -97,3 +97,10 @@ const initializeDatabase = async () => {
 };
 
 export default initializeDatabase;
+
+export {
+  checkTableExists,
+  createProjectsTable,
+  createImagesTable,
+  createCommentsTable
+};
  ---
  File: src/App.css
  Status: removed
  Additions: 0
  Deletions: 42
  Changes: 42
  
Patch:
@@ -1,42 +0,0 @@
-#root {
-  max-width: 1280px;
-  margin: 0 auto;
-  padding: 2rem;
-  text-align: center;
-}
-
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
-}
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
-}
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
-}
-
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
-  }
-  to {
-    transform: rotate(360deg);
-  }
-}
-
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
-  }
-}
-
-.card {
-  padding: 2em;
-}
-
-.read-the-docs {
-  color: #888;
-}
  ---
  File: src/App.tsx
  Status: modified
  Additions: 8
  Deletions: 93
  Changes: 101
  
Patch:
@@ -1,101 +1,16 @@
-import * as React from 'react';
-import RndBox from './components/RndBox';
+import React, { useState, useEffect, useRef } from 'react';
 import CanvasContainer from './containers/CanvasContainer';
-import ProjectManagementBar from './containers/ProjectManagementBar'
-
-import { Rnd } from 'react-rnd';
-
-import { useSelector } from 'react-redux';
-
-export interface Box
-  extends Required<
-    Pick<Rnd['props']['default'], 'x' | 'y' | 'width' | 'height'>
-  > {
-  id: number;
-}
+import ProjectNavBar from './components/ProjectNavBar';
+import * as dummydata from './dummydata.json';
+import { useSelector, useDispatch } from 'react-redux';
+import type { RootState, AppDispatch, AppStore } from './main';
 
 const App: React.FC = () => {
-  const [boxes, setBoxes] = React.useState<Box[]>([]);
-  const [isDragging, setIsDragging] = React.useState(false);
-
-  const [canCreateBox, setCanCreateBox] = React.useState(true);
-  const handleMouseDown = (e) => {
-    if (!canCreateBox) return;
-    if (e.target.className.includes('react-draggable')) {
-      handleMouseMove(e);
-      return;
-    }
-
-    setCanCreateBox(false);
-
-    //allows creation of an Rndbox only every second
-    setTimeout(() => setCanCreateBox(true), 1000);
-
-    setIsDragging(true);
-    const newBox = {
-      id: Date.now(),
-      x: e.clientX - 30,
-      y: e.clientY - 30,
-      width: 150,
-      height: 150,
-    };
-    setBoxes((prev) => [...prev, newBox]);
-  };
-
-  //handles clicking and dragging an item to another area of the canvas
-  const handleMouseMove = (e) => {
-    if (!isDragging) return;
-
-    setBoxes((prev) => {
-      const lastBox = prev[prev.length - 1];
-      if (!lastBox) return prev;
-
-      const updatedBox = {
-        ...lastBox,
-        width: e.clientX - lastBox.x,
-        height: e.clientY - lastBox.y,
-      };
-
-      return [...prev.slice(0, -1), updatedBox];
-    });
-  };
-
-  const handleMouseUp = () => {
-    setIsDragging(false);
-  };
-
-  const handleDelete = (id: number) => {
-    console.log('what id is this', id);
-    setBoxes((prev) => prev.filter((box) => box.id !== id));
-  };
-
   //Todo: replace backgroundImage with updated url from state. update canvas size from state as well.
   return (
-    <div> 
-      <ProjectManagementBar></ProjectManagementBar>
-    <div
-      className='canvas-container'
-      onMouseDown={handleMouseDown}
-      onMouseMove={handleMouseMove}
-      onMouseUp={handleMouseUp}
-      style={{
-        position: 'relative',
-        backgroundImage:
-          'url(https://media.npr.org/assets/img/2021/01/21/ap_21021110780453_custom-d6dfddf768dbd02ed59154c961a2f7f9a6fbcaff.jpg)',
-        backgroundSize: '1200px 800px',
-        border: '3px solid black',
-        height: '800px',
-        width: '1200px',
-        margin: '30px',
-      }}
-    >
-      {boxes.map((box) => (
-        <RndBox key={box.id} {...box} />
-      ))}
-    </div>
+    <div className='flex-col justify-start'>
+      <CanvasContainer />
     </div>
   );
-
-
-}
+};
 export default App;
  ---
  File: src/assets/bryan-davis.png
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/assets/cloudIcon.svg
  Status: added
  Additions: 5
  Deletions: 0
  Changes: 5
  
Patch:
@@ -0,0 +1,5 @@
+<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
+<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
+<path d="M12 16V22M12 16L14 18M12 16L10 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
+<path d="M22 13.3529C22 15.6958 20.5562 17.7055 18.5 18.5604M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 16.6611 3.26124 18.2664 5 18.8061M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C19.0446 8.31916 19.8345 8.83436 20.4633 9.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
+</svg>
\ No newline at end of file
  ---
  File: src/assets/debateMateTexture.png
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/assets/debateMate_logo.png
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/assets/dislike-button.svg
  Status: added
  Additions: 20
  Deletions: 0
  Changes: 20
  
Patch:
@@ -0,0 +1,20 @@
+<?xml version="1.0" encoding="UTF-8" standalone="no"?>
+<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
+<svg width="14px" height="14px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
+    
+    <title>dislike [#1387]</title>
+    <desc>Created with Sketch.</desc>
+    <defs>
+
+</defs>
+    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
+        <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -760.000000)" fill="	
+#8b0000">
+            <g id="icons" transform="translate(56.000000, 160.000000)">
+                <path d="M139.800374,612 L144.00037,612 L144.00037,600 L139.800374,600 L139.800374,612 Z M127.698085,600 L137.700376,600 L137.700376,611.979 L135.894378,618.174 C135.725328,619.224 134.776129,620 133.66103,620 C132.412581,620 131.400381,619.036 131.400381,617.847 L131.400381,612 L125.873186,612 C124.026238,612 122.659139,610.358 123.074939,608.644 L124.899837,602.109 C125.200137,600.868 126.360386,600 127.698085,600 L127.698085,600 Z" id="dislike-[#1387]">
+
+</path>
+            </g>
+        </g>
+    </g>
+</svg>
\ No newline at end of file
  ---
  File: src/assets/editIcon.svg
  Status: modified
  Additions: 2
  Deletions: 2
  Changes: 4
  
Patch:
@@ -1,5 +1,5 @@
 <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
 <svg width="22px" height="22px" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
-<path d="M8.29289 3.70711L1 11V15H5L12.2929 7.70711L8.29289 3.70711Z" fill="#000000"/>
-<path d="M9.70711 2.29289L13.7071 6.29289L15.1716 4.82843C15.702 4.29799 16 3.57857 16 2.82843C16 1.26633 14.7337 0 13.1716 0C12.4214 0 11.702 0.297995 11.1716 0.828428L9.70711 2.29289Z" fill="#000000"/>
+<path d="M8.29289 3.70711L1 11V15H5L12.2929 7.70711L8.29289 3.70711Z" fill="#ffffff"/>
+<path d="M9.70711 2.29289L13.7071 6.29289L15.1716 4.82843C15.702 4.29799 16 3.57857 16 2.82843C16 1.26633 14.7337 0 13.1716 0C12.4214 0 11.702 0.297995 11.1716 0.828428L9.70711 2.29289Z" fill="#ffffff"/>
 </svg>
\ No newline at end of file
  ---
  File: src/assets/folderIcon.svg
  Status: added
  Additions: 5
  Deletions: 0
  Changes: 5
  
Patch:
@@ -0,0 +1,5 @@
+<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
+<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
+<path d="M19 10V6C19 5.44772 18.5523 5 18 5H10.0351C9.73195 5 9.44513 4.86245 9.25533 4.62602L8.25023 3.37398C8.06042 3.13755 7.77361 3 7.47042 3H3C2.44772 3 2 3.44772 2 4L2 15C2 15.5523 2.44772 16 3 16H5" stroke="#200E32" stroke-width="2"/>
+<path d="M5 20V9C5 8.44772 5.44772 8 6 8H10.4704C10.7736 8 11.0604 8.13755 11.2502 8.37398L12.2553 9.62602C12.4451 9.86245 12.7319 10 13.0351 10H21C21.5523 10 22 10.4477 22 11V20C22 20.5523 21.5523 21 21 21H6C5.44772 21 5 20.5523 5 20Z" stroke="#200E32" stroke-width="2"/>
+</svg>
\ No newline at end of file
  ---
  File: src/assets/like-button.svg
  Status: added
  Additions: 19
  Deletions: 0
  Changes: 19
  
Patch:
@@ -0,0 +1,19 @@
+<?xml version="1.0" encoding="UTF-8" standalone="no"?>
+<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
+<svg width="14px" height="14px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
+    
+    <title>like [#1386]</title>
+    <desc>Created with Sketch.</desc>
+    <defs>
+
+</defs>
+    <g id="Page-1" stroke="none" stroke-width="1" fill="#008000" fill-rule="evenodd">
+        <g id="Dribbble-Light-Preview" transform="translate(-219.000000, -760.000000)" fill="#008000">
+            <g id="icons" transform="translate(56.000000, 160.000000)">
+                <path d="M163,610.021159 L163,618.021159 C163,619.126159 163.93975,620.000159 165.1,620.000159 L167.199999,620.000159 L167.199999,608.000159 L165.1,608.000159 C163.93975,608.000159 163,608.916159 163,610.021159 M183.925446,611.355159 L182.100546,617.890159 C181.800246,619.131159 180.639996,620.000159 179.302297,620.000159 L169.299999,620.000159 L169.299999,608.021159 L171.104948,601.826159 C171.318098,600.509159 172.754498,599.625159 174.209798,600.157159 C175.080247,600.476159 175.599997,601.339159 175.599997,602.228159 L175.599997,607.021159 C175.599997,607.573159 176.070397,608.000159 176.649997,608.000159 L181.127196,608.000159 C182.974146,608.000159 184.340196,609.642159 183.925446,611.355159" id="like-[#1386]">
+
+</path>
+            </g>
+        </g>
+    </g>
+</svg>
\ No newline at end of file
  ---
  File: src/assets/medium-pexels-fotoaibe.jpg
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/assets/minimize.svg
  Status: added
  Additions: 1
  Deletions: 0
  Changes: 1
  
Patch:
@@ -0,0 +1 @@
+<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M50,5.042C25.21,5.042,5.042,25.21,5.042,50C5.042,74.79,25.21,94.958,50,94.958S94.958,74.79,94.958,50   C94.958,25.21,74.79,5.042,50,5.042z M61.873,51.5H38.127v-3h23.747V51.5z"/></g></svg>
\ No newline at end of file
  ---
  File: src/assets/new-file.svg
  Status: added
  Additions: 22
  Deletions: 0
  Changes: 22
  
Patch:
@@ -0,0 +1,22 @@
+<?xml version="1.0" encoding="iso-8859-1"?>
+<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
+<svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
+	 viewBox="0 0 502 502" xml:space="preserve">
+<g>
+	<g>
+		<path d="M405.889,348.576V105.273c0-2.652-1.054-5.196-2.929-7.071L307.688,2.929C305.812,1.054,303.269,0,300.617,0H70.783
+			c-5.523,0-10,4.477-10,10v445.916c0,5.523,4.477,10,10,10h216.442C303.083,488.611,328.615,502,356.57,502
+			c46.674,0,84.646-37.972,84.646-84.646C441.217,389.827,428.102,364.485,405.889,348.576z M80.783,20h215.691l76.158,76.158
+			h-51.151c-5.522,0-10,4.477-10,10s4.478,10,10,10h64.408v221.789c-9.334-3.451-19.247-5.241-29.319-5.241
+			c-46.675,0-84.647,37.973-84.647,84.647c0,9.793,1.692,19.45,4.955,28.562H80.783V20z M356.57,482
+			c-22.766,0-43.43-11.629-55.277-31.107c-6.13-10.077-9.37-21.675-9.37-33.539c0-35.646,29.001-64.647,64.647-64.647
+			c11.785,0,23.28,3.21,33.334,9.278c0.474,0.355,0.979,0.67,1.513,0.938c18.668,11.975,29.799,32.278,29.799,54.431
+			C421.217,453,392.217,482,356.57,482z"/>
+		<path d="M394.345,407.354h-27.776v-27.776c0-5.523-4.478-10-10-10s-10,4.477-10,10v27.776h-27.776c-5.522,0-10,4.477-10,10
+			s4.478,10,10,10h27.776v27.776c0,5.523,4.478,10,10,10s10-4.477,10-10v-27.776h27.776c5.522,0,10-4.477,10-10
+			S399.868,407.354,394.345,407.354z"/>
+		<path d="M292.56,106.158c0-5.523-4.478-10-10-10h-11.447c-5.522,0-10,4.477-10,10s4.478,10,10,10h11.447
+			C288.083,116.158,292.56,111.681,292.56,106.158z"/>
+	</g>
+</g>
+</svg>
\ No newline at end of file
  ---
  File: src/assets/new-project.svg
  Status: added
  Additions: 9
  Deletions: 0
  Changes: 9
  
Patch:
@@ -0,0 +1,9 @@
+
+<?xml version="1.0" encoding="UTF-8" standalone="no"?>
+<svg width='10px' height='10px' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
+ <path d="m33.332 36.457h-20.832c-1.707 0-3.125-1.418-3.125-3.125v-0.70703c0-3.082 1.207-5.957 3.375-8.125l15.918-15.918c2.168-2.168 5.043-3.375 8.125-3.375h0.70703c1.707 0 3.125 1.418 3.125 3.125v20.832c0 4-3.293 7.293-7.293 7.293zm-17.125-6.25h17.125c0.58203 0 1.043-0.45703 1.043-1.043v-17.121c-0.45703 0.25-0.91797 0.58203-1.293 0.95703l-15.918 15.918c-0.375 0.375-0.70703 0.83203-0.95703 1.293z"/>
+ <path d="m62.5 94.793c-15.5 0-28.125-12.625-28.125-28.125s12.625-28.125 28.125-28.125c6.625 0 13.043 2.332 18.043 6.582 6.375 5.375 10.082 13.207 10.082 21.543 0 15.5-12.625 28.125-28.125 28.125zm0-50c-12.043 0-21.875 9.793-21.875 21.875s9.832 21.875 21.875 21.875 21.875-9.793 21.875-21.875c0-6.457-2.875-12.582-7.832-16.793-3.957-3.332-8.793-5.082-14.043-5.082z"/>
+ <path d="m62.5 81.25c-1.707 0-3.125-1.418-3.125-3.125v-22.918c0-1.707 1.418-3.125 3.125-3.125s3.125 1.418 3.125 3.125v22.918c0 1.707-1.418 3.125-3.125 3.125z"/>
+ <path d="m73.957 69.793h-22.918c-1.707 0-3.125-1.418-3.125-3.125s1.418-3.125 3.125-3.125h22.918c1.707 0 3.125 1.418 3.125 3.125s-1.418 3.125-3.125 3.125z"/>
+ <path d="m38.832 88.543h-18c-2.875 0-5.207-2.332-5.207-5.207v-50.711c0-1.375 0.54297-2.707 1.543-3.707l15.918-15.918c1-1 2.293-1.543 3.707-1.543h34.043c2.875 0 5.207 2.332 5.207 5.207v20.668c2.207 1.043 4.293 2.332 6.25 3.832v-24.543c0-6.332-5.125-11.457-11.457-11.457h-34.043c-3.082 0-5.957 1.207-8.125 3.375l-15.918 15.918c-2.168 2.168-3.375 5.043-3.375 8.125v50.707c0 6.332 5.125 11.457 11.457 11.457h25.832c-2.957-1.668-5.582-3.793-7.875-6.25z"/>
+ </svg>
\ No newline at end of file
  ---
  File: src/assets/oval_office.webp
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/assets/pexels-fotoaibe-1571460.jpg
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/assets/pexels-nguyendesigner-244133.jpg
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/assets/pexels-pixabay-261102.jpg
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/assets/pexels-pixabay-276724.jpg
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/assets/pexels-thoinamcao-15848139.jpg
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/assets/pexels-tirachard-kumtanom-112571-347141.png
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/assets/trashIcon.svg
  Status: modified
  Additions: 1
  Deletions: 1
  Changes: 2
  
Patch:
@@ -1,7 +1,7 @@
 <?xml version='1.0' encoding='iso-8859-1'?>
 <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
 <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator SVG Repo Mixer Tools -->
-<svg fill="#000000" height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 315 315">
+<svg fill="#ffffff" height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 315 315">
   <g>
     <path d="m256.774,23.942h-64.836v-6.465c0-9.636-7.744-17.477-17.263-17.477h-34.348c-9.521,0-17.266,7.841-17.266,17.478v6.465h-64.835c-9.619,0-17.445,7.76-17.445,17.297v11.429c0,7.168 4.42,13.33 10.698,15.951 1.989,39.623 13.5,231.193 14.018,239.801 0.222,3.696 3.284,6.58 6.987,6.58h170.033c3.703,0 6.766-2.884 6.987-6.58 0.518-8.607 12.028-200.178 14.018-239.801 6.278-2.621 10.698-8.783 10.698-15.951v-11.43c5.68434e-14-9.537-7.826-17.297-17.446-17.297zm-119.713-6.464c0-1.918 1.465-3.478 3.266-3.478h34.348c1.8,0 3.264,1.56 3.264,3.478v6.465h-40.877v-6.465zm-82.282,23.761c0-1.818 1.546-3.297 3.445-3.297h198.549c1.899,0 3.445,1.478 3.445,3.297v11.429c0,1.819-1.546,3.299-3.445,3.299h-198.548c-1.899,0-3.445-1.479-3.445-3.299v-11.429zm181.143,259.761h-156.848c-2.055-34.247-11.479-191.674-13.51-231.033h183.867c-2.031,39.359-11.454,196.786-13.509,231.033z"/>
     <path d="m157.5,95.125c-3.866,0-7,3.134-7,7v176.109c0,3.866 3.134,7 7,7 3.866,0 7-3.134 7-7v-176.109c0-3.866-3.134-7-7-7z"/>
  ---
  File: src/assets/unknown.svg
  Status: added
  Additions: 3
  Deletions: 0
  Changes: 3
  
Patch:
@@ -0,0 +1,3 @@
+   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
+   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
+   </svg>
\ No newline at end of file
  ---
  File: src/components/CanvasBackground.tsx
  Status: added
  Additions: 149
  Deletions: 0
  Changes: 149
  
Patch:
@@ -0,0 +1,149 @@
+import React, { useState, useEffect } from 'react';
+import { useSelector, useDispatch } from 'react-redux';
+import type { RootState } from './main';
+import { Button } from './ui/button';
+import CanvasMap from './CanvasMap';
+import {
+  updateImageURL,
+  useImageSize,
+  updateProjectId,
+  changeImage,
+} from '../reducers/canvasSlice';
+
+type dragImage = {
+  width: number;
+  height: number;
+  image: '';
+};
+
+const CanvasBackground = ({ children, createProject, canvasWindow }) => {
+  const [didUpload, setDidUpload] = useState(false);
+  const projectName = useSelector(
+    (state: RootState) => state.canvasReducer.project_name
+  );
+  const canvasImg = useSelector(
+    (state: RootState) => state.canvasReducer.image_url
+  );
+  const canvasSize = useSelector(
+    (state: RootState) => state.canvasReducer.canvas_size
+  );
+
+  const dispatch = useDispatch();
+
+  /*
+  const handleDrop = async (e: React.DragEvent<HTMLImageElement>) => {
+    e.preventDefault();
+
+    console.log(e.target);
+    const image_url = e.dataTransfer.getData('URL');
+    console.log(e.dataTransfer);
+    //need a function to detect the image size
+    const img = new Image(1800, 1200);
+    img.src = image_url;
+    img.crossOrigin = 'anonymous';
+    console.log(img);
+
+    //need a function to update the canvas size & update the project image URL
+  };
+*/
+
+  // const handleDragOver = (e) => {
+  //   e.preventDefault();
+  // };
+
+  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
+    event.preventDefault();
+    setDidUpload(true);
+    const form = event.currentTarget;
+    const fileInput = form.querySelector<HTMLInputElement>('#input-file');
+    const file = fileInput.files?.[0];
+    console.log(file);
+    if (!fileInput) {
+      alert('Please upload an image to begin.');
+      return;
+    }
+    const formData = new FormData();
+    formData.append('image_file_1', file);
+    formData.append('project_name', projectName);
+    createProject(formData);
+  };
+
+  return (
+    <>
+      {canvasImg === undefined && (
+        <div className='hello justify-center resize items-center absolute left-0 top-[126px] w-full'>
+          <div className='relative flex w-full max-w-xl text-center flex-col gap-1'>
+            <form
+              onSubmit={handleUpload}
+              encType='multipart/form-data'
+              className='relative'
+            >
+              <div className='flex w-full max-w-xl text-center flex-col gap-1'>
+                <span className='w-fit pl-0.5 text-sm text-on-surface dark:text-on-surface-dark'>
+                  Upload your design
+                </span>
+                <div className='flex w-full flex-col items-center justify-center gap-2 rounded-radius border border-dashed border-outline p-8 text-on-surface dark:border-outline-dark dark:text-on-surface-dark'>
+                  <svg
+                    xmlns='http://www.w3.org/2000/svg'
+                    viewBox='0 0 24 24'
+                    aria-hidden='true'
+                    fill='currentColor'
+                    className='w-12 h-12 opacity-75'
+                  >
+                    <path
+                      fillRule='evenodd'
+                      d='M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z'
+                      clipRule='evenodd'
+                    />
+                  </svg>
+                  <div className='group'>
+                    <label
+                      htmlFor='input-file'
+                      className='font-medium text-primary group-focus-within:underline dark:text-primary-dark'
+                    >
+                      <input
+                        id='input-file'
+                        name='input-file'
+                        type='file'
+                        accept='.jpg, .png, .jpeg, .svg, .gif'
+                        className='sr-only'
+                      />
+                      Browse{' '}
+                    </label>
+                    or drag and drop here
+                  </div>
+                  <small id='validFileFormats'>PNG, JPG, WebP - Max 5MB</small>
+                </div>
+              </div>
+
+              <button
+                className='bg-blue-500 rounded-md border-blue border-2 p-2 active:bg-blue-300 hover:shadow-lg hover:bg-dark-blue active:shadow-blue-500 '
+                type='submit'
+                value='Upload'
+              >
+                Submit
+              </button>
+            </form>
+          </div>
+        </div>
+      )}
+      {canvasImg !== undefined && (
+        <div className='justify-center resize items-center absolute left-0 top-[126px] w-full'>
+          <div
+            role='image-bg'
+            className={`bg-no-repeat bg-contain`}
+            style={{
+              backgroundImage: `url(${canvasImg})`,
+              height: canvasSize[1],
+              width: canvasSize[0],
+            }}
+          >
+            {children}
+          </div>
+        </div>
+      )}
+    </>
+  );
+};
+
+export default CanvasBackground;
  ---
  File: src/components/CanvasComponent.tsx
  Status: removed
  Additions: 0
  Deletions: 148
  Changes: 148
  
Patch:
@@ -1,148 +0,0 @@
-import React, { useContext, useRef } from 'react';
-import { ResizeEnable, Rnd } from 'react-rnd';
-import { CanvasContext, ICanvasComponent } from '../containers/CanvasContainer';
-import { resizeHandleClasses } from '../canvasUtils';
-import ImageElement from './ImageElement';
-import TextElement from './TextElement';
-
-const componentMap: { [key: string]: React.ComponentType<ICanvasComponent> } = {
-  TEXT: TextElement,
-  IMAGE: ImageElement,
-};
-
-const getEnableResize = (type: string): ResizeEnable => {
-  return {
-    bottom: type === 'IMAGE',
-    bottomLeft: true,
-    bottomRight: true,
-
-    top: type === 'IMAGE',
-    topLeft: true,
-    topRight: true,
-
-    left: true,
-    right: true,
-  };
-};
-const CanvasComponent = (props: ICanvasComponent) => {
-  const { state, actions } = useContext(CanvasContext);
-  const { dimension, position, content, id, type } = props;
-  const [showGrids, setShowGrids] = React.useState(false);
-  const [isReadOnly, setIsReadOnly] = React.useState(true);
-  const elementRef = React.useRef<HTMLDivElement>(null);
-  const isDragged = useRef<boolean>(false);
-
-  const activeSelection = state?.activeSelection;
-
-  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
-    const toolbarElement = document.querySelector('#toolbar');
-    if (
-      event.currentTarget.contains(event?.relatedTarget as Element) ||
-      toolbarElement?.contains(event?.relatedTarget as Element)
-    ) {
-      return;
-    }
-    setIsReadOnly(true);
-    actions?.setEnableQuillToolbar(false);
-    if (id && activeSelection) {
-      activeSelection.delete(id);
-      actions?.setActiveSelection(new Set(activeSelection));
-    }
-  };
-
-  const getComponent = () => {
-    const Component = type && componentMap[type];
-    if (!Component || !id) return null;
-    return (
-      <Component
-        key={id}
-        id={id}
-        type={type}
-        position={position}
-        dimension={dimension}
-        content={content}
-        isReadOnly={isReadOnly}
-      />
-    );
-  };
-
-  const style: React.CSSProperties = {
-    outline: 'none',
-    border: `2px solid ${
-      (id && state?.activeSelection.has(id)) || showGrids || isDragged.current
-        ? '#21DEE5'
-        : 'transparent'
-    }`,
-  };
-
-  const onMouseEnter = () => {
-    setShowGrids(true);
-  };
-
-  const onMouseLeave = () => {
-    setShowGrids(false);
-  };
-
-  const onfocus = (event: React.MouseEvent) => {
-    if (id) {
-      actions?.setActiveSelection(new Set(state?.activeSelection.add(id)));
-    }
-  };
-
-  const onKeyDown = (event: React.KeyboardEvent) => {
-    if (!isReadOnly) event.stopPropagation();
-  };
-
-  const handleClass =
-    id && state?.activeSelection.has(id) && state?.activeSelection.size === 1
-      ? 'showHandles'
-      : '';
-
-  const onDoubleClick = () => {
-    if (!isReadOnly) return;
-    setIsReadOnly(false);
-    actions?.setEnableQuillToolbar(true);
-  };
-
-  return (
-    <div ref={elementRef}>
-      <Rnd
-        style={style}
-        size={{ width: dimension?.width || 0, height: dimension?.height || 0 }}
-        position={{ x: position?.left || 0, y: position?.top || 0 }}
-        onDragStart={() => {
-          isDragged.current = true;
-        }}
-        onDragStop={(e, d) => {
-          isDragged.current = false;
-          actions?.updateCanvasData({ id, position: { left: d.x, top: d.y } });
-        }}
-        resizeHandleWrapperClass={handleClass}
-        resizeHandleClasses={resizeHandleClasses}
-        onResize={(e, direction, ref, delta, position) => {
-          actions?.updateCanvasData({
-            id,
-            dimension: { width: ref.style.width, height: ref.style.height },
-            position: { top: position.y, left: position.x },
-          });
-        }}
-        enableResizing={getEnableResize(type)}
-        minWidth={100}
-        minHeight={50}
-        disableDragging={!isReadOnly}
-        onMouseEnter={onMouseEnter}
-        onMouseLeave={onMouseLeave}
-        onDoubleClick={onDoubleClick}
-        onKeyDown={onKeyDown}
-        onFocus={onfocus}
-        onBlur={onBlur}
-        tabIndex={0}
-        lockAspectRatio={type === 'IMAGE'}
-      >
-        <div className='item-container'>{getComponent()}</div>
-      </Rnd>
-    </div>
-  );
-};
-
-export default CanvasComponent;
  ---
  File: src/components/CanvasMap.tsx
  Status: added
  Additions: 139
  Deletions: 0
  Changes: 139
  
Patch:
@@ -0,0 +1,139 @@
+import React, { useEffect } from 'react';
+import RndBox from './RndBox';
+import { Rnd } from 'react-rnd';
+import { useSelector, useDispatch } from 'react-redux';
+import { updateComments } from '../reducers/canvasSlice';
+export interface Box
+  extends Required<
+    Pick<Rnd['props']['default'], 'x' | 'y' | 'width' | 'height'>
+  > {
+  comment_id: number;
+}
+
+export interface CanvasProps {
+  canvasSize: number[];
+}
+
+const CanvasMap = ({ canvasSize, saveProject }) => {
+  const [isDragging, setIsDragging] = React.useState(false);
+  const [canCreateBox, setCanCreateBox] = React.useState(true);
+  const comment_objects = useSelector(
+    (state: RootState) => state.canvasReducer.comment_objects
+  );
+  const [boxes, setBoxes] = React.useState([...comment_objects]);
+
+  const currentProjectId = useSelector(
+    (state: RootState) => state.canvasReducer.project_id
+  );
+  const dispatch = useDispatch();
+
+  useEffect(() => {
+    setBoxes([...comment_objects]);
+  }, [currentProjectId]);
+
+  const handleCommentClick = function (e) {
+    console.log(e.target.value, 'target value');
+  };
+
+  const handleMouseDown = (e) => {
+    console.log(e.target.value);
+    function toggleCreateBox() {
+      setCanCreateBox(false);
+
+      //allows creation of an Rndbox only every second
+      setTimeout(() => {
+        console.log('set time out function firing to true', canCreateBox);
+        setCanCreateBox(true);
+      }, 500);
+    }
+    if (!canCreateBox) return;
+
+    if (e.target.className.includes('comment-box')) {
+      toggleCreateBox();
+      handleMouseMove(e);
+      console.log('registered comment box click');
+      return;
+    }
+    if (e.target.className.includes('icon-box')) {
+      toggleCreateBox();
+      console.log('am i clicking on an icon box');
+      handleCommentClick(e);
+      return;
+    }
+    if (e.target.className.includes('delete-comment')) {
+      handleDelete(e.target.id);
+      console.log('e.target.id', e.target.id);
+      return;
+    }
+
+    console.log(canCreateBox, 'can create box');
+    toggleCreateBox();
+    const newBox = {
+      id: Date.now(),
+      x: e.clientX,
+      y: e.clientY - 126,
+      width: 150,
+      height: 150,
+    };
+
+    setIsDragging(true);
+    console.log(newBox);
+    setBoxes([...boxes, newBox]);
+    dispatch(updateComments([newBox]));
+  };
+
+  //handles clicking and dragging an RndBox to another area of the canvas
+  const handleMouseMove = (e) => {
+    if (!isDragging) return;
+    setCanCreateBox(false);
+    console.log(comment_objects);
+    setBoxes((prev) => {
+      const lastBox = prev[prev.length - 1];
+      if (!lastBox) return prev;
+
+      const updatedBox = {
+        ...lastBox,
+        width: e.clientX - lastBox.x,
+        height: e.clientY - lastBox.y,
+      };
+      return [...prev.slice(0, -1), updatedBox];
+    });
+  };
+
+  const handleMouseUp = () => {
+    setIsDragging(false);
+  };
+
+  const handleDelete = (e) => {
+    console.log('tried to delete', e.target.id);
+    const filteredBoxes = boxes.filter((box) => box.id !== e.target.id);
+    setBoxes([...filteredBoxes]);
+    dispatch(updateComments([...filteredBoxes]));
+  };
+
+  return (
+    <div
+      onDragOver={(e) => e.preventDefault()}
+      onMouseDown={handleMouseDown}
+      style={{
+        height: `100%`,
+        width: `100%`,
+        position: 'absolute',
+      }}
+    >
+      {boxes.map((box) => (
+        <RndBox
+          key={box.id}
+          id={box.id}
+          x={box.x}
+          y={box.y}
+          width={box.width}
+          height={box.height}
+          handleDelete={handleDelete}
+        />
+      ))}
+    </div>
+  );
+};
+
+export default CanvasMap;
  ---
  File: src/components/CommentForm.tsx
  Status: added
  Additions: 166
  Deletions: 0
  Changes: 166
  
Patch:
@@ -0,0 +1,166 @@
+import React, { useState } from 'react';
+import likeIcon from '../assets/like-button.svg';
+import dislikeIcon from '../assets/dislike-button.svg';
+import editIcon from '../assets/editIcon.svg';
+import closeIcon from '../assets/minimize.svg';
+interface CommentProps {
+  id: number;
+}
+
+interface CommentObject {}
+const CommentForm: React.FC<CommentProps> = ({ id, togglePopover }) => {
+  const [isHovered, setIsHovered] = useState<string | null>();
+  const [isClicked, setIsClicked] = useState<string | null>();
+  //   const [activeComment, setActiveComment] = useState;
+
+  const handleMouseEnter = (e) => {
+    console.log(e.target.name);
+    setIsHovered(e.target.name);
+  };
+  const handleMouseLeave = () => setIsHovered(null);
+  const handleClick = (e) => setIsClicked(e.target.name);
+
+  const getButtonStyle = (buttonName) => ({
+    opacity: isHovered === buttonName || isClicked == buttonName ? '1' : '0.5',
+  });
+  return (
+    <div className='feedback-form icon-box position-relative top-0 left-0'>
+      <button
+        type='button'
+        tabIndex={0}
+        style={{
+          top: '-20px',
+          right: '-20px',
+          margin: '10px',
+          position: 'absolute',
+          width: '40px',
+        }}
+        //   ref={buttonRef}
+        onClick={togglePopover}
+      >
+        <img className='icon-box' src={closeIcon} alt='Close Icon'></img>
+      </button>
+      <form className='icon-box mt-5 mx-2'>
+        <h3 className='icon-box'>Feedback</h3>
+        <div
+          className='icon-box'
+          style={{
+            display: 'flex',
+            flexDirection: 'row',
+            justifyContent: 'space-between',
+          }}
+        >
+          <label
+            htmlFor='func-button'
+            style={{ display: 'inline-block', alignSelf: 'center' }}
+          >
+            {'Functionality?'}
+          </label>
+          <button
+            className='icon-box'
+            type='input'
+            name='func-like'
+            onMouseEnter={(e) => handleMouseEnter(e)}
+            onMouseLeave={handleMouseLeave}
+            onClick={(e) => handleClick(e)}
+            style={getButtonStyle('func-like')}
+          >
+            <img src={likeIcon} alt='like' className='faded-button'></img>
+          </button>
+          <button
+            type='input'
+            name='func-dislike'
+            className='icon-box'
+            onMouseEnter={(e) => handleMouseEnter(e)}
+            onMouseLeave={handleMouseLeave}
+            onClick={() => handleClick('func-dislike')}
+            style={getButtonStyle('func-dislike')}
+          >
+            <img src={dislikeIcon} alt='dislike' className='faded-button'></img>
+          </button>
+        </div>
+        <div
+          className='icon-box'
+          style={{
+            display: 'flex',
+            flexDirection: 'row',
+            justifyContent: 'space-between',
+          }}
+        >
+          <label
+            htmlFor='aesth-button'
+            style={{ display: 'inline-block', alignSelf: 'center' }}
+          >
+            {'Aesthetics?'}
+          </label>
+          <button
+            className='icon-box'
+            type='input'
+            name='aesth-like'
+            onMouseEnter={(e) => handleMouseEnter(e)}
+            onMouseLeave={handleMouseLeave}
+            onClick={(e) => handleClick(e)}
+            style={getButtonStyle('aesth-like')}
+          >
+            <img src={likeIcon} alt='like'></img>
+          </button>
+          <button
+            className='icon-box'
+            type='input'
+            name='aesth-dislike'
+            onMouseEnter={(e) => handleMouseEnter(e)}
+            onMouseLeave={handleMouseLeave}
+            onClick={(e) => handleClick(e)}
+            style={getButtonStyle('aesth-dislike')}
+          >
+            <img src={dislikeIcon} alt='dislike'></img>
+          </button>
+        </div>
+        <div
+          className='icon-box'
+          style={{
+            display: 'flex',
+            flexDirection: 'column',
+            justifyContent: 'space-evenly',
+          }}
+        >
+          <label className='icon-box' htmlFor='cost'>
+            Cost
+          </label>
+          <input
+            type='range'
+            className='icon-box'
+            id='costslider'
+            name='cost-button'
+          ></input>
+          <label className='icon-box' htmlFor='comments'>
+            Comments:{' '}
+          </label>
+          <br></br>
+          <textarea
+            type='text'
+            cols='20'
+            rows='6'
+            id={id}
+            className='commentBox icon-box'
+            style={{ margin: '0px 20px 10px 20px', fontFamily: 'Roboto' }}
+          ></textarea>
+        </div>
+        <button
+          type='submit'
+          className='commentButton icon-box'
+          style={{
+            border: 'none',
+            backgroundColor: '#023c66',
+            marginLeft: '120px',
+            color: 'white',
+            fontSize: '0.8em',
+          }}
+        >
+          Submit
+        </button>
+      </form>
+    </div>
+  );
+};
+export default CommentForm;
  ---
  File: src/components/LandingImage.tsx
  Status: added
  Additions: 30
  Deletions: 0
  Changes: 30
  
Patch:
@@ -0,0 +1,30 @@
+import React, { useState, useRef, useEffect } from 'react';
+// import image1 from '../assets/pexels-fotoaibe-1571460.jpg';
+
+const images = [
+  'src/assets/pexels-fotoaibe-1571460.jpg',
+  'src/assets/pexels-thoinamcao-15848139.jpg',
+  'src/assets/pexels-nguyendesigner-244133.jpg',
+  'src/assets/pexels-thoinamcao-15848139.jpg',
+];
+
+const BgImage = () => {
+  return (
+    <div
+      className={`rounded-lg flex h-[90vh] bg-[url(./src/assets/pexels-fotoaibe-1571460.jpg)] justify-center items-center bg-center bg-no-repeat bg-cover animate-bg-change`}
+    >
+      <div className='flex flex-col justify-center items-center logo-container border-4 sm:p-5 p-6 border-blue rounded-sm drop-shadow-sm margin-auto bg-opacity-50 bg-white'>
+        <h1 className='font-header sm:text-4xl m:text-5xl lg:text-6xl'>
+          CoCreate
+        </h1>
+        <div className='border-t-10 border-solid border-black relative p-4 margin-auto bg-clip-border'>
+          <span className='relative top-10 rounded-lg bg-white p-4 backdrop-blur-lg'>
+            visualize together
+          </span>
+        </div>
+      </div>
+    </div>
+  );
+};
+
+export default BgImage;
  ---
  File: src/components/NewProjectButton.tsx
  Status: added
  Additions: 33
  Deletions: 0
  Changes: 33
  
Patch:
@@ -0,0 +1,33 @@
+import { Input } from '@/components/ui/input';
+import { useState } from 'react';
+
+export const NewProjectButton = ({
+  projectName,
+  handleFocus,
+  handleInputChange,
+  handleFocusOut,
+}) => {
+  const [enterProject, setProjectName] = useState(false);
+  return (
+    <div className='file-menu bg-gray-400 relative z-10 flex w-80'>
+      <button
+        href='#'
+        onClick={() => setProjectName(!enterProject)}
+        className='bg-white z-10 px-4 py-2 text-sm whitespace-nowrap'
+      >
+        Name your project
+      </button>
+      {enterProject && (
+        <Input
+          type='text'
+          name='project-title'
+          defaultValue={projectName}
+          onFocus={handleFocus}
+          onChange={handleInputChange}
+          onBlur={handleFocusOut}
+          required
+        />
+      )}
+    </div>
+  );
+};
  ---
  File: src/components/NewProjectTab.tsx
  Status: added
  Additions: 95
  Deletions: 0
  Changes: 95
  
Patch:
@@ -0,0 +1,95 @@
+import React, { useState, useRef } from 'react';
+import { useDispatch, useSelector } from 'react-redux';
+
+import { createName } from '../reducers/canvasSlice';
+import { NewProjectButton } from '@/components/NewProjectButton';
+
+const NewProjectTab = function () {
+  const [tabIsOpen, setTabIsOpen] = useState(false);
+  const projectName = useSelector(
+    (state: RootState) => state.canvasReducer.project_name
+  );
+  const [inputName, setInputName] = useState(projectName);
+
+  const dispatch = useDispatch();
+
+  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
+    e.target.value = '';
+
+    e.target.placeholder = '... enter project name';
+  };
+  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
+    e.target.placeholder = '';
+    setInputName(e.target.value);
+  };
+  const handleFocusOut = (e) => {
+    e.target.value = inputName;
+
+    if (inputName !== projectName) {
+      dispatch(createName(inputName));
+      console.log('dispatching createname with inputname', inputName);
+    }
+  };
+
+  const handleOpen = () => {
+    setTabIsOpen(!tabIsOpen);
+  };
+
+  return (
+    <div className='bg-opacity-50 bg-gray-light dark:bg-gray-900'>
+      <button
+        type='button'
+        onClick={handleOpen}
+        className='inline-flex w-full
+      items-center gap-2 whitespace-nowrap rounded-radius bg-surface-alt px-4 py-2 text-sm 
+      font-medium tracking-wide transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2
+       focus-visible:outline-outline-strong dark:bg-surface-dark-alt dark:focus-visible:outline-outline-dark-strong'
+      >
+        File
+        {!tabIsOpen ? (
+          <svg
+            aria-hidden='true'
+            fill='none'
+            xmlns='http://www.w3.org/2000/svg'
+            viewBox='0 0 24 24'
+            stroke-width='2'
+            stroke='currentColor'
+            class='h-4 w-4'
+          >
+            <path
+              stroke-linecap='round'
+              stroke-linejoin='round'
+              d='M8.25 4.5l7.5 7.5-7.5 7.5'
+            />
+          </svg>
+        ) : (
+          <svg
+            aria-hidden='true'
+            fill='none'
+            xmlns='http://www.w3.org/2000/svg'
+            viewBox='0 0 24 24'
+            stroke-width='2'
+            stroke='currentColor'
+            class='h-4 w-4 rotate-0'
+          >
+            <path
+              stroke-linecap='round'
+              stroke-linejoin='round'
+              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
+            />
+          </svg>
+        )}
+      </button>
+      {tabIsOpen && (
+        <NewProjectButton
+          projectName={projectName}
+          handleFocus={handleFocus}
+          handleInputChange={handleInputChange}
+          handleFocusOut={handleFocusOut}
+        />
+      )}
+    </div>
+  );
+};
+
+export default NewProjectTab;
  ---
  File: src/components/ProjectNavBar.tsx
  Status: added
  Additions: 58
  Deletions: 0
  Changes: 58
  
Patch:
@@ -0,0 +1,58 @@
+import React from 'react';
+import NewProjectTab from '@/components/NewProjectTab';
+import SelectMenu from '@/components/SelectMenu';
+import { Progress } from '@/components/ui/progress';
+import {
+  updateComments,
+  uploadImage,
+  createName,
+  updateProjectId,
+  useImageSize,
+} from '../reducers/canvasSlice'; // Ensure this import is present
+
+const ProjectNavBar = ({
+  projects,
+  saveProject,
+  createProject,
+  inputNameRef,
+  changeProject,
+  project_id,
+}) => {
+  return (
+    <div className='w-100vw bg-white flex'>
+      <NewProjectTab createProject={createProject} />
+      {projects !== null ? (
+        <SelectMenu projects={projects} changeProject={changeProject} />
+      ) : (
+        <Progress />
+      )}
+      <button
+        type='button'
+        className='px-5 py-2.5 text-sm font-medium text-input inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
+        onClick={console.log(project_id)}
+        value={project_id}
+      >
+        <svg
+          className='w-6 h-6 text-gray-800 dark:text-white'
+          aria-hidden='true'
+          xmlns='http://www.w3.org/2000/svg'
+          width='24'
+          height='24'
+          fill='none'
+          viewBox='0 0 24 24'
+        >
+          <path
+            stroke='currentColor'
+            strokeLinecap='round'
+            strokeLinejoin='round'
+            strokeWidth='2'
+            d='M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2'
+          />
+        </svg>{' '}
+        <span className='ml-2'>Save</span>
+      </button>
+    </div>
+  );
+};
+
+export default ProjectNavBar;
  ---
  File: src/components/RndBox.tsx
  Status: modified
  Additions: 88
  Deletions: 18
  Changes: 106
  
Patch:
@@ -1,16 +1,18 @@
-import React, { useState, useEffect } from 'react';
+import React, { useState, useEffect, useRef } from 'react';
 import editIcon from '../assets/editIcon.svg';
 import trashIcon from '../assets/trashIcon.svg';
 import { Rnd, RndResizeCallback, RndDragCallback } from 'react-rnd';
+import CommentForm from './CommentForm.tsx';
 
 const style = {
   display: 'flex',
-  alignItems: 'center',
-  justifyContent: 'center',
+  alignItems: 'flex-start',
+  justifyContent: 'flex-end',
   border: 'solid 3px #ddd',
   borderRadius: '4px',
-  background: 'white',
-  opacity: '0.5',
+  background: 'rgb(255, 255, 255, 0.5)',
+  position: 'absolute',
+  minWidth: '80px',
 } as const;
 
 interface State {
@@ -26,11 +28,13 @@ interface RndBoxProps {
   y: number;
   width: number;
   height: number;
-  onDelete: () => void;
+  handleDelete: () => void;
 }
 
 const RndBox: React.FC<RndBoxProps> = (props) => {
   const [state, setState] = useState<State>({ ...props });
+  const [showPopover, setShowPopover] = useState(false);
+
   const handleDragStop: RndDragCallback = (_e, data) => {
     setState((prevState) => ({
       ...prevState,
@@ -53,27 +57,93 @@ const RndBox: React.FC<RndBoxProps> = (props) => {
     }));
   };
 
+  const togglePopover = () => {
+    setShowPopover((prev) => !prev);
+  };
+
   return (
     <Rnd
       style={style}
       size={{ width: state.width, height: state.height }}
       position={{ x: state.x, y: state.y }}
       onDragStop={handleDragStop}
       onResizeStop={handleResizeStop}
+      className='comment-box'
     >
-      <div
-        className='icon-box'
-        style={{
-          marginLeft: 'auto',
-          marginBottom: 'auto',
-          marginTop: '10px',
-          marginRight: '5px',
-        }}
-      >
-        <img src={editIcon} alt='Edit Icon'></img>
+      {!showPopover && (
+        <div
+          data-testid='box'
+          style={{
+            top: '-20px',
+            position: 'relative',
+          }}
+        >
+          <button
+            aria-expanded={showPopover}
+            aria-haspopup='true'
+            className='css-74qtiq icon-box'
+            type='button'
+            tabIndex={0}
+            style={{
+              border: '0px',
+              borderRadius: '50%',
+              backgroundColor: 'rgb(0, 0, 0, 70%)',
+              padding: '8px',
+              top: '0px',
+              left: '50px',
+              margin: '10px',
+            }}
+            //   ref={buttonRef}
+            onClick={togglePopover}
+          >
+            <img className='icon-box' src={editIcon} alt='Edit Icon'></img>
+          </button>
+          <button
+            aria-expanded='false'
+            aria-haspopup='true'
+            className='delete-comment'
+            type='button'
+            tabIndex={0}
+            style={{
+              border: '0px',
+              backgroundColor: 'rgb(0, 0, 0, 70%)',
+              borderRadius: '50%',
+              padding: '7px',
+              marginLeft: '6px',
 
-        <img src={trashIcon} alt='Delete Icon'></img>
-      </div>
+              top: '-60px',
+              left: '55px',
+            }}
+            id={props.id}
+            onClick={props.handleDelete}
+          >
+            <img
+              src={trashIcon}
+              className='delete-comment'
+              alt='Delete Icon'
+              id={props.id}
+            ></img>
+          </button>
+        </div>
+      )}
+      {showPopover && (
+        <div
+          className='icon-box'
+          style={{
+            position: 'relative',
+            top: '40px',
+            right: '0',
+            zIndex: 1000,
+            background: 'white',
+            border: '1px solid #ddd',
+            borderRadius: '4px',
+            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
+            padding: '10px',
+          }}
+        >
+          <CommentForm id={props.id} togglePopover={togglePopover} />
+        </div>
+      )}
     </Rnd>
   );
 };
  ---
  File: src/components/SelectMenu.tsx
  Status: added
  Additions: 62
  Deletions: 0
  Changes: 62
  
Patch:
@@ -0,0 +1,62 @@
+import React, { useState, useEffect } from 'react';
+import { useDispatch, useSelector } from 'react-redux';
+import {
+  updateComments,
+  uploadImage,
+  createName,
+  updateProjectId,
+  updateImageURL,
+  useImageSize,
+} from '../reducers/canvasSlice';
+import {
+  Select,
+  SelectContent,
+  SelectItem,
+  SelectTrigger,
+  SelectValue,
+} from '@/components/ui/select';
+
+const SelectMenu = function ({ projects, changeProject, project_id }) {
+  const [value, setValue] = useState(project_id);
+  const dispatch = useDispatch();
+
+  const project_name = useSelector(
+    (state: RootState) => state.canvasReducer.project_name
+  );
+
+  const image_id = useSelector(
+    (state: RootState) => state.canvasReducer.image_id
+  );
+  const comment_objects = useSelector(
+    (state: RootState) => state.canvasReducer.comment_objects
+  );
+
+  const handleSelect = (e) => {
+    console.log(e.target, 'handleSelect');
+    setValue(e);
+    changeProject(e);
+    dispatch(updateProjectId(e));
+  };
+  return (
+    <Select id='selectProject' value={value} onValueChange={handleSelect}>
+      <SelectTrigger className='w-[180px] rounded-t-md'>
+        <SelectValue placeholder='Saved Projects' />
+      </SelectTrigger>
+      <SelectContent>
+        {Array.isArray(projects) ? (
+          projects.map((project) => {
+            return (
+              <SelectItem value={project.project_id} key={project.project_id}>
+                {project.project_name}
+              </SelectItem>
+            );
+          })
+        ) : (
+          <SelectItem value='no saved projects'>no saved projects</SelectItem>
+        )}
+      </SelectContent>
+    </Select>
+  );
+};
+
+export default SelectMenu;
  ---
  File: src/components/TextElement.tsx
  Status: removed
  Additions: 0
  Deletions: 44
  Changes: 44
  
Patch:
@@ -1,44 +0,0 @@
-import React, { useContext } from 'react';
-import { CanvasContext, ICanvasComponent } from '../containers/CanvasContainer';
-import ReactHtmlParser from 'react-html-parser';
-
-const TextElement = (props: ICanvasComponent) => {
-  const { content, id, dimension } = props;
-  const { actions } = useContext(CanvasContext);
-  const editorRef = React.useRef(null);
-
-  const updateEditorValue = (value: string) => {
-    actions?.updateCanvasData({ id, content: value });
-  };
-
-  const modules = {
-    toolbar: '#toolbar',
-  };
-  let scale = 1;
-  const container = document.querySelector<HTMLElement>('.quill-container');
-  // if (conatiner && dimension) {
-  //   const { offsetHeight, offsetWidth } = conatiner;
-  //   const { width } = conatiner.getBoundingClientRect();
-  //   scale = Math.min(
-  //     parseFloat(dimension?.width ?? 0) / offsetWidth
-  //     // parseFloat(dimension?.height ?? 0) / offsetHeight
-  //   );
-  //   console.log(scale);
-  // }
-  console.log(isReadOnly);
-
-  return (
-    <div
-      className='ql-editor'
-      style={{
-        fontFamily: 'Arial',
-        fontSize: '13px',
-        padding: 0,
-      }}
-    >
-      {content}
-    </div>
-  );
-};
-
-export default TextElement;
  ---
  File: src/components/ui/Logo.tsx
  Status: added
  Additions: 13
  Deletions: 0
  Changes: 13
  
Patch:
@@ -0,0 +1,13 @@
+import React from 'react';
+
+const Logo = () => {
+  return (
+    <div className='border-4 sm:p-5 p-8 border-blue bg-white rounded-sm drop-shadow-sm margin-auto'>
+      <h1 className='font-header sm:text-4xl m:text-5xl lg:text-6xl'>
+        CoCreate
+      </h1>
+    </div>
+  );
+};
+
+export default Logo;
  ---
  File: src/components/ui/button.tsx
  Status: added
  Additions: 56
  Deletions: 0
  Changes: 56
  
Patch:
@@ -0,0 +1,56 @@
+import * as React from "react"
+import { Slot } from "@radix-ui/react-slot"
+import { cva, type VariantProps } from "class-variance-authority"
+
+import { cn } from "@/lib/utils"
+
+const buttonVariants = cva(
+  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
+  {
+    variants: {
+      variant: {
+        default: "bg-primary text-primary-foreground hover:bg-primary/90",
+        destructive:
+          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
+        outline:
+          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
+        secondary:
+          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
+        ghost: "hover:bg-accent hover:text-accent-foreground",
+        link: "text-primary underline-offset-4 hover:underline",
+      },
+      size: {
+        default: "h-10 px-4 py-2",
+        sm: "h-9 rounded-md px-3",
+        lg: "h-11 rounded-md px-8",
+        icon: "h-10 w-10",
+      },
+    },
+    defaultVariants: {
+      variant: "default",
+      size: "default",
+    },
+  }
+)
+
+export interface ButtonProps
+  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
+    VariantProps<typeof buttonVariants> {
+  asChild?: boolean
+}
+
+const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
+  ({ className, variant, size, asChild = false, ...props }, ref) => {
+    const Comp = asChild ? Slot : "button"
+    return (
+      <Comp
+        className={cn(buttonVariants({ variant, size, className }))}
+        ref={ref}
+        {...props}
+      />
+    )
+  }
+)
+Button.displayName = "Button"
+
+export { Button, buttonVariants }
  ---
  File: src/components/ui/card.tsx
  Status: added
  Additions: 79
  Deletions: 0
  Changes: 79
  
Patch:
@@ -0,0 +1,79 @@
+import * as React from "react"
+
+import { cn } from "@/lib/utils"
+
+const Card = React.forwardRef<
+  HTMLDivElement,
+  React.HTMLAttributes<HTMLDivElement>
+>(({ className, ...props }, ref) => (
+  <div
+    ref={ref}
+    className={cn(
+      "rounded-lg border bg-card text-card-foreground shadow-sm",
+      className
+    )}
+    {...props}
+  />
+))
+Card.displayName = "Card"
+
+const CardHeader = React.forwardRef<
+  HTMLDivElement,
+  React.HTMLAttributes<HTMLDivElement>
+>(({ className, ...props }, ref) => (
+  <div
+    ref={ref}
+    className={cn("flex flex-col space-y-1.5 p-6", className)}
+    {...props}
+  />
+))
+CardHeader.displayName = "CardHeader"
+
+const CardTitle = React.forwardRef<
+  HTMLDivElement,
+  React.HTMLAttributes<HTMLDivElement>
+>(({ className, ...props }, ref) => (
+  <div
+    ref={ref}
+    className={cn(
+      "text-2xl font-semibold leading-none tracking-tight",
+      className
+    )}
+    {...props}
+  />
+))
+CardTitle.displayName = "CardTitle"
+
+const CardDescription = React.forwardRef<
+  HTMLDivElement,
+  React.HTMLAttributes<HTMLDivElement>
+>(({ className, ...props }, ref) => (
+  <div
+    ref={ref}
+    className={cn("text-sm text-muted-foreground", className)}
+    {...props}
+  />
+))
+CardDescription.displayName = "CardDescription"
+
+const CardContent = React.forwardRef<
+  HTMLDivElement,
+  React.HTMLAttributes<HTMLDivElement>
+>(({ className, ...props }, ref) => (
+  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
+))
+CardContent.displayName = "CardContent"
+
+const CardFooter = React.forwardRef<
+  HTMLDivElement,
+  React.HTMLAttributes<HTMLDivElement>
+>(({ className, ...props }, ref) => (
+  <div
+    ref={ref}
+    className={cn("flex items-center p-6 pt-0", className)}
+    {...props}
+  />
+))
+CardFooter.displayName = "CardFooter"
+
+export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
  ---
  File: src/components/ui/input.tsx
  Status: added
  Additions: 25
  Deletions: 0
  Changes: 25
  
Patch:
@@ -0,0 +1,25 @@
+import * as React from 'react';
+
+import { cn } from '@/lib/utils';
+
+const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
+  ({ className, type, ...props }, ref) => {
+    return (
+      <input
+        type={type}
+        className={cn(
+          `h-10 w-full border-input min-w-40bg-background px-3 
+          py-2 text-base ring-offset-background file:border-0 file:bg-blue 
+          file:text-sm file:font-medium file:text-foreground focus-visible:ring-0
+          disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
+          className
+        )}
+        ref={ref}
+        {...props}
+      />
+    );
+  }
+);
+Input.displayName = 'Input';
+
+export { Input };
  ---
  File: src/components/ui/label.tsx
  Status: added
  Additions: 24
  Deletions: 0
  Changes: 24
  
Patch:
@@ -0,0 +1,24 @@
+import * as React from "react"
+import * as LabelPrimitive from "@radix-ui/react-label"
+import { cva, type VariantProps } from "class-variance-authority"
+
+import { cn } from "@/lib/utils"
+
+const labelVariants = cva(
+  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
+)
+
+const Label = React.forwardRef<
+  React.ElementRef<typeof LabelPrimitive.Root>,
+  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
+    VariantProps<typeof labelVariants>
+>(({ className, ...props }, ref) => (
+  <LabelPrimitive.Root
+    ref={ref}
+    className={cn(labelVariants(), className)}
+    {...props}
+  />
+))
+Label.displayName = LabelPrimitive.Root.displayName
+
+export { Label }
  ---
  File: src/components/ui/progress.tsx
  Status: added
  Additions: 26
  Deletions: 0
  Changes: 26
  
Patch:
@@ -0,0 +1,26 @@
+import * as React from "react"
+import * as ProgressPrimitive from "@radix-ui/react-progress"
+
+import { cn } from "@/lib/utils"
+
+const Progress = React.forwardRef<
+  React.ElementRef<typeof ProgressPrimitive.Root>,
+  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
+>(({ className, value, ...props }, ref) => (
+  <ProgressPrimitive.Root
+    ref={ref}
+    className={cn(
+      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
+      className
+    )}
+    {...props}
+  >
+    <ProgressPrimitive.Indicator
+      className="h-full w-full flex-1 bg-primary transition-all"
+      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
+    />
+  </ProgressPrimitive.Root>
+))
+Progress.displayName = ProgressPrimitive.Root.displayName
+
+export { Progress }
  ---
  File: src/components/ui/select.tsx
  Status: added
  Additions: 162
  Deletions: 0
  Changes: 162
  
Patch:
@@ -0,0 +1,162 @@
+import * as React from 'react';
+import * as SelectPrimitive from '@radix-ui/react-select';
+import { Check, ChevronDown, ChevronUp } from 'lucide-react';
+
+import { cn } from '@/lib/utils';
+
+const Select = SelectPrimitive.Root;
+
+const SelectGroup = SelectPrimitive.Group;
+
+const SelectValue = SelectPrimitive.Value;
+
+const SelectTrigger = React.forwardRef<
+  React.ElementRef<typeof SelectPrimitive.Trigger>,
+  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
+>(({ className, children, ...props }, ref) => (
+  <SelectPrimitive.Trigger
+    ref={ref}
+    className={cn(
+      `flex h-10 w-full items-center justify-between border-blue border-t-2 border-l-1
+      border-r-2  bg-background px-3 py-2 text-sm 
+      ring-offset-background data-[placeholder]:text-muted-foreground
+       focus:outline-none focus:ring-0
+        disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`,
+      className
+    )}
+    {...props}
+  >
+    {children}
+    <SelectPrimitive.Icon asChild>
+      <ChevronDown className='h-4 w-4 opacity-50' />
+    </SelectPrimitive.Icon>
+  </SelectPrimitive.Trigger>
+));
+SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
+
+const SelectScrollUpButton = React.forwardRef<
+  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
+  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
+>(({ className, ...props }, ref) => (
+  <SelectPrimitive.ScrollUpButton
+    ref={ref}
+    className={cn(
+      'flex cursor-default items-center justify-center py-1',
+      className
+    )}
+    {...props}
+  >
+    <ChevronUp className='h-4 w-4' />
+  </SelectPrimitive.ScrollUpButton>
+));
+SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
+
+const SelectScrollDownButton = React.forwardRef<
+  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
+  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
+>(({ className, ...props }, ref) => (
+  <SelectPrimitive.ScrollDownButton
+    ref={ref}
+    className={cn(
+      'flex cursor-default items-center justify-center py-1',
+      className
+    )}
+    {...props}
+  >
+    <ChevronDown className='h-4 w-4' />
+  </SelectPrimitive.ScrollDownButton>
+));
+SelectScrollDownButton.displayName =
+  SelectPrimitive.ScrollDownButton.displayName;
+
+const SelectContent = React.forwardRef<
+  React.ElementRef<typeof SelectPrimitive.Content>,
+  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
+>(({ className, children, position = 'popper', ...props }, ref) => (
+  <SelectPrimitive.Portal>
+    <SelectPrimitive.Content
+      ref={ref}
+      className={cn(
+        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
+        position === 'popper' &&
+          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
+        className
+      )}
+      position={position}
+      {...props}
+    >
+      <SelectScrollUpButton />
+      <SelectPrimitive.Viewport
+        className={cn(
+          'p-1',
+          position === 'popper' &&
+            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
+        )}
+      >
+        {children}
+      </SelectPrimitive.Viewport>
+      <SelectScrollDownButton />
+    </SelectPrimitive.Content>
+  </SelectPrimitive.Portal>
+));
+SelectContent.displayName = SelectPrimitive.Content.displayName;
+
+const SelectLabel = React.forwardRef<
+  React.ElementRef<typeof SelectPrimitive.Label>,
+  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
+>(({ className, ...props }, ref) => (
+  <SelectPrimitive.Label
+    ref={ref}
+    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
+    {...props}
+  />
+));
+SelectLabel.displayName = SelectPrimitive.Label.displayName;
+
+const SelectItem = React.forwardRef<
+  React.ElementRef<typeof SelectPrimitive.Item>,
+  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
+>(({ className, children, ...props }, ref) => (
+  <SelectPrimitive.Item
+    ref={ref}
+    className={cn(
+      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
+      className
+    )}
+    {...props}
+  >
+    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
+      <SelectPrimitive.ItemIndicator>
+        <Check className='h-4 w-4' />
+      </SelectPrimitive.ItemIndicator>
+    </span>
+
+    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
+  </SelectPrimitive.Item>
+));
+SelectItem.displayName = SelectPrimitive.Item.displayName;
+
+const SelectSeparator = React.forwardRef<
+  React.ElementRef<typeof SelectPrimitive.Separator>,
+  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
+>(({ className, ...props }, ref) => (
+  <SelectPrimitive.Separator
+    ref={ref}
+    className={cn('-mx-1 my-1 h-px bg-muted', className)}
+    {...props}
+  />
+));
+SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
+
+export {
+  Select,
+  SelectGroup,
+  SelectValue,
+  SelectTrigger,
+  SelectContent,
+  SelectLabel,
+  SelectItem,
+  SelectSeparator,
+  SelectScrollUpButton,
+  SelectScrollDownButton,
+};
  ---
  File: src/containers/CanvasContainer.tsx
  Status: modified
  Additions: 157
  Deletions: 157
  Changes: 314
  
Patch:
@@ -1,177 +1,177 @@
-import React, { useCallback, useRef, useState } from 'react';
-import CanvasComponent from '../components/CanvasComponent';
-
-export const CanvasContext = React.createContext<ICanvasContext>({});
-
-export interface ICanvasData {
-  component?: string;
-  id?: string;
-  position?: { top: number; left: number };
-  dimension?: { width: string; height: string };
-  content?: string;
-  type: string;
-}
-
-export interface ICanvasComponent {
-  position?: { top: number; left: number };
-  dimension?: { width: string; height: string };
-  content?: string;
-  id?: string;
-  type: string;
-  isReadOnly?: boolean;
-}
-
-export interface ICanvasContext {
-  state?: {
-    canvasData: ICanvasData[];
-    activeSelection: Set<string>;
-  };
-  actions?: {
-    setCanvasData: React.Dispatch<React.SetStateAction<ICanvasData[]>>;
-    setActiveSelection: React.Dispatch<React.SetStateAction<Set<string>>>;
-    updateCanvasData: (data: Partial<ICanvasComponent>) => void;
-    addElement: (type: string) => void;
-  };
-}
-
-const getInitialData = (data: any[], type: string = 'TEXT') => {
-  return {
-    type: type,
-    id: `${type}__${Date.now()}__${data.length}`,
-    position: {
-      top: 100,
-      left: 100,
-    },
-    dimension: {
-      width: '150',
-      height: type === 'TEXT' ? '50' : '150',
-    },
-    content: type === 'TEXT' ? 'Sample Text' : '',
-  };
-};
-
-const exampleData = [
-  {
-    type: 'IMAGE',
-    id: 'IMAGE__1616154982257__0',
-    position: { left: -1, top: -21.919998168945312 },
-    dimension: { width: '114px', height: '114px' },
-    content:
-      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAABWVBMVEX///9ZWlwmquHT09SRK45WV1lQUVQep+D0/P9NuOX29vbA4vT8/PxNM5Hg4OAerU0PWKXqJSrq6ursEXRfYGKMxUL/wRc/tOX0fyCEyuy2trhvcHGjo6SIiInNzc6/v8D828X1+u//7cPzehOQkZLtPEHpHCH5xsehz2n84dDzdgDn89rtPIP2mVAAqkSIerP/zUn+++bJw90/H4vU7NhHK46NGYqlW6N6e3wAUKKycLCFwTT77PRDREf53Er83Opuweju3+x0l8XvW1/Zz+QARp2JpcvQqs+ZP5a0fLPhx+DPuNe+jr3b7MfG4qR9vh34sHv/3Y2t1X7/xjb70bTQ57T5u5L/8dL1iz3U7vn87qrxaKT3nsT97uL64m7pAF//0WO+5suAzZim2vL76pf42Ceh27QAoytmxIL2omE5tF8tAINlUZ+lmcb1sM62rdHwdXe2yeE2bK/y8sI/AAAIWUlEQVR4nO2Z/VvUSBLHOxOSGZo2SBsUkk4ikMNbdHFhZQwwI+ALInp7q3Ie7Kq3OO6d7rqK+///cFXVyUzmBdhl2YPnnv4+j0x3p5N8pqq6unpkzMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjoT1OtVhNnzTBAteFKZbJ21hT9qg1XK9WRs6boErnvHHJxLs4jl4yi1D45l3i4tbLxZ6wY6Tiu752MS7CNlfpQvb6ywU+fy7Is1z6hvTZu14dA9aFH26dtM2k5J+Z6vEVYSFbfPjdc/ElBNVTfenjKWH+AC5yYg9Vv3z9FIi9IbPEHuATf1mT1FQiuv/116lSoBAuarhuckEsIRhjbK9qHU9/8/fS4XN8J5Ym4pr79gj19ugAtvv0EfDj1bHX1FLmsE3K9+nLiC/bV5edEhj4cXx0fP3uunYkZ4gI9XQCP/gOozp6Lv5iZmSi4Lj//J5saHz8PXDtzcxMdrsvT7Pr54GKvvt2dO49cQPZit49r9dlhXNyzvVPk2tvb6yusv1tofP+SyHgP1+r49cPe5PmWpU6P60qlMrzXNTL1+s5C49K/Lr1cw97zMtfqs8PfhFzN32yx47lgZLJcvUy/vvMauEA3Xjag+0OJ6xvGDg0vz3Hdpq1fijqWC/Yh/yiuarV8RPruzp2C69Kl78FkU9NfaS7y4f6bQ+MrSZLgdxSOMo5jWxzKNdJqtUp+fPtjmevGGp1Xpn+A/HUdIl78+z/vNJf0QLlNsC2ZkFLqbpJGWaRsYhQ4T9MKmbc4IUlqd3HVAGYkt1HPSXfhbQ/Xixev4JHTRHPr3fx8zpW4luXE1LRDKIUTjC8f4z4JXa3IY7pOtrR3k1DfYUcWXvazQHRzjQyD76pXRogHTrrrXXG/8PbHMtf7ud2dHHz/p/nRgos78LwArSAiCGBLIpfjeix2HSB2sGwPJZ4rsH4nc/kucSUWXsQ5ruqqvyYr1QqoWiGHYty3CqbG4wZ+TE+ttbm+nJmZmyCbvZkfHW1zMaSJ8OxHhKmg9ejaMnQsx8+iEHkizeUQF/cd5LIJGW6xyModLgCiP6C9nKsd9/d//vCJyBolromJmTlIsLdGR8tc4EjHR0/FuUeJy4uRBwJPKrju8n6uFJdhEMcBdtNS3APTequ1jp/D3VyCLX69tPThF2x+hATW5pqYmNtht+aJ600R7PBcF8MFACz0mObCuHMxokUKaSPu5wqUUnHxxSJethdi1Ahsr4/rwoWlry8sYu/jDeBq5FwTV3u54L3gPvgEj2GglLgcX+HCoxzWx5XfzXnUy3WFruwhV2sAF5DdpCXc+HjjCC6WwGtCCCuME3yd5rIppF03UzFljT4uZI0TlYb4Bcpc1Un93OEKNQdzyUePkWxNiG6u+Xe3ijXiYXqQ4A7f8WXBZbOoqVeb6+g80GcvqULgdnDJDuRah+a6OIRro17f2qYw2Z0rc73p5BNwpO8GInXInW0upnC1EVrTF/1cno+GchwfF24XV6vEVevm+tThgrP1bcwaO+/nZnKu+Z/24eu2szBYyo0wL+j8VHAxW4WQOIHHb6p+rsiFPJepwIvdI+x1BBee+h8B2Kuru0B2le3TFrS52d5LJQZYDG/xeRcXbkxJignKySjfl7hsAf5zAjlgPVbXS1w9+Wvjw9JShwsO2BsMU+fV95C/9iHi5d0HdzvbFqwoK7P0aiy4IA2kCWFEAJAJbjk5l0RQ28uzisD80uFax/xVa6/HyR4uxhdvLi0t/cI019Dthrh3cA3JyCSff32wXOKinFCYI+fKmm4zpD7UV5jwMYxUMdv3Ci6d/1SeV9lkO39Ra6SXC9bg4oefb7L7ba6/zI4dXNOXPi8vXyxzSb3ThbLD5WGWdZQtZQJAEF9kVF9BH92YSU7XpYwz3BiK3wHYSDnfUybr5QJ9Wuzmmp29B3VY7e6DixcvLm92qg9MrehGVuLKtz/fh8B3II0wm+ZYPn3ARk95y6c1C+VqwaUdWanqv63BXKCca4W4xsZmx66xz4jVxUWuaefwPO4Dt0gTrk+BFkCkwyWsNiKIhtjKu5aL26v+vRD3H81EZhOHcvEnQ/US19gscC33cUEucjFJ6Y6uo0WcQXEFm7OT5kU1DEC32fSpmhWJ33RpRkr1WROE36zWwsoZVGkRTW8d3Y6zJ1v1eptrbCCXrloLrxaVqeB2nNgeb08UHm3WRY3NE+ipREclj6H81s3ayCSolbPsDTqoabKHWyu8n2vg3P+tNjZYD9eDzXPyvzji3uys5tqEJPHr57PmaWvtgCyGXMt3SwcBjB5OCRLihuvjIofNU+AGCmMin0XzsBqT+X2ccxrm+qb8VlZEI8fn6QtHg4lrB5QnNmEL6ox6kIp4mtksjlIpAhuTmIwiT6gogRNPyuOYxzDOlIfjMY3Te1WWiEAEPLFtxRMecKXLW0ghnhfLNIXVmUp6xjEmE40DjK/P5S9gw3NgTUU8kkkgMsr5diBFksoURmxlZ7LpZVyGAfMUD3kqI30s4orxDG5TcdwMUp6GtKATH75CEAReCvayoRMkyXG/dgBPo9eoxBVz4IJztghDKnDC1IsVfNnYbXIWpQEwpSqS0m0GME/lxUYKpYUKgStRUcQzupVHScqCLAu8EKZlKhUJmI4d48oB8qCG9zIwQYJ+VB6WhnaCvk0DFgeQM+MMrMSVF3hSJUpEaSqotEZ7pUzJALJcnPJARnhoCTwYgVOSBwU4NJWMo9Dz7N/NxSTYG+NeUNwzihG9FiCoBcY2DgrsUAvjWYdyPp9+XOH0j+l5HGfCc/VNUuIjjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjP7/9V9ELCk0VNYCNAAAAABJRU5ErkJggg==',
-  },
-  {
-    type: 'TEXT',
-    id: 'TEXT__1616155060789__1',
-    position: { left: 126, top: 16.080001831054688 },
-    dimension: { width: '174px', height: '50px' },
-    content:
-      '<p><strong style="font-family: &quot;Trebuchet MS&quot;; font-size: 20px;">Visual BI Solutions</strong></p>',
-  },
-];
+import React, { useCallback, useRef, useState, useEffect } from 'react';
+import { useSelector, useDispatch } from 'react-redux';
+import type { RootState, AppDispatch, AppStore } from '../reducers/store';
+import CanvasMap from '../components/CanvasMap';
+import CanvasBackground from '../components/CanvasBackground';
+import SelectMenu from '@/components/SelectMenu';
+import {
+  updateImageURL,
+  createName,
+  changeProject,
+  useImageSize,
+  updateComments,
+  changeImage,
+  updateProjectId,
+  updateCanvasRatio,
+} from '../reducers/canvasSlice';
+import ProjectNavBar from '../components/ProjectNavBar';
 
 const CanvasContainer = () => {
-  const [canvasData, setCanvasData] = useState<ICanvasData[]>([]);
-  const [activeSelection, setActiveSelection] = useState<Set<string>>(
-    new Set()
-  );
-
-  const containerRef = useRef<HTMLDivElement>(null);
-  const isSelectAll = useRef<boolean>(false);
-
-  const updateCanvasData = (data: Partial<ICanvasComponent>) => {
-    const currentDataIndex =
-      canvasData.findIndex((canvas) => canvas.id === data.id) ?? -1;
-    const updatedData = { ...canvasData?.[currentDataIndex], ...data };
-    canvasData.splice(currentDataIndex, 1, updatedData);
-    setCanvasData([...(canvasData || [])]);
-  };
+  const [canvasWindow, setCanvasSize] = useState([0, 0]);
+  const [projectList, setProjects] = React.useState(null);
+  const [didUpload, setDidUpload] = useState(false);
 
-  const addElement = (type: string) => {
-    const defaultData = getInitialData(canvasData, type);
-    setCanvasData([...canvasData, { ...defaultData, type: type ?? 'TEXT' }]);
-    activeSelection.clear();
-    activeSelection.add(defaultData.id);
-    setActiveSelection(new Set(activeSelection));
-  };
+  const canvasImg = useSelector(
+    (state: RootState) => state.canvasReducer.image_url
+  );
+  const projectName = useSelector(
+    (state: RootState) => state.canvasReducer.project_name
+  );
 
-  const deleteElement = useCallback(() => {
-    setCanvasData([
-      ...canvasData.filter((data) => {
-        if (data.id && activeSelection.has(data.id)) {
-          activeSelection.delete(data.id);
-          return false;
+  const canvasSize = useSelector(
+    (state: RootState) => state.canvasReducer.canvas_size
+  );
+  const canvasRatio = useSelector(
+    (state: RootState) => state.canvasReducer.canvas_ratio
+  );
+  const allComments = useSelector(
+    (state: RootState) => state.canvasReducer.comment_objects
+  );
+  const currentProjectId = useSelector(
+    (state: RootState) => state.canvasReducer.project_id
+  );
+  const dispatch = useDispatch();
+  useEffect(() => {
+    const fetchProjects = async () => {
+      try {
+        const response = await fetch('http://localhost:3000/api/all_projects');
+        if (!response.ok) {
+          throw new Error('Failed to fetch projects');
         }
-        return true;
-      }),
-    ]);
-    setActiveSelection(new Set(activeSelection));
-  }, [activeSelection, canvasData]);
+        const data = await response.json();
+        setProjects(data);
+      } catch (error) {
+        console.error('Error fetching projects:', error);
+      }
+    };
 
-  const selectAllElement = useCallback(() => {
-    isSelectAll.current = true;
-    canvasData.map((data) => activeSelection.add(data.id || ''));
-    setActiveSelection(new Set(activeSelection));
-  }, [activeSelection, canvasData]);
+    fetchProjects();
+  }, []);
 
-  const context: ICanvasContext = {
-    actions: {
-      setCanvasData,
-      setActiveSelection,
-      updateCanvasData,
-      addElement,
-    },
-    state: {
-      canvasData,
-      activeSelection,
-    },
+  const saveProject = async () => {
+    console.log(currentProjectId, 'current project id');
+
+    try {
+      const response = await fetch(
+        `http://localhost:3000/api/project?id=${currentProjectId}`,
+        {
+          method: 'PATCH',
+          headers: {
+            'Content-Type': 'application/json',
+          },
+          body: {
+            project_id: currentProjectId,
+            project_name,
+            comment_objects,
+          },
+        }
+      );
+      const data = response.json();
+      console.log(data, 'data from saveproject');
+      if (response.ok) alert('Project saved!');
+    } catch (error) {
+      alert('unable to save project');
+    }
   };
 
-  const handleKeyDown = useCallback(
-    (event: KeyboardEvent) => {
-      if (event.key === 'Delete') {
-        deleteElement();
-      } else if (['a', 'A'].includes(event.key) && event.ctrlKey) {
-        event.preventDefault();
-        selectAllElement();
+  const createProject = async (formData: FormData) => {
+    try {
+      const response = await fetch('http://localhost:3000/api/project', {
+        method: 'POST',
+        body: formData,
+        projectName,
+      });
+      if (!response.ok) {
+        const errData = await response.json();
+        alert('failed to upload file' + JSON.stringify(errData));
+      } else {
+        const userProject = await response.json();
+        console.log('Uploaded successfully:', userProject);
+        const { width, height } = userProject.canvas_dimensions;
+        const ratio = userProject.canvas_ratio.toFixed(2);
+        dispatch(useImageSize([width, height]));
+        dispatch(updateImageURL(userProject.image_url));
+        dispatch(updateProjectId(userProject.project_id));
+        dispatch(updateCanvasRatio(ratio));
+        dispatch(updateComments(allComments));
+        //send userProject data to redux store here
       }
-    },
-    [deleteElement, selectAllElement]
-  );
-
-  const outSideClickHandler = () => {
-    isSelectAll.current = false;
-    setActiveSelection(new Set());
+    } catch (error) {
+      console.error('Error uploading:', error);
+    }
   };
 
-  const handleMouseDown = useCallback((event) => {
-    if (!isSelectAll.current) {
-      return;
+  const changeProject = async (value) => {
+    const project_id: string = value;
+    console.log(`opening project: ${project_id}`);
+    try {
+      const response = await fetch(
+        `http://localhost:3000/api/project/?project_id=${project_id}`
+      );
+      if (!response.ok) {
+        throw new Error(`HTTP error! status: ${response.status}`);
+      }
+      const userProject = await response.json();
+      console.log(userProject, 'userProject');
+
+      if (userProject) {
+        dispatch(updateComments(userProject.comment_objects || []));
+        dispatch(updateImageURL(userProject.image_url));
+        dispatch(createName(userProject.project_name));
+        dispatch(updateProjectId(userProject.project_id));
+        dispatch(
+          useImageSize([
+            userProject.canvas_dimensions.width,
+            userProject.canvas_dimensions.height,
+          ])
+        );
+      } else {
+        console.error('fetched userProject is undefined or null');
+      }
+
+      //set redux state HERE based on userProject
+    } catch (error) {
+      alert('Error encountered: ', error.message);
+      console.error('error encountered:', error);
     }
+  };
 
-    outSideClickHandler();
-    isSelectAll.current = false;
+  useEffect(() => {
+    const canvasRatio = canvasSize[0] / canvasSize[1];
+    const newWidth = parseInt(window.innerHeight) * canvasRatio;
+    const newHeight = parseInt(window.innerWidth) / canvasRatio;
+    setCanvasSize([newWidth, newHeight]);
+    console.log(newWidth, newHeight, 'new width and height');
   }, []);
 
-  React.useEffect(() => {
-    document.addEventListener('keydown', handleKeyDown);
-    document.addEventListener('mousedown', handleMouseDown);
-    return () => {
-      document.removeEventListener('keydown', handleKeyDown);
-      document.removeEventListener('mousedown', handleMouseDown);
-    };
-  }, [handleKeyDown, handleMouseDown]);
-
   return (
-    <div ref={containerRef}>
-      <CanvasContext.Provider value={context}>
-        <div className='canvas-container'>
-          {canvasData.map((canvas) => {
-            return <CanvasComponent {...canvas} />;
-          })}
-        </div>
-        {/* {JSON.stringify(canvasData)} */}
-      </CanvasContext.Provider>
-    </div>
+    <main className='flex flex-col h-full justify-start'>
+      <div className='border-t-blue border-opacity-20 w-100 h-[45px] block'>
+        <ProjectNavBar
+          projects={projectList}
+          saveProject={saveProject}
+          createProject={createProject}
+          changeProject={changeProject}
+        ></ProjectNavBar>
+      </div>
+
+      <CanvasBackground
+        createProject={createProject}
+        canvasWindow={canvasWindow}
+      >
+        <CanvasMap canvasSize={canvasSize} saveProject={saveProject} />
+      </CanvasBackground>
+    </main>
   );
 };
 
  ---
  File: src/containers/ExistingProjectModal.tsx
  Status: removed
  Additions: 0
  Deletions: 66
  Changes: 66
  
Patch:
@@ -1,66 +0,0 @@
-import React, { useState, useEffect } from 'react';
-
-export interface ExistingProjectModalProps {
-  isExistingOpen: boolean;
-  handleExistingClose: () => void;
-}
-
-const ExistingProjectModal = ({
-  isExistingOpen,
-  handleExistingClose,
-}: ExistingProjectModalProps) => {
-  const [projects, setProjects] = useState();
-
-  useEffect(() => {
-    // on modal load, get all project names and ids, set the projects array with the results
-    fetch('http://localhost:3000/api/all_projects', {
-      headers: {
-        'Content-Type': 'application/json',
-      },
-    })
-      .then((response) => response.json())
-      .then((data) => {
-        console.log(data);
-        setProjects(data);
-      });
-  }, []);
-
-  //open project, invoked when the "Open Project" button is clicked
-  const openProject = async () => {
-    const project_id: string = document.getElementById('selectProject')?.value;
-    console.log(`opening project: ${project_id}`);
-    try {
-      const response = await fetch(
-        `http://localhost:3000/api/project/?project_id=${project_id}`
-      );
-      const userProject = await response.json();
-      console.log(userProject);
-
-      //set redux state HERE based on userProject
-    } catch (error) {
-      alert('Error encountered: ', error);
-    }
-  };
-
-  //don't render modal if it wasn't opened
-  if (!isExistingOpen) return null;
-
-  return (
-    <div>
-      <select id='selectProject'>
-        <option>Select Existing Project</option>
-        {projects.map((project) => {
-          return (
-            <option value={project.project_id}>{project.project_name}</option>
-          );
-        })}
-      </select>
-
-      <button onClick={openProject}>Open Project</button>
-      <br></br>
-      <button onClick={handleExistingClose}>Close</button>
-    </div>
-  );
-};
-
-export default ExistingProjectModal;
  ---
  File: src/containers/NewProjectModal.tsx
  Status: removed
  Additions: 0
  Deletions: 89
  Changes: 89
  
Patch:
@@ -1,89 +0,0 @@
-import React from 'react';
-
-export interface NewProjectModalProps {
-  isNewOpen: boolean;
-  handleNewClose: () => void;
-}
-
-const NewProjectModal = ({
-  isNewOpen,
-  handleNewClose,
-}: NewProjectModalProps) => {
-  if (!isNewOpen) return null;
-
-  const createProject = async (event: React.ChangeEvent<HTMLInputElement>) => {
-    event.preventDefault(); // prevents full page reload
-    // const projectName: string =
-    //   document.getElementById('newProjectName')?.value;
-
-    // const fileInput = document.getElementById('designImageFile');
-    // const file = fileInput.files[0];
-    // console.log('new projectform submitted');
-    // console.log('file: ', file);
-
-    // Grab the <form> reference
-    const form = event.currentTarget;
-
-    // Find the inputs
-    const projectNameInput =
-      form.querySelector<HTMLInputElement>('#newProjectName');
-    const fileInput = form.querySelector<HTMLInputElement>('#designImageFile');
-
-    if (!projectNameInput || !fileInput) {
-      alert('Form elements not found');
-      return;
-    }
-
-    // Extract values
-    const projectName = projectNameInput.value;
-    const file = fileInput.files?.[0];
-
-    // append the project name and image file to a FormData object
-    const formData = new FormData();
-    formData.append('project_name', projectName);
-    formData.append('image_file_1', file as File);
-
-
-    try {
-      const response = await fetch('http://localhost:3000/api/project', {
-        method: 'POST',
-        body: formData,
-      });
-      if (!response.ok) {
-        const errData = await response.json();
-        alert('Server error: ' + JSON.stringify(errData));
-      } else {
-        const userProject = await response.json();
-        console.log('Uploaded successfully:', userProject);
-
-        //send userProject data to redux store here
-        // const parsedProjectData = {};
-        // handleReduxSync(parsedProjectData);
-        handleNewClose();
-      }
-    } catch (error) {
-      console.error('Error uploading:', error);
-      alert('Error uploading file');
-    }
-  };
-
-  return (
-    <div>
-      <form onSubmit={createProject} encType='multipart/form-data'>
-        <label htmlFor='newProjectName'>Project Name: </label>
-        <input type='text' id='newProjectName' name='newProjectName' />
-        <br></br>
-        <input
-          type='file'
-          id='designImageFile'
-          name='designImageFile'
-          accept='.jpg, .png, .jpeg .png'
-        />
-        <input type='submit' />
-      </form>
-      <button onClick={handleNewClose}>Close</button>
-    </div>
-  );
-};
-
-export default NewProjectModal;
\ No newline at end of file
  ---
  File: src/containers/ProjectManagementBar.tsx
  Status: removed
  Additions: 0
  Deletions: 48
  Changes: 48
  
Patch:
@@ -1,48 +0,0 @@
-import React, { useState } from 'react';
-import NewProjectModal from './NewProjectModal';
-import ExistingProjectModal from './ExistingProjectModal';
-
-const ProjectManagementBar = () => {
-  const [isNewOpen, setIsNewOpen] = useState(false);
-  const [isExistingOpen, setIsExistingOpen] = useState(false);
-
-  const handleNewOpen = () => {
-    setIsExistingOpen(false);
-    setIsNewOpen(true);
-  };
-  const handleNewClose = () => {
-    setIsNewOpen(false);
-  };
-  const handleExistingOpen = () => {
-    setIsNewOpen(false);
-    setIsExistingOpen(true);
-  };
-  const handleExistingClose = () => {
-    setIsExistingOpen(false);
-  };
-
-  const saveProject = () => {
-    alert('Project saved!')
-  }
-
-  return (
-    <div>
-      <button type='button' onClick={handleNewOpen}>
-        Create New Project
-      </button>
-      <button type='button' onClick={handleExistingOpen}>
-        Open Existing Project
-      </button>
-      <button type='button' onClick={saveProject}>
-        Save Project
-      </button>
-      <NewProjectModal isNewOpen={isNewOpen} handleNewClose={handleNewClose} />
-      <ExistingProjectModal
-        isExistingOpen={isExistingOpen}
-        handleExistingClose={handleExistingClose}
-      />
-    </div>
-  );
-};
-
-export default ProjectManagementBar;
  ---
  File: src/dummydata.json
  Status: added
  Additions: 33
  Deletions: 0
  Changes: 33
  
Patch:
@@ -0,0 +1,33 @@
+{
+  "project_name": "my project",
+  "project_id": 1,
+  "image_id": 1,
+  "image_URL": "./assets/oval_office.webp",
+  "canvas_dimensions": { "width": 1200, "height": 800 },
+  "comment_objects": [
+    {
+      "functionality": true,
+      "aesthetics": false,
+      "cost": 5,
+      "additional_comment": "This window should be bigger.",
+      "location": { "top": 100, "left": 200 },
+      "dimensions": { "width": 300, "height": 150 }
+    },
+    {
+      "functionality": true,
+      "aesthetics": true,
+      "cost": 5,
+      "additional_comment": "Consider adding more lights",
+      "location": { "top": 400, "left": 100 },
+      "dimensions": { "width": 200, "height": 400 }
+    },
+    {
+      "functionality": true,
+      "aesthetics": true,
+      "cost": 5,
+      "additional_comment": "This desk is really dominating the space. Could we change it so that my tiny hands look larger relative to this big desk?",
+      "location": { "top": 630, "left": 400 },
+      "dimensions": { "width": 500, "height": 300 }
+    }
+  ]
+}
  ---
  File: src/index.css
  Status: modified
  Additions: 69
  Deletions: 66
  Changes: 135
  
Patch:
@@ -1,73 +1,76 @@
 /*ALL STYLING BELOW CAME WITH VITE-REACT CONFIG*/
-:root {
-  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
-  line-height: 1.5;
-  font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
-  font-synthesis: none;
-  text-rendering: optimizeLegibility;
-  -webkit-font-smoothing: antialiased;
-  -moz-osx-font-smoothing: grayscale;
-}
-
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
-}
-a:hover {
-  color: #535bf2;
-}
-
-body {
-  margin: 0;
-  display: flex;
-  place-items: center;
-  min-width: 320px;
-  min-height: 100vh;
-}
-
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
-}
-
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
-}
-button:hover {
-  border-color: #646cff;
-}
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
-}
-
-@media (prefers-color-scheme: light) {
+@tailwind base;
+@tailwind components;
+@tailwind utilities;
+@layer base {
   :root {
-    color: #213547;
-    background-color: #ffffff;
+    --background: 0 0% 100%;
+    --foreground: 240 10% 3.9%;
+    --card: 0 0% 100%;
+    --card-foreground: 240 10% 3.9%;
+    --popover: 0 0% 100%;
+    --popover-foreground: 240 10% 3.9%;
+    --primary: 240 5.9% 10%;
+    --primary-foreground: 0 0% 98%;
+    --secondary: 240 4.8% 95.9%;
+    --secondary-foreground: 240 5.9% 10%;
+    --muted: 240 4.8% 95.9%;
+    --muted-foreground: 240 3.8% 46.1%;
+    --accent: 240 4.8% 95.9%;
+    --accent-foreground: 240 5.9% 10%;
+    --destructive: 0 84.2% 60.2%;
+    --destructive-foreground: 0 0% 98%;
+    --border: 240 5.9% 90%;
+
+    --ring: 240 10% 3.9%;
+    --chart-1: 12 76% 61%;
+    --chart-2: 173 58% 39%;
+    --chart-3: 197 37% 24%;
+    --chart-4: 43 74% 66%;
+    --chart-5: 27 87% 67%;
+    --radius: 0.5rem;
+  }
+  .dark {
+    --background: 240 10% 3.9%;
+    --foreground: 0 0% 98%;
+    --card: 240 10% 3.9%;
+    --card-foreground: 0 0% 98%;
+    --popover: 240 10% 3.9%;
+    --popover-foreground: 0 0% 98%;
+    --primary: 0 0% 98%;
+    --primary-foreground: 240 5.9% 10%;
+    --secondary: 240 3.7% 15.9%;
+    --secondary-foreground: 0 0% 98%;
+    --muted: 240 3.7% 15.9%;
+    --muted-foreground: 240 5% 64.9%;
+    --accent: 240 3.7% 15.9%;
+    --accent-foreground: 0 0% 98%;
+    --destructive: 0 62.8% 30.6%;
+    --destructive-foreground: 0 0% 98%;
+    --border: 240 3.7% 15.9%;
+    --input: 240 3.7% 15.9%;
+    --ring: 240 4.9% 83.9%;
+    --chart-1: 220 70% 50%;
+    --chart-2: 160 60% 45%;
+    --chart-3: 30 80% 55%;
+    --chart-4: 280 65% 60%;
+    --chart-5: 340 75% 55%;
   }
-  a:hover {
-    color: #747bff;
+}
+@layer base {
+  * {
+    @apply border-border;
   }
-  button {
-    background-color: #f9f9f9;
+  body {
+    @apply bg-background text-foreground;
   }
 }
-.App {
-  font-family: sans-serif;
-  text-align: center;
+/*---break---*/
+@layer base {
+  * {
+    @apply border-border outline-ring/50;
+  }
+  body {
+    @apply bg-background text-foreground;
+  }
 }
  ---
  File: src/lib/hooks.ts
  Status: added
  Additions: 6
  Deletions: 0
  Changes: 6
  
Patch:
@@ -0,0 +1,6 @@
+import { useDispatch, useSelector } from 'react-redux';
+import type { AppDispatch, RootState } from '../reducers/store';
+
+// Use throughout your app instead of plain `useDispatch` and `useSelector`
+export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
+export const useAppSelector = useSelector.withTypes<RootState>();
  ---
  File: src/lib/utils.ts
  Status: added
  Additions: 6
  Deletions: 0
  Changes: 6
  
Patch:
@@ -0,0 +1,6 @@
+import { clsx, type ClassValue } from 'clsx';
+import { twMerge } from 'tailwind-merge';
+
+export function cn(...inputs: ClassValue[]) {
+  return twMerge(inputs);
+}
  ---
  File: src/main.ts
  Status: added
  Additions: 12
  Deletions: 0
  Changes: 12
  
Patch:
@@ -0,0 +1,12 @@
+import { configureStore } from '@reduxjs/toolkit';
+import canvasReducer from './reducers/canvasSlice';
+
+const store = configureStore({
+  reducer: {
+    canvasReducer: canvasReducer,
+    // other reducers...
+  },
+});
+
+export type RootState = ReturnType<typeof store.getState>;
+export type AppDispatch = typeof store.dispatch;
  ---
  File: src/main.tsx
  Status: modified
  Additions: 25
  Deletions: 20
  Changes: 45
  
Patch:
@@ -1,27 +1,32 @@
 import { StrictMode } from 'react';
 import { createRoot } from 'react-dom/client';
+import ReactDOM from 'react-dom/client';
+import { RouterProvider, createRouter } from '@tanstack/react-router';
 import './index.css';
 import App from './App.tsx';
-import { configureStore } from '@reduxjs/toolkit';
+import store from './reducers/store';
+
+// Import the generated route tree
+import { routeTree } from './routeTree.gen';
 import { Provider } from 'react-redux';
-import canvasReducer from './reducers/canvasSlice';
-const store = configureStore({
-  reducer: {
-    canvasReducer: canvasReducer,
-  },
-});
+// Create a new router instance
+const router = createRouter({ routeTree });
 
-// Exporting types so that they can be used when we type our hooks.
-// https://react-redux.js.org/tutorials/typescript-quick-start
-// Infer the `RootState` and `AppDispatch` types from the store itself
-export type RootState = ReturnType<typeof store.getState>;
-// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
-export type AppDispatch = typeof store.dispatch;
+// Register the router instance for type safety
+declare module '@tanstack/react-router' {
+  interface Register {
+    router: typeof router;
+  }
+}
 
-createRoot(document.getElementById('root')!).render(
-  <StrictMode>
-    <Provider store={store}>
-      <App />
-    </Provider>
-  </StrictMode>
-);
+const rootElement = document.getElementById('root')!;
+if (!rootElement.innerHTML) {
+  const root = ReactDOM.createRoot(rootElement);
+  root.render(
+    <StrictMode>
+      <Provider store={store}>
+        <RouterProvider router={router} />
+      </Provider>
+    </StrictMode>
+  );
+}
  ---
  File: src/output.css
  Status: added
  Additions: 796
  Deletions: 0
  Changes: 796
  
Patch:
@@ -0,0 +1,796 @@
+/*ALL STYLING BELOW CAME WITH VITE-REACT CONFIG*/
+
+*, ::before, ::after {
+  --tw-border-spacing-x: 0;
+  --tw-border-spacing-y: 0;
+  --tw-translate-x: 0;
+  --tw-translate-y: 0;
+  --tw-rotate: 0;
+  --tw-skew-x: 0;
+  --tw-skew-y: 0;
+  --tw-scale-x: 1;
+  --tw-scale-y: 1;
+  --tw-pan-x:  ;
+  --tw-pan-y:  ;
+  --tw-pinch-zoom:  ;
+  --tw-scroll-snap-strictness: proximity;
+  --tw-gradient-from-position:  ;
+  --tw-gradient-via-position:  ;
+  --tw-gradient-to-position:  ;
+  --tw-ordinal:  ;
+  --tw-slashed-zero:  ;
+  --tw-numeric-figure:  ;
+  --tw-numeric-spacing:  ;
+  --tw-numeric-fraction:  ;
+  --tw-ring-inset:  ;
+  --tw-ring-offset-width: 0px;
+  --tw-ring-offset-color: #fff;
+  --tw-ring-color: rgb(59 130 246 / 0.5);
+  --tw-ring-offset-shadow: 0 0 #0000;
+  --tw-ring-shadow: 0 0 #0000;
+  --tw-shadow: 0 0 #0000;
+  --tw-shadow-colored: 0 0 #0000;
+  --tw-blur:  ;
+  --tw-brightness:  ;
+  --tw-contrast:  ;
+  --tw-grayscale:  ;
+  --tw-hue-rotate:  ;
+  --tw-invert:  ;
+  --tw-saturate:  ;
+  --tw-sepia:  ;
+  --tw-drop-shadow:  ;
+  --tw-backdrop-blur:  ;
+  --tw-backdrop-brightness:  ;
+  --tw-backdrop-contrast:  ;
+  --tw-backdrop-grayscale:  ;
+  --tw-backdrop-hue-rotate:  ;
+  --tw-backdrop-invert:  ;
+  --tw-backdrop-opacity:  ;
+  --tw-backdrop-saturate:  ;
+  --tw-backdrop-sepia:  ;
+  --tw-contain-size:  ;
+  --tw-contain-layout:  ;
+  --tw-contain-paint:  ;
+  --tw-contain-style:  ;
+}
+
+::backdrop {
+  --tw-border-spacing-x: 0;
+  --tw-border-spacing-y: 0;
+  --tw-translate-x: 0;
+  --tw-translate-y: 0;
+  --tw-rotate: 0;
+  --tw-skew-x: 0;
+  --tw-skew-y: 0;
+  --tw-scale-x: 1;
+  --tw-scale-y: 1;
+  --tw-pan-x:  ;
+  --tw-pan-y:  ;
+  --tw-pinch-zoom:  ;
+  --tw-scroll-snap-strictness: proximity;
+  --tw-gradient-from-position:  ;
+  --tw-gradient-via-position:  ;
+  --tw-gradient-to-position:  ;
+  --tw-ordinal:  ;
+  --tw-slashed-zero:  ;
+  --tw-numeric-figure:  ;
+  --tw-numeric-spacing:  ;
+  --tw-numeric-fraction:  ;
+  --tw-ring-inset:  ;
+  --tw-ring-offset-width: 0px;
+  --tw-ring-offset-color: #fff;
+  --tw-ring-color: rgb(59 130 246 / 0.5);
+  --tw-ring-offset-shadow: 0 0 #0000;
+  --tw-ring-shadow: 0 0 #0000;
+  --tw-shadow: 0 0 #0000;
+  --tw-shadow-colored: 0 0 #0000;
+  --tw-blur:  ;
+  --tw-brightness:  ;
+  --tw-contrast:  ;
+  --tw-grayscale:  ;
+  --tw-hue-rotate:  ;
+  --tw-invert:  ;
+  --tw-saturate:  ;
+  --tw-sepia:  ;
+  --tw-drop-shadow:  ;
+  --tw-backdrop-blur:  ;
+  --tw-backdrop-brightness:  ;
+  --tw-backdrop-contrast:  ;
+  --tw-backdrop-grayscale:  ;
+  --tw-backdrop-hue-rotate:  ;
+  --tw-backdrop-invert:  ;
+  --tw-backdrop-opacity:  ;
+  --tw-backdrop-saturate:  ;
+  --tw-backdrop-sepia:  ;
+  --tw-contain-size:  ;
+  --tw-contain-layout:  ;
+  --tw-contain-paint:  ;
+  --tw-contain-style:  ;
+}
+
+/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/
+
+/*
+1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
+2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
+*/
+
+*,
+::before,
+::after {
+  box-sizing: border-box;
+  /* 1 */
+  border-width: 0;
+  /* 2 */
+  border-style: solid;
+  /* 2 */
+  border-color: currentColor;
+  /* 2 */
+}
+
+::before,
+::after {
+  --tw-content: '';
+}
+
+/*
+1. Use a consistent sensible line-height in all browsers.
+2. Prevent adjustments of font size after orientation changes in iOS.
+3. Use a more readable tab size.
+4. Use the user's configured `sans` font-family by default.
+5. Use the user's configured `sans` font-feature-settings by default.
+6. Use the user's configured `sans` font-variation-settings by default.
+7. Disable tap highlights on iOS
+*/
+
+html,
+:host {
+  line-height: 1.5;
+  /* 1 */
+  -webkit-text-size-adjust: 100%;
+  /* 2 */
+  -moz-tab-size: 4;
+  /* 3 */
+  -o-tab-size: 4;
+     tab-size: 4;
+  /* 3 */
+  font-family: Graphik, sans-serif;
+  /* 4 */
+  font-feature-settings: normal;
+  /* 5 */
+  font-variation-settings: normal;
+  /* 6 */
+  -webkit-tap-highlight-color: transparent;
+  /* 7 */
+}
+
+/*
+1. Remove the margin in all browsers.
+2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
+*/
+
+body {
+  margin: 0;
+  /* 1 */
+  line-height: inherit;
+  /* 2 */
+}
+
+/*
+1. Add the correct height in Firefox.
+2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
+3. Ensure horizontal rules are visible by default.
+*/
+
+hr {
+  height: 0;
+  /* 1 */
+  color: inherit;
+  /* 2 */
+  border-top-width: 1px;
+  /* 3 */
+}
+
+/*
+Add the correct text decoration in Chrome, Edge, and Safari.
+*/
+
+abbr:where([title]) {
+  -webkit-text-decoration: underline dotted;
+          text-decoration: underline dotted;
+}
+
+/*
+Remove the default font size and weight for headings.
+*/
+
+h1,
+h2,
+h3,
+h4,
+h5,
+h6 {
+  font-size: inherit;
+  font-weight: inherit;
+}
+
+/*
+Reset links to optimize for opt-in styling instead of opt-out.
+*/
+
+a {
+  color: inherit;
+  text-decoration: inherit;
+}
+
+/*
+Add the correct font weight in Edge and Safari.
+*/
+
+b,
+strong {
+  font-weight: bolder;
+}
+
+/*
+1. Use the user's configured `mono` font-family by default.
+2. Use the user's configured `mono` font-feature-settings by default.
+3. Use the user's configured `mono` font-variation-settings by default.
+4. Correct the odd `em` font sizing in all browsers.
+*/
+
+code,
+kbd,
+samp,
+pre {
+  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
+  /* 1 */
+  font-feature-settings: normal;
+  /* 2 */
+  font-variation-settings: normal;
+  /* 3 */
+  font-size: 1em;
+  /* 4 */
+}
+
+/*
+Add the correct font size in all browsers.
+*/
+
+small {
+  font-size: 80%;
+}
+
+/*
+Prevent `sub` and `sup` elements from affecting the line height in all browsers.
+*/
+
+sub,
+sup {
+  font-size: 75%;
+  line-height: 0;
+  position: relative;
+  vertical-align: baseline;
+}
+
+sub {
+  bottom: -0.25em;
+}
+
+sup {
+  top: -0.5em;
+}
+
+/*
+1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
+2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
+3. Remove gaps between table borders by default.
+*/
+
+table {
+  text-indent: 0;
+  /* 1 */
+  border-color: inherit;
+  /* 2 */
+  border-collapse: collapse;
+  /* 3 */
+}
+
+/*
+1. Change the font styles in all browsers.
+2. Remove the margin in Firefox and Safari.
+3. Remove default padding in all browsers.
+*/
+
+button,
+input,
+optgroup,
+select,
+textarea {
+  font-family: inherit;
+  /* 1 */
+  font-feature-settings: inherit;
+  /* 1 */
+  font-variation-settings: inherit;
+  /* 1 */
+  font-size: 100%;
+  /* 1 */
+  font-weight: inherit;
+  /* 1 */
+  line-height: inherit;
+  /* 1 */
+  letter-spacing: inherit;
+  /* 1 */
+  color: inherit;
+  /* 1 */
+  margin: 0;
+  /* 2 */
+  padding: 0;
+  /* 3 */
+}
+
+/*
+Remove the inheritance of text transform in Edge and Firefox.
+*/
+
+button,
+select {
+  text-transform: none;
+}
+
+/*
+1. Correct the inability to style clickable types in iOS and Safari.
+2. Remove default button styles.
+*/
+
+button,
+input:where([type='button']),
+input:where([type='reset']),
+input:where([type='submit']) {
+  -webkit-appearance: button;
+  /* 1 */
+  background-color: transparent;
+  /* 2 */
+  background-image: none;
+  /* 2 */
+}
+
+/*
+Use the modern Firefox focus style for all focusable elements.
+*/
+
+:-moz-focusring {
+  outline: auto;
+}
+
+/*
+Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
+*/
+
+:-moz-ui-invalid {
+  box-shadow: none;
+}
+
+/*
+Add the correct vertical alignment in Chrome and Firefox.
+*/
+
+progress {
+  vertical-align: baseline;
+}
+
+/*
+Correct the cursor style of increment and decrement buttons in Safari.
+*/
+
+::-webkit-inner-spin-button,
+::-webkit-outer-spin-button {
+  height: auto;
+}
+
+/*
+1. Correct the odd appearance in Chrome and Safari.
+2. Correct the outline style in Safari.
+*/
+
+[type='search'] {
+  -webkit-appearance: textfield;
+  /* 1 */
+  outline-offset: -2px;
+  /* 2 */
+}
+
+/*
+Remove the inner padding in Chrome and Safari on macOS.
+*/
+
+::-webkit-search-decoration {
+  -webkit-appearance: none;
+}
+
+/*
+1. Correct the inability to style clickable types in iOS and Safari.
+2. Change font properties to `inherit` in Safari.
+*/
+
+::-webkit-file-upload-button {
+  -webkit-appearance: button;
+  /* 1 */
+  font: inherit;
+  /* 2 */
+}
+
+/*
+Add the correct display in Chrome and Safari.
+*/
+
+summary {
+  display: list-item;
+}
+
+/*
+Removes the default spacing and border for appropriate elements.
+*/
+
+blockquote,
+dl,
+dd,
+h1,
+h2,
+h3,
+h4,
+h5,
+h6,
+hr,
+figure,
+p,
+pre {
+  margin: 0;
+}
+
+fieldset {
+  margin: 0;
+  padding: 0;
+}
+
+legend {
+  padding: 0;
+}
+
+ol,
+ul,
+menu {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+}
+
+/*
+Reset default styling for dialogs.
+*/
+
+dialog {
+  padding: 0;
+}
+
+/*
+Prevent resizing textareas horizontally by default.
+*/
+
+textarea {
+  resize: vertical;
+}
+
+/*
+1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
+2. Set the default placeholder color to the user's configured gray 400 color.
+*/
+
+input::-moz-placeholder, textarea::-moz-placeholder {
+  opacity: 1;
+  /* 1 */
+  color: #9ca3af;
+  /* 2 */
+}
+
+input::placeholder,
+textarea::placeholder {
+  opacity: 1;
+  /* 1 */
+  color: #9ca3af;
+  /* 2 */
+}
+
+/*
+Set the default cursor for buttons.
+*/
+
+button,
+[role="button"] {
+  cursor: pointer;
+}
+
+/*
+Make sure disabled buttons don't get the pointer cursor.
+*/
+
+:disabled {
+  cursor: default;
+}
+
+/*
+1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
+2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
+   This can trigger a poorly considered lint error in some tools but is included by design.
+*/
+
+img,
+svg,
+video,
+canvas,
+audio,
+iframe,
+embed,
+object {
+  display: block;
+  /* 1 */
+  vertical-align: middle;
+  /* 2 */
+}
+
+/*
+Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
+*/
+
+img,
+video {
+  max-width: 100%;
+  height: auto;
+}
+
+/* Make elements with the HTML hidden attribute stay hidden by default */
+
+[hidden]:where(:not([hidden="until-found"])) {
+  display: none;
+}
+
+.container {
+  width: 100%;
+}
+
+@media (min-width: 480px) {
+  .container {
+    max-width: 480px;
+  }
+}
+
+@media (min-width: 768px) {
+  .container {
+    max-width: 768px;
+  }
+}
+
+@media (min-width: 976px) {
+  .container {
+    max-width: 976px;
+  }
+}
+
+@media (min-width: 1440px) {
+  .container {
+    max-width: 1440px;
+  }
+}
+
+.sr-only {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border-width: 0;
+}
+
+.fixed {
+  position: fixed;
+}
+
+.absolute {
+  position: absolute;
+}
+
+.relative {
+  position: relative;
+}
+
+.left-0 {
+  left: 0px;
+}
+
+.top-0 {
+  top: 0px;
+}
+
+.z-40 {
+  z-index: 40;
+}
+
+.ms-3 {
+  margin-inline-start: 0.75rem;
+}
+
+.mt-2 {
+  margin-top: 0.5rem;
+}
+
+.inline-block {
+  display: inline-block;
+}
+
+.flex {
+  display: flex;
+}
+
+.inline-flex {
+  display: inline-flex;
+}
+
+.h-6 {
+  height: 1.5rem;
+}
+
+.h-full {
+  height: 100%;
+}
+
+.h-screen {
+  height: 100vh;
+}
+
+.w-6 {
+  width: 1.5rem;
+}
+
+.w-64 {
+  width: 16rem;
+}
+
+.flex-1 {
+  flex: 1 1 0%;
+}
+
+.-translate-x-full {
+  --tw-translate-x: -100%;
+  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
+}
+
+.items-center {
+  align-items: center;
+}
+
+.space-y-2 > :not([hidden]) ~ :not([hidden]) {
+  --tw-space-y-reverse: 0;
+  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
+  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
+}
+
+.overflow-y-auto {
+  overflow-y: auto;
+}
+
+.whitespace-nowrap {
+  white-space: nowrap;
+}
+
+.rounded {
+  border-radius: 0.25rem;
+}
+
+.rounded-lg {
+  border-radius: 0.5rem;
+}
+
+.border {
+  border-width: 1px;
+}
+
+.bg-blue {
+  --tw-bg-opacity: 1;
+  background-color: rgb(31 182 255 / var(--tw-bg-opacity, 1));
+}
+
+.p-2 {
+  padding: 0.5rem;
+}
+
+.px-3 {
+  padding-left: 0.75rem;
+  padding-right: 0.75rem;
+}
+
+.px-8 {
+  padding-left: 2rem;
+  padding-right: 2rem;
+}
+
+.py-4 {
+  padding-top: 1rem;
+  padding-bottom: 1rem;
+}
+
+.pb-3 {
+  padding-bottom: 0.75rem;
+}
+
+.pt-8 {
+  padding-top: 2rem;
+}
+
+.text-sm {
+  font-size: 0.875rem;
+  line-height: 1.25rem;
+}
+
+.font-bold {
+  font-weight: 700;
+}
+
+.font-medium {
+  font-weight: 500;
+}
+
+.underline {
+  text-decoration-line: underline;
+}
+
+.outline {
+  outline-style: solid;
+}
+
+.filter {
+  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
+}
+
+.transition-transform {
+  transition-property: transform;
+  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
+  transition-duration: 150ms;
+}
+
+.focus\:outline-none:focus {
+  outline: 2px solid transparent;
+  outline-offset: 2px;
+}
+
+.focus\:ring-2:focus {
+  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
+  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
+  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
+}
+
+@media (min-width: 480px) {
+  .sm\:hidden {
+    display: none;
+  }
+
+  .sm\:translate-x-0 {
+    --tw-translate-x: 0px;
+    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
+  }
+
+  .sm\:px-10 {
+    padding-left: 2.5rem;
+    padding-right: 2.5rem;
+  }
+
+  .sm\:pb-0 {
+    padding-bottom: 0px;
+  }
+
+  .sm\:pt-10 {
+    padding-top: 2.5rem;
+  }
+}
  ---
  File: src/reducers/canvasSlice.ts
  Status: modified
  Additions: 50
  Deletions: 19
  Changes: 69
  
Patch:
@@ -1,35 +1,49 @@
 import { createSlice, PayloadAction } from '@reduxjs/toolkit';
-import type { RootState } from '../../app/store';
+import type { RootState } from './store';
 
 // The canvasSlice manages the content of the canvas.
-interface CommentObject {
+interface CommentObject extends Box {
   comment_id: number;
   functionality: boolean | undefined;
   aesthetics: boolean | undefined;
   cost: number;
   additional_comment: string;
-  location: number[];
+  location: LocationObject;
   width: number;
   height: number;
+  dimensions: DimensionsObject;
 }
 
-interface CanvasState {
+export interface CanvasState {
   project_name: string;
   project_id: number | undefined;
-  image_file: jpg | png | svg;
-  image_url: URL;
-  canvas_size: number[];
+  image_file: jpg | png | svg | undefined;
+  image_url: URL | undefined;
+  image_id: number;
+  canvas_size: number[] | null;
   image_name: string;
   comment_objects: CommentObject[] | empty[];
 }
 
+export interface LocationObject extends Object {
+  top: number;
+  left: number;
+}
+
+export interface DimensionsObject extends Object {
+  width: number;
+  height: number;
+}
+
 // Define the initial state using that type
-const initialState: CanvasState = {
-  project_name: '',
+export const initialState: CanvasState = {
+  project_name: 'blah',
   project_id: undefined,
-  image_file: '',
-  image_url: '',
-  canvas_size: [800, 400],
+  image_file: undefined,
+  image_id: undefined,
+  image_url: undefined,
+  canvas_size: [1200, 800],
+  canvas_ratio: undefined,
   image_name: '',
   comment_objects: [],
 };
@@ -41,32 +55,49 @@ export const canvasSlice = createSlice({
   initialState,
   reducers: {
     createName: (state, action: PayloadAction<string>) => {
-      new_project_name = action.payload;
+      const new_project_name = action.payload;
+      return { ...state, project_name: new_project_name };
       //lgoic for updating { type: 'createName', payload: 'unnamed' };
     },
-    uploadImage: (state, action: PayloadAction<URL>) => {
+    updateProjectId: (state, action) => {
+      const new_project_id = action.payload;
+      return { ...state, project_id: new_project_id };
+    },
+    updateImageURL: (state, action: PayloadAction<URL>) => {
       const new_image_url = action.payload;
+      return { ...state, image_url: new_image_url };
     },
-    changeProject: (state, action: PayloadAction<number>) => {
-      const new_project_id = action.payload;
+    changeImage: (state, action) => {
+      const new_image_id = action.payload;
+      return { ...state, image_id: new_image_id };
     },
     updateComments: (state, action: PayloadAction<CommentObject[]>) => {
+      const newComments = action.payload;
+      //newcomments should be the entire array of comments
+      return { ...state, comment_objects: newComments };
       //copy comment_objects array and push in the new action.payload
     },
     useImageSize: (state, action: PayloadAction<number[]>) => {
       //update the canvas size based on how we process the uploaded image
       const new_canvas_size = action.payload;
+      return { ...state, canvas_size: new_canvas_size };
+    },
+    updateCanvasRatio: (state, action: PayloadAction<number>) => {
+      const new_canvas_ratio = action.payload;
+      return { ...state, canvas_ratio: new_canvas_ratio };
     },
   },
 });
 
 export const {
-  selectCount,
   createName,
-  uploadImage,
-  changeProject,
+  updateImageURL,
+  updateProjectId,
   useImageSize,
+  changeImage,
   updateComments,
+  changeProject,
+  updateCanvasRatio,
 } = canvasSlice.actions;
 
 /* Other code such as selectors can use the imported `RootState` type
  ---
  File: src/reducers/store.ts
  Status: added
  Additions: 15
  Deletions: 0
  Changes: 15
  
Patch:
@@ -0,0 +1,15 @@
+import { configureStore } from '@reduxjs/toolkit';
+import canvasReducer from './canvasSlice';
+
+export const store = configureStore({
+  reducer: {
+    canvasReducer: canvasReducer,
+  },
+});
+
+export default store;
+// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
+export type RootState = ReturnType<typeof store.getState>;
+// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
+export type AppDispatch = typeof store.dispatch;
+export type AppStore = typeof store;
  ---
  File: src/routeTree.gen.ts
  Status: added
  Additions: 134
  Deletions: 0
  Changes: 134
  
Patch:
@@ -0,0 +1,134 @@
+/* eslint-disable */
+
+// @ts-nocheck
+
+// noinspection JSUnusedGlobalSymbols
+
+// This file was automatically generated by TanStack Router.
+// You should NOT make any changes in this file as it will be overwritten.
+// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.
+
+// Import Routes
+
+import { Route as rootRoute } from './routes/__root'
+import { Route as ProjectImport } from './routes/project'
+import { Route as LoginImport } from './routes/login'
+import { Route as IndexImport } from './routes/index'
+
+// Create/Update Routes
+
+const ProjectRoute = ProjectImport.update({
+  id: '/project',
+  path: '/project',
+  getParentRoute: () => rootRoute,
+} as any)
+
+const LoginRoute = LoginImport.update({
+  id: '/login',
+  path: '/login',
+  getParentRoute: () => rootRoute,
+} as any)
+
+const IndexRoute = IndexImport.update({
+  id: '/',
+  path: '/',
+  getParentRoute: () => rootRoute,
+} as any)
+
+// Populate the FileRoutesByPath interface
+
+declare module '@tanstack/react-router' {
+  interface FileRoutesByPath {
+    '/': {
+      id: '/'
+      path: '/'
+      fullPath: '/'
+      preLoaderRoute: typeof IndexImport
+      parentRoute: typeof rootRoute
+    }
+    '/login': {
+      id: '/login'
+      path: '/login'
+      fullPath: '/login'
+      preLoaderRoute: typeof LoginImport
+      parentRoute: typeof rootRoute
+    }
+    '/project': {
+      id: '/project'
+      path: '/project'
+      fullPath: '/project'
+      preLoaderRoute: typeof ProjectImport
+      parentRoute: typeof rootRoute
+    }
+  }
+}
+
+// Create and export the route tree
+
+export interface FileRoutesByFullPath {
+  '/': typeof IndexRoute
+  '/login': typeof LoginRoute
+  '/project': typeof ProjectRoute
+}
+
+export interface FileRoutesByTo {
+  '/': typeof IndexRoute
+  '/login': typeof LoginRoute
+  '/project': typeof ProjectRoute
+}
+
+export interface FileRoutesById {
+  __root__: typeof rootRoute
+  '/': typeof IndexRoute
+  '/login': typeof LoginRoute
+  '/project': typeof ProjectRoute
+}
+
+export interface FileRouteTypes {
+  fileRoutesByFullPath: FileRoutesByFullPath
+  fullPaths: '/' | '/login' | '/project'
+  fileRoutesByTo: FileRoutesByTo
+  to: '/' | '/login' | '/project'
+  id: '__root__' | '/' | '/login' | '/project'
+  fileRoutesById: FileRoutesById
+}
+
+export interface RootRouteChildren {
+  IndexRoute: typeof IndexRoute
+  LoginRoute: typeof LoginRoute
+  ProjectRoute: typeof ProjectRoute
+}
+
+const rootRouteChildren: RootRouteChildren = {
+  IndexRoute: IndexRoute,
+  LoginRoute: LoginRoute,
+  ProjectRoute: ProjectRoute,
+}
+
+export const routeTree = rootRoute
+  ._addFileChildren(rootRouteChildren)
+  ._addFileTypes<FileRouteTypes>()
+
+/* ROUTE_MANIFEST_START
+{
+  "routes": {
+    "__root__": {
+      "filePath": "__root.tsx",
+      "children": [
+        "/",
+        "/login",
+        "/project"
+      ]
+    },
+    "/": {
+      "filePath": "index.tsx"
+    },
+    "/login": {
+      "filePath": "login.tsx"
+    },
+    "/project": {
+      "filePath": "project.tsx"
+    }
+  }
+}
+ROUTE_MANIFEST_END */
  ---
  File: src/routes/__root.tsx
  Status: added
  Additions: 40
  Deletions: 0
  Changes: 40
  
Patch:
@@ -0,0 +1,40 @@
+import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
+import { TanStackRouterDevtools } from '@tanstack/router-devtools';
+
+/* Tanstack is a file-based routing system that uses a Vite plugin to generate
+routes. 
+*/
+
+export const Route = createRootRoute({
+  component: () => (
+    <>
+      <div className='p-2 flex w-full-screen h-[80px] justify-between gap-2 bg-opacity-40 backdrop-blur-lg bg-white'>
+        <h1 className='font-header p-4 text-xl'>CoCreate</h1>
+        <nav className='flex-row p-4'>
+          <Link
+            to='/'
+            className='[&.active]:font-bold font-header p-4 text-blue'
+          >
+            About
+          </Link>
+          <Link
+            to='/login'
+            className='[&.active]:font-bold font-header p-4 text-blue'
+          >
+            Login
+          </Link>
+          <Link
+            to='/project'
+            className='[&.active]:font-bold font-header text-blue p-4'
+          >
+            Create
+          </Link>
+        </nav>
+      </div>
+
+      <Outlet />
+
+      <TanStackRouterDevtools />
+    </>
+  ),
+});
  ---
  File: src/routes/index.tsx
  Status: added
  Additions: 9
  Deletions: 0
  Changes: 9
  
Patch:
@@ -0,0 +1,9 @@
+import { createFileRoute } from '@tanstack/react-router';
+import LandingImage from '../components/LandingImage';
+export const Route = createFileRoute('/')({
+  component: Index,
+});
+
+function Index() {
+  return <LandingImage />;
+}
  ---
  File: src/routes/login.tsx
  Status: added
  Additions: 93
  Deletions: 0
  Changes: 93
  
Patch:
@@ -0,0 +1,93 @@
+import { createFileRoute, Link } from '@tanstack/react-router';
+import {
+  Card,
+  CardContent,
+  CardDescription,
+  CardFooter,
+  CardHeader,
+  CardTitle,
+} from '@/components/ui/card';
+
+import { useState } from 'react';
+import React from 'react';
+import { Button } from '@/components/ui/button';
+import { Input } from '@/components/ui/input';
+import { Label } from '@/components/ui/label';
+import BgImage from '@/components/BgImage';
+
+interface ReactProps {
+  isLoggedIn: boolean;
+}
+export const Route = createFileRoute('/login')({
+  component: LoginPage,
+});
+
+function LoginPage({ child }) {
+  const [user, setUser] = useState('');
+  const [password, setPassword] = useState('');
+  const [isLoggedIn, setLoggedIn] = useState(false);
+
+  async function submitForm(method) {
+    const endpoint =
+      method === 'POST'
+        ? 'https://localhost:3000/signup'
+        : 'https://localhost:3000/login';
+    try {
+      const response = await fetch(endpoint, {
+        method: method,
+        headers: {
+          'CONTENT-TYPE': 'application/x-www-form-urlencoded',
+        },
+        body: JSON.stringify({ username: user, password: password }),
+      });
+      // You can handle the response here if needed
+    } catch (error) {
+      console.error('Error during form submission:', error);
+      // Optionally, set an error state or show a message to the user
+    }
+  }
+
+  return (
+    <div
+      className={`rounded-lg flex justify-center items-start w-lvw h-lvh bg-center bg-no-repeat bg-cover`}
+      style={{
+        backgroundImage: `url('src/assets/pexels-thoinamcao-15848139.jpg')`,
+      }}
+    >
+      <Card className='w-[350px] mt-[10lvh] h-[350px] bg-opacity-60 backdrop-blur-lg border-opacity-20 border-3 bg-blend-lighten'>
+        <CardHeader>
+          <CardTitle>Log In</CardTitle>
+          <CardDescription>
+            Enter your username and password, or create an account to get
+            started.
+          </CardDescription>
+        </CardHeader>
+        <CardContent>
+          <form action='/login'>
+            <div className='grid w-full items-center gap-4'>
+              <div className='flex flex-col space-y-1.5'>
+                <Label htmlFor='username'>Email or Username</Label>
+                <Input id='username' placeholder='Email or Username' />
+              </div>
+              <div className='flex flex-col space-y-1.5'>
+                <Label htmlFor='password'>Password</Label>
+                <Input
+                  id='password'
+                  placeholder='Minimum 10 characters with numbers and letters'
+                ></Input>
+              </div>
+            </div>
+          </form>
+        </CardContent>
+        <CardFooter>
+          <a href='https://localhost:3000/signup'>
+            <Button variant='outline' type='submit'>
+              Create Account
+            </Button>
+          </a>
+          <Button type='submit'>Log In</Button>
+        </CardFooter>
+      </Card>
+    </div>
+  );
+}
  ---
  File: src/routes/project.tsx
  Status: added
  Additions: 20
  Deletions: 0
  Changes: 20
  
Patch:
@@ -0,0 +1,20 @@
+import { createFileRoute } from '@tanstack/react-router';
+
+import App from '../App';
+import { Provider } from 'react-redux';
+import store from './main';
+export const Route = createFileRoute('/project')({
+  component: RouteComponent,
+});
+
+// Exporting types so that they can be used when we type our hooks.
+// https://react-redux.js.org/tutorials/typescript-quick-start
+// Infer the `RootState` and `AppDispatch` types from the store itself
+export type RootState = ReturnType<typeof store.getState>;
+// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
+export type AppDispatch = typeof store.dispatch;
+export type AppStore = typeof store;
+
+function RouteComponent() {
+  return <App />;
+}
  ---
  File: tailwind.config.js
  Status: added
  Additions: 93
  Deletions: 0
  Changes: 93
  
Patch:
@@ -0,0 +1,93 @@
+/** @type {import('tailwindcss').Config} */
+
+export default {
+  darkMode: ['class'],
+  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
+  theme: {
+    screens: {
+      sm: '480px',
+      md: '768px',
+      lg: '976px',
+      xl: '1440px',
+    },
+    colors: {
+      transparent: 'transparent',
+      white: '#e0e0e0',
+      black: '#000000',
+      blue: '#000E7A',
+      purple: '#7e5bef',
+      pink: '#ff49db',
+      orange: '#ff7849',
+      green: '#13ce66',
+      yellow: '#ffc82c',
+      'gray-dark': '#273444',
+      gray: '#8492a6',
+      'gray-light': '#d3dce6',
+    },
+    fontFamily: {
+      sans: ['Graphik', 'sans-serif'],
+      serif: ['Merriweather', 'serif'],
+    },
+    extend: {
+      animation: {
+        'bg-change': 'bg-change 10s steps(6, end) 1',
+      },
+      keyframes: {
+        'bg-change': {
+          '0%, 18.66%': {
+            backgroundImage: 'url(./src/assets/pexels-fotoaibe-1571460.jpg)',
+          },
+          '20%, 36.66%': {
+            backgroundImage: 'url(./src/assets/pexels-pixabay-261102.jpg)',
+          },
+          '40%, 56.66%': {
+            backgroundImage:
+              'url(./src/assets/pexels-nguyendesigner-244133.jpg)',
+          },
+          '60%, 76.66%': {
+            backgroundImage: 'url(./src/assets/pexels-thoinamcao-15848139.jpg)',
+          },
+          '80%, 96.66%': {
+            backgroundImage:
+              'url(./src/assets/pexels-tirachard-kumtanom-112571-347141.png)',
+          },
+          '100%': {
+            backgroundImage: 'url(./src/assets/pexels-fotoaibe-1571460.jpg)',
+          },
+        },
+      },
+      fontFamily: {
+        header: 'Rubik Dirt',
+      },
+      spacing: {
+        128: '32rem',
+        144: '36rem',
+      },
+      borderRadius: {
+        '4xl': '2rem',
+        lg: 'var(--radius)',
+        md: 'calc(var(--radius) - 2px)',
+        sm: 'calc(var(--radius) - 4px)',
+      },
+      colors: {
+        background: 'hsl(var(--background))',
+        foreground: 'hsl(var(--foreground))',
+        card: {
+          DEFAULT: 'hsl(var(--card))',
+          foreground: 'hsl(var(--card-foreground))',
+        },
+        popover: {
+          DEFAULT: 'hsl(var(--popover))',
+          foreground: 'hsl(var(--popover-foreground))',
+        },
+        primary: {
+          DEFAULT: 'hsl(var(--primary))',
+          foreground: 'hsl(var(--primary-foreground))',
+        },
+        border: 'hsl(var(--border))',
+        input: 'hsl(var(--input))',
+        ring: 'hsl(var(--ring))',
+      },
+    },
+  },
+};
  ---
  File: tsconfig.app.json
  Status: modified
  Additions: 7
  Deletions: 1
  Changes: 8
  
Patch:
@@ -22,8 +22,14 @@
     "noFallthroughCasesInSwitch": true,
     "noUncheckedSideEffectImports": true,
 
+    /*resolves paths for IDE*/
+    "baseUrl": ".",
+    "paths": {
+      "@/*": ["./src/*"]
+    },
+
     /* Vitest Global Types */
     "types": ["vitest/globals"] // includes vitest's global functions for testing
   },
-  "include": ["src"]
+  "include": ["src", "__test__"]
 }
  ---
  File: tsconfig.json
  Status: modified
  Additions: 7
  Deletions: 1
  Changes: 8
  
Patch:
@@ -3,5 +3,11 @@
   "references": [
     { "path": "./tsconfig.app.json" },
     { "path": "./tsconfig.node.json" }
-  ]
+  ],
+  "compilerOptions": {
+    "baseUrl": ".",
+    "paths": {
+      "@/*": ["./src/*"]
+    }
+  }
 }
  ---
  File: vite.config.ts
  Status: modified
  Additions: 12
  Deletions: 4
  Changes: 16
  
Patch:
@@ -1,21 +1,29 @@
 import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
 import { defineConfig as defineVitestConfig } from 'vitest/config';
+import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
+import path from 'path';
 import react from '@vitejs/plugin-react';
 
 // https://vite.dev/config/
 const viteConfig = defineViteConfig({
-  plugins: [react()],
+  plugins: [TanStackRouterVite(), react()],
+  resolve: {
+    alias: {
+      '@': path.resolve(__dirname, './src'),
+    },
+  },
 });
 
 const vitestConfig = defineVitestConfig({
   test: {
-    globals: true, // enable global varieables for testing
+    globals: true, // enable global variables for testing
     environment: 'jsdom', // simulate browser environment to test the DOM
     setupFiles: './__tests__/setup.ts', // to initialize global setups
-    coverage: { // configures code coverage reporting
+    coverage: {
+      // configures code coverage reporting
       reporter: ['text', 'html'], // outputs text to terminal and an html file for the browser for more detail
     },
   },
 });
 
-export default mergeConfig(viteConfig, vitestConfig)
+export default mergeConfig(viteConfig, vitestConfig);
  ---