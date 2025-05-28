# Change Logger

A modern web application for visualizing and managing changelogs, built with React, TypeScript, and Vite. This project includes both a web interface and CLI tools for generating and managing changelogs.

## Features

- 📊 Interactive changelog visualization
- 🔍 Search and filter changes by version, type, and content
- 📝 Detailed change summaries with collapsible sections
- 🛠️ CLI tools for automated changelog generation
- 🔌 API for programmatic changelog management

## Development Tools

This project was built using modern development tools and practices:

### IDE and Editor

- [Cursor](https://cursor.sh) - AI-powered code editor that enhances productivity with intelligent code completion and assistance
- [VS Code](https://code.visualstudio.com/) - Lightweight but powerful source code editor

### Frontend

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS

### Development Tools

- [ESLint](https://eslint.org/) - Static code analysis tool
- [Prettier](https://prettier.io/) - Code formatter
- [Git](https://git-scm.com/) - Version control system

### Package Management

- [npm](https://www.npmjs.com/) - Node package manager

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/greptile-logger.git
cd greptile-logger
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Using the Change Logger Packages

### Installation

To use the change logger packages in your project:

```bash
npm install change-logger-cli change-logger-api
```

### Configuration

1. Create a `.env` file in your project root:

```env
GITHUB_TOKEN=your_api_key
OPENAI_API_KEY=your_api_url
```

2. Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "change-logger": "node -r dotenv/config ./node_modules/change-logger-api/dist/index.js dotenv_config_path=.env",
    "generate-changelog": "node -r dotenv/config ./node_modules/change-logger-cli generateChangeLog dotenv_config_path=.env"
  }
}
```

### Usage

#### Generating Changelogs

1. Start the server. (Port can be specified in your .env file as PORT. Otherwise server defaults to 3000)

```bash
npm run change-logger
```

2. In another terminal, generate a changelog for your project:

```bash
npm run generate-changelog

```

3. To generate an analysis of your changes:

```bash
npx change-logger-cli analyze-changes

```

This will:

1. Analyze your git history
2. Generate a structured changelog
3. Save it in your project

#### Using the API

The `change-logger-api` package provides programmatic access to changelog functionality:

```typescript
import { ChangeLogger } from 'change-logger-api';

const logger = new ChangeLogger({
  apiKey: process.env.CHANGE_LOGGER_API_KEY,
  apiUrl: process.env.CHANGE_LOGGER_API_URL,
});

// Generate a changelog
await logger.generateChangelog({
  repo: 'your-repo',
  branch: 'main',
  since: 'v1.0.0',
});
```

## Development

### Building

To build the application:

```bash
npm run build
```

### Running Tests

```bash
npm run test
```

## Deployment

### Vercel Deployment

If you're deploying to Vercel and encounter the following error:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu
```

This is a known issue with npm and optional dependencies. To resolve this:

1. Add a `.npmrc` file to your project root with the following content:

```
platform=linux
arch=x64
libc=glibc
```

2. Update your `package.json` to include the following in your build settings:

```json
{
  "build": {
    "env": {
      "NODE_ENV": "production"
    }
  }
}
```

3. In your Vercel project settings:
   - Set the Node.js version to 18.x or higher
   - Add the following build command:
   ```bash
   npm install --platform=linux --arch=x64 && npm run build
   ```

These steps should resolve the Rollup binary compatibility issue during deployment.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
