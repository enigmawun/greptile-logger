# Code Differences between main and backend

## Summary
- Total files changed: 57
- Total additions: 13892
- Total deletions: 80

## File Changes

  File: .env
  Status: added
  Additions: 3
  Deletions: 0
  Changes: 3
  
Patch:
@@ -0,0 +1,3 @@
+PORT=3000
+OPENAI_API_KEY=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
+GITHUB_TOKEN=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
\ No newline at end of file
  ---
  File: CHANGELOG.md
  Status: added
  Additions: 26
  Deletions: 0
  Changes: 26
  
Patch:
@@ -0,0 +1,26 @@
+# Changelog
+
+## Changes since last merged PR (#0)
+
+- Last Merged PR: #0 (a6a0603)
+- Current Branch: backend (a43c9d8)
+
+### Other Changes
+
+- deprecating table but save old files (d471e25)
+- added api (a43c9d8)
+
+## Detailed Commit List
+
+### deprecating table but save old files
+
+- **Author:** Avouchment
+- **Date:** 5/25/2025, 5:44:33 PM
+- **Commit:** [d471e25](https://github.com/enigmawun/greptile-logger/commit/d471e253b1b6db89593d8b05203d0439665d346b)
+
+### added api
+
+- **Author:** Avouchment
+- **Date:** 5/27/2025, 12:05:52 PM
+- **Commit:** [a43c9d8](https://github.com/enigmawun/greptile-logger/commit/a43c9d870ef91e196a038462b8c72757355e94a5)
+
  ---
  File: CHANGE_ANALYSIS.md
  Status: added
  Additions: 112
  Deletions: 0
  Changes: 112
  
Patch:
@@ -0,0 +1,112 @@
+Here's the analysis of the code changes you uploaded, organized into a structured change log:
+
+```json
+{
+  "date": "2025-06-15",
+  "summary": "This release brings significant improvements, including a new CLI tool for changelog management, preparation for an upcoming API version, enhanced project visibility, and various stability improvements. With these updates, users can expect a smoother experience while developers gain more powerful tools for managing changes.",
+  "version": "0.1.0",
+  "changelog": [
+    {
+      "id": "cli-1",
+      "type": "feature",
+      "title": "Introduce a new Command-Line Interface (CLI) for changelog generation",
+      "status": "complete",
+      "detailed_changes": [
+        "Implemented `generateChangeLog` and `analyze-changes` commands using Commander.js",
+        "Added utility functions for markdown generation, repo/branch introspection, and AI-prompt formatting",
+        "Configured output of `CHANGELOG.md` and `CODE_DIFFS.md` from GitHub commit diffs"
+      ],
+      "files": [
+        "packages/cli/src/index.ts",
+        "packages/cli/src/commands/analyze-changes.ts",
+        "packages/cli/src/utils/git-utils.ts",
+        "packages/cli/src/utils/markdown.ts",
+        "packages/cli/src/utils/analyze-changes.ts"
+      ],
+      "repos": "@change-logger/cli",
+      "impact": "Developers can now use the new CLI commands to generate changelogs. Users will see more detailed and consistent changelog entries.",
+      "public_explanation": "We're thrilled to introduce our new command-line tool! Now you can automatically generate beautiful changelogs from your GitHub commits. No more manual updates - just run a command and get a professional changelog that keeps everyone in the loop about your project's progress!",
+      "developer_explanation": "The CLI compares the current branch to a stable branch, fetches commit diffs using Octokit, and generates Markdown changelogs and raw diffs. It includes subcommands and file-based prompts for AI change summaries.",
+      "contributors": ["@Avouchment"]
+    },
+    {
+      "id": "api-1",
+      "type": "deprecation",
+      "title": "Prepare for API v2 release",
+      "status": "in progress",
+      "detailed_changes": [
+        "Adding deprecation warnings to old endpoints",
+        "Creating migration guides",
+        "Implementing graceful fallbacks"
+      ],
+      "files": [
+        "packages/api/src/middleware/deprecation.ts",
+        "packages/api/src/legacy.ts"
+      ],
+      "repos": "@change-logger/api",
+      "impact": "Developers using the API need to review the migration guide and plan to update their API calls to v2 endpoints. Users may see deprecation warnings in their applications.",
+      "public_explanation": "We're working on making our API even better! As part of this, we're gradually moving some older features to our new system. Don't worry - we'll make sure you have plenty of time to update your code, and we'll help you every step of the way!",
+      "developer_explanation": "Adding deprecation notices and migration paths for legacy API endpoints to ensure smooth transition to v2.",
+      "contributors": ["@APIMaster", "@LegacyExpert"]
+    },
+    {
+      "id": "config-1",
+      "type": "configuration",
+      "title": "Simplify setup and remove redundant configuration.",
+      "status": "complete",
+      "detailed_changes": [
+        "Removed explicit MODE declarations from environment files",
+        "Implemented Vite's automatic mode detection",
+        "Updated environment variable references to use import.meta.env"
+      ],
+      "files": [".env.development", ".env.production"],
+      "repos": "main",
+      "impact": "Developers need to update any custom build scripts that directly reference process.env.MODE to use import.meta.env.MODE instead. No action needed for users.",
+      "public_explanation": "We've made it easier to run the app in different environments! Now the app automatically knows whether it's running in development or production mode, so you don't have to worry about setting it up manually.",
+      "developer_explanation": "This change removes MODE declarations because Vite now determines the mode automatically. If you're relying on `process.env.MODE` directly in your own builds or scripts, you should replace it with `import.meta.env.MODE` or use Vite's built-in mode support.",
+      "contributors": ["@ViteExpert", "@ConfigMaster"]
+    },
+    {
+      "id": "deps-1",
+      "type": "dependency",
+      "title": "Ensure project stability after regressions in newer versions.",
+      "status": "complete",
+      "detailed_changes": [
+        "Reverted to Excalidraw version 0.17.6 for stability",
+        "Updated package.json and yarn.lock files",
+        "Removed dependencies on newer version features"
+      ],
+      "files": ["dev-docs/package.json", "dev-docs/yarn.lock"],
+      "repos": "main",
+      "impact": "Developers using features from Excalidraw 0.18.0 will need to modify their code to use 0.17.6 compatible features. Users may notice some newer drawing features are temporarily unavailable.",
+      "public_explanation": "We've made a small adjustment to ensure everything runs smoothly! We've temporarily switched back to a more stable version of our drawing tool. While this means you won't see the very latest features right now, it ensures a more reliable experience for everyone.",
+      "developer_explanation": "Projects depending on new features or fixes in `0.18.0` will no longer have access to them. If you were using a newly added prop or behavior from `0.18.0`, you'll need to adjust to what's available in `0.17.6`. This rollback ensures stability.",
+      "contributors": ["@ExcalidrawMaintainer", "@DependencyExpert"]
+    }
+  ],
+  "files": [
+    "packages/cli/src/index.ts",
+    "packages/cli/src/commands/analyze-changes.ts",
+    "packages/cli/src/utils/git-utils.ts",
+    "packages/cli/src/utils/markdown.ts",
+    "packages/api/src/middleware/deprecation.ts",
+    "packages/api/src/legacy.ts",
+    ".env.development",
+    ".env.production",
+    "dev-docs/package.json",
+    "dev-docs/yarn.lock"
+  ]
+}
+```
+
+### Explanation:
+
+1. **New Features**: The introduction of a CLI tool is aimed at enhancing the developer experience by automating changelog generation. A public-facing explanation highlights its user-friendly nature, while the developer note discusses the underlying function and utility of the tool.
+
+2. **Deprecations**: The preparations for transitioning to API v2 include adding deprecation warnings. This change ensures that users are informed well in advance of upcoming breaking changes.
+
+3. **Configuration Changes**: Simplifying the configuration process makes it easier for developers to deploy applications in different environments, reducing the likelihood of errors due to misconfigurations.
+
+4. **Dependency Management**: The rollback to a stable version of a dependency guarantees greater reliability for users, although it may restrict access to newer features temporarily.
+
+Each change is categorized by type for easy reference, detailing its impact both on users and developers to facilitate smoother transitions and updates.
  ---
  File: CODE_DIFFS.md
  Status: added
  Additions: 4158
  Deletions: 0
  Changes: 4158
  
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
+  "style": "new-york",
+  "rsc": false,
+  "tsx": true,
+  "tailwind": {
+    "config": "",
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
  File: index.html
  Status: modified
  Additions: 2
  Deletions: 2
  Changes: 4
  
Patch:
@@ -1,10 +1,10 @@
-<!doctype html>
+<!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <title>Vite + React + TS</title>
+    <title>Change Log Generator</title>
   </head>
   <body>
     <div id="root"></div>
  ---
  File: package-lock.json
  Status: added
  Additions: 6521
  Deletions: 0
  Changes: 6521
  
  ---
  File: package.json
  Status: modified
  Additions: 48
  Deletions: 3
  Changes: 51
  
Patch:
@@ -7,21 +7,66 @@
     "dev": "vite",
     "build": "tsc -b && vite build",
     "lint": "eslint .",
-    "preview": "vite preview"
+    "preview": "vite preview",
+    "serve": "ts-node server/index.ts",
+    "change-logger": "node -r dotenv/config ./node_modules/change-logger-api/dist/index.js dotenv_config_path=.env",
+    "generate-changelog": "node -r dotenv/config ./node_modules/.bin/change-logger-cli generateChangeLog dotenv_config_path=.env"
   },
   "dependencies": {
+    "@hookform/resolvers": "^5.0.1",
+    "@radix-ui/react-alert-dialog": "^1.1.14",
+    "@radix-ui/react-checkbox": "^1.3.2",
+    "@radix-ui/react-collapsible": "^1.1.11",
+    "@radix-ui/react-dialog": "^1.1.14",
+    "@radix-ui/react-dropdown-menu": "^2.1.15",
+    "@radix-ui/react-icons": "^1.3.2",
+    "@radix-ui/react-label": "^2.1.7",
+    "@radix-ui/react-popover": "^1.1.14",
+    "@radix-ui/react-scroll-area": "^1.2.9",
+    "@radix-ui/react-select": "^2.2.5",
+    "@radix-ui/react-separator": "^1.1.7",
+    "@radix-ui/react-slot": "^1.2.3",
+    "@radix-ui/react-switch": "^1.2.5",
+    "@radix-ui/react-tabs": "^1.1.12",
+    "@radix-ui/react-tooltip": "^1.2.7",
+    "@tabler/icons-react": "^3.33.0",
+    "@tailwindcss/vite": "^4.1.7",
+    "@tanstack/react-table": "^8.21.3",
+    "axios": "^1.9.0",
+    "change-logger-api": "^1.0.1",
+    "change-logger-cli": "^1.0.4",
+    "class-variance-authority": "^0.7.1",
+    "clsx": "^2.1.1",
+    "cmdk": "^1.1.1",
+    "cors": "^2.8.5",
+    "express": "^5.1.0",
+    "lucide-react": "^0.511.0",
+    "nodemon": "^3.1.10",
+    "openai": "^4.103.0",
     "react": "^18.3.1",
-    "react-dom": "^18.3.1"
+    "react-dom": "^18.3.1",
+    "react-hook-form": "^7.56.4",
+    "tailwind-merge": "^3.3.0",
+    "tailwindcss": "^4.1.7",
+    "ts-node": "^10.9.2",
+    "zod": "^3.25.28"
   },
   "devDependencies": {
     "@eslint/js": "^9.9.0",
-    "@types/react": "^18.3.3",
+    "@types/axios": "^0.9.36",
+    "@types/express": "^5.0.2",
+    "@types/node": "^22.15.21",
+    "@types/react": "^18.3.22",
     "@types/react-dom": "^18.3.0",
+    "@typescript-eslint/eslint-plugin": "^8.32.1",
+    "@typescript-eslint/parser": "^8.32.1",
     "@vitejs/plugin-react": "^4.3.1",
+    "dotenv": "^16.5.0",
     "eslint": "^9.9.0",
     "eslint-plugin-react-hooks": "^5.1.0-rc.0",
     "eslint-plugin-react-refresh": "^0.4.9",
     "globals": "^15.9.0",
+    "tw-animate-css": "^1.3.0",
     "typescript": "^5.5.3",
     "typescript-eslint": "^8.0.1",
     "vite": "^5.4.1"
  ---
  File: src/.env
  Status: added
  Additions: 4
  Deletions: 0
  Changes: 4
  
Patch:
@@ -0,0 +1,4 @@
+PORT=3000
+OPENAI_API_KEY=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
+OPENAI_ASSISTANT_ID=asst_EhGWSCLJFLa8J5rZoiiYl3Zv
+GITHUB_TOKEN=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
  ---
  File: src/App.css
  Status: modified
  Additions: 0
  Deletions: 13
  Changes: 13
  
Patch:
@@ -5,19 +5,6 @@
   text-align: center;
 }
 
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
 @keyframes logo-spin {
   from {
     transform: rotate(0deg);
  ---
  File: src/App.tsx
  Status: modified
  Additions: 97
  Deletions: 28
  Changes: 125
  
Patch:
@@ -1,35 +1,104 @@
-import { useState } from 'react'
-import reactLogo from './assets/react.svg'
-import viteLogo from '/vite.svg'
-import './App.css'
+import { useState, useEffect } from 'react';
+import React from 'react';
+
+import './App.css';
+import { SearchProvider, useSearch } from './features/search/search-context';
+import { SearchChanges } from './features/search/search';
+import { Header } from '@/components/layout/header';
+import { Breadcrumb } from '@/components/ui/breadcrumb';
+import Changes from './features/changes';
+import Summary from './features/summary';
+import type { VersionLog } from '@/types/changelog';
+import mockdata from '../CHANGE_ANALYSIS.md?raw';
+
+// Transform the mock data into the expected Changelog format
+const transformMockData = (): VersionLog[] => {
+  try {
+    // Extract JSON from markdown content
+    const jsonMatch = mockdata.match(/```json\n([\s\S]*?)\n```/);
+    if (!jsonMatch) {
+      console.error('No JSON found in markdown file');
+      return [];
+    }
+
+    const jsonData = JSON.parse(jsonMatch[1].trim());
+    console.log('Parsed JSON data:', jsonData); // Debug log
+
+    // Validate the data structure
+    if (!Array.isArray(jsonData) && !jsonData.changelog) {
+      console.error('Invalid data structure:', jsonData);
+      return [];
+    }
+
+    // If it's a single object, wrap it in an array
+    const data = Array.isArray(jsonData) ? jsonData : [jsonData];
+    return data;
+  } catch (error) {
+    console.error('Error transforming mock data:', error);
+    return [];
+  }
+};
 
 function App() {
-  const [count, setCount] = useState(0)
+  const [data, setData] = useState<VersionLog[]>([]);
+
+  useEffect(() => {
+    const fetchData = () => {
+      console.log('Raw mockdata:', mockdata); // Debug raw data
+      const result = transformMockData();
+      console.log('Transformed data:', result); // Debug transformed data
+      setData(result);
+    };
+    fetchData();
+  }, []);
+
+  // Don't render until we have data
+  if (data.length === 0) {
+    return <div>Loading...</div>;
+  }
+
+  console.log('Rendering with data:', data); // Debug render data
 
   return (
-    <>
-      <div>
-        <a href="https://vitejs.dev" target="_blank">
-          <img src={viteLogo} className="logo" alt="Vite logo" />
-        </a>
-        <a href="https://react.dev" target="_blank">
-          <img src={reactLogo} className="logo react" alt="React logo" />
-        </a>
+    <SearchProvider initialData={data}>
+      <div className='container mx-auto p-4'>
+        <Breadcrumb />
+        <Header />
+        <div className='my-4'>
+          <SearchChanges />
+        </div>
+        <ChangelogList />
       </div>
-      <h1>Vite + React</h1>
-      <div className="card">
-        <button onClick={() => setCount((count) => count + 1)}>
-          count is {count}
-        </button>
-        <p>
-          Edit <code>src/App.tsx</code> and save to test HMR
-        </p>
-      </div>
-      <p className="read-the-docs">
-        Click on the Vite and React logos to learn more
-      </p>
-    </>
-  )
+    </SearchProvider>
+  );
+}
+
+function ChangelogList() {
+  const { data, filteredData, isFiltered } = useSearch();
+  const displayData = isFiltered ? filteredData : data;
+
+  console.log('ChangelogList data:', {
+    data,
+    filteredData,
+    isFiltered,
+    displayData,
+  }); // Debug list data
+
+  if (!displayData || displayData.length === 0) {
+    return <div>No changes found</div>;
+  }
+
+  return (
+    <div className='space-y-6'>
+      {displayData.map((version: VersionLog) => (
+        <React.Fragment key={version.version}>
+          <Changes changelog={version.changelog} date={version.date}>
+            <Summary summary={version.summary} version={version.version} />
+          </Changes>
+        </React.Fragment>
+      ))}
+    </div>
+  );
 }
 
-export default App
+export default App;
  ---
  File: src/components/layout/data/searchdata.ts
  Status: added
  Additions: 184
  Deletions: 0
  Changes: 184
  
Patch:
@@ -0,0 +1,184 @@
+import {
+  IconBarrierBlock,
+  IconBrowserCheck,
+  IconBug,
+  IconChecklist,
+  IconError404,
+  IconHelp,
+  IconLayoutDashboard,
+  IconLock,
+  IconLockAccess,
+  IconMessages,
+  IconNotification,
+  IconPackages,
+  IconPalette,
+  IconServerOff,
+  IconSettings,
+  IconTool,
+  IconUserCog,
+  IconUserOff,
+  IconUsers,
+} from '@tabler/icons-react';
+import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react';
+import { type SidebarData } from '../types';
+
+export const sidebarData: SidebarData = {
+  user: {
+    name: 'satnaing',
+    email: 'satnaingdev@gmail.com',
+    avatar: '/avatars/shadcn.jpg',
+  },
+  teams: [
+    {
+      name: 'Shadcn Admin',
+      logo: Command,
+      plan: 'Vite + ShadcnUI',
+    },
+    {
+      name: 'Acme Inc',
+      logo: GalleryVerticalEnd,
+      plan: 'Enterprise',
+    },
+    {
+      name: 'Acme Corp.',
+      logo: AudioWaveform,
+      plan: 'Startup',
+    },
+  ],
+  navGroups: [
+    {
+      title: 'General',
+      items: [
+        {
+          title: 'Dashboard',
+          url: '/',
+          icon: IconLayoutDashboard,
+        },
+        {
+          title: 'Tasks',
+          url: '/tasks',
+          icon: IconChecklist,
+        },
+        {
+          title: 'Apps',
+          url: '/apps',
+          icon: IconPackages,
+        },
+        {
+          title: 'Chats',
+          url: '/chats',
+          badge: '3',
+          icon: IconMessages,
+        },
+        {
+          title: 'Users',
+          url: '/users',
+          icon: IconUsers,
+        },
+      ],
+    },
+    {
+      title: 'Pages',
+      items: [
+        {
+          title: 'Auth',
+          icon: IconLockAccess,
+          items: [
+            {
+              title: 'Sign In',
+              url: '/sign-in',
+            },
+            {
+              title: 'Sign In (2 Col)',
+              url: '/sign-in-2',
+            },
+            {
+              title: 'Sign Up',
+              url: '/sign-up',
+            },
+            {
+              title: 'Forgot Password',
+              url: '/forgot-password',
+            },
+            {
+              title: 'OTP',
+              url: '/otp',
+            },
+          ],
+        },
+        {
+          title: 'Errors',
+          icon: IconBug,
+          items: [
+            {
+              title: 'Unauthorized',
+              url: '/401',
+              icon: IconLock,
+            },
+            {
+              title: 'Forbidden',
+              url: '/403',
+              icon: IconUserOff,
+            },
+            {
+              title: 'Not Found',
+              url: '/404',
+              icon: IconError404,
+            },
+            {
+              title: 'Internal Server Error',
+              url: '/500',
+              icon: IconServerOff,
+            },
+            {
+              title: 'Maintenance Error',
+              url: '/503',
+              icon: IconBarrierBlock,
+            },
+          ],
+        },
+      ],
+    },
+    {
+      title: 'Other',
+      items: [
+        {
+          title: 'Settings',
+          icon: IconSettings,
+          items: [
+            {
+              title: 'Profile',
+              url: '/settings',
+              icon: IconUserCog,
+            },
+            {
+              title: 'Account',
+              url: '/settings/account',
+              icon: IconTool,
+            },
+            {
+              title: 'Appearance',
+              url: '/settings/appearance',
+              icon: IconPalette,
+            },
+            {
+              title: 'Notifications',
+              url: '/settings/notifications',
+              icon: IconNotification,
+            },
+            {
+              title: 'Display',
+              url: '/settings/display',
+              icon: IconBrowserCheck,
+            },
+          ],
+        },
+        {
+          title: 'Help Center',
+          url: '/help-center',
+          icon: IconHelp,
+        },
+      ],
+    },
+  ],
+};
  ---
  File: src/components/layout/header.tsx
  Status: added
  Additions: 75
  Deletions: 0
  Changes: 75
  
Patch:
@@ -0,0 +1,75 @@
+import React from 'react';
+import { cn } from '@/lib/utils';
+import { Separator } from '@/components/ui/separator';
+import {
+  Breadcrumb,
+  BreadcrumbItem,
+  BreadcrumbLink,
+  BreadcrumbList,
+  BreadcrumbPage,
+  BreadcrumbSeparator,
+} from '@/components/ui/breadcrumb';
+interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
+  fixed?: boolean;
+  ref?: React.Ref<HTMLElement>;
+}
+
+export const Header = ({
+  className,
+  fixed,
+  children,
+  ...props
+}: HeaderProps) => {
+  const [offset, setOffset] = React.useState(0);
+
+  React.useEffect(() => {
+    const onScroll = () => {
+      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
+    };
+
+    // Add scroll listener to the body
+    document.addEventListener('scroll', onScroll, { passive: true });
+
+    // Clean up the event listener on unmount
+    return () => document.removeEventListener('scroll', onScroll);
+  }, []);
+
+  return (
+    <div className='flex flex-col gap-2'>
+      <Breadcrumb>
+        <BreadcrumbList>
+          <BreadcrumbItem>
+            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
+          </BreadcrumbItem>
+          <BreadcrumbSeparator />
+          <BreadcrumbItem>
+            <BreadcrumbLink href='/'>Documentation</BreadcrumbLink>
+          </BreadcrumbItem>
+          <BreadcrumbSeparator />
+          <BreadcrumbItem>
+            <BreadcrumbPage>What's New</BreadcrumbPage>
+          </BreadcrumbItem>
+        </BreadcrumbList>
+      </Breadcrumb>
+
+      <header
+        className={cn(
+          'bg-background flex h-16 items-center gap-3 m-4 p-4 sm:gap-4',
+          fixed && 'peer/header w-[inherit] rounded-md',
+          offset > 10 && fixed ? 'shadow-sm' : 'shadow-none',
+          className
+        )}
+        {...props}
+      >
+        <h3 className='text-4xl font-bold'>Change Log</h3>
+        <Separator orientation='vertical' className='h-6' />
+        <span className='text-muted-foreground hidden sm:block'>
+          Read about our latest updates and features.
+        </span>
+      </header>
+      {children}
+    </div>
+  );
+};
+
+Header.displayName = 'Header';
  ---
  File: src/components/layout/latest.tsx
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/components/layout/main.tsx
  Status: added
  Additions: 22
  Deletions: 0
  Changes: 22
  
Patch:
@@ -0,0 +1,22 @@
+import React from 'react';
+import { cn } from '@/lib/utils';
+
+interface MainProps extends React.HTMLAttributes<HTMLElement> {
+  fixed?: boolean;
+  ref?: React.Ref<HTMLElement>;
+}
+
+export const Main = ({ fixed, ...props }: MainProps) => {
+  return (
+    <main
+      className={cn(
+        'peer-[.header-fixed]/header:mt-16',
+        'px-4 py-6',
+        fixed && 'fixed-main flex grow flex-col overflow-hidden'
+      )}
+      {...props}
+    />
+  );
+};
+
+Main.displayName = 'Main';
  ---
  File: src/components/layout/top-nav.tsx
  Status: added
  Additions: 0
  Deletions: 0
  Changes: 0
  
  ---
  File: src/components/layout/types.ts
  Status: added
  Additions: 42
  Deletions: 0
  Changes: 42
  
Patch:
@@ -0,0 +1,42 @@
+interface User {
+  name: string;
+  email: string;
+  avatar: string;
+}
+
+interface Team {
+  name: string;
+  logo: React.ElementType;
+  plan: string;
+}
+
+interface BaseNavItem {
+  title: string;
+  badge?: string;
+  icon?: React.ElementType;
+}
+
+type NavLink = BaseNavItem & {
+  url: string;
+  items?: never;
+};
+
+type NavCollapsible = BaseNavItem & {
+  items: (BaseNavItem & { url: string })[];
+  url?: never;
+};
+
+type NavItem = NavCollapsible | NavLink;
+
+interface NavGroup {
+  title: string;
+  items: NavItem[];
+}
+
+interface SidebarData {
+  user: User;
+  teams: Team[];
+  navGroups: NavGroup[];
+}
+
+export type { SidebarData, NavGroup, NavItem, NavCollapsible, NavLink };
  ---
  File: src/components/search.tsx
  Status: added
  Additions: 31
  Deletions: 0
  Changes: 31
  
Patch:
@@ -0,0 +1,31 @@
+import { IconSearch } from '@tabler/icons-react';
+import { cn } from '@/lib/utils';
+
+import { Button } from '@/components/ui/button';
+
+interface Props {
+  className?: string;
+  type?: React.HTMLInputTypeAttribute;
+  placeholder?: string;
+}
+
+export function Search({ className = '', placeholder = 'Search' }: Props) {
+  return (
+    <Button
+      variant='ghost'
+      className={cn(
+        'bg-muted/25 text-muted-foreground hover:bg-muted/50 relative h-8 w-full flex-1 justify-start rounded-md text-sm font-normal shadow-none sm:pr-12 md:w-40 md:flex-none lg:w-56 xl:w-64',
+        className
+      )}
+    >
+      <IconSearch
+        aria-hidden='true'
+        className='absolute top-1/2 left-1.5 -translate-y-1/2'
+      />
+      <span className='ml-3'>{placeholder}</span>
+      <kbd className='bg-muted pointer-events-none absolute top-[0.3rem] right-[0.3rem] hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex'>
+        <span className='text-xs'>⌘</span>K
+      </kbd>
+    </Button>
+  );
+}
  ---
  File: src/components/select-dropdown.tsx
  Status: added
  Additions: 23
  Deletions: 0
  Changes: 23
  
Patch:
@@ -0,0 +1,23 @@
+import {
+  Select,
+  SelectContent,
+  SelectItem,
+  SelectTrigger,
+  SelectValue,
+} from '@/components/ui/select';
+
+export function SelectDropdown() {
+  return (
+    <Select>
+      <SelectTrigger className='outline-dotted'>
+        <SelectValue placeholder='Product' />
+      </SelectTrigger>
+      <SelectContent>
+        <SelectItem value='product'>Product</SelectItem>
+        <SelectItem value='product'>Product</SelectItem>
+        <SelectItem value='product'>Product</SelectItem>
+        <SelectItem value='product'>Product</SelectItem>
+      </SelectContent>
+    </Select>
+  );
+}
  ---
  File: src/components/ui/alert-dialog.tsx
  Status: added
  Additions: 155
  Deletions: 0
  Changes: 155
  
Patch:
@@ -0,0 +1,155 @@
+import * as React from "react"
+import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
+
+import { cn } from "@/lib/utils"
+import { buttonVariants } from "@/components/ui/button"
+
+function AlertDialog({
+  ...props
+}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
+  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
+}
+
+function AlertDialogTrigger({
+  ...props
+}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
+  return (
+    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
+  )
+}
+
+function AlertDialogPortal({
+  ...props
+}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
+  return (
+    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
+  )
+}
+
+function AlertDialogOverlay({
+  className,
+  ...props
+}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
+  return (
+    <AlertDialogPrimitive.Overlay
+      data-slot="alert-dialog-overlay"
+      className={cn(
+        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function AlertDialogContent({
+  className,
+  ...props
+}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
+  return (
+    <AlertDialogPortal>
+      <AlertDialogOverlay />
+      <AlertDialogPrimitive.Content
+        data-slot="alert-dialog-content"
+        className={cn(
+          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
+          className
+        )}
+        {...props}
+      />
+    </AlertDialogPortal>
+  )
+}
+
+function AlertDialogHeader({
+  className,
+  ...props
+}: React.ComponentProps<"div">) {
+  return (
+    <div
+      data-slot="alert-dialog-header"
+      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
+      {...props}
+    />
+  )
+}
+
+function AlertDialogFooter({
+  className,
+  ...props
+}: React.ComponentProps<"div">) {
+  return (
+    <div
+      data-slot="alert-dialog-footer"
+      className={cn(
+        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function AlertDialogTitle({
+  className,
+  ...props
+}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
+  return (
+    <AlertDialogPrimitive.Title
+      data-slot="alert-dialog-title"
+      className={cn("text-lg font-semibold", className)}
+      {...props}
+    />
+  )
+}
+
+function AlertDialogDescription({
+  className,
+  ...props
+}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
+  return (
+    <AlertDialogPrimitive.Description
+      data-slot="alert-dialog-description"
+      className={cn("text-muted-foreground text-sm", className)}
+      {...props}
+    />
+  )
+}
+
+function AlertDialogAction({
+  className,
+  ...props
+}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
+  return (
+    <AlertDialogPrimitive.Action
+      className={cn(buttonVariants(), className)}
+      {...props}
+    />
+  )
+}
+
+function AlertDialogCancel({
+  className,
+  ...props
+}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
+  return (
+    <AlertDialogPrimitive.Cancel
+      className={cn(buttonVariants({ variant: "outline" }), className)}
+      {...props}
+    />
+  )
+}
+
+export {
+  AlertDialog,
+  AlertDialogPortal,
+  AlertDialogOverlay,
+  AlertDialogTrigger,
+  AlertDialogContent,
+  AlertDialogHeader,
+  AlertDialogFooter,
+  AlertDialogTitle,
+  AlertDialogDescription,
+  AlertDialogAction,
+  AlertDialogCancel,
+}
  ---
  File: src/components/ui/badge.tsx
  Status: added
  Additions: 46
  Deletions: 0
  Changes: 46
  
Patch:
@@ -0,0 +1,46 @@
+import * as React from "react"
+import { Slot } from "@radix-ui/react-slot"
+import { cva, type VariantProps } from "class-variance-authority"
+
+import { cn } from "@/lib/utils"
+
+const badgeVariants = cva(
+  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
+  {
+    variants: {
+      variant: {
+        default:
+          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
+        secondary:
+          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
+        destructive:
+          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
+        outline:
+          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
+      },
+    },
+    defaultVariants: {
+      variant: "default",
+    },
+  }
+)
+
+function Badge({
+  className,
+  variant,
+  asChild = false,
+  ...props
+}: React.ComponentProps<"span"> &
+  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
+  const Comp = asChild ? Slot : "span"
+
+  return (
+    <Comp
+      data-slot="badge"
+      className={cn(badgeVariants({ variant }), className)}
+      {...props}
+    />
+  )
+}
+
+export { Badge, badgeVariants }
  ---
  File: src/components/ui/breadcrumb.tsx
  Status: added
  Additions: 109
  Deletions: 0
  Changes: 109
  
Patch:
@@ -0,0 +1,109 @@
+import * as React from "react"
+import { Slot } from "@radix-ui/react-slot"
+import { ChevronRight, MoreHorizontal } from "lucide-react"
+
+import { cn } from "@/lib/utils"
+
+function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
+  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
+}
+
+function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
+  return (
+    <ol
+      data-slot="breadcrumb-list"
+      className={cn(
+        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
+  return (
+    <li
+      data-slot="breadcrumb-item"
+      className={cn("inline-flex items-center gap-1.5", className)}
+      {...props}
+    />
+  )
+}
+
+function BreadcrumbLink({
+  asChild,
+  className,
+  ...props
+}: React.ComponentProps<"a"> & {
+  asChild?: boolean
+}) {
+  const Comp = asChild ? Slot : "a"
+
+  return (
+    <Comp
+      data-slot="breadcrumb-link"
+      className={cn("hover:text-foreground transition-colors", className)}
+      {...props}
+    />
+  )
+}
+
+function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
+  return (
+    <span
+      data-slot="breadcrumb-page"
+      role="link"
+      aria-disabled="true"
+      aria-current="page"
+      className={cn("text-foreground font-normal", className)}
+      {...props}
+    />
+  )
+}
+
+function BreadcrumbSeparator({
+  children,
+  className,
+  ...props
+}: React.ComponentProps<"li">) {
+  return (
+    <li
+      data-slot="breadcrumb-separator"
+      role="presentation"
+      aria-hidden="true"
+      className={cn("[&>svg]:size-3.5", className)}
+      {...props}
+    >
+      {children ?? <ChevronRight />}
+    </li>
+  )
+}
+
+function BreadcrumbEllipsis({
+  className,
+  ...props
+}: React.ComponentProps<"span">) {
+  return (
+    <span
+      data-slot="breadcrumb-ellipsis"
+      role="presentation"
+      aria-hidden="true"
+      className={cn("flex size-9 items-center justify-center", className)}
+      {...props}
+    >
+      <MoreHorizontal className="size-4" />
+      <span className="sr-only">More</span>
+    </span>
+  )
+}
+
+export {
+  Breadcrumb,
+  BreadcrumbList,
+  BreadcrumbItem,
+  BreadcrumbLink,
+  BreadcrumbPage,
+  BreadcrumbSeparator,
+  BreadcrumbEllipsis,
+}
  ---
  File: src/components/ui/button.tsx
  Status: added
  Additions: 59
  Deletions: 0
  Changes: 59
  
Patch:
@@ -0,0 +1,59 @@
+import * as React from "react"
+import { Slot } from "@radix-ui/react-slot"
+import { cva, type VariantProps } from "class-variance-authority"
+
+import { cn } from "@/lib/utils"
+
+const buttonVariants = cva(
+  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
+  {
+    variants: {
+      variant: {
+        default:
+          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
+        destructive:
+          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
+        outline:
+          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
+        secondary:
+          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
+        ghost:
+          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
+        link: "text-primary underline-offset-4 hover:underline",
+      },
+      size: {
+        default: "h-9 px-4 py-2 has-[>svg]:px-3",
+        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
+        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
+        icon: "size-9",
+      },
+    },
+    defaultVariants: {
+      variant: "default",
+      size: "default",
+    },
+  }
+)
+
+function Button({
+  className,
+  variant,
+  size,
+  asChild = false,
+  ...props
+}: React.ComponentProps<"button"> &
+  VariantProps<typeof buttonVariants> & {
+    asChild?: boolean
+  }) {
+  const Comp = asChild ? Slot : "button"
+
+  return (
+    <Comp
+      data-slot="button"
+      className={cn(buttonVariants({ variant, size, className }))}
+      {...props}
+    />
+  )
+}
+
+export { Button, buttonVariants }
  ---
  File: src/components/ui/card.tsx
  Status: added
  Additions: 92
  Deletions: 0
  Changes: 92
  
Patch:
@@ -0,0 +1,92 @@
+import * as React from 'react';
+
+import { cn } from '@/lib/utils';
+
+function Card({ className, ...props }: React.ComponentProps<'div'>) {
+  return (
+    <div
+      data-slot='card'
+      className={cn(
+        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
+        className
+      )}
+      {...props}
+    />
+  );
+}
+
+function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
+  return (
+    <div
+      data-slot='card-header'
+      className={cn(
+        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
+        className
+      )}
+      {...props}
+    />
+  );
+}
+
+function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
+  return (
+    <div
+      data-slot='card-title'
+      className={cn('leading-none font-semibold', className)}
+      {...props}
+    />
+  );
+}
+
+function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
+  return (
+    <div
+      data-slot='card-description'
+      className={cn('text-muted-foreground text-sm', className)}
+      {...props}
+    />
+  );
+}
+
+function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
+  return (
+    <div
+      data-slot='card-action'
+      className={cn(
+        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
+        className
+      )}
+      {...props}
+    />
+  );
+}
+
+function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
+  return (
+    <div
+      data-slot='card-content'
+      className={cn('px-6', className)}
+      {...props}
+    />
+  );
+}
+
+function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
+  return (
+    <div
+      data-slot='card-footer'
+      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
+      {...props}
+    />
+  );
+}
+
+export {
+  Card,
+  CardHeader,
+  CardFooter,
+  CardTitle,
+  CardAction,
+  CardDescription,
+  CardContent,
+};
  ---
  File: src/components/ui/checkbox.tsx
  Status: added
  Additions: 30
  Deletions: 0
  Changes: 30
  
Patch:
@@ -0,0 +1,30 @@
+import * as React from "react"
+import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
+import { CheckIcon } from "lucide-react"
+
+import { cn } from "@/lib/utils"
+
+function Checkbox({
+  className,
+  ...props
+}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
+  return (
+    <CheckboxPrimitive.Root
+      data-slot="checkbox"
+      className={cn(
+        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
+        className
+      )}
+      {...props}
+    >
+      <CheckboxPrimitive.Indicator
+        data-slot="checkbox-indicator"
+        className="flex items-center justify-center text-current transition-none"
+      >
+        <CheckIcon className="size-3.5" />
+      </CheckboxPrimitive.Indicator>
+    </CheckboxPrimitive.Root>
+  )
+}
+
+export { Checkbox }
  ---
  File: src/components/ui/collapsible.tsx
  Status: added
  Additions: 44
  Deletions: 0
  Changes: 44
  
Patch:
@@ -0,0 +1,44 @@
+import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
+import { cn } from '@/lib/utils';
+
+function Collapsible({
+  ...props
+}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
+  return (
+    <CollapsiblePrimitive.Root
+      data-slot='collapsible'
+      className={cn(
+        'flex flex-col items-start hover:cursor-pointer active:cursor-move '
+      )}
+      {...props}
+    />
+  );
+}
+
+function CollapsibleTrigger({
+  ...props
+}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
+  return (
+    <CollapsiblePrimitive.CollapsibleTrigger
+      data-slot='collapsible-trigger'
+      className={cn(
+        'text-left self-start hover:cursor-pointer active:cursor-pointer'
+      )}
+      {...props}
+    />
+  );
+}
+
+function CollapsibleContent({
+  ...props
+}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
+  return (
+    <CollapsiblePrimitive.CollapsibleContent
+      data-slot='collapsible-content'
+      className={cn('text-left')}
+      {...props}
+    />
+  );
+}
+
+export { Collapsible, CollapsibleTrigger, CollapsibleContent };
  ---
  File: src/components/ui/command.tsx
  Status: added
  Additions: 175
  Deletions: 0
  Changes: 175
  
Patch:
@@ -0,0 +1,175 @@
+import * as React from "react"
+import { Command as CommandPrimitive } from "cmdk"
+import { SearchIcon } from "lucide-react"
+
+import { cn } from "@/lib/utils"
+import {
+  Dialog,
+  DialogContent,
+  DialogDescription,
+  DialogHeader,
+  DialogTitle,
+} from "@/components/ui/dialog"
+
+function Command({
+  className,
+  ...props
+}: React.ComponentProps<typeof CommandPrimitive>) {
+  return (
+    <CommandPrimitive
+      data-slot="command"
+      className={cn(
+        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function CommandDialog({
+  title = "Command Palette",
+  description = "Search for a command to run...",
+  children,
+  ...props
+}: React.ComponentProps<typeof Dialog> & {
+  title?: string
+  description?: string
+}) {
+  return (
+    <Dialog {...props}>
+      <DialogHeader className="sr-only">
+        <DialogTitle>{title}</DialogTitle>
+        <DialogDescription>{description}</DialogDescription>
+      </DialogHeader>
+      <DialogContent className="overflow-hidden p-0">
+        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
+          {children}
+        </Command>
+      </DialogContent>
+    </Dialog>
+  )
+}
+
+function CommandInput({
+  className,
+  ...props
+}: React.ComponentProps<typeof CommandPrimitive.Input>) {
+  return (
+    <div
+      data-slot="command-input-wrapper"
+      className="flex h-9 items-center gap-2 border-b px-3"
+    >
+      <SearchIcon className="size-4 shrink-0 opacity-50" />
+      <CommandPrimitive.Input
+        data-slot="command-input"
+        className={cn(
+          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
+          className
+        )}
+        {...props}
+      />
+    </div>
+  )
+}
+
+function CommandList({
+  className,
+  ...props
+}: React.ComponentProps<typeof CommandPrimitive.List>) {
+  return (
+    <CommandPrimitive.List
+      data-slot="command-list"
+      className={cn(
+        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function CommandEmpty({
+  ...props
+}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
+  return (
+    <CommandPrimitive.Empty
+      data-slot="command-empty"
+      className="py-6 text-center text-sm"
+      {...props}
+    />
+  )
+}
+
+function CommandGroup({
+  className,
+  ...props
+}: React.ComponentProps<typeof CommandPrimitive.Group>) {
+  return (
+    <CommandPrimitive.Group
+      data-slot="command-group"
+      className={cn(
+        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function CommandSeparator({
+  className,
+  ...props
+}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
+  return (
+    <CommandPrimitive.Separator
+      data-slot="command-separator"
+      className={cn("bg-border -mx-1 h-px", className)}
+      {...props}
+    />
+  )
+}
+
+function CommandItem({
+  className,
+  ...props
+}: React.ComponentProps<typeof CommandPrimitive.Item>) {
+  return (
+    <CommandPrimitive.Item
+      data-slot="command-item"
+      className={cn(
+        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function CommandShortcut({
+  className,
+  ...props
+}: React.ComponentProps<"span">) {
+  return (
+    <span
+      data-slot="command-shortcut"
+      className={cn(
+        "text-muted-foreground ml-auto text-xs tracking-widest",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+export {
+  Command,
+  CommandDialog,
+  CommandInput,
+  CommandList,
+  CommandEmpty,
+  CommandGroup,
+  CommandItem,
+  CommandShortcut,
+  CommandSeparator,
+}
  ---
  File: src/components/ui/dialog.tsx
  Status: added
  Additions: 133
  Deletions: 0
  Changes: 133
  
Patch:
@@ -0,0 +1,133 @@
+import * as React from "react"
+import * as DialogPrimitive from "@radix-ui/react-dialog"
+import { XIcon } from "lucide-react"
+
+import { cn } from "@/lib/utils"
+
+function Dialog({
+  ...props
+}: React.ComponentProps<typeof DialogPrimitive.Root>) {
+  return <DialogPrimitive.Root data-slot="dialog" {...props} />
+}
+
+function DialogTrigger({
+  ...props
+}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
+  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
+}
+
+function DialogPortal({
+  ...props
+}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
+  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
+}
+
+function DialogClose({
+  ...props
+}: React.ComponentProps<typeof DialogPrimitive.Close>) {
+  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
+}
+
+function DialogOverlay({
+  className,
+  ...props
+}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
+  return (
+    <DialogPrimitive.Overlay
+      data-slot="dialog-overlay"
+      className={cn(
+        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function DialogContent({
+  className,
+  children,
+  ...props
+}: React.ComponentProps<typeof DialogPrimitive.Content>) {
+  return (
+    <DialogPortal data-slot="dialog-portal">
+      <DialogOverlay />
+      <DialogPrimitive.Content
+        data-slot="dialog-content"
+        className={cn(
+          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
+          className
+        )}
+        {...props}
+      >
+        {children}
+        <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
+          <XIcon />
+          <span className="sr-only">Close</span>
+        </DialogPrimitive.Close>
+      </DialogPrimitive.Content>
+    </DialogPortal>
+  )
+}
+
+function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
+  return (
+    <div
+      data-slot="dialog-header"
+      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
+      {...props}
+    />
+  )
+}
+
+function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
+  return (
+    <div
+      data-slot="dialog-footer"
+      className={cn(
+        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function DialogTitle({
+  className,
+  ...props
+}: React.ComponentProps<typeof DialogPrimitive.Title>) {
+  return (
+    <DialogPrimitive.Title
+      data-slot="dialog-title"
+      className={cn("text-lg leading-none font-semibold", className)}
+      {...props}
+    />
+  )
+}
+
+function DialogDescription({
+  className,
+  ...props
+}: React.ComponentProps<typeof DialogPrimitive.Description>) {
+  return (
+    <DialogPrimitive.Description
+      data-slot="dialog-description"
+      className={cn("text-muted-foreground text-sm", className)}
+      {...props}
+    />
+  )
+}
+
+export {
+  Dialog,
+  DialogClose,
+  DialogContent,
+  DialogDescription,
+  DialogFooter,
+  DialogHeader,
+  DialogOverlay,
+  DialogPortal,
+  DialogTitle,
+  DialogTrigger,
+}
  ---
  File: src/components/ui/dropdown-menu.tsx
  Status: added
  Additions: 255
  Deletions: 0
  Changes: 255
  
Patch:
@@ -0,0 +1,255 @@
+import * as React from "react"
+import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
+import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
+
+import { cn } from "@/lib/utils"
+
+function DropdownMenu({
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
+  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
+}
+
+function DropdownMenuPortal({
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
+  return (
+    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
+  )
+}
+
+function DropdownMenuTrigger({
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
+  return (
+    <DropdownMenuPrimitive.Trigger
+      data-slot="dropdown-menu-trigger"
+      {...props}
+    />
+  )
+}
+
+function DropdownMenuContent({
+  className,
+  sideOffset = 4,
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
+  return (
+    <DropdownMenuPrimitive.Portal>
+      <DropdownMenuPrimitive.Content
+        data-slot="dropdown-menu-content"
+        sideOffset={sideOffset}
+        className={cn(
+          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
+          className
+        )}
+        {...props}
+      />
+    </DropdownMenuPrimitive.Portal>
+  )
+}
+
+function DropdownMenuGroup({
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
+  return (
+    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
+  )
+}
+
+function DropdownMenuItem({
+  className,
+  inset,
+  variant = "default",
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
+  inset?: boolean
+  variant?: "default" | "destructive"
+}) {
+  return (
+    <DropdownMenuPrimitive.Item
+      data-slot="dropdown-menu-item"
+      data-inset={inset}
+      data-variant={variant}
+      className={cn(
+        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function DropdownMenuCheckboxItem({
+  className,
+  children,
+  checked,
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
+  return (
+    <DropdownMenuPrimitive.CheckboxItem
+      data-slot="dropdown-menu-checkbox-item"
+      className={cn(
+        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
+        className
+      )}
+      checked={checked}
+      {...props}
+    >
+      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
+        <DropdownMenuPrimitive.ItemIndicator>
+          <CheckIcon className="size-4" />
+        </DropdownMenuPrimitive.ItemIndicator>
+      </span>
+      {children}
+    </DropdownMenuPrimitive.CheckboxItem>
+  )
+}
+
+function DropdownMenuRadioGroup({
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
+  return (
+    <DropdownMenuPrimitive.RadioGroup
+      data-slot="dropdown-menu-radio-group"
+      {...props}
+    />
+  )
+}
+
+function DropdownMenuRadioItem({
+  className,
+  children,
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
+  return (
+    <DropdownMenuPrimitive.RadioItem
+      data-slot="dropdown-menu-radio-item"
+      className={cn(
+        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
+        className
+      )}
+      {...props}
+    >
+      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
+        <DropdownMenuPrimitive.ItemIndicator>
+          <CircleIcon className="size-2 fill-current" />
+        </DropdownMenuPrimitive.ItemIndicator>
+      </span>
+      {children}
+    </DropdownMenuPrimitive.RadioItem>
+  )
+}
+
+function DropdownMenuLabel({
+  className,
+  inset,
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
+  inset?: boolean
+}) {
+  return (
+    <DropdownMenuPrimitive.Label
+      data-slot="dropdown-menu-label"
+      data-inset={inset}
+      className={cn(
+        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function DropdownMenuSeparator({
+  className,
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
+  return (
+    <DropdownMenuPrimitive.Separator
+      data-slot="dropdown-menu-separator"
+      className={cn("bg-border -mx-1 my-1 h-px", className)}
+      {...props}
+    />
+  )
+}
+
+function DropdownMenuShortcut({
+  className,
+  ...props
+}: React.ComponentProps<"span">) {
+  return (
+    <span
+      data-slot="dropdown-menu-shortcut"
+      className={cn(
+        "text-muted-foreground ml-auto text-xs tracking-widest",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function DropdownMenuSub({
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
+  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
+}
+
+function DropdownMenuSubTrigger({
+  className,
+  inset,
+  children,
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
+  inset?: boolean
+}) {
+  return (
+    <DropdownMenuPrimitive.SubTrigger
+      data-slot="dropdown-menu-sub-trigger"
+      data-inset={inset}
+      className={cn(
+        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
+        className
+      )}
+      {...props}
+    >
+      {children}
+      <ChevronRightIcon className="ml-auto size-4" />
+    </DropdownMenuPrimitive.SubTrigger>
+  )
+}
+
+function DropdownMenuSubContent({
+  className,
+  ...props
+}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
+  return (
+    <DropdownMenuPrimitive.SubContent
+      data-slot="dropdown-menu-sub-content"
+      className={cn(
+        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+export {
+  DropdownMenu,
+  DropdownMenuPortal,
+  DropdownMenuTrigger,
+  DropdownMenuContent,
+  DropdownMenuGroup,
+  DropdownMenuLabel,
+  DropdownMenuItem,
+  DropdownMenuCheckboxItem,
+  DropdownMenuRadioGroup,
+  DropdownMenuRadioItem,
+  DropdownMenuSeparator,
+  DropdownMenuShortcut,
+  DropdownMenuSub,
+  DropdownMenuSubTrigger,
+  DropdownMenuSubContent,
+}
  ---
  File: src/components/ui/form.tsx
  Status: added
  Additions: 165
  Deletions: 0
  Changes: 165
  
Patch:
@@ -0,0 +1,165 @@
+import * as React from "react"
+import * as LabelPrimitive from "@radix-ui/react-label"
+import { Slot } from "@radix-ui/react-slot"
+import {
+  Controller,
+  FormProvider,
+  useFormContext,
+  useFormState,
+  type ControllerProps,
+  type FieldPath,
+  type FieldValues,
+} from "react-hook-form"
+
+import { cn } from "@/lib/utils"
+import { Label } from "@/components/ui/label"
+
+const Form = FormProvider
+
+type FormFieldContextValue<
+  TFieldValues extends FieldValues = FieldValues,
+  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
+> = {
+  name: TName
+}
+
+const FormFieldContext = React.createContext<FormFieldContextValue>(
+  {} as FormFieldContextValue
+)
+
+const FormField = <
+  TFieldValues extends FieldValues = FieldValues,
+  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
+>({
+  ...props
+}: ControllerProps<TFieldValues, TName>) => {
+  return (
+    <FormFieldContext.Provider value={{ name: props.name }}>
+      <Controller {...props} />
+    </FormFieldContext.Provider>
+  )
+}
+
+const useFormField = () => {
+  const fieldContext = React.useContext(FormFieldContext)
+  const itemContext = React.useContext(FormItemContext)
+  const { getFieldState } = useFormContext()
+  const formState = useFormState({ name: fieldContext.name })
+  const fieldState = getFieldState(fieldContext.name, formState)
+
+  if (!fieldContext) {
+    throw new Error("useFormField should be used within <FormField>")
+  }
+
+  const { id } = itemContext
+
+  return {
+    id,
+    name: fieldContext.name,
+    formItemId: `${id}-form-item`,
+    formDescriptionId: `${id}-form-item-description`,
+    formMessageId: `${id}-form-item-message`,
+    ...fieldState,
+  }
+}
+
+type FormItemContextValue = {
+  id: string
+}
+
+const FormItemContext = React.createContext<FormItemContextValue>(
+  {} as FormItemContextValue
+)
+
+function FormItem({ className, ...props }: React.ComponentProps<"div">) {
+  const id = React.useId()
+
+  return (
+    <FormItemContext.Provider value={{ id }}>
+      <div
+        data-slot="form-item"
+        className={cn("grid gap-2", className)}
+        {...props}
+      />
+    </FormItemContext.Provider>
+  )
+}
+
+function FormLabel({
+  className,
+  ...props
+}: React.ComponentProps<typeof LabelPrimitive.Root>) {
+  const { error, formItemId } = useFormField()
+
+  return (
+    <Label
+      data-slot="form-label"
+      data-error={!!error}
+      className={cn("data-[error=true]:text-destructive", className)}
+      htmlFor={formItemId}
+      {...props}
+    />
+  )
+}
+
+function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
+  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()
+
+  return (
+    <Slot
+      data-slot="form-control"
+      id={formItemId}
+      aria-describedby={
+        !error
+          ? `${formDescriptionId}`
+          : `${formDescriptionId} ${formMessageId}`
+      }
+      aria-invalid={!!error}
+      {...props}
+    />
+  )
+}
+
+function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
+  const { formDescriptionId } = useFormField()
+
+  return (
+    <p
+      data-slot="form-description"
+      id={formDescriptionId}
+      className={cn("text-muted-foreground text-sm", className)}
+      {...props}
+    />
+  )
+}
+
+function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
+  const { error, formMessageId } = useFormField()
+  const body = error ? String(error?.message ?? "") : props.children
+
+  if (!body) {
+    return null
+  }
+
+  return (
+    <p
+      data-slot="form-message"
+      id={formMessageId}
+      className={cn("text-destructive text-sm", className)}
+      {...props}
+    >
+      {body}
+    </p>
+  )
+}
+
+export {
+  useFormField,
+  Form,
+  FormItem,
+  FormLabel,
+  FormControl,
+  FormDescription,
+  FormMessage,
+  FormField,
+}
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
+        ref={ref}
+        type={type}
+        data-slot='input'
+        className={cn(
+          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
+          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
+          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
+          className
+        )}
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
+"use client"
+
+import * as React from "react"
+import * as LabelPrimitive from "@radix-ui/react-label"
+
+import { cn } from "@/lib/utils"
+
+function Label({
+  className,
+  ...props
+}: React.ComponentProps<typeof LabelPrimitive.Root>) {
+  return (
+    <LabelPrimitive.Root
+      data-slot="label"
+      className={cn(
+        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+export { Label }
  ---
  File: src/components/ui/popover.tsx
  Status: added
  Additions: 46
  Deletions: 0
  Changes: 46
  
Patch:
@@ -0,0 +1,46 @@
+import * as React from "react"
+import * as PopoverPrimitive from "@radix-ui/react-popover"
+
+import { cn } from "@/lib/utils"
+
+function Popover({
+  ...props
+}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
+  return <PopoverPrimitive.Root data-slot="popover" {...props} />
+}
+
+function PopoverTrigger({
+  ...props
+}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
+  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
+}
+
+function PopoverContent({
+  className,
+  align = "center",
+  sideOffset = 4,
+  ...props
+}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
+  return (
+    <PopoverPrimitive.Portal>
+      <PopoverPrimitive.Content
+        data-slot="popover-content"
+        align={align}
+        sideOffset={sideOffset}
+        className={cn(
+          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
+          className
+        )}
+        {...props}
+      />
+    </PopoverPrimitive.Portal>
+  )
+}
+
+function PopoverAnchor({
+  ...props
+}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
+  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
+}
+
+export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
  ---
  File: src/components/ui/scroll-area.tsx
  Status: added
  Additions: 56
  Deletions: 0
  Changes: 56
  
Patch:
@@ -0,0 +1,56 @@
+import * as React from "react"
+import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
+
+import { cn } from "@/lib/utils"
+
+function ScrollArea({
+  className,
+  children,
+  ...props
+}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
+  return (
+    <ScrollAreaPrimitive.Root
+      data-slot="scroll-area"
+      className={cn("relative", className)}
+      {...props}
+    >
+      <ScrollAreaPrimitive.Viewport
+        data-slot="scroll-area-viewport"
+        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
+      >
+        {children}
+      </ScrollAreaPrimitive.Viewport>
+      <ScrollBar />
+      <ScrollAreaPrimitive.Corner />
+    </ScrollAreaPrimitive.Root>
+  )
+}
+
+function ScrollBar({
+  className,
+  orientation = "vertical",
+  ...props
+}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
+  return (
+    <ScrollAreaPrimitive.ScrollAreaScrollbar
+      data-slot="scroll-area-scrollbar"
+      orientation={orientation}
+      className={cn(
+        "flex touch-none p-px transition-colors select-none",
+        orientation === "vertical" &&
+          "h-full w-2.5 border-l border-l-transparent",
+        orientation === "horizontal" &&
+          "h-2.5 flex-col border-t border-t-transparent",
+        className
+      )}
+      {...props}
+    >
+      <ScrollAreaPrimitive.ScrollAreaThumb
+        data-slot="scroll-area-thumb"
+        className="bg-border relative flex-1 rounded-full"
+      />
+    </ScrollAreaPrimitive.ScrollAreaScrollbar>
+  )
+}
+
+export { ScrollArea, ScrollBar }
  ---
  File: src/components/ui/select.tsx
  Status: added
  Additions: 183
  Deletions: 0
  Changes: 183
  
Patch:
@@ -0,0 +1,183 @@
+import * as React from "react"
+import * as SelectPrimitive from "@radix-ui/react-select"
+import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
+
+import { cn } from "@/lib/utils"
+
+function Select({
+  ...props
+}: React.ComponentProps<typeof SelectPrimitive.Root>) {
+  return <SelectPrimitive.Root data-slot="select" {...props} />
+}
+
+function SelectGroup({
+  ...props
+}: React.ComponentProps<typeof SelectPrimitive.Group>) {
+  return <SelectPrimitive.Group data-slot="select-group" {...props} />
+}
+
+function SelectValue({
+  ...props
+}: React.ComponentProps<typeof SelectPrimitive.Value>) {
+  return <SelectPrimitive.Value data-slot="select-value" {...props} />
+}
+
+function SelectTrigger({
+  className,
+  size = "default",
+  children,
+  ...props
+}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
+  size?: "sm" | "default"
+}) {
+  return (
+    <SelectPrimitive.Trigger
+      data-slot="select-trigger"
+      data-size={size}
+      className={cn(
+        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
+        className
+      )}
+      {...props}
+    >
+      {children}
+      <SelectPrimitive.Icon asChild>
+        <ChevronDownIcon className="size-4 opacity-50" />
+      </SelectPrimitive.Icon>
+    </SelectPrimitive.Trigger>
+  )
+}
+
+function SelectContent({
+  className,
+  children,
+  position = "popper",
+  ...props
+}: React.ComponentProps<typeof SelectPrimitive.Content>) {
+  return (
+    <SelectPrimitive.Portal>
+      <SelectPrimitive.Content
+        data-slot="select-content"
+        className={cn(
+          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
+          position === "popper" &&
+            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
+          className
+        )}
+        position={position}
+        {...props}
+      >
+        <SelectScrollUpButton />
+        <SelectPrimitive.Viewport
+          className={cn(
+            "p-1",
+            position === "popper" &&
+              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
+          )}
+        >
+          {children}
+        </SelectPrimitive.Viewport>
+        <SelectScrollDownButton />
+      </SelectPrimitive.Content>
+    </SelectPrimitive.Portal>
+  )
+}
+
+function SelectLabel({
+  className,
+  ...props
+}: React.ComponentProps<typeof SelectPrimitive.Label>) {
+  return (
+    <SelectPrimitive.Label
+      data-slot="select-label"
+      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
+      {...props}
+    />
+  )
+}
+
+function SelectItem({
+  className,
+  children,
+  ...props
+}: React.ComponentProps<typeof SelectPrimitive.Item>) {
+  return (
+    <SelectPrimitive.Item
+      data-slot="select-item"
+      className={cn(
+        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
+        className
+      )}
+      {...props}
+    >
+      <span className="absolute right-2 flex size-3.5 items-center justify-center">
+        <SelectPrimitive.ItemIndicator>
+          <CheckIcon className="size-4" />
+        </SelectPrimitive.ItemIndicator>
+      </span>
+      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
+    </SelectPrimitive.Item>
+  )
+}
+
+function SelectSeparator({
+  className,
+  ...props
+}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
+  return (
+    <SelectPrimitive.Separator
+      data-slot="select-separator"
+      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
+      {...props}
+    />
+  )
+}
+
+function SelectScrollUpButton({
+  className,
+  ...props
+}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
+  return (
+    <SelectPrimitive.ScrollUpButton
+      data-slot="select-scroll-up-button"
+      className={cn(
+        "flex cursor-default items-center justify-center py-1",
+        className
+      )}
+      {...props}
+    >
+      <ChevronUpIcon className="size-4" />
+    </SelectPrimitive.ScrollUpButton>
+  )
+}
+
+function SelectScrollDownButton({
+  className,
+  ...props
+}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
+  return (
+    <SelectPrimitive.ScrollDownButton
+      data-slot="select-scroll-down-button"
+      className={cn(
+        "flex cursor-default items-center justify-center py-1",
+        className
+      )}
+      {...props}
+    >
+      <ChevronDownIcon className="size-4" />
+    </SelectPrimitive.ScrollDownButton>
+  )
+}
+
+export {
+  Select,
+  SelectContent,
+  SelectGroup,
+  SelectItem,
+  SelectLabel,
+  SelectScrollDownButton,
+  SelectScrollUpButton,
+  SelectSeparator,
+  SelectTrigger,
+  SelectValue,
+}
  ---
  File: src/components/ui/separator.tsx
  Status: added
  Additions: 26
  Deletions: 0
  Changes: 26
  
Patch:
@@ -0,0 +1,26 @@
+import * as React from "react"
+import * as SeparatorPrimitive from "@radix-ui/react-separator"
+
+import { cn } from "@/lib/utils"
+
+function Separator({
+  className,
+  orientation = "horizontal",
+  decorative = true,
+  ...props
+}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
+  return (
+    <SeparatorPrimitive.Root
+      data-slot="separator-root"
+      decorative={decorative}
+      orientation={orientation}
+      className={cn(
+        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+export { Separator }
  ---
  File: src/components/ui/switch.tsx
  Status: added
  Additions: 29
  Deletions: 0
  Changes: 29
  
Patch:
@@ -0,0 +1,29 @@
+import * as React from "react"
+import * as SwitchPrimitive from "@radix-ui/react-switch"
+
+import { cn } from "@/lib/utils"
+
+function Switch({
+  className,
+  ...props
+}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
+  return (
+    <SwitchPrimitive.Root
+      data-slot="switch"
+      className={cn(
+        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
+        className
+      )}
+      {...props}
+    >
+      <SwitchPrimitive.Thumb
+        data-slot="switch-thumb"
+        className={cn(
+          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
+        )}
+      />
+    </SwitchPrimitive.Root>
+  )
+}
+
+export { Switch }
  ---
  File: src/components/ui/table.tsx
  Status: added
  Additions: 111
  Deletions: 0
  Changes: 111
  
Patch:
@@ -0,0 +1,111 @@
+import * as React from 'react';
+
+import { cn } from '@/lib/utils';
+
+function Table({ className, ...props }: React.ComponentProps<'table'>) {
+  return (
+    <div data-slot='table-container' className='relative w-full'>
+      <table
+        data-slot='table'
+        className={cn('w-full caption-bottom text-sm', className)}
+        {...props}
+      />
+    </div>
+  );
+}
+
+function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
+  return (
+    <thead
+      data-slot='table-header'
+      className={cn('[&_tr]:border-b', className)}
+      {...props}
+    />
+  );
+}
+
+function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
+  return (
+    <tbody
+      data-slot='table-body'
+      className={cn('[&_tr:last-child]:border-0', className)}
+      {...props}
+    />
+  );
+}
+
+function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
+  return (
+    <tfoot
+      data-slot='table-footer'
+      className={cn(
+        'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
+        className
+      )}
+      {...props}
+    />
+  );
+}
+
+function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
+  return (
+    <tr
+      data-slot='table-row'
+      className={cn(
+        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
+        className
+      )}
+      {...props}
+    />
+  );
+}
+
+function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
+  return (
+    <th
+      data-slot='table-head'
+      className={cn(
+        'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
+        className
+      )}
+      {...props}
+    />
+  );
+}
+
+function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
+  return (
+    <td
+      data-slot='table-cell'
+      className={cn(
+        'p-2 align-middle whitespace-wrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
+        className
+      )}
+      {...props}
+    />
+  );
+}
+
+function TableCaption({
+  className,
+  ...props
+}: React.ComponentProps<'caption'>) {
+  return (
+    <caption
+      data-slot='table-caption'
+      className={cn('text-muted-foreground mt-4 text-sm', className)}
+      {...props}
+    />
+  );
+}
+
+export {
+  Table,
+  TableHeader,
+  TableBody,
+  TableFooter,
+  TableHead,
+  TableRow,
+  TableCell,
+  TableCaption,
+};
  ---
  File: src/components/ui/tabs.tsx
  Status: added
  Additions: 64
  Deletions: 0
  Changes: 64
  
Patch:
@@ -0,0 +1,64 @@
+import * as React from "react"
+import * as TabsPrimitive from "@radix-ui/react-tabs"
+
+import { cn } from "@/lib/utils"
+
+function Tabs({
+  className,
+  ...props
+}: React.ComponentProps<typeof TabsPrimitive.Root>) {
+  return (
+    <TabsPrimitive.Root
+      data-slot="tabs"
+      className={cn("flex flex-col gap-2", className)}
+      {...props}
+    />
+  )
+}
+
+function TabsList({
+  className,
+  ...props
+}: React.ComponentProps<typeof TabsPrimitive.List>) {
+  return (
+    <TabsPrimitive.List
+      data-slot="tabs-list"
+      className={cn(
+        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function TabsTrigger({
+  className,
+  ...props
+}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
+  return (
+    <TabsPrimitive.Trigger
+      data-slot="tabs-trigger"
+      className={cn(
+        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
+        className
+      )}
+      {...props}
+    />
+  )
+}
+
+function TabsContent({
+  className,
+  ...props
+}: React.ComponentProps<typeof TabsPrimitive.Content>) {
+  return (
+    <TabsPrimitive.Content
+      data-slot="tabs-content"
+      className={cn("flex-1 outline-none", className)}
+      {...props}
+    />
+  )
+}
+
+export { Tabs, TabsList, TabsTrigger, TabsContent }
  ---
  File: src/components/ui/tooltip.tsx
  Status: added
  Additions: 59
  Deletions: 0
  Changes: 59
  
Patch:
@@ -0,0 +1,59 @@
+import * as React from "react"
+import * as TooltipPrimitive from "@radix-ui/react-tooltip"
+
+import { cn } from "@/lib/utils"
+
+function TooltipProvider({
+  delayDuration = 0,
+  ...props
+}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
+  return (
+    <TooltipPrimitive.Provider
+      data-slot="tooltip-provider"
+      delayDuration={delayDuration}
+      {...props}
+    />
+  )
+}
+
+function Tooltip({
+  ...props
+}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
+  return (
+    <TooltipProvider>
+      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
+    </TooltipProvider>
+  )
+}
+
+function TooltipTrigger({
+  ...props
+}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
+  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
+}
+
+function TooltipContent({
+  className,
+  sideOffset = 0,
+  children,
+  ...props
+}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
+  return (
+    <TooltipPrimitive.Portal>
+      <TooltipPrimitive.Content
+        data-slot="tooltip-content"
+        sideOffset={sideOffset}
+        className={cn(
+          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
+          className
+        )}
+        {...props}
+      >
+        {children}
+        <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
+      </TooltipPrimitive.Content>
+    </TooltipPrimitive.Portal>
+  )
+}
+
+export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
  ---
  File: src/features/changes/components/change-desc.tsx
  Status: added
  Additions: 32
  Deletions: 0
  Changes: 32
  
Patch:
@@ -0,0 +1,32 @@
+import { Card } from '@/components/ui/card';
+import { Change } from '../types';
+import { Badge } from '@/components/ui/badge';
+
+interface ChangeTableProps extends React.ComponentProps<typeof Card> {
+  details: Change['detailed_changes'];
+  motivation: Change['impact'];
+  type: Change['type'];
+  public_explanation: Change['public_explanation'];
+}
+export const ChangeSummary = ({
+  details,
+  motivation,
+  type,
+  public_explanation,
+}: ChangeTableProps) => {
+  return (
+    <div className='flex flex-col gap-y-2'>
+      <Badge variant='outline'>{type.toUpperCase()}</Badge>
+      <h3 className='text-lg font-semibold text-gray-900'>What Changed</h3>
+      <ul className='list-disc list-inside text-sm text-gray-500'>
+        {details.map((detail) => (
+          <li key={detail}>{detail}</li>
+        ))}
+      </ul>
+      <h3 className='text-lg text-gray-900 font-semibold'>Why We Did It</h3>
+      <p className='text-sm text-gray-500'>{public_explanation}</p>
+      <h3 className='text-lg font-semibold text-gray-900'>Impact</h3>
+      <p className='text-sm text-gray-500'>{motivation}</p>
+    </div>
+  );
+};
  ---
  File: src/features/changes/data/data.tsx
  Status: added
  Additions: 42
  Deletions: 0
  Changes: 42
  
Patch:
@@ -0,0 +1,42 @@
+import {
+  IconArrowDown,
+  IconArrowRight,
+  IconArrowUp,
+} from '@tabler/icons-react';
+
+export const changeTypes = [
+  {
+    label: 'Feature',
+    value: 'feature',
+  },
+  {
+    label: 'Bug Fix',
+    value: 'bug fix',
+  },
+  {
+    label: 'Configuration',
+    value: 'configuration',
+  },
+  {
+    label: 'Deprecation',
+    value: 'deprecation',
+  },
+];
+
+export const statuses = [
+  {
+    label: 'Complete',
+    value: 'complete',
+    icon: IconArrowDown,
+  },
+  {
+    label: 'In Progress',
+    value: 'in progress',
+    icon: IconArrowRight,
+  },
+  {
+    label: 'Planned',
+    value: 'planned',
+    icon: IconArrowUp,
+  },
+];
  ---
  File: src/features/changes/data/schema.ts
  Status: added
  Additions: 44
  Deletions: 0
  Changes: 44
  
Patch:
@@ -0,0 +1,44 @@
+import { z } from 'zod';
+
+const changeTypeSchema = z.union([
+  z.literal('configuration'),
+  z.literal('dependency'),
+  z.literal('tooling'),
+  z.literal('breaking'),
+  z.literal('feature'),
+  z.literal('bug fix'),
+  z.literal('deprecation'),
+]);
+export type ChangeType = z.infer<typeof changeTypeSchema>;
+
+const changeStatusSchema = z.union([
+  z.literal('complete'),
+  z.literal('in progress'),
+  z.literal('planned'),
+]);
+export type ChangeStatus = z.infer<typeof changeStatusSchema>;
+
+const changeSchema = z.object({
+  id: z.string(),
+  type: changeTypeSchema,
+  title: z.string(),
+  status: changeStatusSchema,
+  detailed_changes: z.array(z.string()),
+  files: z.array(z.string()),
+  repos: z.array(z.string()),
+  impact: z.string(),
+  public_explanation: z.string(),
+  developer_explanation: z.string(),
+  contributors: z.array(z.string()),
+});
+export type Change = z.infer<typeof changeSchema>;
+
+const changelogSchema = z.object({
+  date: z.string(),
+  summary: z.string(),
+  version: z.string(),
+  changelog: z.array(changeSchema),
+});
+export type Changelog = z.infer<typeof changelogSchema>;
+
+export const changeListSchema = z.array(changeSchema);
  ---
  File: src/features/changes/index.tsx
  Status: added
  Additions: 46
  Deletions: 0
  Changes: 46
  
Patch:
@@ -0,0 +1,46 @@
+import { PropsWithChildren } from 'react';
+import {
+  Card,
+  CardHeader,
+  CardTitle,
+  CardDescription,
+} from '@/components/ui/card';
+import { ChangeSummary } from './components/change-desc';
+import { Change } from './data/schema';
+
+interface ChangesProps extends PropsWithChildren {
+  changelog: Change[];
+  date: string;
+}
+
+export default function Changes({ children, changelog, date }: ChangesProps) {
+  return (
+    <>
+      <div className='flex flex-col flex-start gap-y-4 p-4 outline-1 outline-gray-200 rounded-md'>
+        <h2 className='text-2xl font-bold tracking-tight text-left'>
+          Changes as of {new Date(date).toLocaleDateString()}
+        </h2>
+        {children}
+      </div>
+      <div className='flex flex-col flex-start gap-y-2 p-2 md:gap-y-4 md:p-4 outline-none text-left rounded-md'>
+        {changelog.map((change) => (
+          <Card key={change.id}>
+            <CardHeader>
+              <CardTitle className='text-xl font-semibold'>
+                {change.title}
+              </CardTitle>
+              <CardDescription>
+                <ChangeSummary
+                  details={change.detailed_changes}
+                  type={change.type}
+                  motivation={change.impact}
+                  public_explanation={change.public_explanation}
+                />
+              </CardDescription>
+            </CardHeader>
+          </Card>
+        ))}
+      </div>
+    </>
+  );
+}
  ---
  File: src/features/changes/types.ts
  Status: added
  Additions: 31
  Deletions: 0
  Changes: 31
  
Patch:
@@ -0,0 +1,31 @@
+export type ChangeType =
+  | 'configuration'
+  | 'dependency'
+  | 'tooling'
+  | 'breaking'
+  | 'feature'
+  | 'bug fix'
+  | 'deprecation';
+
+export type ChangeStatus = 'complete' | 'in progress' | 'planned';
+
+export interface Change {
+  id: string;
+  type: ChangeType;
+  title: string;
+  status: ChangeStatus;
+  detailed_changes: string[];
+  files: string[];
+  repos: string[];
+  impact: string;
+  public_explanation: string;
+  developer_explanation: string;
+  contributors: string[];
+}
+
+export interface Changelog {
+  date: string;
+  changelog: Change[];
+  summary: string;
+  version: string;
+}
  ---
  File: src/features/search/search-context.tsx
  Status: added
  Additions: 84
  Deletions: 0
  Changes: 84
  
Patch:
@@ -0,0 +1,84 @@
+import React, { createContext, useContext, useState, useEffect } from 'react';
+import type { VersionLog } from '@/types/changelog';
+
+interface SearchContextType {
+  data: VersionLog[];
+  filteredData: VersionLog[] | undefined;
+  isFiltered: boolean;
+  handleFilterChange: (value: string, type?: string) => void;
+}
+
+const SearchContext = createContext<SearchContextType | null>(null);
+
+interface SearchProviderProps {
+  children: React.ReactNode;
+  initialData: VersionLog[];
+}
+
+export function SearchProvider({ children, initialData }: SearchProviderProps) {
+  const [data, setData] = useState<VersionLog[]>(initialData);
+  const [filteredData, setFilteredData] = useState<VersionLog[]>();
+  const [isFiltered, setIsFiltered] = useState(false);
+
+  // Update data when initialData changes
+  useEffect(() => {
+    setData(initialData);
+  }, [initialData]);
+
+  const handleFilterChange = (value: string, type?: string) => {
+    if (value.length > 2 || type) {
+      setIsFiltered(true);
+      const newArray: VersionLog[] = data.map((version) => {
+        const newChangelog = version.changelog.filter((item) => {
+          // Filter by type if specified
+          if (type && type !== 'all' && item.type !== type) {
+            return false;
+          }
+          // Filter by search text if specified
+          if (value.length > 0) {
+            const searchableText = [
+              item.title,
+              item.type,
+              ...item.detailed_changes,
+              item.impact,
+              item.public_explanation,
+              item.developer_explanation,
+              ...item.contributors,
+            ]
+              .join(' ')
+              .toLowerCase();
+
+            return searchableText.includes(value.toLowerCase());
+          }
+          return true;
+        });
+        return { ...version, changelog: newChangelog };
+      });
+      setFilteredData(newArray);
+    } else {
+      setIsFiltered(false);
+      setFilteredData(undefined);
+    }
+  };
+
+  return (
+    <SearchContext.Provider
+      value={{
+        data,
+        filteredData,
+        isFiltered,
+        handleFilterChange,
+      }}
+    >
+      {children}
+    </SearchContext.Provider>
+  );
+}
+
+export const useSearch = () => {
+  const context = useContext(SearchContext);
+  if (!context) {
+    throw new Error('useSearch must be used within a SearchProvider');
+  }
+  return context;
+};
  ---
  File: src/features/search/search.tsx
  Status: added
  Additions: 9
  Deletions: 0
  Changes: 9
  
Patch:
@@ -0,0 +1,9 @@
+import { SearchForm } from './searchform';
+import { useSearch } from './search-context';
+
+export function SearchChanges() {
+  const { handleFilterChange } = useSearch();
+  return <SearchForm handleFilterChange={handleFilterChange} />;
+}
+
+export default SearchChanges;
  ---
  File: src/features/search/searchform.tsx
  Status: added
  Additions: 109
  Deletions: 0
  Changes: 109
  
Patch:
@@ -0,0 +1,109 @@
+import { useForm } from 'react-hook-form';
+import { z } from 'zod';
+import { zodResolver } from '@hookform/resolvers/zod';
+import {
+  Form,
+  FormControl,
+  FormField,
+  FormItem,
+  FormMessage,
+} from '@/components/ui/form';
+import {
+  Select,
+  SelectContent,
+  SelectItem,
+  SelectTrigger,
+  SelectValue,
+} from '@/components/ui/select';
+import { Input } from '@/components/ui/input';
+
+const formSchema = z.object({
+  search: z.string().optional(),
+  filter: z.string().optional(),
+});
+
+type SearchForm = z.infer<typeof formSchema>;
+
+interface SearchFormProps {
+  handleFilterChange: (value: string, type?: string) => void;
+}
+
+export function SearchForm({ handleFilterChange }: SearchFormProps) {
+  const form = useForm<SearchForm>({
+    resolver: zodResolver(formSchema),
+    defaultValues: {
+      search: '',
+      filter: 'all',
+    },
+  });
+
+  const onSubmit = (values: SearchForm) => {
+    handleFilterChange(values.search || '', values.filter);
+  };
+
+  return (
+    <Form {...form}>
+      <form
+        onSubmit={form.handleSubmit(onSubmit)}
+        className='space-y-2 md:space-y-4'
+      >
+        <div className='flex gap-2 sm:gap-4'>
+          <FormField
+            control={form.control}
+            name='search'
+            render={({ field }) => (
+              <FormItem className='flex-1'>
+                <FormControl>
+                  <Input
+                    placeholder='Search...'
+                    className='w-full min-w-20'
+                    {...field}
+                    onChange={(e) => {
+                      field.onChange(e);
+                      form.handleSubmit(onSubmit)();
+                    }}
+                    value={field.value}
+                  />
+                </FormControl>
+                <FormMessage />
+              </FormItem>
+            )}
+          />
+
+          <FormField
+            control={form.control}
+            name='filter'
+            render={({ field }) => (
+              <FormItem className='w-[200px]'>
+                <Select
+                  onValueChange={(value) => {
+                    field.onChange(value);
+                    form.handleSubmit(onSubmit)();
+                  }}
+                  value={field.value}
+                >
+                  <FormControl>
+                    <SelectTrigger>
+                      <SelectValue placeholder='Filter by type' />
+                    </SelectTrigger>
+                  </FormControl>
+                  <SelectContent>
+                    <SelectItem value='all'>All Types</SelectItem>
+                    <SelectItem value='feature'>Features</SelectItem>
+                    <SelectItem value='bug fix'>Bug Fixes</SelectItem>
+                    <SelectItem value='deprecation'>Deprecations</SelectItem>
+                    <SelectItem value='configuration'>Configuration</SelectItem>
+                    <SelectItem value='dependency'>Dependencies</SelectItem>
+                    <SelectItem value='tooling'>Tooling</SelectItem>
+                    <SelectItem value='breaking'>Breaking Changes</SelectItem>
+                  </SelectContent>
+                </Select>
+                <FormMessage />
+              </FormItem>
+            )}
+          />
+        </div>
+      </form>
+    </Form>
+  );
+}
  ---
  File: src/features/summary/index.tsx
  Status: added
  Additions: 23
  Deletions: 0
  Changes: 23
  
Patch:
@@ -0,0 +1,23 @@
+import {
+  Collapsible,
+  CollapsibleContent,
+  CollapsibleTrigger,
+} from '@/components/ui/collapsible';
+
+export default function Summary({
+  summary,
+  version,
+}: {
+  summary: string;
+  version: string;
+}) {
+  return (
+    <Collapsible className='flex flex-col self-start'>
+      <CollapsibleTrigger className='text-muted-foreground text-left'>
+        <span className='font-bold text-blue'>Read more</span> about version{' '}
+        {version}.
+      </CollapsibleTrigger>
+      <CollapsibleContent>{summary}</CollapsibleContent>
+    </Collapsible>
+  );
+}
  ---
  File: src/index.css
  Status: modified
  Additions: 139
  Deletions: 29
  Changes: 168
  
Patch:
@@ -1,3 +1,8 @@
+@import 'tailwindcss';
+@import 'tw-animate-css';
+
+@custom-variant dark (&:is(.dark *));
+
 :root {
   font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
   line-height: 1.5;
@@ -11,21 +16,52 @@
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
+  --radius: 0.625rem;
+  --background: oklch(1 0 0);
+  --foreground: oklch(0.141 0.005 285.823);
+  --card: oklch(1 0 0);
+  --card-foreground: oklch(0.141 0.005 285.823);
+  --popover: oklch(1 0 0);
+  --popover-foreground: oklch(0.141 0.005 285.823);
+  --primary: oklch(0.21 0.006 285.885);
+  --primary-foreground: oklch(0.985 0 0);
+  --secondary: oklch(0.967 0.001 286.375);
+  --secondary-foreground: oklch(0.21 0.006 285.885);
+  --muted: oklch(0.967 0.001 286.375);
+  --muted-foreground: oklch(0.552 0.016 285.938);
+  --accent: oklch(0.967 0.001 286.375);
+  --accent-foreground: oklch(0.21 0.006 285.885);
+  --destructive: oklch(0.577 0.245 27.325);
+  --border: oklch(0.92 0.004 286.32);
+  --input: oklch(0.92 0.004 286.32);
+  --ring: oklch(0.705 0.015 286.067);
+  --chart-1: oklch(0.646 0.222 41.116);
+  --chart-2: oklch(0.6 0.118 184.704);
+  --chart-3: oklch(0.398 0.07 227.392);
+  --chart-4: oklch(0.828 0.189 84.429);
+  --chart-5: oklch(0.769 0.188 70.08);
+  --sidebar: oklch(0.985 0 0);
+  --sidebar-foreground: oklch(0.141 0.005 285.823);
+  --sidebar-primary: oklch(0.21 0.006 285.885);
+  --sidebar-primary-foreground: oklch(0.985 0 0);
+  --sidebar-accent: oklch(0.967 0.001 286.375);
+  --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
+  --sidebar-border: oklch(0.92 0.004 286.32);
+  --sidebar-ring: oklch(0.705 0.015 286.067);
 }
 
 a {
   font-weight: 500;
-  color: #646cff;
   text-decoration: inherit;
-}
-a:hover {
-  color: #535bf2;
+  cursor: pointer;
 }
 
+button {
+  cursor: pointer;
+}
 body {
   margin: 0;
   display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
@@ -35,34 +71,108 @@ h1 {
   line-height: 1.1;
 }
 
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
+/* Add media query for small viewports */
+@media (max-width: 400px) {
+  :root {
+    font-size: 14px;
+  }
+
+  h1 {
+    font-size: 2.4em;
+  }
+
+  h2 {
+    font-size: 1.8em;
+  }
+
+  h3 {
+    font-size: 1.4em;
+  }
+
+  p,
+  span,
+  a {
+    font-size: 0.9em;
+  }
 }
-button:hover {
-  border-color: #646cff;
+
+@theme inline {
+  --radius-sm: calc(var(--radius) - 4px);
+  --radius-md: calc(var(--radius) - 2px);
+  --radius-lg: var(--radius);
+  --radius-xl: calc(var(--radius) + 4px);
+  --color-background: var(--background);
+  --color-foreground: var(--foreground);
+  --color-card: var(--card);
+  --color-card-foreground: var(--card-foreground);
+  --color-popover: var(--popover);
+  --color-popover-foreground: var(--popover-foreground);
+  --color-primary: var(--primary);
+  --color-primary-foreground: var(--primary-foreground);
+  --color-secondary: var(--secondary);
+  --color-secondary-foreground: var(--secondary-foreground);
+  --color-muted: var(--muted);
+  --color-muted-foreground: var(--muted-foreground);
+  --color-accent: var(--accent);
+  --color-accent-foreground: var(--accent-foreground);
+  --color-destructive: var(--destructive);
+  --color-border: var(--border);
+  --color-input: var(--input);
+  --color-ring: var(--ring);
+  --color-chart-1: var(--chart-1);
+  --color-chart-2: var(--chart-2);
+  --color-chart-3: var(--chart-3);
+  --color-chart-4: var(--chart-4);
+  --color-chart-5: var(--chart-5);
+  --color-sidebar: var(--sidebar);
+  --color-sidebar-foreground: var(--sidebar-foreground);
+  --color-sidebar-primary: var(--sidebar-primary);
+  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
+  --color-sidebar-accent: var(--sidebar-accent);
+  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
+  --color-sidebar-border: var(--sidebar-border);
+  --color-sidebar-ring: var(--sidebar-ring);
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+.dark {
+  --background: oklch(0.141 0.005 285.823);
+  --foreground: oklch(0.985 0 0);
+  --card: oklch(0.21 0.006 285.885);
+  --card-foreground: oklch(0.985 0 0);
+  --popover: oklch(0.21 0.006 285.885);
+  --popover-foreground: oklch(0.985 0 0);
+  --primary: oklch(0.92 0.004 286.32);
+  --primary-foreground: oklch(0.21 0.006 285.885);
+  --secondary: oklch(0.274 0.006 286.033);
+  --secondary-foreground: oklch(0.985 0 0);
+  --muted: oklch(0.274 0.006 286.033);
+  --muted-foreground: oklch(0.705 0.015 286.067);
+  --accent: oklch(0.274 0.006 286.033);
+  --accent-foreground: oklch(0.985 0 0);
+  --destructive: oklch(0.704 0.191 22.216);
+  --border: oklch(1 0 0 / 10%);
+  --input: oklch(1 0 0 / 15%);
+  --ring: oklch(0.552 0.016 285.938);
+  --chart-1: oklch(0.488 0.243 264.376);
+  --chart-2: oklch(0.696 0.17 162.48);
+  --chart-3: oklch(0.769 0.188 70.08);
+  --chart-4: oklch(0.627 0.265 303.9);
+  --chart-5: oklch(0.645 0.246 16.439);
+  --sidebar: oklch(0.21 0.006 285.885);
+  --sidebar-foreground: oklch(0.985 0 0);
+  --sidebar-primary: oklch(0.488 0.243 264.376);
+  --sidebar-primary-foreground: oklch(0.985 0 0);
+  --sidebar-accent: oklch(0.274 0.006 286.033);
+  --sidebar-accent-foreground: oklch(0.985 0 0);
+  --sidebar-border: oklch(1 0 0 / 10%);
+  --sidebar-ring: oklch(0.552 0.016 285.938);
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
+@layer base {
+  * {
+    @apply border-border outline-ring/50;
   }
-  button {
-    background-color: #f9f9f9;
+  body {
+    @apply bg-background text-foreground;
   }
 }
  ---
  File: src/lib/utils.ts
  Status: added
  Additions: 6
  Deletions: 0
  Changes: 6
  
Patch:
@@ -0,0 +1,6 @@
+import { clsx, type ClassValue } from "clsx"
+import { twMerge } from "tailwind-merge"
+
+export function cn(...inputs: ClassValue[]) {
+  return twMerge(clsx(inputs))
+}
  ---
  File: src/types/changelog.ts
  Status: added
  Additions: 38
  Deletions: 0
  Changes: 38
  
Patch:
@@ -0,0 +1,38 @@
+export type ChangeType =
+  | 'configuration'
+  | 'dependency'
+  | 'tooling'
+  | 'breaking'
+  | 'feature'
+  | 'bug fix'
+  | 'deprecation';
+
+export type ChangeStatus = 'complete' | 'in progress' | 'planned';
+
+export interface Change {
+  id: string;
+  type: ChangeType;
+  title: string;
+  status: ChangeStatus;
+  detailed_changes: string[];
+  files: string[];
+  repos: string[];
+  impact: string;
+  public_explanation: string;
+  developer_explanation: string;
+  contributors: string[];
+}
+
+export interface VersionLog {
+  date: string;
+  summary: string;
+  version: string;
+  changelog: Change[];
+}
+
+export type ChangelogResponse = {
+  date: string;
+  summary: string;
+  version: string;
+  changelog: Change[];
+};
  ---
  File: src/types/markdown.d.ts
  Status: added
  Additions: 4
  Deletions: 0
  Changes: 4
  
Patch:
@@ -0,0 +1,4 @@
+declare module '*.md' {
+  const content: string;
+  export default content;
+}
  ---
  File: tsconfig.app.json
  Status: modified
  Additions: 7
  Deletions: 0
  Changes: 7
  
Patch:
@@ -1,5 +1,6 @@
 {
   "compilerOptions": {
+    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
     "target": "ES2020",
     "useDefineForClassFields": true,
     "lib": ["ES2020", "DOM", "DOM.Iterable"],
@@ -14,6 +15,12 @@
     "noEmit": true,
     "jsx": "react-jsx",
 
+    /* Alias */
+    "baseUrl": ".",
+    "paths": {
+      "@/*": ["./src/*"]
+    },
+
     /* Linting */
     "strict": true,
     "noUnusedLocals": true,
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
  File: tsconfig.node.json
  Status: modified
  Additions: 1
  Deletions: 0
  Changes: 1
  
Patch:
@@ -1,5 +1,6 @@
 {
   "compilerOptions": {
+    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
     "target": "ES2022",
     "lib": ["ES2023"],
     "module": "ESNext",
  ---
  File: vite.config.ts
  Status: modified
  Additions: 15
  Deletions: 4
  Changes: 19
  
Patch:
@@ -1,7 +1,18 @@
-import { defineConfig } from 'vite'
-import react from '@vitejs/plugin-react'
+import { defineConfig } from 'vite';
+import react from '@vitejs/plugin-react';
+import tailwindcss from '@tailwindcss/vite';
+import path from 'path';
 
 // https://vitejs.dev/config/
 export default defineConfig({
-  plugins: [react()],
-})
+  plugins: [tailwindcss(), react()],
+  resolve: {
+    alias: {
+      '@': path.resolve(__dirname, './src'),
+      // fix loading all icon chunks in dev mode
+      // https://github.com/tabler/tabler-icons/issues/1233
+      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
+    },
+  },
+  assetsInclude: ['**/*.md'],
+});
  ---