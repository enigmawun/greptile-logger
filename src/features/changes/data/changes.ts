export interface Change {
  date: Date;
  id: string;
  version: string;
  type: 'feature' | 'configuration' | 'deprecation' | 'bug fix';
  title: string;
  status: 'complete' | 'in progress' | 'planned';
  detailed_changes: string[];
  motivation: string;
  files: string[];
  repos: string[];
  public_explanation: string;
  developer_explanation: string;
  contributors: string[];
}

export const changes: Change[] = [
  {
    id: 'e3ffd4fb-50c1-4080-9579-6b7cd49d4e8c',
    date: new Date('2024-01-01'),
    version: '2.0',
    type: 'feature',
    title: 'Initial CLI Integration for GitHub-Based Changelog Generation',
    status: 'complete',
    detailed_changes: [
      'Implemented `generateChangeLog` and `analyze-changes` commands using Commander.js',
      'Added utility functions for markdown generation, repo/branch introspection, and AI-prompt formatting',
      'Configured `CHANGELOG.md` and `CODE_DIFFS.md` output from GitHub commit diffs',
    ],
    motivation:
      'Automate changelog creation and provide better project visibility',
    files: [
      'packages/cli/src/index.ts',
      'packages/cli/src/commands/analyze-changes.ts',
      'packages/cli/src/utils/git-utils.ts',
      'packages/cli/src/utils/markdown.ts',
      'packages/cli/src/utils/analyze-changes.ts',
    ],
    repos: ['@change-logger/cli'],
    public_explanation:
      "We've launched a CLI to help you automatically generate changelogs from GitHub commits and branches.",
    developer_explanation:
      'The CLI compares the current branch to a stable branch, fetches commit diffs using Octokit, and generates Markdown changelogs and raw diffs. It includes subcommands and file-based prompts for AI change summaries.',
    contributors: ['@Avouchment'],
  },
  {
    id: '3ee64f28-4008-43b1-ae52-57d66438c7e2',
    date: new Date('2024-01-01'),
    version: '2.0',
    type: 'configuration',
    title: 'Added CLI Package and Dependency Setup',
    status: 'complete',
    detailed_changes: [
      'Added dependencies: Octokit, dotenv, commander',
      'Setup workspace link in root `package.json` and `package-lock.json`',
      'Created `tsconfig.base.json` and per-package `tsconfig.json`',
    ],
    motivation: 'Support build and runtime functionality for new CLI module',
    files: [
      'package.json',
      'package-lock.json',
      'packages/cli/package.json',
      'tsconfig.base.json',
      'packages/cli/tsconfig.json',
    ],
    repos: ['@change-logger/cli'],
    public_explanation:
      "We've laid the technical groundwork to support a CLI tool for GitHub integrations.",
    developer_explanation:
      'This configuration includes TypeScript support and sets up the CLI as a workspace package with linked dependencies and build tooling.',
    contributors: ['@Avouchment'],
  },
  {
    id: '3ecc31d3-0815-44f6-9efa-b2a8fae2268e',
    type: 'bug fix',
    date: new Date('2024-01-01'),
    version: '2.0',
    title: 'Improved CLI Error Handling and Token Testing',
    status: 'complete',
    detailed_changes: [
      'Added `test-token` command to validate GitHub authentication and access',
      'Improved console error messages for repo/branch failures',
    ],
    motivation:
      'Prevent silent errors and guide developers when GitHub access fails',
    files: ['packages/cli/src/index.ts'],
    repos: ['@change-logger/cli'],
    public_explanation:
      'The CLI now gives better feedback and includes a tool to test your GitHub token access.',
    developer_explanation:
      'We handle CLI errors with clear logs and exit codes. The new `test-token` command validates token scope and access to repos/orgs using Octokit.',
    contributors: ['@Avouchment'],
  },
  {
    id: 'e9aa1b54-e2f1-460e-ba11-44e49bb75ed5',
    date: new Date('2024-01-01'),
    version: '2.0',
    type: 'deprecation',
    title: 'Deprecated old CLI package link',
    status: 'complete',
    detailed_changes: [
      'Removed legacy `cli` package from `node_modules`',
      'Replaced with scoped `@change-logger/cli`',
    ],
    motivation: 'Ensure consistency and support modular publishing',
    files: ['package-lock.json'],
    repos: ['@change-logger/cli'],
    public_explanation:
      "We've renamed and reorganized our CLI package under a scoped name for better version control.",
    developer_explanation:
      'The old linked CLI directory was removed and replaced with a scoped package to support mono-repo publishing and dependency resolution.',
    contributors: ['@Avouchment'],
  },
  {
    id: 'f8a7b6c5-d4e3-4f2a-9b1c-8d7e6f5a4b3c',
    date: new Date('2024-02-15'),
    version: '2.1',
    type: 'feature',
    title: 'AI-Powered Change Summaries',
    status: 'in progress',
    detailed_changes: [
      'Integrating OpenAI API for automatic change descriptions',
      'Adding context-aware prompt engineering',
      'Implementing caching for API responses',
    ],
    motivation: 'Reduce manual effort in writing change descriptions',
    files: [
      'packages/cli/src/utils/ai.ts',
      'packages/cli/src/config/prompts.ts',
      'packages/cli/src/utils/cache.ts',
    ],
    repos: ['@change-logger/ai'],
    public_explanation:
      "We're working on AI-powered summaries to make changelogs more informative and consistent.",
    developer_explanation:
      "Using OpenAI's API to generate human-like summaries of code changes, with caching to optimize API usage.",
    contributors: ['@SarahDev', '@AIConnoisseur'],
  },
  {
    id: 'a1b2c3d4-e5f6-4a3b-8c7d-9e0f1a2b3c4d',
    date: new Date('2024-03-01'),
    version: '2.2',
    type: 'bug fix',
    title: 'Fix GitHub API Rate Limiting Issues',
    status: 'in progress',
    detailed_changes: [
      'Implementing exponential backoff for rate limits',
      'Adding rate limit monitoring dashboard',
      'Improving error handling for API failures',
    ],
    motivation: 'Handle GitHub API rate limits more gracefully',
    files: [
      'packages/cli/src/utils/github.ts',
      'packages/cli/src/components/rate-limit.tsx',
      'packages/cli/src/utils/retry.ts',
    ],
    repos: ['@change-logger/cli', '@change-logger/web'],
    public_explanation:
      "We're improving how the CLI handles GitHub API limits to ensure more reliable operation.",
    developer_explanation:
      'Adding sophisticated retry logic and monitoring to handle GitHub API rate limits more effectively.',
    contributors: ['@GitHubExpert', '@RateLimitMaster'],
  },
  {
    id: 'b2c3d4e5-f6a7-5b4c-9d8e-0f1a2b3c4d5e',
    date: new Date('2024-04-01'),
    version: '3.0',
    type: 'feature',
    title: 'Multi-Repository Support',
    status: 'planned',
    detailed_changes: [
      'Designing repository group management',
      'Planning cross-repo change tracking',
      'Architecting unified changelog generation',
    ],
    motivation: 'Support organizations with multiple repositories',
    files: [
      'packages/cli/src/commands/group.ts',
      'packages/cli/src/utils/repo-group.ts',
      'packages/cli/src/config/groups.ts',
    ],
    repos: ['@change-logger/core', '@change-logger/cli'],
    public_explanation:
      "We're planning to add support for managing changes across multiple repositories.",
    developer_explanation:
      'Designing a system to track and manage changes across multiple repositories with unified changelog generation.',
    contributors: ['@Architect', '@MultiRepoGuru'],
  },
  {
    id: 'c3d4e5f6-a7b8-6c5d-0e1f-2a3b4c5d6e7f',
    date: new Date('2024-04-15'),
    version: '3.0',
    type: 'configuration',
    title: 'Docker Container Support',
    status: 'planned',
    detailed_changes: [
      'Planning Dockerfile structure',
      'Designing volume mappings',
      'Configuring build pipeline',
    ],
    motivation: 'Make the tool more accessible through containerization',
    files: ['Dockerfile', 'docker-compose.yml', 'scripts/docker-build.sh'],
    repos: ['@change-logger/docker'],
    public_explanation:
      "We're planning to add Docker support for easier deployment and usage.",
    developer_explanation:
      'Creating Docker containers to simplify deployment and ensure consistent environments across different systems.',
    contributors: ['@DockerMaster', '@ContainerGuru'],
  },
  {
    id: 'd4e5f6a7-b8c9-7d6e-1f2a-3b4c5d6e7f8a',
    date: new Date('2024-02-28'),
    version: '2.1',
    type: 'deprecation',
    title: 'Deprecate Legacy API Endpoints',
    status: 'in progress',
    detailed_changes: [
      'Adding deprecation warnings to old endpoints',
      'Creating migration guides',
      'Implementing graceful fallbacks',
    ],
    motivation: 'Prepare for API v2 release',
    files: [
      'packages/api/src/legacy.ts',
      'docs/migration.md',
      'packages/api/src/middleware/deprecation.ts',
    ],
    repos: ['@change-logger/api'],
    public_explanation:
      "We're gradually phasing out some older API endpoints in preparation for our v2 release.",
    developer_explanation:
      'Adding deprecation notices and migration paths for legacy API endpoints to ensure smooth transition to v2.',
    contributors: ['@APIMaster', '@LegacyExpert'],
  },
];
