# Code Differences between main and tailwind

## Summary

- Total files changed: 27
- Total additions: 5017
- Total deletions: 132

## File Changes

File: CHANGELOG.md
Status: added
Additions: 26
Deletions: 0
Changes: 26

Patch:
@@ -0,0 +1,26 @@
+# Changelog

- +## Changes since last merged PR (#0)
- +- Last Merged PR: #0 (2d7716b)
  +- Current Branch: feature (4d962ef)
- +### Other Changes
- +- cli updates (8b9a913)
  +- more error handling (4d962ef)
- +## Detailed Commit List
- +### cli updates
- +- **Author:** Avouchment
  +- **Date:** 5/17/2025, 3:54:56 PM
  +- **Commit:** [8b9a913](https://github.com/enigmawun/change-logger/commit/8b9a913a73121dde29ba1f30b1c24900be6fc354)
- +### more error handling
- +- **Author:** Avouchment
  +- **Date:** 5/17/2025, 4:17:23 PM
  +- **Commit:** [4d962ef](https://github.com/enigmawun/change-logger/commit/4d962ef65fd3ea063c3078f7b956bbab63c46015)
- ***
  File: CHANGE_ANALYSIS.md
  Status: added
  Additions: 1336
  Deletions: 0
  Changes: 1336

Patch:
@@ -0,0 +1,1336 @@
+# Change Analysis Report

- +## Overview
  +This report provides an analysis of the code changes between versions.
- +## AI Analysis +`
+[AI Analysis will be inserted here]
+`
- +## Original Changes
  +For reference, here are the original code changes:
- +# Code Differences between main and feature
- +## Summary
  +- Total files changed: 14
  +- Total additions: 947
  +- Total deletions: 44
- +## File Changes
-
- File: README.md
- Status: modified
- Additions: 100
- Deletions: 0
- Changes: 100
- +Patch:
  +@@ -170,3 +170,103 @@ This project uses:
- ## License
-
- [Your chosen license]
  ++
  ++# Change Logger CLI
  ++
  ++A CLI tool for generating changelogs by comparing commits between branches in your GitHub repository.
  ++
  ++## Installation
  ++
  ++`bash
++npm install -g change-logger
++`
  ++
  ++## Configuration
  ++
  ++1. Set up your GitHub token:
  ++
  ++`bash
++export GITHUB_TOKEN=your_github_token
++`
  ++
  ++2. (Optional) Create a config file at `~/.change-logger.json`:
  ++
  ++`json
++{
++  "defaultRepo": "owner/repo",
++  "githubToken": "your_github_token",
++  "outputPath": "CHANGELOG.md"
++}
++`
  ++
  ++## Usage
  ++
  ++### Generate Changelog
  ++
  ++`bash
++change-logger generateChangeLog [options]
++`
  ++
  ++Options:
  ++
  ++- `-r, --repo <repo>`: GitHub repository (owner/repo)
  ++- `-b, --base <branch>`: Base branch to compare against (default: 'main')
  ++- `-o, --output <file>`: Output file path (default: 'CHANGELOG.md')
  ++- `-s, --stable <branch>`: Stable branch to compare against (default: 'main')
  ++
  ++Example:
  ++
  ++`bash
++change-logger generateChangeLog -r octocat/Hello-World -b feature-branch -s main
++`
  ++
  ++### Set Up Git Hooks
  ++
  ++To automatically generate changelogs on commit:
  ++
  ++`bash
++change-logger setup-hooks
++`
  ++
  ++## Output Format
  ++
  ++The generated changelog includes:
  ++
  ++- Comparison between stable and current branches
  ++- Categorized changes (breaking, features, fixes, other)
  ++- Detailed commit information
  ++- Links to GitHub commits
  ++
  ++Example output:
  ++
  ++`markdown
++# Changelog
++
++## Changes between main and feature-branch
++
++- Stable Branch: main (a1b2c3d)
++- Current Branch: feature-branch (e4f5g6h)
++
++### New Features
++
++- Added new authentication system (a1b2c3d)
++
++### Bug Fixes
++
++- Fixed login page crash (e4f5g6h)
++
++## Detailed Commit List
++
++...
++`
  ++
  ++## Requirements
  ++
  ++- Node.js 14+
  ++- GitHub repository
  ++- GitHub personal access token
  ++
  ++## License
  ++
  ++MIT
  ++TESTING SOME CHANGES
- ***
- File: package-lock.json
- Status: modified
- Additions: 314
- Deletions: 8
- Changes: 322
- +Patch:
  +@@ -10,6 +10,7 @@
-         "packages/*"
-       ],
-       "devDependencies": {
  ++ "@change-logger/cli": "workspace:\*",
-         "@types/node": "^22.15.18",
-         "prettier": "^3.5.3",
-         "turbo": "^2.5.3",
  +@@ -68,6 +69,10 @@
-         "node": ">=6.9.0"
-       }
-     },
  ++ "node_modules/@change-logger/cli": {
  ++ "resolved": "packages/cli",
  ++ "link": true
  ++ },
-     "node_modules/@cspotcode/source-map-support": {
-       "version": "0.8.1",
-       "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
  +@@ -946,6 +951,177 @@
-         "node": ">= 8"
-       }
-     },
  ++ "node_modules/@octokit/auth-token": {
  ++ "version": "3.0.4",
  ++ "resolved": "https://registry.npmjs.org/@octokit/auth-token/-/auth-token-3.0.4.tgz",
  ++ "integrity": "sha512-TWFX7cZF2LXoCvdmJWY7XVPi74aSY0+FfBZNSXEXFkMpjcqsQwDSYVv5FhRFaI0V1ECnwbz4j59T/G+rXNWaIQ==",
  ++ "license": "MIT",
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/core": {
  ++ "version": "4.2.4",
  ++ "resolved": "https://registry.npmjs.org/@octokit/core/-/core-4.2.4.tgz",
  ++ "integrity": "sha512-rYKilwgzQ7/imScn3M9/pFfUf4I1AZEH3KhyJmtPdE2zfaXAn2mFfUy4FbKewzc2We5y/LlKLj36fWJLKC2SIQ==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/auth-token": "^3.0.0",
  ++ "@octokit/graphql": "^5.0.0",
  ++ "@octokit/request": "^6.0.0",
  ++ "@octokit/request-error": "^3.0.0",
  ++ "@octokit/types": "^9.0.0",
  ++ "before-after-hook": "^2.2.0",
  ++ "universal-user-agent": "^6.0.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/endpoint": {
  ++ "version": "7.0.6",
  ++ "resolved": "https://registry.npmjs.org/@octokit/endpoint/-/endpoint-7.0.6.tgz",
  ++ "integrity": "sha512-5L4fseVRUsDFGR00tMWD/Trdeeihn999rTMGRMC1G/Ldi1uWlWJzI98H4Iak5DB/RVvQuyMYKqSK/R6mbSOQyg==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/types": "^9.0.0",
  ++ "is-plain-object": "^5.0.0",
  ++ "universal-user-agent": "^6.0.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/graphql": {
  ++ "version": "5.0.6",
  ++ "resolved": "https://registry.npmjs.org/@octokit/graphql/-/graphql-5.0.6.tgz",
  ++ "integrity": "sha512-Fxyxdy/JH0MnIB5h+UQ3yCoh1FG4kWXfFKkpWqjZHw/p+Kc8Y44Hu/kCgNBT6nU1shNumEchmW/sUO1JuQnPcw==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/request": "^6.0.0",
  ++ "@octokit/types": "^9.0.0",
  ++ "universal-user-agent": "^6.0.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/openapi-types": {
  ++ "version": "18.1.1",
  ++ "resolved": "https://registry.npmjs.org/@octokit/openapi-types/-/openapi-types-18.1.1.tgz",
  ++ "integrity": "sha512-VRaeH8nCDtF5aXWnjPuEMIYf1itK/s3JYyJcWFJT8X9pSNnBtriDf7wlEWsGuhPLl4QIH4xM8fqTXDwJ3Mu6sw==",
  ++ "license": "MIT"
  ++ },
  ++ "node_modules/@octokit/plugin-paginate-rest": {
  ++ "version": "6.1.2",
  ++ "resolved": "https://registry.npmjs.org/@octokit/plugin-paginate-rest/-/plugin-paginate-rest-6.1.2.tgz",
  ++ "integrity": "sha512-qhrmtQeHU/IivxucOV1bbI/xZyC/iOBhclokv7Sut5vnejAIAEXVcGQeRpQlU39E0WwK9lNvJHphHri/DB6lbQ==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/tsconfig": "^1.0.2",
  ++ "@octokit/types": "^9.2.3"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ },
  ++ "peerDependencies": {
  ++ "@octokit/core": ">=4"
  ++ }
  ++ },
  ++ "node_modules/@octokit/plugin-request-log": {
  ++ "version": "1.0.4",
  ++ "resolved": "https://registry.npmjs.org/@octokit/plugin-request-log/-/plugin-request-log-1.0.4.tgz",
  ++ "integrity": "sha512-mLUsMkgP7K/cnFEw07kWqXGF5LKrOkD+lhCrKvPHXWDywAwuDUeDwWBpc69XK3pNX0uKiVt8g5z96PJ6z9xCFA==",
  ++ "license": "MIT",
  ++ "peerDependencies": {
  ++ "@octokit/core": ">=3"
  ++ }
  ++ },
  ++ "node_modules/@octokit/plugin-rest-endpoint-methods": {
  ++ "version": "7.2.3",
  ++ "resolved": "https://registry.npmjs.org/@octokit/plugin-rest-endpoint-methods/-/plugin-rest-endpoint-methods-7.2.3.tgz",
  ++ "integrity": "sha512-I5Gml6kTAkzVlN7KCtjOM+Ruwe/rQppp0QU372K1GP7kNOYEKe8Xn5BW4sE62JAHdwpq95OQK/qGNyKQMUzVgA==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/types": "^10.0.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ },
  ++ "peerDependencies": {
  ++ "@octokit/core": ">=3"
  ++ }
  ++ },
  ++ "node_modules/@octokit/plugin-rest-endpoint-methods/node_modules/@octokit/types": {
  ++ "version": "10.0.0",
  ++ "resolved": "https://registry.npmjs.org/@octokit/types/-/types-10.0.0.tgz",
  ++ "integrity": "sha512-Vm8IddVmhCgU1fxC1eyinpwqzXPEYu0NrYzD3YZjlGjyftdLBTeqNblRC0jmJmgxbJIsQlyogVeGnrNaaMVzIg==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/openapi-types": "^18.0.0"
  ++ }
  ++ },
  ++ "node_modules/@octokit/request": {
  ++ "version": "6.2.8",
  ++ "resolved": "https://registry.npmjs.org/@octokit/request/-/request-6.2.8.tgz",
  ++ "integrity": "sha512-ow4+pkVQ+6XVVsekSYBzJC0VTVvh/FCTUUgTsboGq+DTeWdyIFV8WSCdo0RIxk6wSkBTHqIK1mYuY7nOBXOchw==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/endpoint": "^7.0.0",
  ++ "@octokit/request-error": "^3.0.0",
  ++ "@octokit/types": "^9.0.0",
  ++ "is-plain-object": "^5.0.0",
  ++ "node-fetch": "^2.6.7",
  ++ "universal-user-agent": "^6.0.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/request-error": {
  ++ "version": "3.0.3",
  ++ "resolved": "https://registry.npmjs.org/@octokit/request-error/-/request-error-3.0.3.tgz",
  ++ "integrity": "sha512-crqw3V5Iy2uOU5Np+8M/YexTlT8zxCfI+qu+LxUB7SZpje4Qmx3mub5DfEKSO8Ylyk0aogi6TYdf6kxzh2BguQ==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/types": "^9.0.0",
  ++ "deprecation": "^2.0.0",
  ++ "once": "^1.4.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/rest": {
  ++ "version": "19.0.13",
  ++ "resolved": "https://registry.npmjs.org/@octokit/rest/-/rest-19.0.13.tgz",
  ++ "integrity": "sha512-/EzVox5V9gYGdbAI+ovYj3nXQT1TtTHRT+0eZPcuC05UFSWO3mdO9UY1C0i2eLF9Un1ONJkAk+IEtYGAC+TahA==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/core": "^4.2.1",
  ++ "@octokit/plugin-paginate-rest": "^6.1.2",
  ++ "@octokit/plugin-request-log": "^1.0.4",
  ++ "@octokit/plugin-rest-endpoint-methods": "^7.1.2"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/tsconfig": {
  ++ "version": "1.0.2",
  ++ "resolved": "https://registry.npmjs.org/@octokit/tsconfig/-/tsconfig-1.0.2.tgz",
  ++ "integrity": "sha512-I0vDR0rdtP8p2lGMzvsJzbhdOWy405HcGovrspJ8RRibHnyRgggUSNO5AIox5LmqiwmatHKYsvj6VGFHkqS7lA==",
  ++ "license": "MIT"
  ++ },
  ++ "node_modules/@octokit/types": {
  ++ "version": "9.3.2",
  ++ "resolved": "https://registry.npmjs.org/@octokit/types/-/types-9.3.2.tgz",
  ++ "integrity": "sha512-D4iHGTdAnEEVsB8fl95m1hiz7D5YiRdQ9b/OEb3BYRVwbLsGHcRVPz+u+BgRLNk0Q0/4iZCBqDN96j2XNxfXrA==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/openapi-types": "^18.0.0"
  ++ }
  ++ },
-     "node_modules/@repo/eslint-config": {
-       "resolved": "packages/eslint-config",
-       "link": true
  +@@ -1740,6 +1916,12 @@
-         "node": ">=10.0.0"
-       }
-     },
  ++ "node_modules/before-after-hook": {
  ++ "version": "2.2.3",
  ++ "resolved": "https://registry.npmjs.org/before-after-hook/-/before-after-hook-2.2.3.tgz",
  ++ "integrity": "sha512-NzUnlZexiaH/46WDhANlyR2bXRopNg4F/zuSA3OpZnllCUgRaOF2znDioDWrmbNVsuZk6l9pMquQB38cfBZwkQ==",
  ++ "license": "Apache-2.0"
  ++ },
-     "node_modules/bl": {
-       "version": "4.1.0",
-       "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
  +@@ -1963,10 +2145,6 @@
-         "node": ">=6"
-       }
-     },
  +- "node_modules/cli": {
  +- "resolved": "packages/cli",
  +- "link": true
  +- },
-     "node_modules/cli-cursor": {
-       "version": "3.1.0",
-       "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
  +@@ -2316,6 +2494,12 @@
-         "node": ">=8"
-       }
-     },
  ++ "node_modules/deprecation": {
  ++ "version": "2.3.1",
  ++ "resolved": "https://registry.npmjs.org/deprecation/-/deprecation-2.3.1.tgz",
  ++ "integrity": "sha512-xmHIy4F3scKVwMsQ4WnVaS8bHOx0DmVwRywosKhaILI0ywMDWPtBSku2HNxRvF7jtwDRsoEwYQSfbxj8b7RlJQ==",
  ++ "license": "ISC"
  ++ },
-     "node_modules/detect-libc": {
-       "version": "2.0.4",
-       "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.4.tgz",
  +@@ -2380,7 +2564,6 @@
-       "version": "16.0.3",
-       "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.0.3.tgz",
-       "integrity": "sha512-7GO6HghkA5fYG9TYnNxi14/7K9f5occMlp3zXAuSxn7CKCxt9xbNWG7yF8hTCSUchlfWSe3uLmlPfigevRItzQ==",
  +- "dev": true,
-       "license": "BSD-2-Clause",
-       "engines": {
-         "node": ">=12"
  +@@ -4093,6 +4276,15 @@
-         "node": ">=8"
-       }
-     },
  ++ "node_modules/is-plain-object": {
  ++ "version": "5.0.0",
  ++ "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-5.0.0.tgz",
  ++ "integrity": "sha512-VRSzKkbMm5jMDoKLbltAkFQ5Qr7VDiTFGXxYFXXowVj387GeGNOCsOH6Msy00SGZ3Fp84b1Naa1psqgcCIEP5Q==",
  ++ "license": "MIT",
  ++ "engines": {
  ++ "node": ">=0.10.0"
  ++ }
  ++ },
-     "node_modules/is-regex": {
-       "version": "1.2.1",
-       "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
  +@@ -4806,6 +4998,26 @@
-         "lower-case": "^1.1.1"
-       }
-     },
  ++ "node_modules/node-fetch": {
  ++ "version": "2.7.0",
  ++ "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz",
  ++ "integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "whatwg-url": "^5.0.0"
  ++ },
  ++ "engines": {
  ++ "node": "4.x || >=6.0.0"
  ++ },
  ++ "peerDependencies": {
  ++ "encoding": "^0.1.0"
  ++ },
  ++ "peerDependenciesMeta": {
  ++ "encoding": {
  ++ "optional": true
  ++ }
  ++ }
  ++ },
-     "node_modules/node-plop": {
-       "version": "0.26.3",
-       "resolved": "https://registry.npmjs.org/node-plop/-/node-plop-0.26.3.tgz",
  +@@ -5020,7 +5232,6 @@
-       "version": "1.4.0",
-       "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
-       "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
  +- "dev": true,
-       "license": "ISC",
-       "dependencies": {
-         "wrappy": "1"
  +@@ -6407,6 +6618,12 @@
-         "node": ">=8.0"
-       }
-     },
  ++ "node_modules/tr46": {
  ++ "version": "0.0.3",
  ++ "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
  ++ "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
  ++ "license": "MIT"
  ++ },
-     "node_modules/ts-api-utils": {
-       "version": "2.1.0",
-       "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.1.0.tgz",
  +@@ -6753,6 +6970,12 @@
-       "dev": true,
-       "license": "MIT"
-     },
  ++ "node_modules/universal-user-agent": {
  ++ "version": "6.0.1",
  ++ "resolved": "https://registry.npmjs.org/universal-user-agent/-/universal-user-agent-6.0.1.tgz",
  ++ "integrity": "sha512-yCzhz6FN2wU1NiiQRogkTQszlQSlpWaw8SvVegAc+bDxbzHgh1vX8uIe8OYyMH6DwH+sdTJsgMl36+mSMdRJIQ==",
  ++ "license": "ISC"
  ++ },
-     "node_modules/universalify": {
-       "version": "2.0.1",
-       "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
  +@@ -6839,6 +7062,22 @@
-       "resolved": "apps/web",
-       "link": true
-     },
  ++ "node_modules/webidl-conversions": {
  ++ "version": "3.0.1",
  ++ "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
  ++ "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
  ++ "license": "BSD-2-Clause"
  ++ },
  ++ "node_modules/whatwg-url": {
  ++ "version": "5.0.0",
  ++ "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
  ++ "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "tr46": "~0.0.3",
  ++ "webidl-conversions": "^3.0.0"
  ++ }
  ++ },
-     "node_modules/which": {
-       "version": "2.0.2",
-       "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
  +@@ -6980,7 +7219,6 @@
-       "version": "1.0.2",
-       "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
-       "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
  +- "dev": true,
-       "license": "ISC"
-     },
-     "node_modules/yn": {
  +@@ -7007,8 +7245,76 @@
-       }
-     },
-     "packages/cli": {
  ++ "name": "@change-logger/cli",
-       "version": "1.0.0",
  +- "license": "ISC"
  ++ "license": "ISC",
  ++ "dependencies": {
  ++ "@octokit/rest": "^19.0.0",
  ++ "commander": "^9.0.0",
  ++ "dotenv": "^16.0.0"
  ++ },
  ++ "devDependencies": {
  ++ "@octokit/types": "^14.0.0",
  ++ "@types/node": "^18.0.0",
  ++ "typescript": "^4.9.0"
  ++ }
  ++ },
  ++ "packages/cli/node_modules/@octokit/openapi-types": {
  ++ "version": "25.0.0",
  ++ "resolved": "https://registry.npmjs.org/@octokit/openapi-types/-/openapi-types-25.0.0.tgz",
  ++ "integrity": "sha512-FZvktFu7HfOIJf2BScLKIEYjDsw6RKc7rBJCdvCTfKsVnx2GEB/Nbzjr29DUdb7vQhlzS/j8qDzdditP0OC6aw==",
  ++ "dev": true,
  ++ "license": "MIT"
  ++ },
  ++ "packages/cli/node_modules/@octokit/types": {
  ++ "version": "14.0.0",
  ++ "resolved": "https://registry.npmjs.org/@octokit/types/-/types-14.0.0.tgz",
  ++ "integrity": "sha512-VVmZP0lEhbo2O1pdq63gZFiGCKkm8PPp8AUOijlwPO6hojEVjspA0MWKP7E4hbvGxzFKNqKr6p0IYtOH/Wf/zA==",
  ++ "dev": true,
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/openapi-types": "^25.0.0"
  ++ }
  ++ },
  ++ "packages/cli/node_modules/@types/node": {
  ++ "version": "18.19.100",
  ++ "resolved": "https://registry.npmjs.org/@types/node/-/node-18.19.100.tgz",
  ++ "integrity": "sha512-ojmMP8SZBKprc3qGrGk8Ujpo80AXkrP7G2tOT4VWr5jlr5DHjsJF+emXJz+Wm0glmy4Js62oKMdZZ6B9Y+tEcA==",
  ++ "dev": true,
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "undici-types": "~5.26.4"
  ++ }
  ++ },
  ++ "packages/cli/node_modules/commander": {
  ++ "version": "9.5.0",
  ++ "resolved": "https://registry.npmjs.org/commander/-/commander-9.5.0.tgz",
  ++ "integrity": "sha512-KRs7WVDKg86PWiuAqhDrAQnTXZKraVcCc6vFdL14qrZ/DcWwuRo7VoiYXalXO7S5GKpqYiVEwCbgFDfxNHKJBQ==",
  ++ "license": "MIT",
  ++ "engines": {
  ++ "node": "^12.20.0 || >=14"
  ++ }
  ++ },
  ++ "packages/cli/node_modules/typescript": {
  ++ "version": "4.9.5",
  ++ "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.9.5.tgz",
  ++ "integrity": "sha512-1FXk9E2Hm+QzZQ7z+McJiHL4NW1F2EzMu9Nq9i3zAaGqibafqYwCVU6WyWAuyQRRzOlxou8xZSyXLEN8oKj24g==",
  ++ "dev": true,
  ++ "license": "Apache-2.0",
  ++ "bin": {
  ++ "tsc": "bin/tsc",
  ++ "tsserver": "bin/tsserver"
  ++ },
  ++ "engines": {
  ++ "node": ">=4.2.0"
  ++ }
  ++ },
  ++ "packages/cli/node_modules/undici-types": {
  ++ "version": "5.26.5",
  ++ "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
  ++ "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
  ++ "dev": true,
  ++ "license": "MIT"
-     },
-     "packages/eslint-config": {
-       "name": "@repo/eslint-config",
- ***
- File: package.json
- Status: modified
- Additions: 3
- Deletions: 1
- Changes: 4
- +Patch:
  +@@ -6,9 +6,11 @@
-     "dev": "turbo run dev",
-     "lint": "turbo run lint",
-     "format": "prettier --write \"**/*.{ts,tsx,md}\"",
  +- "check-types": "turbo run check-types"
  ++ "check-types": "turbo run check-types",
  ++ "changelog": "node packages/cli/dist/index.js"
- },
- "devDependencies": {
  ++ "@change-logger/cli": "workspace:\*",
-     "@types/node": "^22.15.18",
-     "prettier": "^3.5.3",
-     "turbo": "^2.5.3",
- ***
- File: packages/cli/package.json
- Status: modified
- Additions: 16
- Deletions: 3
- Changes: 19
- +Patch:
  +@@ -1,12 +1,25 @@
- {
  +- "name": "cli",
  ++ "name": "@change-logger/cli",
- "version": "1.0.0",
  +- "main": "index.js",
  ++ "main": "dist/index.js",
  ++ "type": "commonjs",
- "scripts": {
  ++ "build": "tsc && node -e \"require('fs').writeFileSync('dist/index.js', '#!/usr/bin/env node\\n' + require('fs').readFileSync('dist/index.js', 'utf8'))\"",
  ++ "dev": "tsc -w",
-     "test": "echo \"Error: no test specified\" && exit 1"
- },
- "keywords": [],
- "author": "",
- "license": "ISC",
  +- "description": ""
  ++ "description": "",
  ++ "dependencies": {
  ++ "@octokit/rest": "^19.0.0",
  ++ "commander": "^9.0.0",
  ++ "dotenv": "^16.0.0"
  ++ },
  ++ "devDependencies": {
  ++ "@octokit/types": "^14.0.0",
  ++ "@types/node": "^18.0.0",
  ++ "typescript": "^4.9.0"
  ++ }
- }
- ***
- File: packages/cli/src/README
- Status: added
- Additions: 2
- Deletions: 0
- Changes: 2
- +Patch:
  +@@ -0,0 +1,2 @@
  ++change-logger generateChangeLog -r owner/repo -b modularization -s dev -d code_diffs.md
  ++change-logger analyze-changes -d code_diffs.md -o change_analysis.md
- ***
- File: packages/cli/src/commands/analyze-changes.ts
- Status: added
- Additions: 27
- Deletions: 0
- Changes: 27
- +Patch:
  +@@ -0,0 +1,27 @@
  ++import { Command } from 'commander';
  ++import { analyzeChanges } from '../utils/analyze-changes';
  ++
  ++export function createAnalyzeChangesCommand(): Command {
  ++ return new Command('analyze-changes')
  ++ .description('Analyze code changes and generate a human-readable report')
  ++ .option(
  ++ '-d, --diff <file>',
  ++ 'Input file containing code differences',
  ++ 'CODE_DIFFS.md'
  ++ )
  ++ .option(
  ++ '-o, --output <file>',
  ++ 'Output file for the analysis report',
  ++ 'CHANGE_ANALYSIS.md'
  ++ )
  ++ .action(async (options) => {
  ++ try {
  ++ await analyzeChanges({
  ++ diffFile: options.diff,
  ++ outputFile: options.output,
  ++ });
  ++ } catch (error) {
  ++ process.exit(1);
  ++ }
  ++ });
  ++}
- ***
- File: packages/cli/src/config/config.ts
- Status: modified
- Additions: 3
- Deletions: 3
- Changes: 6
- +Patch:
  +@@ -1,6 +1,6 @@
  +-import fs from 'fs';
  +-import path from 'path';
  +-import os from 'os';
  ++import _ as fs from 'fs';
  ++import _ as path from 'path';
  ++import \* as os from 'os';
-
- interface Config {
- defaultRepo: string;
- ***
- File: packages/cli/src/index.ts
- Status: modified
- Additions: 285
- Deletions: 24
- Changes: 309
- +Patch:
  +@@ -1,10 +1,18 @@
- import { Command } from 'commander';
- import { Octokit } from '@octokit/rest';
  +-import dotenv from 'dotenv';
  +-import { generateMarkdown } from './utils/markdown';
  ++import _ as dotenv from 'dotenv';
  ++import _ as fs from 'fs';
  ++import \* as path from 'path';
  ++import { execSync } from 'child_process';
  ++import { generateMarkdown, formatFileDiff } from './utils/markdown';
- import { getConfig } from './config/config';
- import { setupGitHooks } from './utils/git-hooks';
  +-import fs from 'fs';
  ++import { createAnalyzeChangesCommand } from './commands/analyze-changes';
  ++import {
  ++ getCurrentRepo,
  ++ getCurrentBranch,
  ++ getDefaultStableBranch,
  ++} from './utils/git-utils';
-
- dotenv.config();
- +@@ -15,45 +23,186 @@ program
- .description('CLI tool for generating changelogs from GitHub commits')
- .version('1.0.0');
- ++interface GitHubError extends Error {
  ++ status?: number;
  ++}
  ++
- program
- .command('generateChangeLog')
- .description('Generate changelog from recent commits')
- .option('-r, --repo <repo>', 'GitHub repository (owner/repo)')
  +- .option('-b, --base <branch>', 'Base branch to compare against', 'main')
  ++ .option('-b, --base <branch>', 'Branch to compare (default: current branch)')
- .option('-o, --output <file>', 'Output file path', 'CHANGELOG.md')
  ++ .option('-s, --stable <branch>', 'Stable branch to compare against')
  ++ .option(
  ++ '-d, --diff <file>',
  ++ 'Output file for code differences',
  ++ 'CODE_DIFFS.md'
  ++ )
- .action(async (options) => {
-     try {
-       const config = await getConfig();
-       const octokit = new Octokit({
-         auth: process.env.GITHUB_TOKEN,
-       });
- +- const [owner, repo] = (options.repo || config.defaultRepo).split('/');
  ++ // Get repository information
  ++ let owner: string;
  ++ let repo: string;
  ++ if (options.repo) {
  ++ [owner, repo] = options.repo.split('/');
  ++ } else {
  ++ try {
  ++ const repoInfo = getCurrentRepo();
  ++ owner = repoInfo.owner;
  ++ repo = repoInfo.repo;
  ++ console.log(`\n📦 Using repository: ${owner}/${repo}`);
  ++ } catch (repoError) {
  ++ console.error('\n❌ Error getting repository information:');
  ++ console.error('Could not determine current repository.');
  ++ console.error('Please either:');
  ++ console.error('1. Run this command from a git repository, or');
  ++ console.error('2. Specify the repository using -r owner/repo');
  ++ process.exit(1);
  ++ }
  ++ }
- +- // Get the latest release
  +- const { data: releases } = await octokit.repos.listReleases({
  +- owner,
  +- repo,
  +- });
  ++ // Get branch information
  ++ let currentBranch: string;
  ++ let stableBranch: string;
  ++ try {
  ++ currentBranch = options.base || getCurrentBranch();
  ++ console.log(`\n🌿 Current branch: ${currentBranch}`);
- +- const latestRelease = releases[0];
  +- const baseCommit = latestRelease?.target_commitish || options.base;
  ++ stableBranch =
  ++ options.stable ||
  ++ (await getDefaultStableBranch(octokit, owner, repo));
  ++ console.log(`🌿 Stable branch: ${stableBranch}`);
  ++ } catch (branchError) {
  ++ console.error('\n❌ Error getting branch information:');
  ++ console.error(
  ++ branchError instanceof Error ? branchError.message : 'Unknown error'
  ++ );
  ++ process.exit(1);
  ++ }
- +- // Get commits between latest release and current branch
  +- const { data: commits } = await octokit.repos.compareCommits({
  +- owner,
  +- repo,
  +- base: baseCommit,
  +- head: 'HEAD',
  +- });
  ++ console.log(`\n🔄 Generating changelog for ${owner}/${repo}`);
  ++ console.log(`📊 Comparing ${currentBranch} against ${stableBranch}`);
  ++
  ++ // Get the stable branch state
  ++ try {
  ++ const { data: stableBranchData } = await octokit.repos.getBranch({
  ++ owner,
  ++ repo,
  ++ branch: stableBranch,
  ++ });
  ++ const stableCommit = stableBranchData.commit.sha;
  ++ console.log(`✅ Found stable branch commit: ${stableCommit}`);
  ++
  ++ // Get the current branch state
  ++ const { data: currentBranchData } = await octokit.repos.getBranch({
  ++ owner,
  ++ repo,
  ++ branch: currentBranch,
  ++ });
  ++ const currentCommit = currentBranchData.commit.sha;
  ++ console.log(`✅ Found current branch commit: ${currentCommit}`);
  ++
  ++ // Get commits between stable branch and current branch
  ++ const { data: compareData } = await octokit.repos.compareCommits({
  ++ owner,
  ++ repo,
  ++ base: stableCommit,
  ++ head: currentCommit,
  ++ });
  ++
  ++ const commits = compareData.commits || [];
  ++ const files = compareData.files || [];
  ++
  ++ if (commits.length === 0) {
  ++ console.warn(
  ++ '\n⚠️ Warning: No commits found between stable and current branch.'
  ++ );
  ++ } else {
  ++ console.log(
  ++ `\n📝 Found ${commits.length} commits and ${files.length} changed files`
  ++ );
  ++ }
  ++
  ++ // Get the latest release for version information
  ++ const { data: releases } = await octokit.repos.listReleases({
  ++ owner,
  ++ repo,
  ++ });
  ++
  ++ // Generate the changelog markdown
  ++ const latestRelease = releases[0];
  ++ const markdown = generateMarkdown(commits, latestRelease, {
  ++ stableBranch,
  ++ currentBranch,
  ++ lastMergedCommit: stableCommit,
  ++ currentCommit,
  ++ lastMergedPR: 0,
  ++ });
- +- const markdown = generateMarkdown(commits, latestRelease);
  ++ // Generate the code differences file
  ++ let diffContent = `# Code Differences between ${stableBranch} and ${currentBranch}\n\n`;
  ++ diffContent += `## Summary\n`;
  ++ diffContent += `- Total files changed: ${files.length}\n`;
  ++ diffContent += `- Total additions: ${files.reduce((sum, file) => sum + file.additions, 0)}\n`;
  ++ diffContent += `- Total deletions: ${files.reduce((sum, file) => sum + file.deletions, 0)}\n\n`;
- +- // Write to file
  +- await fs.promises.writeFile(options.output, markdown);
  +- console.log(`Changelog generated successfully at ${options.output}`);
  ++ diffContent += `## File Changes\n`;
  ++ files.forEach((file) => {
  ++ diffContent += formatFileDiff(file);
  ++ });
  ++
  ++ // Write both files
  ++ const outputPath = path.resolve(process.cwd(), options.output);
  ++ const diffPath = path.resolve(process.cwd(), options.diff);
  ++
  ++ try {
  ++ console.log(`\nSaving files:`);
  ++ console.log(`Changelog: ${outputPath}`);
  ++ console.log(`Code diffs: ${diffPath}\n`);
  ++
  ++ await fs.promises.writeFile(outputPath, markdown);
  ++ console.log('✅ Changelog saved successfully');
  ++
  ++ await fs.promises.writeFile(diffPath, diffContent);
  ++ console.log('✅ Code differences saved successfully');
  ++
  ++ console.log(`\nFiles have been saved to:`);
  ++ console.log(`📝 Changelog: ${outputPath}`);
  ++ console.log(`📝 Code diffs: ${diffPath}`);
  ++ } catch (writeError) {
  ++ console.error('\n❌ Error saving files:');
  ++ console.error(
  ++ `Failed to save to: ${writeError instanceof Error ? writeError.message : 'Unknown error'}`
  ++ );
  ++ console.error(`Attempted to save to:`);
  ++ console.error(`- Changelog: ${outputPath}`);
  ++ console.error(`- Code diffs: ${diffPath}`);
  ++ process.exit(1);
  ++ }
  ++ } catch (error) {
  ++ const err = error as Error;
  ++ console.error('\n❌ Error generating changelog:');
  ++ console.error(err.message);
  ++ if (err.stack) {
  ++ console.error('\nStack trace:');
  ++ console.error(err.stack);
  ++ }
  ++ process.exit(1);
  ++ }
-     } catch (error) {
  +- console.error('Error generating changelog:', error);
  ++ const err = error as Error;
  ++ console.error('\n❌ Error generating changelog:');
  ++ console.error(err.message);
  ++ if (err.stack) {
  ++ console.error('\nStack trace:');
  ++ console.error(err.stack);
  ++ }
-       process.exit(1);
-     }
- });
  +@@ -71,4 +220,116 @@ program
-     }
- });
- ++program
  ++ .command('test-token')
  ++ .description('Test GitHub token permissions')
  ++ .option('-r, --repo <repo>', 'GitHub repository (owner/repo)')
  ++ .action(async (options) => {
  ++ try {
  ++ const octokit = new Octokit({
  ++ auth: process.env.GITHUB_TOKEN,
  ++ });
  ++
  ++ if (!process.env.GITHUB_TOKEN) {
  ++ throw new Error('GITHUB_TOKEN is not set');
  ++ }
  ++
  ++ console.log('Testing GitHub token...\n');
  ++
  ++ // Test 1: Check if token is valid
  ++ console.log('1. Testing token validity...');
  ++ const { data: user } = await octokit.users.getAuthenticated();
  ++ console.log('✅ Token is valid');
  ++ console.log(`   Authenticated as: ${user.login}\n`);
  ++ console.log(' Raw user data:', JSON.stringify(user, null, 2), '\n');
  ++ console.log(
  ++ ' Octokit object structure:',
  ++ {
  ++ auth: octokit.auth,
  ++ log: octokit.log,
  ++ request: octokit.request,
  ++ rest: Object.keys(octokit.rest),
  ++ graphql: octokit.graphql,
  ++ paginate: octokit.paginate,
  ++ hook: octokit.hook,
  ++ },
  ++ '\n'
  ++ );
  ++
  ++ // Test 2: Check organization access
  ++ console.log('2. Testing organization access...');
  ++ try {
  ++ const { data: orgs } = await octokit.orgs.listForUser({
  ++ username: user.login,
  ++ });
  ++ console.log('✅ Organization access successful');
  ++ console.log(
  ++ ' Raw organizations data:',
  ++ JSON.stringify(orgs, null, 2),
  ++ '\n'
  ++ );
  ++
  ++ console.log(' Organizations you have access to:');
  ++ if (orgs.length === 0) {
  ++ console.log(' No organizations found in response');
  ++ } else {
  ++ orgs.forEach((org) => {
  ++ console.log(`   - ${org.login}`);
  ++ });
  ++ }
  ++ console.log();
  ++ } catch (error) {
  ++ console.error('❌ Failed to list organizations:', error);
  ++ console.error('Full error object:', JSON.stringify(error, null, 2));
  ++ }
  ++
  ++ // Test 3: Check repository access
  ++ if (options.repo) {
  ++ console.log('3. Testing repository access...');
  ++ const [owner, repo] = options.repo.split('/');
  ++ console.log(`   Attempting to access: ${owner}/${repo}`);
  ++
  ++ try {
  ++ // First try to get organization details
  ++ const { data: orgData } = await octokit.orgs.get({
  ++ org: owner,
  ++ });
  ++ console.log(`   Organization found: ${orgData.login}`);
  ++
  ++ // Check organization membership
  ++ const { data: membership } = await octokit.orgs.getMembershipForUser({
  ++ org: owner,
  ++ username: user.login,
  ++ });
  ++ console.log(`   Your role in organization: ${membership.role}`);
  ++
  ++ // List repositories
  ++ console.log(' Listing repositories in organization...');
  ++ const { data: repos } = await octokit.repos.listForOrg({
  ++ org: owner,
  ++ type: 'all',
  ++ });
  ++
  ++ console.log(' Available repositories:');
  ++ repos.forEach((repo) => {
  ++ console.log(`   - ${repo.name}`);
  ++ });
  ++ } catch (error) {
  ++ console.error('❌ Error accessing repository:', error);
  ++ console.error('Full error object:', JSON.stringify(error, null, 2));
  ++ }
  ++ }
  ++
  ++ console.log('All tests passed! Your token has the correct permissions.');
  ++ } catch (error) {
  ++ const err = error as Error;
  ++ console.error('❌ Test failed:', err.message);
  ++ console.error('Full error object:', JSON.stringify(error, null, 2));
  ++ process.exit(1);
  ++ }
  ++ });
  ++
  ++// Add the analyze-changes command
  ++program.addCommand(createAnalyzeChangesCommand());
  ++
- program.parse();
- ***
- File: packages/cli/src/utils/analyze-changes.ts
- Status: added
- Additions: 61
- Deletions: 0
- Changes: 61
- +Patch:
  +@@ -0,0 +1,61 @@
  ++import \* as fs from 'fs';
  ++
  ++interface AnalysisOptions {
  ++ diffFile: string;
  ++ outputFile: string;
  ++}
  ++
  ++export async function analyzeChanges(options: AnalysisOptions): Promise<void> {
  ++ try {
  ++ // Read the code differences file
  ++ const diffContent = await fs.promises.readFile(options.diffFile, 'utf-8');
  ++
  ++ // Format the content for AI analysis
  ++ const analysisPrompt = `Please analyze the following code changes and generate a human-readable report that:
++1. Summarizes the main changes and new features
++2. Explains the impact of these changes
++3. Highlights any breaking changes or important updates
++4. Provides a technical overview of the changes
++
++Here are the code changes to analyze:
++
++${diffContent}`;
  ++
  ++ // Generate the analysis report
  ++ let reportContent = `# Change Analysis Report\n\n`;
  ++ reportContent += `## Overview\n`;
  ++ reportContent += `This report provides an analysis of the code changes between versions.\n\n`;
  ++
  ++ // Add the AI analysis
  ++ reportContent += `## AI Analysis\n`;
  ++ reportContent += `\`\`\`\n`;
++    reportContent += `[AI Analysis will be inserted here]\n`;
++    reportContent += `\`\`\`\n\n`;
++
++    // Add the original changes for reference
++    reportContent += `## Original Changes\n`;
++    reportContent += `For reference, here are the original code changes:\n\n`;
++    reportContent += diffContent;
++
++    // Write the analysis report
++    await fs.promises.writeFile(options.outputFile, reportContent);
++    console.log(`Analysis report generated at ${options.outputFile}`);
  ++
  ++ // Print instructions for AI analysis
  ++ console.log('\nTo analyze these changes with AI:');
  ++ console.log('1. Copy the contents of the analysis report');
  ++ console.log(
  ++ '2. Paste it into your preferred AI tool (e.g., ChatGPT, Claude)'
  ++ );
  ++ console.log(
  ++ '3. Ask the AI to analyze the changes and generate a human-readable report'
  ++ );
  ++ console.log(
  ++ '4. The AI will provide insights about new features, breaking changes, and technical details'
  ++ );
  ++ } catch (error) {
  ++ const err = error as Error;
  ++ console.error('Error:', err.message);
  ++ throw err;
  ++ }
  ++}
- ***
- File: packages/cli/src/utils/git-hooks.ts
- Status: modified
- Additions: 2
- Deletions: 2
- Changes: 4
- +Patch:
  +@@ -1,5 +1,5 @@
  +-import fs from 'fs';
  +-import path from 'path';
  ++import _ as fs from 'fs';
  ++import _ as path from 'path';
- import { execSync } from 'child_process';
-
- const HOOK_CONTENT = `#!/bin/sh
- ***
- File: packages/cli/src/utils/git-utils.ts
- Status: added
- Additions: 64
- Deletions: 0
- Changes: 64
- +Patch:
  +@@ -0,0 +1,64 @@
  ++import { execSync } from 'child*process';
  ++import { Octokit } from '@octokit/rest';
  ++
  ++/\*\*
  ++ * Gets the current git repository information from the remote origin
  ++ _ @returns Object containing owner and repo name
  ++ _ @throws Error if not in a git repository or no remote origin found
  ++ _/
  ++export function getCurrentRepo(): { owner: string; repo: string } {
  ++ try {
  ++ const remoteUrl = execSync('git config --get remote.origin.url')
  ++ .toString()
  ++ .trim();
  ++ // Handle both HTTPS and SSH URLs
  ++ const match = remoteUrl.match(
  ++ /github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/
  ++ );
  ++ if (!match) {
  ++ throw new Error('Could not parse GitHub repository URL');
  ++ }
  ++ return {
  ++ owner: match[1],
  ++ repo: match[2],
  ++ };
  ++ } catch (error) {
  ++ throw new Error('Not in a git repository or no remote origin found');
  ++ }
  ++}
  ++
  ++/\*\*
  ++ _ Gets the name of the current git branch
  ++ _ @returns Current branch name
  ++ _ @throws Error if could not determine current branch
  ++ _/
  ++export function getCurrentBranch(): string {
  ++ try {
  ++ return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  ++ } catch (error) {
  ++ throw new Error('Could not determine current branch');
  ++ }
  ++}
  ++
  ++/\*_
  ++ _ Gets the default stable branch for a repository using GitHub API
  ++ _ @param octokit - Octokit instance for GitHub API calls
  ++ _ @param owner - Repository owner
  ++ _ @param repo - Repository name
  ++ \_ @returns Default branch name, falls back to 'main' if API call fails
  ++ \*/
  ++export async function getDefaultStableBranch(
  ++ octokit: Octokit,
  ++ owner: string,
  ++ repo: string
  ++): Promise<string> {
  ++ try {
  ++ const { data } = await octokit.repos.get({ owner, repo });
  ++ return data.default_branch;
  ++ } catch (error) {
  ++ console.warn(
  ++ 'Could not determine default branch, using "main" as fallback'
  ++ );
  ++ return 'main';
  ++ }
  ++}
- ***
- File: packages/cli/src/utils/markdown.ts
- Status: modified
- Additions: 49
- Deletions: 3
- Changes: 52
- +Patch:
  +@@ -1,4 +1,15 @@
  +-import { Commit } from '@octokit/rest';
  ++interface Commit {
  ++ commit: {
  ++ message: string;
  ++ author: {
  ++ name?: string;
  ++ email?: string;
  ++ date?: string;
  ++ } | null;
  ++ };
  ++ sha: string;
  ++ html_url: string;
  ++}
-
- interface CategorizedCommits {
- features: Commit[];
  +@@ -7,16 +18,30 @@ interface CategorizedCommits {
- other: Commit[];
- }
- ++interface MarkdownOptions {
  ++ stableBranch: string;
  ++ currentBranch: string;
  ++ lastMergedCommit: string;
  ++ currentCommit: string;
  ++ lastMergedPR: number;
  ++}
  ++
- export function generateMarkdown(
- commits: Commit[],
  +- latestRelease: any
  ++ latestRelease: any,
  ++ options: MarkdownOptions
- ): string {
- const categorized = categorizeCommits(commits);
-
- let markdown = `# Changelog\n\n`;
- ++ // Add comparison information
  ++ markdown += `## Changes since last merged PR (#${options.lastMergedPR})\n\n`;
  ++ markdown += `- Last Merged PR: #${options.lastMergedPR} (${options.lastMergedCommit.substring(0, 7)})\n`;
  ++ markdown += `- Current Branch: ${options.currentBranch} (${options.currentCommit.substring(0, 7)})\n\n`;
  ++
- if (latestRelease) {
  +- markdown += `## Changes since ${latestRelease.tag_name}\n\n`;
  ++ markdown += `### Latest Release: ${latestRelease.tag_name}\n\n`;
- }
-
- if (categorized.breaking.length > 0) {
  +@@ -51,6 +76,15 @@ export function generateMarkdown(
-     markdown += '\n';
- }
- ++ // Add commit details section
  ++ markdown += `## Detailed Commit List\n\n`;
  ++ commits.forEach((commit) => {
  ++ markdown += `### ${commit.commit.message.split('\n')[0]}\n\n`;
  ++ markdown += `- **Author:** ${commit.commit.author?.name}\n`;
  ++ markdown += `- **Date:** ${new Date(commit.commit.author?.date || '').toLocaleString()}\n`;
  ++ markdown += `- **Commit:** [${commit.sha.substring(0, 7)}](${commit.html_url})\n\n`;
  ++ });
  ++
- return markdown;
- }
- +@@ -88,3 +122,15 @@ function formatCommit(commit: Commit): string {
- const hash = commit.sha.substring(0, 7);
- return `${message} (${hash})`;
- }
  ++
  ++// Add this function to format the file differences
  ++export function formatFileDiff(file: any): string {
  ++ return `++  File: ${file.filename}
++  Status: ${file.status}
++  Additions: ${file.additions}
++  Deletions: ${file.deletions}
++  Changes: ${file.changes}
++  ${file.patch ?`\nPatch:\n${file.patch}` : ''}
++  ---`;
  ++}
- ***
- File: packages/cli/tsconfig.json
- Status: added
- Additions: 8
- Deletions: 0
- Changes: 8
- +Patch:
  +@@ -0,0 +1,8 @@
  ++{
  ++ "extends": "../../tsconfig.base.json",
  ++ "compilerOptions": {
  ++ "outDir": "./dist",
  ++ "rootDir": "./src"
  ++ },
  ++ "include": ["src/**/*"]
  ++}
- ***
- File: tsconfig.base.json
- Status: added
- Additions: 13
- Deletions: 0
- Changes: 13
- +Patch:
  +@@ -0,0 +1,13 @@
  ++{
  ++ "compilerOptions": {
  ++ "target": "ES2020",
  ++ "module": "CommonJS",
  ++ "moduleResolution": "Node",
  ++ "esModuleInterop": true,
  ++ "forceConsistentCasingInFileNames": true,
  ++ "strict": true,
  ++ "skipLibCheck": true,
  ++ "resolveJsonModule": true,
  ++ "baseUrl": "."
  ++ }
  ++}
- ***
  \ No newline at end of file
  ***
  File: CODE_DIFFS.md
  Status: added
  Additions: 1323
  Deletions: 0
  Changes: 1323

Patch:
@@ -0,0 +1,1323 @@
+# Code Differences between main and feature

- +## Summary
  +- Total files changed: 14
  +- Total additions: 947
  +- Total deletions: 44
- +## File Changes
-
- File: README.md
- Status: modified
- Additions: 100
- Deletions: 0
- Changes: 100
- +Patch:
  +@@ -170,3 +170,103 @@ This project uses:
- ## License
-
- [Your chosen license]
  ++
  ++# Change Logger CLI
  ++
  ++A CLI tool for generating changelogs by comparing commits between branches in your GitHub repository.
  ++
  ++## Installation
  ++
  ++`bash
++npm install -g change-logger
++`
  ++
  ++## Configuration
  ++
  ++1. Set up your GitHub token:
  ++
  ++`bash
++export GITHUB_TOKEN=your_github_token
++`
  ++
  ++2. (Optional) Create a config file at `~/.change-logger.json`:
  ++
  ++`json
++{
++  "defaultRepo": "owner/repo",
++  "githubToken": "your_github_token",
++  "outputPath": "CHANGELOG.md"
++}
++`
  ++
  ++## Usage
  ++
  ++### Generate Changelog
  ++
  ++`bash
++change-logger generateChangeLog [options]
++`
  ++
  ++Options:
  ++
  ++- `-r, --repo <repo>`: GitHub repository (owner/repo)
  ++- `-b, --base <branch>`: Base branch to compare against (default: 'main')
  ++- `-o, --output <file>`: Output file path (default: 'CHANGELOG.md')
  ++- `-s, --stable <branch>`: Stable branch to compare against (default: 'main')
  ++
  ++Example:
  ++
  ++`bash
++change-logger generateChangeLog -r octocat/Hello-World -b feature-branch -s main
++`
  ++
  ++### Set Up Git Hooks
  ++
  ++To automatically generate changelogs on commit:
  ++
  ++`bash
++change-logger setup-hooks
++`
  ++
  ++## Output Format
  ++
  ++The generated changelog includes:
  ++
  ++- Comparison between stable and current branches
  ++- Categorized changes (breaking, features, fixes, other)
  ++- Detailed commit information
  ++- Links to GitHub commits
  ++
  ++Example output:
  ++
  ++`markdown
++# Changelog
++
++## Changes between main and feature-branch
++
++- Stable Branch: main (a1b2c3d)
++- Current Branch: feature-branch (e4f5g6h)
++
++### New Features
++
++- Added new authentication system (a1b2c3d)
++
++### Bug Fixes
++
++- Fixed login page crash (e4f5g6h)
++
++## Detailed Commit List
++
++...
++`
  ++
  ++## Requirements
  ++
  ++- Node.js 14+
  ++- GitHub repository
  ++- GitHub personal access token
  ++
  ++## License
  ++
  ++MIT
  ++TESTING SOME CHANGES
- ***
- File: package-lock.json
- Status: modified
- Additions: 314
- Deletions: 8
- Changes: 322
- +Patch:
  +@@ -10,6 +10,7 @@
-         "packages/*"
-       ],
-       "devDependencies": {
  ++ "@change-logger/cli": "workspace:\*",
-         "@types/node": "^22.15.18",
-         "prettier": "^3.5.3",
-         "turbo": "^2.5.3",
  +@@ -68,6 +69,10 @@
-         "node": ">=6.9.0"
-       }
-     },
  ++ "node_modules/@change-logger/cli": {
  ++ "resolved": "packages/cli",
  ++ "link": true
  ++ },
-     "node_modules/@cspotcode/source-map-support": {
-       "version": "0.8.1",
-       "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
  +@@ -946,6 +951,177 @@
-         "node": ">= 8"
-       }
-     },
  ++ "node_modules/@octokit/auth-token": {
  ++ "version": "3.0.4",
  ++ "resolved": "https://registry.npmjs.org/@octokit/auth-token/-/auth-token-3.0.4.tgz",
  ++ "integrity": "sha512-TWFX7cZF2LXoCvdmJWY7XVPi74aSY0+FfBZNSXEXFkMpjcqsQwDSYVv5FhRFaI0V1ECnwbz4j59T/G+rXNWaIQ==",
  ++ "license": "MIT",
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/core": {
  ++ "version": "4.2.4",
  ++ "resolved": "https://registry.npmjs.org/@octokit/core/-/core-4.2.4.tgz",
  ++ "integrity": "sha512-rYKilwgzQ7/imScn3M9/pFfUf4I1AZEH3KhyJmtPdE2zfaXAn2mFfUy4FbKewzc2We5y/LlKLj36fWJLKC2SIQ==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/auth-token": "^3.0.0",
  ++ "@octokit/graphql": "^5.0.0",
  ++ "@octokit/request": "^6.0.0",
  ++ "@octokit/request-error": "^3.0.0",
  ++ "@octokit/types": "^9.0.0",
  ++ "before-after-hook": "^2.2.0",
  ++ "universal-user-agent": "^6.0.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/endpoint": {
  ++ "version": "7.0.6",
  ++ "resolved": "https://registry.npmjs.org/@octokit/endpoint/-/endpoint-7.0.6.tgz",
  ++ "integrity": "sha512-5L4fseVRUsDFGR00tMWD/Trdeeihn999rTMGRMC1G/Ldi1uWlWJzI98H4Iak5DB/RVvQuyMYKqSK/R6mbSOQyg==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/types": "^9.0.0",
  ++ "is-plain-object": "^5.0.0",
  ++ "universal-user-agent": "^6.0.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/graphql": {
  ++ "version": "5.0.6",
  ++ "resolved": "https://registry.npmjs.org/@octokit/graphql/-/graphql-5.0.6.tgz",
  ++ "integrity": "sha512-Fxyxdy/JH0MnIB5h+UQ3yCoh1FG4kWXfFKkpWqjZHw/p+Kc8Y44Hu/kCgNBT6nU1shNumEchmW/sUO1JuQnPcw==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/request": "^6.0.0",
  ++ "@octokit/types": "^9.0.0",
  ++ "universal-user-agent": "^6.0.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/openapi-types": {
  ++ "version": "18.1.1",
  ++ "resolved": "https://registry.npmjs.org/@octokit/openapi-types/-/openapi-types-18.1.1.tgz",
  ++ "integrity": "sha512-VRaeH8nCDtF5aXWnjPuEMIYf1itK/s3JYyJcWFJT8X9pSNnBtriDf7wlEWsGuhPLl4QIH4xM8fqTXDwJ3Mu6sw==",
  ++ "license": "MIT"
  ++ },
  ++ "node_modules/@octokit/plugin-paginate-rest": {
  ++ "version": "6.1.2",
  ++ "resolved": "https://registry.npmjs.org/@octokit/plugin-paginate-rest/-/plugin-paginate-rest-6.1.2.tgz",
  ++ "integrity": "sha512-qhrmtQeHU/IivxucOV1bbI/xZyC/iOBhclokv7Sut5vnejAIAEXVcGQeRpQlU39E0WwK9lNvJHphHri/DB6lbQ==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/tsconfig": "^1.0.2",
  ++ "@octokit/types": "^9.2.3"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ },
  ++ "peerDependencies": {
  ++ "@octokit/core": ">=4"
  ++ }
  ++ },
  ++ "node_modules/@octokit/plugin-request-log": {
  ++ "version": "1.0.4",
  ++ "resolved": "https://registry.npmjs.org/@octokit/plugin-request-log/-/plugin-request-log-1.0.4.tgz",
  ++ "integrity": "sha512-mLUsMkgP7K/cnFEw07kWqXGF5LKrOkD+lhCrKvPHXWDywAwuDUeDwWBpc69XK3pNX0uKiVt8g5z96PJ6z9xCFA==",
  ++ "license": "MIT",
  ++ "peerDependencies": {
  ++ "@octokit/core": ">=3"
  ++ }
  ++ },
  ++ "node_modules/@octokit/plugin-rest-endpoint-methods": {
  ++ "version": "7.2.3",
  ++ "resolved": "https://registry.npmjs.org/@octokit/plugin-rest-endpoint-methods/-/plugin-rest-endpoint-methods-7.2.3.tgz",
  ++ "integrity": "sha512-I5Gml6kTAkzVlN7KCtjOM+Ruwe/rQppp0QU372K1GP7kNOYEKe8Xn5BW4sE62JAHdwpq95OQK/qGNyKQMUzVgA==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/types": "^10.0.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ },
  ++ "peerDependencies": {
  ++ "@octokit/core": ">=3"
  ++ }
  ++ },
  ++ "node_modules/@octokit/plugin-rest-endpoint-methods/node_modules/@octokit/types": {
  ++ "version": "10.0.0",
  ++ "resolved": "https://registry.npmjs.org/@octokit/types/-/types-10.0.0.tgz",
  ++ "integrity": "sha512-Vm8IddVmhCgU1fxC1eyinpwqzXPEYu0NrYzD3YZjlGjyftdLBTeqNblRC0jmJmgxbJIsQlyogVeGnrNaaMVzIg==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/openapi-types": "^18.0.0"
  ++ }
  ++ },
  ++ "node_modules/@octokit/request": {
  ++ "version": "6.2.8",
  ++ "resolved": "https://registry.npmjs.org/@octokit/request/-/request-6.2.8.tgz",
  ++ "integrity": "sha512-ow4+pkVQ+6XVVsekSYBzJC0VTVvh/FCTUUgTsboGq+DTeWdyIFV8WSCdo0RIxk6wSkBTHqIK1mYuY7nOBXOchw==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/endpoint": "^7.0.0",
  ++ "@octokit/request-error": "^3.0.0",
  ++ "@octokit/types": "^9.0.0",
  ++ "is-plain-object": "^5.0.0",
  ++ "node-fetch": "^2.6.7",
  ++ "universal-user-agent": "^6.0.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/request-error": {
  ++ "version": "3.0.3",
  ++ "resolved": "https://registry.npmjs.org/@octokit/request-error/-/request-error-3.0.3.tgz",
  ++ "integrity": "sha512-crqw3V5Iy2uOU5Np+8M/YexTlT8zxCfI+qu+LxUB7SZpje4Qmx3mub5DfEKSO8Ylyk0aogi6TYdf6kxzh2BguQ==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/types": "^9.0.0",
  ++ "deprecation": "^2.0.0",
  ++ "once": "^1.4.0"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/rest": {
  ++ "version": "19.0.13",
  ++ "resolved": "https://registry.npmjs.org/@octokit/rest/-/rest-19.0.13.tgz",
  ++ "integrity": "sha512-/EzVox5V9gYGdbAI+ovYj3nXQT1TtTHRT+0eZPcuC05UFSWO3mdO9UY1C0i2eLF9Un1ONJkAk+IEtYGAC+TahA==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/core": "^4.2.1",
  ++ "@octokit/plugin-paginate-rest": "^6.1.2",
  ++ "@octokit/plugin-request-log": "^1.0.4",
  ++ "@octokit/plugin-rest-endpoint-methods": "^7.1.2"
  ++ },
  ++ "engines": {
  ++ "node": ">= 14"
  ++ }
  ++ },
  ++ "node_modules/@octokit/tsconfig": {
  ++ "version": "1.0.2",
  ++ "resolved": "https://registry.npmjs.org/@octokit/tsconfig/-/tsconfig-1.0.2.tgz",
  ++ "integrity": "sha512-I0vDR0rdtP8p2lGMzvsJzbhdOWy405HcGovrspJ8RRibHnyRgggUSNO5AIox5LmqiwmatHKYsvj6VGFHkqS7lA==",
  ++ "license": "MIT"
  ++ },
  ++ "node_modules/@octokit/types": {
  ++ "version": "9.3.2",
  ++ "resolved": "https://registry.npmjs.org/@octokit/types/-/types-9.3.2.tgz",
  ++ "integrity": "sha512-D4iHGTdAnEEVsB8fl95m1hiz7D5YiRdQ9b/OEb3BYRVwbLsGHcRVPz+u+BgRLNk0Q0/4iZCBqDN96j2XNxfXrA==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/openapi-types": "^18.0.0"
  ++ }
  ++ },
-     "node_modules/@repo/eslint-config": {
-       "resolved": "packages/eslint-config",
-       "link": true
  +@@ -1740,6 +1916,12 @@
-         "node": ">=10.0.0"
-       }
-     },
  ++ "node_modules/before-after-hook": {
  ++ "version": "2.2.3",
  ++ "resolved": "https://registry.npmjs.org/before-after-hook/-/before-after-hook-2.2.3.tgz",
  ++ "integrity": "sha512-NzUnlZexiaH/46WDhANlyR2bXRopNg4F/zuSA3OpZnllCUgRaOF2znDioDWrmbNVsuZk6l9pMquQB38cfBZwkQ==",
  ++ "license": "Apache-2.0"
  ++ },
-     "node_modules/bl": {
-       "version": "4.1.0",
-       "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
  +@@ -1963,10 +2145,6 @@
-         "node": ">=6"
-       }
-     },
  +- "node_modules/cli": {
  +- "resolved": "packages/cli",
  +- "link": true
  +- },
-     "node_modules/cli-cursor": {
-       "version": "3.1.0",
-       "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
  +@@ -2316,6 +2494,12 @@
-         "node": ">=8"
-       }
-     },
  ++ "node_modules/deprecation": {
  ++ "version": "2.3.1",
  ++ "resolved": "https://registry.npmjs.org/deprecation/-/deprecation-2.3.1.tgz",
  ++ "integrity": "sha512-xmHIy4F3scKVwMsQ4WnVaS8bHOx0DmVwRywosKhaILI0ywMDWPtBSku2HNxRvF7jtwDRsoEwYQSfbxj8b7RlJQ==",
  ++ "license": "ISC"
  ++ },
-     "node_modules/detect-libc": {
-       "version": "2.0.4",
-       "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.4.tgz",
  +@@ -2380,7 +2564,6 @@
-       "version": "16.0.3",
-       "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.0.3.tgz",
-       "integrity": "sha512-7GO6HghkA5fYG9TYnNxi14/7K9f5occMlp3zXAuSxn7CKCxt9xbNWG7yF8hTCSUchlfWSe3uLmlPfigevRItzQ==",
  +- "dev": true,
-       "license": "BSD-2-Clause",
-       "engines": {
-         "node": ">=12"
  +@@ -4093,6 +4276,15 @@
-         "node": ">=8"
-       }
-     },
  ++ "node_modules/is-plain-object": {
  ++ "version": "5.0.0",
  ++ "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-5.0.0.tgz",
  ++ "integrity": "sha512-VRSzKkbMm5jMDoKLbltAkFQ5Qr7VDiTFGXxYFXXowVj387GeGNOCsOH6Msy00SGZ3Fp84b1Naa1psqgcCIEP5Q==",
  ++ "license": "MIT",
  ++ "engines": {
  ++ "node": ">=0.10.0"
  ++ }
  ++ },
-     "node_modules/is-regex": {
-       "version": "1.2.1",
-       "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
  +@@ -4806,6 +4998,26 @@
-         "lower-case": "^1.1.1"
-       }
-     },
  ++ "node_modules/node-fetch": {
  ++ "version": "2.7.0",
  ++ "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz",
  ++ "integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "whatwg-url": "^5.0.0"
  ++ },
  ++ "engines": {
  ++ "node": "4.x || >=6.0.0"
  ++ },
  ++ "peerDependencies": {
  ++ "encoding": "^0.1.0"
  ++ },
  ++ "peerDependenciesMeta": {
  ++ "encoding": {
  ++ "optional": true
  ++ }
  ++ }
  ++ },
-     "node_modules/node-plop": {
-       "version": "0.26.3",
-       "resolved": "https://registry.npmjs.org/node-plop/-/node-plop-0.26.3.tgz",
  +@@ -5020,7 +5232,6 @@
-       "version": "1.4.0",
-       "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
-       "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
  +- "dev": true,
-       "license": "ISC",
-       "dependencies": {
-         "wrappy": "1"
  +@@ -6407,6 +6618,12 @@
-         "node": ">=8.0"
-       }
-     },
  ++ "node_modules/tr46": {
  ++ "version": "0.0.3",
  ++ "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
  ++ "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
  ++ "license": "MIT"
  ++ },
-     "node_modules/ts-api-utils": {
-       "version": "2.1.0",
-       "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.1.0.tgz",
  +@@ -6753,6 +6970,12 @@
-       "dev": true,
-       "license": "MIT"
-     },
  ++ "node_modules/universal-user-agent": {
  ++ "version": "6.0.1",
  ++ "resolved": "https://registry.npmjs.org/universal-user-agent/-/universal-user-agent-6.0.1.tgz",
  ++ "integrity": "sha512-yCzhz6FN2wU1NiiQRogkTQszlQSlpWaw8SvVegAc+bDxbzHgh1vX8uIe8OYyMH6DwH+sdTJsgMl36+mSMdRJIQ==",
  ++ "license": "ISC"
  ++ },
-     "node_modules/universalify": {
-       "version": "2.0.1",
-       "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
  +@@ -6839,6 +7062,22 @@
-       "resolved": "apps/web",
-       "link": true
-     },
  ++ "node_modules/webidl-conversions": {
  ++ "version": "3.0.1",
  ++ "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
  ++ "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
  ++ "license": "BSD-2-Clause"
  ++ },
  ++ "node_modules/whatwg-url": {
  ++ "version": "5.0.0",
  ++ "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
  ++ "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "tr46": "~0.0.3",
  ++ "webidl-conversions": "^3.0.0"
  ++ }
  ++ },
-     "node_modules/which": {
-       "version": "2.0.2",
-       "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
  +@@ -6980,7 +7219,6 @@
-       "version": "1.0.2",
-       "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
-       "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
  +- "dev": true,
-       "license": "ISC"
-     },
-     "node_modules/yn": {
  +@@ -7007,8 +7245,76 @@
-       }
-     },
-     "packages/cli": {
  ++ "name": "@change-logger/cli",
-       "version": "1.0.0",
  +- "license": "ISC"
  ++ "license": "ISC",
  ++ "dependencies": {
  ++ "@octokit/rest": "^19.0.0",
  ++ "commander": "^9.0.0",
  ++ "dotenv": "^16.0.0"
  ++ },
  ++ "devDependencies": {
  ++ "@octokit/types": "^14.0.0",
  ++ "@types/node": "^18.0.0",
  ++ "typescript": "^4.9.0"
  ++ }
  ++ },
  ++ "packages/cli/node_modules/@octokit/openapi-types": {
  ++ "version": "25.0.0",
  ++ "resolved": "https://registry.npmjs.org/@octokit/openapi-types/-/openapi-types-25.0.0.tgz",
  ++ "integrity": "sha512-FZvktFu7HfOIJf2BScLKIEYjDsw6RKc7rBJCdvCTfKsVnx2GEB/Nbzjr29DUdb7vQhlzS/j8qDzdditP0OC6aw==",
  ++ "dev": true,
  ++ "license": "MIT"
  ++ },
  ++ "packages/cli/node_modules/@octokit/types": {
  ++ "version": "14.0.0",
  ++ "resolved": "https://registry.npmjs.org/@octokit/types/-/types-14.0.0.tgz",
  ++ "integrity": "sha512-VVmZP0lEhbo2O1pdq63gZFiGCKkm8PPp8AUOijlwPO6hojEVjspA0MWKP7E4hbvGxzFKNqKr6p0IYtOH/Wf/zA==",
  ++ "dev": true,
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "@octokit/openapi-types": "^25.0.0"
  ++ }
  ++ },
  ++ "packages/cli/node_modules/@types/node": {
  ++ "version": "18.19.100",
  ++ "resolved": "https://registry.npmjs.org/@types/node/-/node-18.19.100.tgz",
  ++ "integrity": "sha512-ojmMP8SZBKprc3qGrGk8Ujpo80AXkrP7G2tOT4VWr5jlr5DHjsJF+emXJz+Wm0glmy4Js62oKMdZZ6B9Y+tEcA==",
  ++ "dev": true,
  ++ "license": "MIT",
  ++ "dependencies": {
  ++ "undici-types": "~5.26.4"
  ++ }
  ++ },
  ++ "packages/cli/node_modules/commander": {
  ++ "version": "9.5.0",
  ++ "resolved": "https://registry.npmjs.org/commander/-/commander-9.5.0.tgz",
  ++ "integrity": "sha512-KRs7WVDKg86PWiuAqhDrAQnTXZKraVcCc6vFdL14qrZ/DcWwuRo7VoiYXalXO7S5GKpqYiVEwCbgFDfxNHKJBQ==",
  ++ "license": "MIT",
  ++ "engines": {
  ++ "node": "^12.20.0 || >=14"
  ++ }
  ++ },
  ++ "packages/cli/node_modules/typescript": {
  ++ "version": "4.9.5",
  ++ "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.9.5.tgz",
  ++ "integrity": "sha512-1FXk9E2Hm+QzZQ7z+McJiHL4NW1F2EzMu9Nq9i3zAaGqibafqYwCVU6WyWAuyQRRzOlxou8xZSyXLEN8oKj24g==",
  ++ "dev": true,
  ++ "license": "Apache-2.0",
  ++ "bin": {
  ++ "tsc": "bin/tsc",
  ++ "tsserver": "bin/tsserver"
  ++ },
  ++ "engines": {
  ++ "node": ">=4.2.0"
  ++ }
  ++ },
  ++ "packages/cli/node_modules/undici-types": {
  ++ "version": "5.26.5",
  ++ "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
  ++ "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
  ++ "dev": true,
  ++ "license": "MIT"
-     },
-     "packages/eslint-config": {
-       "name": "@repo/eslint-config",
- ***
- File: package.json
- Status: modified
- Additions: 3
- Deletions: 1
- Changes: 4
- +Patch:
  +@@ -6,9 +6,11 @@
-     "dev": "turbo run dev",
-     "lint": "turbo run lint",
-     "format": "prettier --write \"**/*.{ts,tsx,md}\"",
  +- "check-types": "turbo run check-types"
  ++ "check-types": "turbo run check-types",
  ++ "changelog": "node packages/cli/dist/index.js"
- },
- "devDependencies": {
  ++ "@change-logger/cli": "workspace:\*",
-     "@types/node": "^22.15.18",
-     "prettier": "^3.5.3",
-     "turbo": "^2.5.3",
- ***
- File: packages/cli/package.json
- Status: modified
- Additions: 16
- Deletions: 3
- Changes: 19
- +Patch:
  +@@ -1,12 +1,25 @@
- {
  +- "name": "cli",
  ++ "name": "@change-logger/cli",
- "version": "1.0.0",
  +- "main": "index.js",
  ++ "main": "dist/index.js",
  ++ "type": "commonjs",
- "scripts": {
  ++ "build": "tsc && node -e \"require('fs').writeFileSync('dist/index.js', '#!/usr/bin/env node\\n' + require('fs').readFileSync('dist/index.js', 'utf8'))\"",
  ++ "dev": "tsc -w",
-     "test": "echo \"Error: no test specified\" && exit 1"
- },
- "keywords": [],
- "author": "",
- "license": "ISC",
  +- "description": ""
  ++ "description": "",
  ++ "dependencies": {
  ++ "@octokit/rest": "^19.0.0",
  ++ "commander": "^9.0.0",
  ++ "dotenv": "^16.0.0"
  ++ },
  ++ "devDependencies": {
  ++ "@octokit/types": "^14.0.0",
  ++ "@types/node": "^18.0.0",
  ++ "typescript": "^4.9.0"
  ++ }
- }
- ***
- File: packages/cli/src/README
- Status: added
- Additions: 2
- Deletions: 0
- Changes: 2
- +Patch:
  +@@ -0,0 +1,2 @@
  ++change-logger generateChangeLog -r owner/repo -b modularization -s dev -d code_diffs.md
  ++change-logger analyze-changes -d code_diffs.md -o change_analysis.md
- ***
- File: packages/cli/src/commands/analyze-changes.ts
- Status: added
- Additions: 27
- Deletions: 0
- Changes: 27
- +Patch:
  +@@ -0,0 +1,27 @@
  ++import { Command } from 'commander';
  ++import { analyzeChanges } from '../utils/analyze-changes';
  ++
  ++export function createAnalyzeChangesCommand(): Command {
  ++ return new Command('analyze-changes')
  ++ .description('Analyze code changes and generate a human-readable report')
  ++ .option(
  ++ '-d, --diff <file>',
  ++ 'Input file containing code differences',
  ++ 'CODE_DIFFS.md'
  ++ )
  ++ .option(
  ++ '-o, --output <file>',
  ++ 'Output file for the analysis report',
  ++ 'CHANGE_ANALYSIS.md'
  ++ )
  ++ .action(async (options) => {
  ++ try {
  ++ await analyzeChanges({
  ++ diffFile: options.diff,
  ++ outputFile: options.output,
  ++ });
  ++ } catch (error) {
  ++ process.exit(1);
  ++ }
  ++ });
  ++}
- ***
- File: packages/cli/src/config/config.ts
- Status: modified
- Additions: 3
- Deletions: 3
- Changes: 6
- +Patch:
  +@@ -1,6 +1,6 @@
  +-import fs from 'fs';
  +-import path from 'path';
  +-import os from 'os';
  ++import _ as fs from 'fs';
  ++import _ as path from 'path';
  ++import \* as os from 'os';
-
- interface Config {
- defaultRepo: string;
- ***
- File: packages/cli/src/index.ts
- Status: modified
- Additions: 285
- Deletions: 24
- Changes: 309
- +Patch:
  +@@ -1,10 +1,18 @@
- import { Command } from 'commander';
- import { Octokit } from '@octokit/rest';
  +-import dotenv from 'dotenv';
  +-import { generateMarkdown } from './utils/markdown';
  ++import _ as dotenv from 'dotenv';
  ++import _ as fs from 'fs';
  ++import \* as path from 'path';
  ++import { execSync } from 'child_process';
  ++import { generateMarkdown, formatFileDiff } from './utils/markdown';
- import { getConfig } from './config/config';
- import { setupGitHooks } from './utils/git-hooks';
  +-import fs from 'fs';
  ++import { createAnalyzeChangesCommand } from './commands/analyze-changes';
  ++import {
  ++ getCurrentRepo,
  ++ getCurrentBranch,
  ++ getDefaultStableBranch,
  ++} from './utils/git-utils';
-
- dotenv.config();
- +@@ -15,45 +23,186 @@ program
- .description('CLI tool for generating changelogs from GitHub commits')
- .version('1.0.0');
- ++interface GitHubError extends Error {
  ++ status?: number;
  ++}
  ++
- program
- .command('generateChangeLog')
- .description('Generate changelog from recent commits')
- .option('-r, --repo <repo>', 'GitHub repository (owner/repo)')
  +- .option('-b, --base <branch>', 'Base branch to compare against', 'main')
  ++ .option('-b, --base <branch>', 'Branch to compare (default: current branch)')
- .option('-o, --output <file>', 'Output file path', 'CHANGELOG.md')
  ++ .option('-s, --stable <branch>', 'Stable branch to compare against')
  ++ .option(
  ++ '-d, --diff <file>',
  ++ 'Output file for code differences',
  ++ 'CODE_DIFFS.md'
  ++ )
- .action(async (options) => {
-     try {
-       const config = await getConfig();
-       const octokit = new Octokit({
-         auth: process.env.GITHUB_TOKEN,
-       });
- +- const [owner, repo] = (options.repo || config.defaultRepo).split('/');
  ++ // Get repository information
  ++ let owner: string;
  ++ let repo: string;
  ++ if (options.repo) {
  ++ [owner, repo] = options.repo.split('/');
  ++ } else {
  ++ try {
  ++ const repoInfo = getCurrentRepo();
  ++ owner = repoInfo.owner;
  ++ repo = repoInfo.repo;
  ++ console.log(`\n📦 Using repository: ${owner}/${repo}`);
  ++ } catch (repoError) {
  ++ console.error('\n❌ Error getting repository information:');
  ++ console.error('Could not determine current repository.');
  ++ console.error('Please either:');
  ++ console.error('1. Run this command from a git repository, or');
  ++ console.error('2. Specify the repository using -r owner/repo');
  ++ process.exit(1);
  ++ }
  ++ }
- +- // Get the latest release
  +- const { data: releases } = await octokit.repos.listReleases({
  +- owner,
  +- repo,
  +- });
  ++ // Get branch information
  ++ let currentBranch: string;
  ++ let stableBranch: string;
  ++ try {
  ++ currentBranch = options.base || getCurrentBranch();
  ++ console.log(`\n🌿 Current branch: ${currentBranch}`);
- +- const latestRelease = releases[0];
  +- const baseCommit = latestRelease?.target_commitish || options.base;
  ++ stableBranch =
  ++ options.stable ||
  ++ (await getDefaultStableBranch(octokit, owner, repo));
  ++ console.log(`🌿 Stable branch: ${stableBranch}`);
  ++ } catch (branchError) {
  ++ console.error('\n❌ Error getting branch information:');
  ++ console.error(
  ++ branchError instanceof Error ? branchError.message : 'Unknown error'
  ++ );
  ++ process.exit(1);
  ++ }
- +- // Get commits between latest release and current branch
  +- const { data: commits } = await octokit.repos.compareCommits({
  +- owner,
  +- repo,
  +- base: baseCommit,
  +- head: 'HEAD',
  +- });
  ++ console.log(`\n🔄 Generating changelog for ${owner}/${repo}`);
  ++ console.log(`📊 Comparing ${currentBranch} against ${stableBranch}`);
  ++
  ++ // Get the stable branch state
  ++ try {
  ++ const { data: stableBranchData } = await octokit.repos.getBranch({
  ++ owner,
  ++ repo,
  ++ branch: stableBranch,
  ++ });
  ++ const stableCommit = stableBranchData.commit.sha;
  ++ console.log(`✅ Found stable branch commit: ${stableCommit}`);
  ++
  ++ // Get the current branch state
  ++ const { data: currentBranchData } = await octokit.repos.getBranch({
  ++ owner,
  ++ repo,
  ++ branch: currentBranch,
  ++ });
  ++ const currentCommit = currentBranchData.commit.sha;
  ++ console.log(`✅ Found current branch commit: ${currentCommit}`);
  ++
  ++ // Get commits between stable branch and current branch
  ++ const { data: compareData } = await octokit.repos.compareCommits({
  ++ owner,
  ++ repo,
  ++ base: stableCommit,
  ++ head: currentCommit,
  ++ });
  ++
  ++ const commits = compareData.commits || [];
  ++ const files = compareData.files || [];
  ++
  ++ if (commits.length === 0) {
  ++ console.warn(
  ++ '\n⚠️ Warning: No commits found between stable and current branch.'
  ++ );
  ++ } else {
  ++ console.log(
  ++ `\n📝 Found ${commits.length} commits and ${files.length} changed files`
  ++ );
  ++ }
  ++
  ++ // Get the latest release for version information
  ++ const { data: releases } = await octokit.repos.listReleases({
  ++ owner,
  ++ repo,
  ++ });
  ++
  ++ // Generate the changelog markdown
  ++ const latestRelease = releases[0];
  ++ const markdown = generateMarkdown(commits, latestRelease, {
  ++ stableBranch,
  ++ currentBranch,
  ++ lastMergedCommit: stableCommit,
  ++ currentCommit,
  ++ lastMergedPR: 0,
  ++ });
- +- const markdown = generateMarkdown(commits, latestRelease);
  ++ // Generate the code differences file
  ++ let diffContent = `# Code Differences between ${stableBranch} and ${currentBranch}\n\n`;
  ++ diffContent += `## Summary\n`;
  ++ diffContent += `- Total files changed: ${files.length}\n`;
  ++ diffContent += `- Total additions: ${files.reduce((sum, file) => sum + file.additions, 0)}\n`;
  ++ diffContent += `- Total deletions: ${files.reduce((sum, file) => sum + file.deletions, 0)}\n\n`;
- +- // Write to file
  +- await fs.promises.writeFile(options.output, markdown);
  +- console.log(`Changelog generated successfully at ${options.output}`);
  ++ diffContent += `## File Changes\n`;
  ++ files.forEach((file) => {
  ++ diffContent += formatFileDiff(file);
  ++ });
  ++
  ++ // Write both files
  ++ const outputPath = path.resolve(process.cwd(), options.output);
  ++ const diffPath = path.resolve(process.cwd(), options.diff);
  ++
  ++ try {
  ++ console.log(`\nSaving files:`);
  ++ console.log(`Changelog: ${outputPath}`);
  ++ console.log(`Code diffs: ${diffPath}\n`);
  ++
  ++ await fs.promises.writeFile(outputPath, markdown);
  ++ console.log('✅ Changelog saved successfully');
  ++
  ++ await fs.promises.writeFile(diffPath, diffContent);
  ++ console.log('✅ Code differences saved successfully');
  ++
  ++ console.log(`\nFiles have been saved to:`);
  ++ console.log(`📝 Changelog: ${outputPath}`);
  ++ console.log(`📝 Code diffs: ${diffPath}`);
  ++ } catch (writeError) {
  ++ console.error('\n❌ Error saving files:');
  ++ console.error(
  ++ `Failed to save to: ${writeError instanceof Error ? writeError.message : 'Unknown error'}`
  ++ );
  ++ console.error(`Attempted to save to:`);
  ++ console.error(`- Changelog: ${outputPath}`);
  ++ console.error(`- Code diffs: ${diffPath}`);
  ++ process.exit(1);
  ++ }
  ++ } catch (error) {
  ++ const err = error as Error;
  ++ console.error('\n❌ Error generating changelog:');
  ++ console.error(err.message);
  ++ if (err.stack) {
  ++ console.error('\nStack trace:');
  ++ console.error(err.stack);
  ++ }
  ++ process.exit(1);
  ++ }
-     } catch (error) {
  +- console.error('Error generating changelog:', error);
  ++ const err = error as Error;
  ++ console.error('\n❌ Error generating changelog:');
  ++ console.error(err.message);
  ++ if (err.stack) {
  ++ console.error('\nStack trace:');
  ++ console.error(err.stack);
  ++ }
-       process.exit(1);
-     }
- });
  +@@ -71,4 +220,116 @@ program
-     }
- });
- ++program
  ++ .command('test-token')
  ++ .description('Test GitHub token permissions')
  ++ .option('-r, --repo <repo>', 'GitHub repository (owner/repo)')
  ++ .action(async (options) => {
  ++ try {
  ++ const octokit = new Octokit({
  ++ auth: process.env.GITHUB_TOKEN,
  ++ });
  ++
  ++ if (!process.env.GITHUB_TOKEN) {
  ++ throw new Error('GITHUB_TOKEN is not set');
  ++ }
  ++
  ++ console.log('Testing GitHub token...\n');
  ++
  ++ // Test 1: Check if token is valid
  ++ console.log('1. Testing token validity...');
  ++ const { data: user } = await octokit.users.getAuthenticated();
  ++ console.log('✅ Token is valid');
  ++ console.log(`   Authenticated as: ${user.login}\n`);
  ++ console.log(' Raw user data:', JSON.stringify(user, null, 2), '\n');
  ++ console.log(
  ++ ' Octokit object structure:',
  ++ {
  ++ auth: octokit.auth,
  ++ log: octokit.log,
  ++ request: octokit.request,
  ++ rest: Object.keys(octokit.rest),
  ++ graphql: octokit.graphql,
  ++ paginate: octokit.paginate,
  ++ hook: octokit.hook,
  ++ },
  ++ '\n'
  ++ );
  ++
  ++ // Test 2: Check organization access
  ++ console.log('2. Testing organization access...');
  ++ try {
  ++ const { data: orgs } = await octokit.orgs.listForUser({
  ++ username: user.login,
  ++ });
  ++ console.log('✅ Organization access successful');
  ++ console.log(
  ++ ' Raw organizations data:',
  ++ JSON.stringify(orgs, null, 2),
  ++ '\n'
  ++ );
  ++
  ++ console.log(' Organizations you have access to:');
  ++ if (orgs.length === 0) {
  ++ console.log(' No organizations found in response');
  ++ } else {
  ++ orgs.forEach((org) => {
  ++ console.log(`   - ${org.login}`);
  ++ });
  ++ }
  ++ console.log();
  ++ } catch (error) {
  ++ console.error('❌ Failed to list organizations:', error);
  ++ console.error('Full error object:', JSON.stringify(error, null, 2));
  ++ }
  ++
  ++ // Test 3: Check repository access
  ++ if (options.repo) {
  ++ console.log('3. Testing repository access...');
  ++ const [owner, repo] = options.repo.split('/');
  ++ console.log(`   Attempting to access: ${owner}/${repo}`);
  ++
  ++ try {
  ++ // First try to get organization details
  ++ const { data: orgData } = await octokit.orgs.get({
  ++ org: owner,
  ++ });
  ++ console.log(`   Organization found: ${orgData.login}`);
  ++
  ++ // Check organization membership
  ++ const { data: membership } = await octokit.orgs.getMembershipForUser({
  ++ org: owner,
  ++ username: user.login,
  ++ });
  ++ console.log(`   Your role in organization: ${membership.role}`);
  ++
  ++ // List repositories
  ++ console.log(' Listing repositories in organization...');
  ++ const { data: repos } = await octokit.repos.listForOrg({
  ++ org: owner,
  ++ type: 'all',
  ++ });
  ++
  ++ console.log(' Available repositories:');
  ++ repos.forEach((repo) => {
  ++ console.log(`   - ${repo.name}`);
  ++ });
  ++ } catch (error) {
  ++ console.error('❌ Error accessing repository:', error);
  ++ console.error('Full error object:', JSON.stringify(error, null, 2));
  ++ }
  ++ }
  ++
  ++ console.log('All tests passed! Your token has the correct permissions.');
  ++ } catch (error) {
  ++ const err = error as Error;
  ++ console.error('❌ Test failed:', err.message);
  ++ console.error('Full error object:', JSON.stringify(error, null, 2));
  ++ process.exit(1);
  ++ }
  ++ });
  ++
  ++// Add the analyze-changes command
  ++program.addCommand(createAnalyzeChangesCommand());
  ++
- program.parse();
- ***
- File: packages/cli/src/utils/analyze-changes.ts
- Status: added
- Additions: 61
- Deletions: 0
- Changes: 61
- +Patch:
  +@@ -0,0 +1,61 @@
  ++import \* as fs from 'fs';
  ++
  ++interface AnalysisOptions {
  ++ diffFile: string;
  ++ outputFile: string;
  ++}
  ++
  ++export async function analyzeChanges(options: AnalysisOptions): Promise<void> {
  ++ try {
  ++ // Read the code differences file
  ++ const diffContent = await fs.promises.readFile(options.diffFile, 'utf-8');
  ++
  ++ // Format the content for AI analysis
  ++ const analysisPrompt = `Please analyze the following code changes and generate a human-readable report that:
++1. Summarizes the main changes and new features
++2. Explains the impact of these changes
++3. Highlights any breaking changes or important updates
++4. Provides a technical overview of the changes
++
++Here are the code changes to analyze:
++
++${diffContent}`;
  ++
  ++ // Generate the analysis report
  ++ let reportContent = `# Change Analysis Report\n\n`;
  ++ reportContent += `## Overview\n`;
  ++ reportContent += `This report provides an analysis of the code changes between versions.\n\n`;
  ++
  ++ // Add the AI analysis
  ++ reportContent += `## AI Analysis\n`;
  ++ reportContent += `\`\`\`\n`;
++    reportContent += `[AI Analysis will be inserted here]\n`;
++    reportContent += `\`\`\`\n\n`;
++
++    // Add the original changes for reference
++    reportContent += `## Original Changes\n`;
++    reportContent += `For reference, here are the original code changes:\n\n`;
++    reportContent += diffContent;
++
++    // Write the analysis report
++    await fs.promises.writeFile(options.outputFile, reportContent);
++    console.log(`Analysis report generated at ${options.outputFile}`);
  ++
  ++ // Print instructions for AI analysis
  ++ console.log('\nTo analyze these changes with AI:');
  ++ console.log('1. Copy the contents of the analysis report');
  ++ console.log(
  ++ '2. Paste it into your preferred AI tool (e.g., ChatGPT, Claude)'
  ++ );
  ++ console.log(
  ++ '3. Ask the AI to analyze the changes and generate a human-readable report'
  ++ );
  ++ console.log(
  ++ '4. The AI will provide insights about new features, breaking changes, and technical details'
  ++ );
  ++ } catch (error) {
  ++ const err = error as Error;
  ++ console.error('Error:', err.message);
  ++ throw err;
  ++ }
  ++}
- ***
- File: packages/cli/src/utils/git-hooks.ts
- Status: modified
- Additions: 2
- Deletions: 2
- Changes: 4
- +Patch:
  +@@ -1,5 +1,5 @@
  +-import fs from 'fs';
  +-import path from 'path';
  ++import _ as fs from 'fs';
  ++import _ as path from 'path';
- import { execSync } from 'child_process';
-
- const HOOK_CONTENT = `#!/bin/sh
- ***
- File: packages/cli/src/utils/git-utils.ts
- Status: added
- Additions: 64
- Deletions: 0
- Changes: 64
- +Patch:
  +@@ -0,0 +1,64 @@
  ++import { execSync } from 'child*process';
  ++import { Octokit } from '@octokit/rest';
  ++
  ++/\*\*
  ++ * Gets the current git repository information from the remote origin
  ++ _ @returns Object containing owner and repo name
  ++ _ @throws Error if not in a git repository or no remote origin found
  ++ _/
  ++export function getCurrentRepo(): { owner: string; repo: string } {
  ++ try {
  ++ const remoteUrl = execSync('git config --get remote.origin.url')
  ++ .toString()
  ++ .trim();
  ++ // Handle both HTTPS and SSH URLs
  ++ const match = remoteUrl.match(
  ++ /github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/
  ++ );
  ++ if (!match) {
  ++ throw new Error('Could not parse GitHub repository URL');
  ++ }
  ++ return {
  ++ owner: match[1],
  ++ repo: match[2],
  ++ };
  ++ } catch (error) {
  ++ throw new Error('Not in a git repository or no remote origin found');
  ++ }
  ++}
  ++
  ++/\*\*
  ++ _ Gets the name of the current git branch
  ++ _ @returns Current branch name
  ++ _ @throws Error if could not determine current branch
  ++ _/
  ++export function getCurrentBranch(): string {
  ++ try {
  ++ return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  ++ } catch (error) {
  ++ throw new Error('Could not determine current branch');
  ++ }
  ++}
  ++
  ++/\*_
  ++ _ Gets the default stable branch for a repository using GitHub API
  ++ _ @param octokit - Octokit instance for GitHub API calls
  ++ _ @param owner - Repository owner
  ++ _ @param repo - Repository name
  ++ \_ @returns Default branch name, falls back to 'main' if API call fails
  ++ \*/
  ++export async function getDefaultStableBranch(
  ++ octokit: Octokit,
  ++ owner: string,
  ++ repo: string
  ++): Promise<string> {
  ++ try {
  ++ const { data } = await octokit.repos.get({ owner, repo });
  ++ return data.default_branch;
  ++ } catch (error) {
  ++ console.warn(
  ++ 'Could not determine default branch, using "main" as fallback'
  ++ );
  ++ return 'main';
  ++ }
  ++}
- ***
- File: packages/cli/src/utils/markdown.ts
- Status: modified
- Additions: 49
- Deletions: 3
- Changes: 52
- +Patch:
  +@@ -1,4 +1,15 @@
  +-import { Commit } from '@octokit/rest';
  ++interface Commit {
  ++ commit: {
  ++ message: string;
  ++ author: {
  ++ name?: string;
  ++ email?: string;
  ++ date?: string;
  ++ } | null;
  ++ };
  ++ sha: string;
  ++ html_url: string;
  ++}
-
- interface CategorizedCommits {
- features: Commit[];
  +@@ -7,16 +18,30 @@ interface CategorizedCommits {
- other: Commit[];
- }
- ++interface MarkdownOptions {
  ++ stableBranch: string;
  ++ currentBranch: string;
  ++ lastMergedCommit: string;
  ++ currentCommit: string;
  ++ lastMergedPR: number;
  ++}
  ++
- export function generateMarkdown(
- commits: Commit[],
  +- latestRelease: any
  ++ latestRelease: any,
  ++ options: MarkdownOptions
- ): string {
- const categorized = categorizeCommits(commits);
-
- let markdown = `# Changelog\n\n`;
- ++ // Add comparison information
  ++ markdown += `## Changes since last merged PR (#${options.lastMergedPR})\n\n`;
  ++ markdown += `- Last Merged PR: #${options.lastMergedPR} (${options.lastMergedCommit.substring(0, 7)})\n`;
  ++ markdown += `- Current Branch: ${options.currentBranch} (${options.currentCommit.substring(0, 7)})\n\n`;
  ++
- if (latestRelease) {
  +- markdown += `## Changes since ${latestRelease.tag_name}\n\n`;
  ++ markdown += `### Latest Release: ${latestRelease.tag_name}\n\n`;
- }
-
- if (categorized.breaking.length > 0) {
  +@@ -51,6 +76,15 @@ export function generateMarkdown(
-     markdown += '\n';
- }
- ++ // Add commit details section
  ++ markdown += `## Detailed Commit List\n\n`;
  ++ commits.forEach((commit) => {
  ++ markdown += `### ${commit.commit.message.split('\n')[0]}\n\n`;
  ++ markdown += `- **Author:** ${commit.commit.author?.name}\n`;
  ++ markdown += `- **Date:** ${new Date(commit.commit.author?.date || '').toLocaleString()}\n`;
  ++ markdown += `- **Commit:** [${commit.sha.substring(0, 7)}](${commit.html_url})\n\n`;
  ++ });
  ++
- return markdown;
- }
- +@@ -88,3 +122,15 @@ function formatCommit(commit: Commit): string {
- const hash = commit.sha.substring(0, 7);
- return `${message} (${hash})`;
- }
  ++
  ++// Add this function to format the file differences
  ++export function formatFileDiff(file: any): string {
  ++ return `++  File: ${file.filename}
++  Status: ${file.status}
++  Additions: ${file.additions}
++  Deletions: ${file.deletions}
++  Changes: ${file.changes}
++  ${file.patch ?`\nPatch:\n${file.patch}` : ''}
++  ---`;
  ++}
- ***
- File: packages/cli/tsconfig.json
- Status: added
- Additions: 8
- Deletions: 0
- Changes: 8
- +Patch:
  +@@ -0,0 +1,8 @@
  ++{
  ++ "extends": "../../tsconfig.base.json",
  ++ "compilerOptions": {
  ++ "outDir": "./dist",
  ++ "rootDir": "./src"
  ++ },
  ++ "include": ["src/**/*"]
  ++}
- ***
- File: tsconfig.base.json
- Status: added
- Additions: 13
- Deletions: 0
- Changes: 13
- +Patch:
  +@@ -0,0 +1,13 @@
  ++{
  ++ "compilerOptions": {
  ++ "target": "ES2020",
  ++ "module": "CommonJS",
  ++ "moduleResolution": "Node",
  ++ "esModuleInterop": true,
  ++ "forceConsistentCasingInFileNames": true,
  ++ "strict": true,
  ++ "skipLibCheck": true,
  ++ "resolveJsonModule": true,
  ++ "baseUrl": "."
  ++ }
  ++}
- ***
  \ No newline at end of file
  ***
  File: README.md
  Status: modified
  Additions: 104
  Deletions: 0
  Changes: 104

Patch:
@@ -170,3 +170,107 @@ This project uses:

## License

[Your chosen license]

- +# Change Logger CLI
- +A CLI tool for generating changelogs by comparing commits between branches in your GitHub repository.
- +## Installation
- +`bash
+npm install -g change-logger
+`
- +## Configuration
- +1. Set up your GitHub token:
- +`bash
+export GITHUB_TOKEN=your_github_token
+`
- +2. (Optional) Create a config file at `~/.change-logger.json`:
- +```json
  +{
- "defaultRepo": "owner/repo",
- "githubToken": "your_github_token",
- "outputPath": "CHANGELOG.md"
  +}
  +```
- +## Usage
- +### Generate Changelog
- +`bash
+change-logger generateChangeLog [options]
+`
- +Options:
- +- `-r, --repo <repo>`: GitHub repository (owner/repo)
  +- `-b, --base <branch>`: Base branch to compare against (default: 'main')
  +- `-o, --output <file>`: Output file path (default: 'CHANGELOG.md')
  +- `-s, --stable <branch>`: Stable branch to compare against (default: 'main')
- +Example:
- +`bash
+change-logger generateChangeLog -r octocat/Hello-World -b feature-branch -s main
+`
- +### Set Up Git Hooks
- +To automatically generate changelogs on commit:
- +`bash
+change-logger setup-hooks
+`
- +## Output Format
- +The generated changelog includes:
- +- Comparison between stable and current branches
  +- Categorized changes (breaking, features, fixes, other)
  +- Detailed commit information
  +- Links to GitHub commits
- +Example output:
- +```markdown
  +# Changelog
- +## Changes between main and feature-branch
- +- Stable Branch: main (a1b2c3d)
  +- Current Branch: feature-branch (e4f5g6h)
- +### New Features
- +- Added new authentication system (a1b2c3d)
- +### Bug Fixes
- +- Fixed login page crash (e4f5g6h)
- +## Detailed Commit List
- +...
  +```
- +## Requirements
- +- Node.js 14+
  +- GitHub repository
  +- GitHub personal access token
- +## License
- +MIT
  +TESTING SOME CHANGES
- +steps:
  +npm install change-logger
  +npm run changelog generateChangeLog -r enigmawun/change-logger
  ***
  File: apps/web/app/globals.css
  Status: modified
  Additions: 2
  Deletions: 0
  Changes: 2

Patch:
@@ -1,3 +1,5 @@
+@import 'tailwindcss';

- :root {
  --background: #ffffff;
  --foreground: #171717;
  ***
  File: apps/web/package.json
  Status: modified
  Additions: 4
  Deletions: 1
  Changes: 5

Patch:
@@ -12,9 +12,12 @@
},
"dependencies": {
"@repo/ui": "\*",

- "@tailwindcss/postcss": "^4.1.7",
  "next": "^15.3.0",
- "postcss": "^8.5.3",
  "react": "^19.1.0",

* "react-dom": "^19.1.0"

- "react-dom": "^19.1.0",
- "tailwindcss": "^4.1.7"
  },
  "devDependencies": {
  "@repo/eslint-config": "\*",

---

File: apps/web/postcss.config.mjs
Status: added
Additions: 6
Deletions: 0
Changes: 6

Patch:
@@ -0,0 +1,6 @@
+const config = {

- plugins: {
- '@tailwindcss/postcss': {},
- },
  +};
  +export default config;
  ***
  File: package-lock.json
  Status: modified
  Additions: 1292
  Deletions: 51
  Changes: 1343

Patch:
@@ -10,6 +10,7 @@
"packages/\*"
],
"devDependencies": {

-        "@change-logger/cli": "workspace:*",
           "@types/node": "^22.15.18",
           "prettier": "^3.5.3",
           "turbo": "^2.5.3",
  @@ -68,6 +69,14 @@
  "node": ">=6.9.0"
  }
  },
- "node_modules/@change-logger/api": {
-      "resolved": "packages/api",
-      "link": true
- },
- "node_modules/@change-logger/cli": {
-      "resolved": "packages/cli",
-      "link": true
- },
  "node_modules/@cspotcode/source-map-support": {
  "version": "0.8.1",
  "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
  @@ -946,6 +955,177 @@
  "node": ">= 8"
  }
  },
- "node_modules/@octokit/auth-token": {
-      "version": "3.0.4",
-      "resolved": "https://registry.npmjs.org/@octokit/auth-token/-/auth-token-3.0.4.tgz",
-      "integrity": "sha512-TWFX7cZF2LXoCvdmJWY7XVPi74aSY0+FfBZNSXEXFkMpjcqsQwDSYVv5FhRFaI0V1ECnwbz4j59T/G+rXNWaIQ==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 14"
-      }
- },
- "node_modules/@octokit/core": {
-      "version": "4.2.4",
-      "resolved": "https://registry.npmjs.org/@octokit/core/-/core-4.2.4.tgz",
-      "integrity": "sha512-rYKilwgzQ7/imScn3M9/pFfUf4I1AZEH3KhyJmtPdE2zfaXAn2mFfUy4FbKewzc2We5y/LlKLj36fWJLKC2SIQ==",
-      "license": "MIT",
-      "dependencies": {
-        "@octokit/auth-token": "^3.0.0",
-        "@octokit/graphql": "^5.0.0",
-        "@octokit/request": "^6.0.0",
-        "@octokit/request-error": "^3.0.0",
-        "@octokit/types": "^9.0.0",
-        "before-after-hook": "^2.2.0",
-        "universal-user-agent": "^6.0.0"
-      },
-      "engines": {
-        "node": ">= 14"
-      }
- },
- "node_modules/@octokit/endpoint": {
-      "version": "7.0.6",
-      "resolved": "https://registry.npmjs.org/@octokit/endpoint/-/endpoint-7.0.6.tgz",
-      "integrity": "sha512-5L4fseVRUsDFGR00tMWD/Trdeeihn999rTMGRMC1G/Ldi1uWlWJzI98H4Iak5DB/RVvQuyMYKqSK/R6mbSOQyg==",
-      "license": "MIT",
-      "dependencies": {
-        "@octokit/types": "^9.0.0",
-        "is-plain-object": "^5.0.0",
-        "universal-user-agent": "^6.0.0"
-      },
-      "engines": {
-        "node": ">= 14"
-      }
- },
- "node_modules/@octokit/graphql": {
-      "version": "5.0.6",
-      "resolved": "https://registry.npmjs.org/@octokit/graphql/-/graphql-5.0.6.tgz",
-      "integrity": "sha512-Fxyxdy/JH0MnIB5h+UQ3yCoh1FG4kWXfFKkpWqjZHw/p+Kc8Y44Hu/kCgNBT6nU1shNumEchmW/sUO1JuQnPcw==",
-      "license": "MIT",
-      "dependencies": {
-        "@octokit/request": "^6.0.0",
-        "@octokit/types": "^9.0.0",
-        "universal-user-agent": "^6.0.0"
-      },
-      "engines": {
-        "node": ">= 14"
-      }
- },
- "node_modules/@octokit/openapi-types": {
-      "version": "18.1.1",
-      "resolved": "https://registry.npmjs.org/@octokit/openapi-types/-/openapi-types-18.1.1.tgz",
-      "integrity": "sha512-VRaeH8nCDtF5aXWnjPuEMIYf1itK/s3JYyJcWFJT8X9pSNnBtriDf7wlEWsGuhPLl4QIH4xM8fqTXDwJ3Mu6sw==",
-      "license": "MIT"
- },
- "node_modules/@octokit/plugin-paginate-rest": {
-      "version": "6.1.2",
-      "resolved": "https://registry.npmjs.org/@octokit/plugin-paginate-rest/-/plugin-paginate-rest-6.1.2.tgz",
-      "integrity": "sha512-qhrmtQeHU/IivxucOV1bbI/xZyC/iOBhclokv7Sut5vnejAIAEXVcGQeRpQlU39E0WwK9lNvJHphHri/DB6lbQ==",
-      "license": "MIT",
-      "dependencies": {
-        "@octokit/tsconfig": "^1.0.2",
-        "@octokit/types": "^9.2.3"
-      },
-      "engines": {
-        "node": ">= 14"
-      },
-      "peerDependencies": {
-        "@octokit/core": ">=4"
-      }
- },
- "node_modules/@octokit/plugin-request-log": {
-      "version": "1.0.4",
-      "resolved": "https://registry.npmjs.org/@octokit/plugin-request-log/-/plugin-request-log-1.0.4.tgz",
-      "integrity": "sha512-mLUsMkgP7K/cnFEw07kWqXGF5LKrOkD+lhCrKvPHXWDywAwuDUeDwWBpc69XK3pNX0uKiVt8g5z96PJ6z9xCFA==",
-      "license": "MIT",
-      "peerDependencies": {
-        "@octokit/core": ">=3"
-      }
- },
- "node_modules/@octokit/plugin-rest-endpoint-methods": {
-      "version": "7.2.3",
-      "resolved": "https://registry.npmjs.org/@octokit/plugin-rest-endpoint-methods/-/plugin-rest-endpoint-methods-7.2.3.tgz",
-      "integrity": "sha512-I5Gml6kTAkzVlN7KCtjOM+Ruwe/rQppp0QU372K1GP7kNOYEKe8Xn5BW4sE62JAHdwpq95OQK/qGNyKQMUzVgA==",
-      "license": "MIT",
-      "dependencies": {
-        "@octokit/types": "^10.0.0"
-      },
-      "engines": {
-        "node": ">= 14"
-      },
-      "peerDependencies": {
-        "@octokit/core": ">=3"
-      }
- },
- "node_modules/@octokit/plugin-rest-endpoint-methods/node_modules/@octokit/types": {
-      "version": "10.0.0",
-      "resolved": "https://registry.npmjs.org/@octokit/types/-/types-10.0.0.tgz",
-      "integrity": "sha512-Vm8IddVmhCgU1fxC1eyinpwqzXPEYu0NrYzD3YZjlGjyftdLBTeqNblRC0jmJmgxbJIsQlyogVeGnrNaaMVzIg==",
-      "license": "MIT",
-      "dependencies": {
-        "@octokit/openapi-types": "^18.0.0"
-      }
- },
- "node_modules/@octokit/request": {
-      "version": "6.2.8",
-      "resolved": "https://registry.npmjs.org/@octokit/request/-/request-6.2.8.tgz",
-      "integrity": "sha512-ow4+pkVQ+6XVVsekSYBzJC0VTVvh/FCTUUgTsboGq+DTeWdyIFV8WSCdo0RIxk6wSkBTHqIK1mYuY7nOBXOchw==",
-      "license": "MIT",
-      "dependencies": {
-        "@octokit/endpoint": "^7.0.0",
-        "@octokit/request-error": "^3.0.0",
-        "@octokit/types": "^9.0.0",
-        "is-plain-object": "^5.0.0",
-        "node-fetch": "^2.6.7",
-        "universal-user-agent": "^6.0.0"
-      },
-      "engines": {
-        "node": ">= 14"
-      }
- },
- "node_modules/@octokit/request-error": {
-      "version": "3.0.3",
-      "resolved": "https://registry.npmjs.org/@octokit/request-error/-/request-error-3.0.3.tgz",
-      "integrity": "sha512-crqw3V5Iy2uOU5Np+8M/YexTlT8zxCfI+qu+LxUB7SZpje4Qmx3mub5DfEKSO8Ylyk0aogi6TYdf6kxzh2BguQ==",
-      "license": "MIT",
-      "dependencies": {
-        "@octokit/types": "^9.0.0",
-        "deprecation": "^2.0.0",
-        "once": "^1.4.0"
-      },
-      "engines": {
-        "node": ">= 14"
-      }
- },
- "node_modules/@octokit/rest": {
-      "version": "19.0.13",
-      "resolved": "https://registry.npmjs.org/@octokit/rest/-/rest-19.0.13.tgz",
-      "integrity": "sha512-/EzVox5V9gYGdbAI+ovYj3nXQT1TtTHRT+0eZPcuC05UFSWO3mdO9UY1C0i2eLF9Un1ONJkAk+IEtYGAC+TahA==",
-      "license": "MIT",
-      "dependencies": {
-        "@octokit/core": "^4.2.1",
-        "@octokit/plugin-paginate-rest": "^6.1.2",
-        "@octokit/plugin-request-log": "^1.0.4",
-        "@octokit/plugin-rest-endpoint-methods": "^7.1.2"
-      },
-      "engines": {
-        "node": ">= 14"
-      }
- },
- "node_modules/@octokit/tsconfig": {
-      "version": "1.0.2",
-      "resolved": "https://registry.npmjs.org/@octokit/tsconfig/-/tsconfig-1.0.2.tgz",
-      "integrity": "sha512-I0vDR0rdtP8p2lGMzvsJzbhdOWy405HcGovrspJ8RRibHnyRgggUSNO5AIox5LmqiwmatHKYsvj6VGFHkqS7lA==",
-      "license": "MIT"
- },
- "node_modules/@octokit/types": {
-      "version": "9.3.2",
-      "resolved": "https://registry.npmjs.org/@octokit/types/-/types-9.3.2.tgz",
-      "integrity": "sha512-D4iHGTdAnEEVsB8fl95m1hiz7D5YiRdQ9b/OEb3BYRVwbLsGHcRVPz+u+BgRLNk0Q0/4iZCBqDN96j2XNxfXrA==",
-      "license": "MIT",
-      "dependencies": {
-        "@octokit/openapi-types": "^18.0.0"
-      }
- },
  "node_modules/@repo/eslint-config": {
  "resolved": "packages/eslint-config",
  "link": true
  @@ -1054,13 +1234,77 @@
  "workspaces": "dist/cli.js"
  }
  },
- "node_modules/@types/axios": {
-      "version": "0.9.36",
-      "resolved": "https://registry.npmjs.org/@types/axios/-/axios-0.9.36.tgz",
-      "integrity": "sha512-NLOpedx9o+rxo/X5ChbdiX6mS1atE4WHmEEIcR9NLenRVa5HoVjAvjafwU3FPTqnZEstpoqCaW7fagqSoTDNeg==",
-      "dev": true,
-      "license": "MIT"
- },
- "node_modules/@types/body-parser": {
-      "version": "1.19.5",
-      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.5.tgz",
-      "integrity": "sha512-fB3Zu92ucau0iQ0JMCFQE7b/dv8Ot07NI3KaZIkIUNXq82k4eBAqUaneXfleGY9JWskeS9y+u0nXMyspcuQrCg==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "@types/connect": "*",
-        "@types/node": "*"
-      }
- },
- "node_modules/@types/connect": {
-      "version": "3.4.38",
-      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
-      "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "@types/node": "*"
-      }
- },
- "node_modules/@types/cors": {
-      "version": "2.8.18",
-      "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.18.tgz",
-      "integrity": "sha512-nX3d0sxJW41CqQvfOzVG1NCTXfFDrDWIghCZncpHeWlVFd81zxB/DLhg7avFg6eHLCRX7ckBmoIIcqa++upvJA==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "@types/node": "*"
-      }
- },
  "node_modules/@types/estree": {
  "version": "1.0.7",
  "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.7.tgz",
  "integrity": "sha512-w28IoSUCJpidD/TGviZwwMJckNESJZXFu7NBZ5YJ4mEUnNraUn9Pm8HSZm/jDF1pDWYKspWE7oVphigUPRakIQ==",
  "dev": true,
  "license": "MIT"
  },
- "node_modules/@types/express": {
-      "version": "4.17.22",
-      "resolved": "https://registry.npmjs.org/@types/express/-/express-4.17.22.tgz",
-      "integrity": "sha512-eZUmSnhRX9YRSkplpz0N+k6NljUUn5l3EWZIKZvYzhvMphEuNiyyy1viH/ejgt66JWgALwC/gtSUAeQKtSwW/w==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "@types/body-parser": "*",
-        "@types/express-serve-static-core": "^4.17.33",
-        "@types/qs": "*",
-        "@types/serve-static": "*"
-      }
- },
- "node_modules/@types/express-serve-static-core": {
-      "version": "4.19.6",
-      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.19.6.tgz",
-      "integrity": "sha512-N4LZ2xG7DatVqhCZzOGb1Yi5lMbXSZcmdLDe9EzSndPV2HpWYWzRbaerl2n27irrm94EPpprqa8KpskPT085+A==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "@types/node": "*",
-        "@types/qs": "*",
-        "@types/range-parser": "*",
-        "@types/send": "*"
-      }
- },
  "node_modules/@types/glob": {
  "version": "7.2.0",
  "resolved": "https://registry.npmjs.org/@types/glob/-/glob-7.2.0.tgz",
  @@ -1072,6 +1316,13 @@
  "@types/node": "\*"
  }
  },
- "node_modules/@types/http-errors": {
-      "version": "2.0.4",
-      "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.4.tgz",
-      "integrity": "sha512-D0CFMMtydbJAegzOyHjtiKPLlvnm3iTZyZRSZoLq2mRhDdmLfIWOCYPfQJ4cu2erKghU++QvjcUjp/5h7hESpA==",
-      "dev": true,
-      "license": "MIT"
- },
  "node_modules/@types/inquirer": {
  "version": "6.5.0",
  "resolved": "https://registry.npmjs.org/@types/inquirer/-/inquirer-6.5.0.tgz",
  @@ -1110,6 +1361,13 @@
  "dev": true,
  "license": "MIT"
  },
- "node_modules/@types/mime": {
-      "version": "1.3.5",
-      "resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.5.tgz",
-      "integrity": "sha512-/pyBZWSLD2n0dcHE3hq8s8ZvcETHtEuF+3E7XVt0Ig2nvsVQXdghHVcEkIWjy9A0wKfTn97a/PSDYohKIlnP/w==",
-      "dev": true,
-      "license": "MIT"
- },
  "node_modules/@types/minimatch": {
  "version": "5.1.2",
  "resolved": "https://registry.npmjs.org/@types/minimatch/-/minimatch-5.1.2.tgz",
  @@ -1121,12 +1379,35 @@
  "version": "22.15.18",
  "resolved": "https://registry.npmjs.org/@types/node/-/node-22.15.18.tgz",
  "integrity": "sha512-v1DKRfUdyW+jJhZNEI1PYy29S2YRxMV5AOO/x/SjKmW0acCIOqmbj6Haf9eHAhsPmrhlHSxEhv/1WszcLWV4cg==",

*      "dev": true,
       "license": "MIT",
       "dependencies": {
         "undici-types": "~6.21.0"
       }
  },

- "node_modules/@types/node-fetch": {
-      "version": "2.6.12",
-      "resolved": "https://registry.npmjs.org/@types/node-fetch/-/node-fetch-2.6.12.tgz",
-      "integrity": "sha512-8nneRWKCg3rMtF69nLQJnOYUcbafYeFSjqkw3jCRLsqkWFlHaoQrr5mXmofFGOx3DKn7UfmBMyov8ySvLRVldA==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/node": "*",
-        "form-data": "^4.0.0"
-      }
- },
- "node_modules/@types/qs": {
-      "version": "6.14.0",
-      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.14.0.tgz",
-      "integrity": "sha512-eOunJqu0K1923aExK6y8p6fsihYEn/BYuQ4g0CxAAgFc4b/ZLN4CrsRZ55srTdqoiLzU2B2evC+apEIxprEzkQ==",
-      "dev": true,
-      "license": "MIT"
- },
- "node_modules/@types/range-parser": {
-      "version": "1.2.7",
-      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
-      "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
-      "dev": true,
-      "license": "MIT"
- },
  "node_modules/@types/react": {
  "version": "19.1.0",
  "resolved": "https://registry.npmjs.org/@types/react/-/react-19.1.0.tgz",
  @@ -1147,6 +1428,29 @@
  "@types/react": "^19.0.0"
  }
  },
- "node_modules/@types/send": {
-      "version": "0.17.4",
-      "resolved": "https://registry.npmjs.org/@types/send/-/send-0.17.4.tgz",
-      "integrity": "sha512-x2EM6TJOybec7c52BX0ZspPodMsQUd5L6PRwOunVyVUhXiBSKf3AezDL8Dgvgt5o0UfKNfuA0eMLr2wLT4AiBA==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "@types/mime": "^1",
-        "@types/node": "*"
-      }
- },
- "node_modules/@types/serve-static": {
-      "version": "1.15.7",
-      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.7.tgz",
-      "integrity": "sha512-W8Ym+h8nhuRwaKPaDw34QUkwsGi6Rc4yYqvKFo5rm2FUEhCFbzVWrxXUxuKK8TASjWsysJY0nsmNCGhCOIsrOw==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "@types/http-errors": "*",
-        "@types/node": "*",
-        "@types/send": "*"
-      }
- },
  "node_modules/@types/through": {
  "version": "0.0.33",
  "resolved": "https://registry.npmjs.org/@types/through/-/through-0.0.33.tgz",
  @@ -1384,6 +1688,31 @@
  "url": "https://opencollective.com/typescript-eslint"
  }
  },
- "node_modules/abort-controller": {
-      "version": "3.0.0",
-      "resolved": "https://registry.npmjs.org/abort-controller/-/abort-controller-3.0.0.tgz",
-      "integrity": "sha512-h8lQ8tacZYnR3vNQTgibj+tODHI5/+l06Au2Pcriv/Gmet0eaj4TwWH41sO9wnHDiQsEj19q0drzdWdeAHtweg==",
-      "license": "MIT",
-      "dependencies": {
-        "event-target-shim": "^5.0.0"
-      },
-      "engines": {
-        "node": ">=6.5"
-      }
- },
- "node_modules/accepts": {
-      "version": "1.3.8",
-      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
-      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
-      "license": "MIT",
-      "dependencies": {
-        "mime-types": "~2.1.34",
-        "negotiator": "0.6.3"
-      },
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
  "node_modules/acorn": {
  "version": "8.14.1",
  "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.1.tgz",
  @@ -1430,6 +1759,18 @@
  "node": ">= 14"
  }
  },
- "node_modules/agentkeepalive": {
-      "version": "4.6.0",
-      "resolved": "https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-4.6.0.tgz",
-      "integrity": "sha512-kja8j7PjmncONqaTsB8fQ+wE2mSU2DJ9D4XKoJ5PFWIdRMa6SLSN1ff4mOr4jCbfRSsxR4keIiySJU0N9T5hIQ==",
-      "license": "MIT",
-      "dependencies": {
-        "humanize-ms": "^1.2.1"
-      },
-      "engines": {
-        "node": ">= 8.0.0"
-      }
- },
  "node_modules/aggregate-error": {
  "version": "3.1.0",
  "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
  @@ -1534,6 +1875,12 @@
  "url": "https://github.com/sponsors/ljharb"
  }
  },
- "node_modules/array-flatten": {
-      "version": "1.1.1",
-      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
-      "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
-      "license": "MIT"
- },
  "node_modules/array-includes": {
  "version": "3.1.8",
  "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.8.tgz",
  @@ -1686,6 +2033,12 @@
  "node": ">= 0.4"
  }
  },
- "node_modules/asynckit": {
-      "version": "0.4.0",
-      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
-      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
-      "license": "MIT"
- },
  "node_modules/available-typed-arrays": {
  "version": "1.0.7",
  "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
  @@ -1702,6 +2055,17 @@
  "url": "https://github.com/sponsors/ljharb"
  }
  },
- "node_modules/axios": {
-      "version": "1.9.0",
-      "resolved": "https://registry.npmjs.org/axios/-/axios-1.9.0.tgz",
-      "integrity": "sha512-re4CqKTJaURpzbLHtIi6XpDv20/CnpXOtjRY5/CU32L8gU8ek9UIivcfvSWvmKEngmVbrUtPpdDwWDWL7DNHvg==",
-      "license": "MIT",
-      "dependencies": {
-        "follow-redirects": "^1.15.6",
-        "form-data": "^4.0.0",
-        "proxy-from-env": "^1.1.0"
-      }
- },
  "node_modules/balanced-match": {
  "version": "1.0.2",
  "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
  @@ -1740,6 +2104,12 @@
  "node": ">=10.0.0"
  }
  },
- "node_modules/before-after-hook": {
-      "version": "2.2.3",
-      "resolved": "https://registry.npmjs.org/before-after-hook/-/before-after-hook-2.2.3.tgz",
-      "integrity": "sha512-NzUnlZexiaH/46WDhANlyR2bXRopNg4F/zuSA3OpZnllCUgRaOF2znDioDWrmbNVsuZk6l9pMquQB38cfBZwkQ==",
-      "license": "Apache-2.0"
- },
  "node_modules/bl": {
  "version": "4.1.0",
  "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
  @@ -1752,6 +2122,45 @@
  "readable-stream": "^3.4.0"
  }
  },
- "node_modules/body-parser": {
-      "version": "1.20.3",
-      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.3.tgz",
-      "integrity": "sha512-7rAxByjUMqQ3/bHJy7D6OGXvx/MMc4IqBn/X0fcM1QUcAItpZrBEYhWGem+tzXH90c+G01ypMcYJBO9Y30203g==",
-      "license": "MIT",
-      "dependencies": {
-        "bytes": "3.1.2",
-        "content-type": "~1.0.5",
-        "debug": "2.6.9",
-        "depd": "2.0.0",
-        "destroy": "1.2.0",
-        "http-errors": "2.0.0",
-        "iconv-lite": "0.4.24",
-        "on-finished": "2.4.1",
-        "qs": "6.13.0",
-        "raw-body": "2.5.2",
-        "type-is": "~1.6.18",
-        "unpipe": "1.0.0"
-      },
-      "engines": {
-        "node": ">= 0.8",
-        "npm": "1.2.8000 || >= 1.4.16"
-      }
- },
- "node_modules/body-parser/node_modules/debug": {
-      "version": "2.6.9",
-      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
-      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
-      "license": "MIT",
-      "dependencies": {
-        "ms": "2.0.0"
-      }
- },
- "node_modules/body-parser/node_modules/ms": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
-      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
-      "license": "MIT"
- },
  "node_modules/brace-expansion": {
  "version": "2.0.1",
  "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
  @@ -1811,6 +2220,15 @@
  "node": ">=10.16.0"
  }
  },
- "node_modules/bytes": {
-      "version": "3.1.2",
-      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
-      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
  "node_modules/call-bind": {
  "version": "1.0.8",
  "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.8.tgz",
  @@ -1834,7 +2252,6 @@
  "version": "1.0.2",
  "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
  "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",

*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "es-errors": "^1.3.0",
  @@ -1848,7 +2265,6 @@
  "version": "1.0.4",
  "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
  "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "call-bind-apply-helpers": "^1.0.2",
  @@ -1963,10 +2379,6 @@
  "node": ">=6"
  }
  },
* "node_modules/cli": {
*      "resolved": "packages/cli",
*      "link": true
* },
  "node_modules/cli-cursor": {
  "version": "3.1.0",
  "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
  @@ -2064,6 +2476,18 @@
  "simple-swizzle": "^0.2.2"
  }
  },

- "node_modules/combined-stream": {
-      "version": "1.0.8",
-      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
-      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
-      "license": "MIT",
-      "dependencies": {
-        "delayed-stream": "~1.0.0"
-      },
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
  "node_modules/commander": {
  "version": "10.0.1",
  "resolved": "https://registry.npmjs.org/commander/-/commander-10.0.1.tgz",
  @@ -2092,6 +2516,42 @@
  "upper-case": "^1.1.1"
  }
  },
- "node_modules/content-disposition": {
-      "version": "0.5.4",
-      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
-      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
-      "license": "MIT",
-      "dependencies": {
-        "safe-buffer": "5.2.1"
-      },
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
- "node_modules/content-type": {
-      "version": "1.0.5",
-      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
-      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
- "node_modules/cookie": {
-      "version": "0.7.1",
-      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.1.tgz",
-      "integrity": "sha512-6DnInpx7SJ2AK3+CTUE/ZM0vWTUboZCegxhC2xiIydHR9jNuTAASBrfEpHhiGOZw/nX51bHt6YQl8jsGo4y/0w==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
- "node_modules/cookie-signature": {
-      "version": "1.0.6",
-      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
-      "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ==",
-      "license": "MIT"
- },
  "node_modules/core-js-pure": {
  "version": "3.42.0",
  "resolved": "https://registry.npmjs.org/core-js-pure/-/core-js-pure-3.42.0.tgz",
  @@ -2104,6 +2564,19 @@
  "url": "https://opencollective.com/core-js"
  }
  },
- "node_modules/cors": {
-      "version": "2.8.5",
-      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
-      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
-      "license": "MIT",
-      "dependencies": {
-        "object-assign": "^4",
-        "vary": "^1"
-      },
-      "engines": {
-        "node": ">= 0.10"
-      }
- },
  "node_modules/create-require": {
  "version": "1.1.1",
  "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
  @@ -2316,6 +2789,40 @@
  "node": ">=8"
  }
  },
- "node_modules/delayed-stream": {
-      "version": "1.0.0",
-      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
-      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
-      "license": "MIT",
-      "engines": {
-        "node": ">=0.4.0"
-      }
- },
- "node_modules/depd": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
-      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
- "node_modules/deprecation": {
-      "version": "2.3.1",
-      "resolved": "https://registry.npmjs.org/deprecation/-/deprecation-2.3.1.tgz",
-      "integrity": "sha512-xmHIy4F3scKVwMsQ4WnVaS8bHOx0DmVwRywosKhaILI0ywMDWPtBSku2HNxRvF7jtwDRsoEwYQSfbxj8b7RlJQ==",
-      "license": "ISC"
- },
- "node_modules/destroy": {
-      "version": "1.2.0",
-      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
-      "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.8",
-        "npm": "1.2.8000 || >= 1.4.16"
-      }
- },
  "node_modules/detect-libc": {
  "version": "2.0.4",
  "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.4.tgz",
  @@ -2380,7 +2887,6 @@
  "version": "16.0.3",
  "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.0.3.tgz",
  "integrity": "sha512-7GO6HghkA5fYG9TYnNxi14/7K9f5occMlp3zXAuSxn7CKCxt9xbNWG7yF8hTCSUchlfWSe3uLmlPfigevRItzQ==",

*      "dev": true,
         "license": "BSD-2-Clause",
         "engines": {
           "node": ">=12"
  @@ -2390,7 +2896,6 @@
  "version": "1.0.1",
  "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
  "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "call-bind-apply-helpers": "^1.0.1",
  @@ -2401,13 +2906,28 @@
  "node": ">= 0.4"
  }
  },

- "node_modules/ee-first": {
-      "version": "1.1.1",
-      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
-      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
-      "license": "MIT"
- },
  "node_modules/emoji-regex": {
  "version": "8.0.0",
  "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
  "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
  "dev": true,
  "license": "MIT"
  },
- "node_modules/encodeurl": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
-      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
  "node_modules/es-abstract": {
  "version": "1.23.9",
  "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.23.9.tgz",
  @@ -2478,7 +2998,6 @@
  "version": "1.0.1",
  "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
  "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",

*      "dev": true,
         "license": "MIT",
         "engines": {
           "node": ">= 0.4"
  @@ -2488,7 +3007,6 @@
  "version": "1.3.0",
  "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
  "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
*      "dev": true,
         "license": "MIT",
         "engines": {
           "node": ">= 0.4"
  @@ -2526,7 +3044,6 @@
  "version": "1.1.1",
  "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
  "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "es-errors": "^1.3.0"
  @@ -2539,7 +3056,6 @@
  "version": "2.1.0",
  "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
  "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "es-errors": "^1.3.0",
  @@ -2582,6 +3098,12 @@
  "url": "https://github.com/sponsors/ljharb"
  }
  },

- "node_modules/escape-html": {
-      "version": "1.0.3",
-      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
-      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
-      "license": "MIT"
- },
  "node_modules/escape-string-regexp": {
  "version": "4.0.0",
  "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
  @@ -2930,6 +3452,24 @@
  "node": ">=0.10.0"
  }
  },
- "node_modules/etag": {
-      "version": "1.8.1",
-      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
-      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
- "node_modules/event-target-shim": {
-      "version": "5.0.1",
-      "resolved": "https://registry.npmjs.org/event-target-shim/-/event-target-shim-5.0.1.tgz",
-      "integrity": "sha512-i/2XbnSz/uxRCU6+NdVJgKWDTM427+MqYbkQzD321DuCQJUqOuJKIA0IM2+W2xtYHdKOmZ4dR6fExsd4SXL+WQ==",
-      "license": "MIT",
-      "engines": {
-        "node": ">=6"
-      }
- },
  "node_modules/execa": {
  "version": "5.1.1",
  "resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
  @@ -2954,6 +3494,67 @@
  "url": "https://github.com/sindresorhus/execa?sponsor=1"
  }
  },
- "node_modules/express": {
-      "version": "4.21.2",
-      "resolved": "https://registry.npmjs.org/express/-/express-4.21.2.tgz",
-      "integrity": "sha512-28HqgMZAmih1Czt9ny7qr6ek2qddF4FclbMzwhCREB6OFfH+rXAnuNCwo1/wFvrtbgsQDb4kSbX9de9lFbrXnA==",
-      "license": "MIT",
-      "dependencies": {
-        "accepts": "~1.3.8",
-        "array-flatten": "1.1.1",
-        "body-parser": "1.20.3",
-        "content-disposition": "0.5.4",
-        "content-type": "~1.0.4",
-        "cookie": "0.7.1",
-        "cookie-signature": "1.0.6",
-        "debug": "2.6.9",
-        "depd": "2.0.0",
-        "encodeurl": "~2.0.0",
-        "escape-html": "~1.0.3",
-        "etag": "~1.8.1",
-        "finalhandler": "1.3.1",
-        "fresh": "0.5.2",
-        "http-errors": "2.0.0",
-        "merge-descriptors": "1.0.3",
-        "methods": "~1.1.2",
-        "on-finished": "2.4.1",
-        "parseurl": "~1.3.3",
-        "path-to-regexp": "0.1.12",
-        "proxy-addr": "~2.0.7",
-        "qs": "6.13.0",
-        "range-parser": "~1.2.1",
-        "safe-buffer": "5.2.1",
-        "send": "0.19.0",
-        "serve-static": "1.16.2",
-        "setprototypeof": "1.2.0",
-        "statuses": "2.0.1",
-        "type-is": "~1.6.18",
-        "utils-merge": "1.0.1",
-        "vary": "~1.1.2"
-      },
-      "engines": {
-        "node": ">= 0.10.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/express"
-      }
- },
- "node_modules/express/node_modules/debug": {
-      "version": "2.6.9",
-      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
-      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
-      "license": "MIT",
-      "dependencies": {
-        "ms": "2.0.0"
-      }
- },
- "node_modules/express/node_modules/ms": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
-      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
-      "license": "MIT"
- },
  "node_modules/external-editor": {
  "version": "3.1.0",
  "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
  @@ -3082,6 +3683,39 @@
  "node": ">=8"
  }
  },
- "node_modules/finalhandler": {
-      "version": "1.3.1",
-      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.3.1.tgz",
-      "integrity": "sha512-6BN9trH7bp3qvnrRyzsBz+g3lZxTNZTbVO2EV1CS0WIcDbawYVdYvGflME/9QP0h0pYlCDBCTjYa9nZzMDpyxQ==",
-      "license": "MIT",
-      "dependencies": {
-        "debug": "2.6.9",
-        "encodeurl": "~2.0.0",
-        "escape-html": "~1.0.3",
-        "on-finished": "2.4.1",
-        "parseurl": "~1.3.3",
-        "statuses": "2.0.1",
-        "unpipe": "~1.0.0"
-      },
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
- "node_modules/finalhandler/node_modules/debug": {
-      "version": "2.6.9",
-      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
-      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
-      "license": "MIT",
-      "dependencies": {
-        "ms": "2.0.0"
-      }
- },
- "node_modules/finalhandler/node_modules/ms": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
-      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
-      "license": "MIT"
- },
  "node_modules/find-up": {
  "version": "5.0.0",
  "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
  @@ -3120,6 +3754,26 @@
  "dev": true,
  "license": "ISC"
  },
- "node_modules/follow-redirects": {
-      "version": "1.15.9",
-      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.9.tgz",
-      "integrity": "sha512-gew4GsXizNgdoRyqmyfMHyAmXsZDk6mHkSxZFCzW9gwlbtOW44CDtYavM+y+72qD/Vq2l550kMF52DT8fOLJqQ==",
-      "funding": [
-        {
-          "type": "individual",
-          "url": "https://github.com/sponsors/RubenVerborgh"
-        }
-      ],
-      "license": "MIT",
-      "engines": {
-        "node": ">=4.0"
-      },
-      "peerDependenciesMeta": {
-        "debug": {
-          "optional": true
-        }
-      }
- },
  "node_modules/for-each": {
  "version": "0.3.5",
  "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
  @@ -3136,6 +3790,58 @@
  "url": "https://github.com/sponsors/ljharb"
  }
  },
- "node_modules/form-data": {
-      "version": "4.0.2",
-      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.2.tgz",
-      "integrity": "sha512-hGfm/slu0ZabnNt4oaRZ6uREyfCj6P4fT/n6A1rGV+Z0VdGXjfOhVUpkn6qVQONHGIFwmveGXyDs75+nr6FM8w==",
-      "license": "MIT",
-      "dependencies": {
-        "asynckit": "^0.4.0",
-        "combined-stream": "^1.0.8",
-        "es-set-tostringtag": "^2.1.0",
-        "mime-types": "^2.1.12"
-      },
-      "engines": {
-        "node": ">= 6"
-      }
- },
- "node_modules/form-data-encoder": {
-      "version": "1.7.2",
-      "resolved": "https://registry.npmjs.org/form-data-encoder/-/form-data-encoder-1.7.2.tgz",
-      "integrity": "sha512-qfqtYan3rxrnCk1VYaA4H+Ms9xdpPqvLZa6xmMgFvhO32x7/3J/ExcTd6qpxM0vH2GdMI+poehyBZvqfMTto8A==",
-      "license": "MIT"
- },
- "node_modules/formdata-node": {
-      "version": "4.4.1",
-      "resolved": "https://registry.npmjs.org/formdata-node/-/formdata-node-4.4.1.tgz",
-      "integrity": "sha512-0iirZp3uVDjVGt9p49aTaqjk84TrglENEDuqfdlZQ1roC9CWlPk6Avf8EEnZNcAqPonwkG35x4n3ww/1THYAeQ==",
-      "license": "MIT",
-      "dependencies": {
-        "node-domexception": "1.0.0",
-        "web-streams-polyfill": "4.0.0-beta.3"
-      },
-      "engines": {
-        "node": ">= 12.20"
-      }
- },
- "node_modules/forwarded": {
-      "version": "0.2.0",
-      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
-      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
- "node_modules/fresh": {
-      "version": "0.5.2",
-      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
-      "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
  "node_modules/fs-extra": {
  "version": "10.1.0",
  "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.1.0.tgz",
  @@ -3162,7 +3868,6 @@
  "version": "1.1.2",
  "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
  "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",

*      "dev": true,
         "license": "MIT",
         "funding": {
           "url": "https://github.com/sponsors/ljharb"
  @@ -3203,7 +3908,6 @@
  "version": "1.3.0",
  "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
  "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "call-bind-apply-helpers": "^1.0.2",
  @@ -3228,7 +3932,6 @@
  "version": "1.0.1",
  "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
  "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "dunder-proto": "^1.0.1",
  @@ -3397,7 +4100,6 @@
  "version": "1.2.0",
  "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
  "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
*      "dev": true,
         "license": "MIT",
         "engines": {
           "node": ">= 0.4"
  @@ -3512,7 +4214,6 @@
  "version": "1.1.0",
  "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
  "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
*      "dev": true,
         "license": "MIT",
         "engines": {
           "node": ">= 0.4"
  @@ -3525,7 +4226,6 @@
  "version": "1.0.2",
  "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
  "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "has-symbols": "^1.0.3"
  @@ -3541,7 +4241,6 @@
  "version": "2.0.2",
  "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
  "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "function-bind": "^1.1.2"
  @@ -3561,6 +4260,22 @@
  "upper-case": "^1.1.3"
  }
  },

- "node_modules/http-errors": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
-      "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
-      "license": "MIT",
-      "dependencies": {
-        "depd": "2.0.0",
-        "inherits": "2.0.4",
-        "setprototypeof": "1.2.0",
-        "statuses": "2.0.1",
-        "toidentifier": "1.0.1"
-      },
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
  "node_modules/http-proxy-agent": {
  "version": "7.0.2",
  "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-7.0.2.tgz",
  @@ -3599,11 +4314,19 @@
  "node": ">=10.17.0"
  }
  },
- "node_modules/humanize-ms": {
-      "version": "1.2.1",
-      "resolved": "https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz",
-      "integrity": "sha512-Fl70vYtsAFb/C06PTS9dZBo7ihau+Tu/DNCk/OyHhea07S+aeMWpFFkUaXRa8fI+ScZbEI8dfSxwY7gxZ9SAVQ==",
-      "license": "MIT",
-      "dependencies": {
-        "ms": "^2.0.0"
-      }
- },
  "node_modules/iconv-lite": {
  "version": "0.4.24",
  "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
  "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",

*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "safer-buffer": ">= 2.1.2 < 3"
  @@ -3696,7 +4419,6 @@
  "version": "2.0.4",
  "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
  "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
*      "dev": true,
         "license": "ISC"
       },
       "node_modules/ini": {
  @@ -3803,6 +4525,15 @@
  "node": ">= 12"
  }
  },

- "node_modules/ipaddr.js": {
-      "version": "1.9.1",
-      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
-      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.10"
-      }
- },
  "node_modules/is-array-buffer": {
  "version": "3.0.5",
  "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
  @@ -4093,6 +4824,15 @@
  "node": ">=8"
  }
  },
- "node_modules/is-plain-object": {
-      "version": "5.0.0",
-      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-5.0.0.tgz",
-      "integrity": "sha512-VRSzKkbMm5jMDoKLbltAkFQ5Qr7VDiTFGXxYFXXowVj387GeGNOCsOH6Msy00SGZ3Fp84b1Naa1psqgcCIEP5Q==",
-      "license": "MIT",
-      "engines": {
-        "node": ">=0.10.0"
-      }
- },
  "node_modules/is-regex": {
  "version": "1.2.1",
  "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
  @@ -4600,41 +5340,100 @@
  "version": "1.1.0",
  "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
  "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",

*      "dev": true,
       "license": "MIT",
       "engines": {
         "node": ">= 0.4"
       }
  },

- "node_modules/media-typer": {
-      "version": "0.3.0",
-      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
-      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
- "node_modules/merge-descriptors": {
-      "version": "1.0.3",
-      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.3.tgz",
-      "integrity": "sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==",
-      "license": "MIT",
-      "funding": {
-        "url": "https://github.com/sponsors/sindresorhus"
-      }
- },
  "node_modules/merge-stream": {
  "version": "2.0.0",
  "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
  "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
  "dev": true,
  "license": "MIT"
  },

* "node_modules/merge2": {
*      "version": "1.4.1",
*      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
*      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
*      "dev": true,

- "node_modules/merge2": {
-      "version": "1.4.1",
-      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
-      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
-      "dev": true,
-      "license": "MIT",
-      "engines": {
-        "node": ">= 8"
-      }
- },
- "node_modules/methods": {
-      "version": "1.1.2",
-      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
-      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
- "node_modules/micromatch": {
-      "version": "4.0.8",
-      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
-      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "braces": "^3.0.3",
-        "picomatch": "^2.3.1"
-      },
-      "engines": {
-        "node": ">=8.6"
-      }
- },
- "node_modules/mime": {
-      "version": "1.6.0",
-      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
-      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
-      "license": "MIT",
-      "bin": {
-        "mime": "cli.js"
-      },
-      "engines": {
-        "node": ">=4"
-      }
- },
- "node_modules/mime-db": {
-      "version": "1.52.0",
-      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
-      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
       "license": "MIT",
       "engines": {

*        "node": ">= 8"

-        "node": ">= 0.6"
       }
  },

* "node_modules/micromatch": {
*      "version": "4.0.8",
*      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
*      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
*      "dev": true,

- "node_modules/mime-types": {
-      "version": "2.1.35",
-      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
-      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
       "license": "MIT",
       "dependencies": {

*        "braces": "^3.0.3",
*        "picomatch": "^2.3.1"

-        "mime-db": "1.52.0"
       },
       "engines": {

*        "node": ">=8.6"

-        "node": ">= 0.6"
         }
       },
       "node_modules/mimic-fn": {
  @@ -4690,7 +5489,6 @@
  "version": "2.1.3",
  "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
  "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",

*      "dev": true,
         "license": "MIT"
       },
       "node_modules/mute-stream": {
  @@ -4725,6 +5523,15 @@
  "dev": true,
  "license": "MIT"
  },

- "node_modules/negotiator": {
-      "version": "0.6.3",
-      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
-      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
  "node_modules/neo-async": {
  "version": "2.6.2",
  "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
  @@ -4806,6 +5613,46 @@
  "lower-case": "^1.1.1"
  }
  },
- "node_modules/node-domexception": {
-      "version": "1.0.0",
-      "resolved": "https://registry.npmjs.org/node-domexception/-/node-domexception-1.0.0.tgz",
-      "integrity": "sha512-/jKZoMpw0F8GRwl4/eLROPA3cfcXtLApP0QzLmUT/HuPCZWyB7IY9ZrMeKw2O/nFIqPQB3PVM9aYm0F312AXDQ==",
-      "deprecated": "Use your platform's native DOMException instead",
-      "funding": [
-        {
-          "type": "github",
-          "url": "https://github.com/sponsors/jimmywarting"
-        },
-        {
-          "type": "github",
-          "url": "https://paypal.me/jimmywarting"
-        }
-      ],
-      "license": "MIT",
-      "engines": {
-        "node": ">=10.5.0"
-      }
- },
- "node_modules/node-fetch": {
-      "version": "2.7.0",
-      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz",
-      "integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
-      "license": "MIT",
-      "dependencies": {
-        "whatwg-url": "^5.0.0"
-      },
-      "engines": {
-        "node": "4.x || >=6.0.0"
-      },
-      "peerDependencies": {
-        "encoding": "^0.1.0"
-      },
-      "peerDependenciesMeta": {
-        "encoding": {
-          "optional": true
-        }
-      }
- },
  "node_modules/node-plop": {
  "version": "0.26.3",
  "resolved": "https://registry.npmjs.org/node-plop/-/node-plop-0.26.3.tgz",
  @@ -4912,7 +5759,6 @@
  "version": "4.1.1",
  "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
  "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",

*      "dev": true,
         "license": "MIT",
         "engines": {
           "node": ">=0.10.0"
  @@ -4922,7 +5768,6 @@
  "version": "1.13.4",
  "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
  "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
*      "dev": true,
         "license": "MIT",
         "engines": {
           "node": ">= 0.4"
  @@ -5016,11 +5861,22 @@
  "url": "https://github.com/sponsors/ljharb"
  }
  },

- "node_modules/on-finished": {
-      "version": "2.4.1",
-      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
-      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
-      "license": "MIT",
-      "dependencies": {
-        "ee-first": "1.1.1"
-      },
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
  "node_modules/once": {
  "version": "1.4.0",
  "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
  "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",

*      "dev": true,
         "license": "ISC",
         "dependencies": {
           "wrappy": "1"
  @@ -5042,6 +5898,51 @@
  "url": "https://github.com/sponsors/sindresorhus"
  }
  },

- "node_modules/openai": {
-      "version": "4.100.0",
-      "resolved": "https://registry.npmjs.org/openai/-/openai-4.100.0.tgz",
-      "integrity": "sha512-9soq/wukv3utxcuD7TWFqKdKp0INWdeyhUCvxwrne5KwnxaCp4eHL4GdT/tMFhYolxgNhxFzg5GFwM331Z5CZg==",
-      "license": "Apache-2.0",
-      "dependencies": {
-        "@types/node": "^18.11.18",
-        "@types/node-fetch": "^2.6.4",
-        "abort-controller": "^3.0.0",
-        "agentkeepalive": "^4.2.1",
-        "form-data-encoder": "1.7.2",
-        "formdata-node": "^4.3.2",
-        "node-fetch": "^2.6.7"
-      },
-      "bin": {
-        "openai": "bin/cli"
-      },
-      "peerDependencies": {
-        "ws": "^8.18.0",
-        "zod": "^3.23.8"
-      },
-      "peerDependenciesMeta": {
-        "ws": {
-          "optional": true
-        },
-        "zod": {
-          "optional": true
-        }
-      }
- },
- "node_modules/openai/node_modules/@types/node": {
-      "version": "18.19.100",
-      "resolved": "https://registry.npmjs.org/@types/node/-/node-18.19.100.tgz",
-      "integrity": "sha512-ojmMP8SZBKprc3qGrGk8Ujpo80AXkrP7G2tOT4VWr5jlr5DHjsJF+emXJz+Wm0glmy4Js62oKMdZZ6B9Y+tEcA==",
-      "license": "MIT",
-      "dependencies": {
-        "undici-types": "~5.26.4"
-      }
- },
- "node_modules/openai/node_modules/undici-types": {
-      "version": "5.26.5",
-      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
-      "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
-      "license": "MIT"
- },
  "node_modules/optionator": {
  "version": "0.9.4",
  "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
  @@ -5227,6 +6128,15 @@
  "node": ">=6"
  }
  },
- "node_modules/parseurl": {
-      "version": "1.3.3",
-      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
-      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
  "node_modules/pascal-case": {
  "version": "2.0.1",
  "resolved": "https://registry.npmjs.org/pascal-case/-/pascal-case-2.0.1.tgz",
  @@ -5285,6 +6195,12 @@
  "dev": true,
  "license": "MIT"
  },
- "node_modules/path-to-regexp": {
-      "version": "0.1.12",
-      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.12.tgz",
-      "integrity": "sha512-RA1GjUVMnvYFxuqovrEqZoxxW5NUZqbwKtYz/Tt7nXerk0LbLblQmrsgdeOxV5SFHf0UDggjS/bSeOZwt1pmEQ==",
-      "license": "MIT"
- },
  "node_modules/path-type": {
  "version": "4.0.0",
  "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
  @@ -5390,6 +6306,19 @@
  "react-is": "^16.13.1"
  }
  },
- "node_modules/proxy-addr": {
-      "version": "2.0.7",
-      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
-      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
-      "license": "MIT",
-      "dependencies": {
-        "forwarded": "0.2.0",
-        "ipaddr.js": "1.9.1"
-      },
-      "engines": {
-        "node": ">= 0.10"
-      }
- },
  "node_modules/proxy-agent": {
  "version": "6.5.0",
  "resolved": "https://registry.npmjs.org/proxy-agent/-/proxy-agent-6.5.0.tgz",
  @@ -5414,7 +6343,6 @@
  "version": "1.1.0",
  "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
  "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",

*      "dev": true,
         "license": "MIT"
       },
       "node_modules/punycode": {
  @@ -5427,6 +6355,21 @@
  "node": ">=6"
  }
  },

- "node_modules/qs": {
-      "version": "6.13.0",
-      "resolved": "https://registry.npmjs.org/qs/-/qs-6.13.0.tgz",
-      "integrity": "sha512-+38qI9SOr8tfZ4QmJNplMUxqjbe7LKvvZgWdExBOmd+egZTtjLB67Gu0HRX3u/XOq7UU2Nx6nsjvS16Z9uwfpg==",
-      "license": "BSD-3-Clause",
-      "dependencies": {
-        "side-channel": "^1.0.6"
-      },
-      "engines": {
-        "node": ">=0.6"
-      },
-      "funding": {
-        "url": "https://github.com/sponsors/ljharb"
-      }
- },
  "node_modules/queue-microtask": {
  "version": "1.2.3",
  "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
  @@ -5448,6 +6391,30 @@
  ],
  "license": "MIT"
  },
- "node_modules/range-parser": {
-      "version": "1.2.1",
-      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
-      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
- "node_modules/raw-body": {
-      "version": "2.5.2",
-      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.2.tgz",
-      "integrity": "sha512-8zGqypfENjCIqGhgXToC8aB2r7YrBX+AQAfIPs/Mlk+BtPTztOvTS01NRW/3Eh60J+a48lt8qsCzirQ6loCVfA==",
-      "license": "MIT",
-      "dependencies": {
-        "bytes": "3.1.2",
-        "http-errors": "2.0.0",
-        "iconv-lite": "0.4.24",
-        "unpipe": "1.0.0"
-      },
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
  "node_modules/rc": {
  "version": "1.2.8",
  "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
  @@ -5723,7 +6690,6 @@
  "version": "5.2.1",
  "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
  "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",

*      "dev": true,
         "funding": [
           {
             "type": "github",
  @@ -5779,7 +6745,6 @@
  "version": "2.1.2",
  "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
  "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
*      "dev": true,
         "license": "MIT"
       },
       "node_modules/scheduler": {
  @@ -5801,6 +6766,54 @@
  "node": ">=10"
  }
  },

- "node_modules/send": {
-      "version": "0.19.0",
-      "resolved": "https://registry.npmjs.org/send/-/send-0.19.0.tgz",
-      "integrity": "sha512-dW41u5VfLXu8SJh5bwRmyYUbAoSB3c9uQh6L8h/KtsFREPWpbX1lrljJo186Jc4nmci/sGUZ9a0a0J2zgfq2hw==",
-      "license": "MIT",
-      "dependencies": {
-        "debug": "2.6.9",
-        "depd": "2.0.0",
-        "destroy": "1.2.0",
-        "encodeurl": "~1.0.2",
-        "escape-html": "~1.0.3",
-        "etag": "~1.8.1",
-        "fresh": "0.5.2",
-        "http-errors": "2.0.0",
-        "mime": "1.6.0",
-        "ms": "2.1.3",
-        "on-finished": "2.4.1",
-        "range-parser": "~1.2.1",
-        "statuses": "2.0.1"
-      },
-      "engines": {
-        "node": ">= 0.8.0"
-      }
- },
- "node_modules/send/node_modules/debug": {
-      "version": "2.6.9",
-      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
-      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
-      "license": "MIT",
-      "dependencies": {
-        "ms": "2.0.0"
-      }
- },
- "node_modules/send/node_modules/debug/node_modules/ms": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
-      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
-      "license": "MIT"
- },
- "node_modules/send/node_modules/encodeurl": {
-      "version": "1.0.2",
-      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
-      "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
  "node_modules/sentence-case": {
  "version": "2.1.1",
  "resolved": "https://registry.npmjs.org/sentence-case/-/sentence-case-2.1.1.tgz",
  @@ -5812,6 +6825,21 @@
  "upper-case-first": "^1.1.2"
  }
  },
- "node_modules/serve-static": {
-      "version": "1.16.2",
-      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.16.2.tgz",
-      "integrity": "sha512-VqpjJZKadQB/PEbEwvFdO43Ax5dFBZ2UECszz8bQ7pi7wt//PWe1P6MN7eCnjsatYtBT6EuiClbjSWP2WrIoTw==",
-      "license": "MIT",
-      "dependencies": {
-        "encodeurl": "~2.0.0",
-        "escape-html": "~1.0.3",
-        "parseurl": "~1.3.3",
-        "send": "0.19.0"
-      },
-      "engines": {
-        "node": ">= 0.8.0"
-      }
- },
  "node_modules/set-function-length": {
  "version": "1.2.2",
  "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
  @@ -5861,6 +6889,12 @@
  "node": ">= 0.4"
  }
  },
- "node_modules/setprototypeof": {
-      "version": "1.2.0",
-      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
-      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
-      "license": "ISC"
- },
  "node_modules/sharp": {
  "version": "0.34.1",
  "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.34.1.tgz",
  @@ -5942,7 +6976,6 @@
  "version": "1.1.0",
  "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
  "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",

*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "es-errors": "^1.3.0",
  @@ -5962,7 +6995,6 @@
  "version": "1.0.0",
  "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
  "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "es-errors": "^1.3.0",
  @@ -5979,7 +7011,6 @@
  "version": "1.0.1",
  "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
  "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "call-bound": "^1.0.2",
  @@ -5998,7 +7029,6 @@
  "version": "1.0.2",
  "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
  "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
*      "dev": true,
         "license": "MIT",
         "dependencies": {
           "call-bound": "^1.0.2",
  @@ -6118,6 +7148,15 @@
  "dev": true,
  "license": "BSD-3-Clause"
  },

- "node_modules/statuses": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
-      "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
  "node_modules/streamsearch": {
  "version": "1.1.0",
  "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",
  @@ -6407,6 +7446,21 @@
  "node": ">=8.0"
  }
  },
- "node_modules/toidentifier": {
-      "version": "1.0.1",
-      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
-      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
-      "license": "MIT",
-      "engines": {
-        "node": ">=0.6"
-      }
- },
- "node_modules/tr46": {
-      "version": "0.0.3",
-      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
-      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
-      "license": "MIT"
- },
  "node_modules/ts-api-utils": {
  "version": "2.1.0",
  "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.1.0.tgz",
  @@ -6598,6 +7652,19 @@
  "url": "https://github.com/sponsors/sindresorhus"
  }
  },
- "node_modules/type-is": {
-      "version": "1.6.18",
-      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
-      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
-      "license": "MIT",
-      "dependencies": {
-        "media-typer": "0.3.0",
-        "mime-types": "~2.1.24"
-      },
-      "engines": {
-        "node": ">= 0.6"
-      }
- },
  "node_modules/typed-array-buffer": {
  "version": "1.0.3",
  "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
  @@ -6750,9 +7817,14 @@
  "version": "6.21.0",
  "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
  "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",

*      "dev": true,
       "license": "MIT"
  },

- "node_modules/universal-user-agent": {
-      "version": "6.0.1",
-      "resolved": "https://registry.npmjs.org/universal-user-agent/-/universal-user-agent-6.0.1.tgz",
-      "integrity": "sha512-yCzhz6FN2wU1NiiQRogkTQszlQSlpWaw8SvVegAc+bDxbzHgh1vX8uIe8OYyMH6DwH+sdTJsgMl36+mSMdRJIQ==",
-      "license": "ISC"
- },
  "node_modules/universalify": {
  "version": "2.0.1",
  "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
  @@ -6763,6 +7835,15 @@
  "node": ">= 10.0.0"
  }
  },
- "node_modules/unpipe": {
-      "version": "1.0.0",
-      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
-      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
  "node_modules/update-check": {
  "version": "1.5.4",
  "resolved": "https://registry.npmjs.org/update-check/-/update-check-1.5.4.tgz",
  @@ -6808,6 +7889,15 @@
  "dev": true,
  "license": "MIT"
  },
- "node_modules/utils-merge": {
-      "version": "1.0.1",
-      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
-      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.4.0"
-      }
- },
  "node_modules/v8-compile-cache-lib": {
  "version": "3.0.1",
  "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
  @@ -6825,6 +7915,15 @@
  "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
  }
  },
- "node_modules/vary": {
-      "version": "1.1.2",
-      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
-      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 0.8"
-      }
- },
  "node_modules/wcwidth": {
  "version": "1.0.1",
  "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
  @@ -6839,6 +7938,31 @@
  "resolved": "apps/web",
  "link": true
  },
- "node_modules/web-streams-polyfill": {
-      "version": "4.0.0-beta.3",
-      "resolved": "https://registry.npmjs.org/web-streams-polyfill/-/web-streams-polyfill-4.0.0-beta.3.tgz",
-      "integrity": "sha512-QW95TCTaHmsYfHDybGMwO5IJIM93I/6vTRk+daHTWFPhwh+C8Cg7j7XyKrwrj8Ib6vYXe0ocYNrmzY4xAAN6ug==",
-      "license": "MIT",
-      "engines": {
-        "node": ">= 14"
-      }
- },
- "node_modules/webidl-conversions": {
-      "version": "3.0.1",
-      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
-      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
-      "license": "BSD-2-Clause"
- },
- "node_modules/whatwg-url": {
-      "version": "5.0.0",
-      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
-      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
-      "license": "MIT",
-      "dependencies": {
-        "tr46": "~0.0.3",
-        "webidl-conversions": "^3.0.0"
-      }
- },
  "node_modules/which": {
  "version": "2.0.2",
  "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
  @@ -6980,7 +8104,6 @@
  "version": "1.0.2",
  "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
  "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",

*      "dev": true,
         "license": "ISC"
       },
       "node_modules/yn": {
  @@ -7006,9 +8129,127 @@
  "url": "https://github.com/sponsors/sindresorhus"
  }
  },

- "packages/api": {
-      "name": "@change-logger/api",
-      "version": "1.0.0",
-      "dependencies": {
-        "axios": "^1.6.7",
-        "cors": "^2.8.5",
-        "dotenv": "^16.0.0",
-        "express": "^4.18.2",
-        "openai": "^4.0.0"
-      },
-      "devDependencies": {
-        "@types/axios": "^0.9.36",
-        "@types/cors": "^2.8.17",
-        "@types/express": "^4.17.21",
-        "@types/node": "^18.0.0",
-        "typescript": "^4.9.0"
-      }
- },
- "packages/api/node_modules/@types/node": {
-      "version": "18.19.100",
-      "resolved": "https://registry.npmjs.org/@types/node/-/node-18.19.100.tgz",
-      "integrity": "sha512-ojmMP8SZBKprc3qGrGk8Ujpo80AXkrP7G2tOT4VWr5jlr5DHjsJF+emXJz+Wm0glmy4Js62oKMdZZ6B9Y+tEcA==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "undici-types": "~5.26.4"
-      }
- },
- "packages/api/node_modules/typescript": {
-      "version": "4.9.5",
-      "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.9.5.tgz",
-      "integrity": "sha512-1FXk9E2Hm+QzZQ7z+McJiHL4NW1F2EzMu9Nq9i3zAaGqibafqYwCVU6WyWAuyQRRzOlxou8xZSyXLEN8oKj24g==",
-      "dev": true,
-      "license": "Apache-2.0",
-      "bin": {
-        "tsc": "bin/tsc",
-        "tsserver": "bin/tsserver"
-      },
-      "engines": {
-        "node": ">=4.2.0"
-      }
- },
- "packages/api/node_modules/undici-types": {
-      "version": "5.26.5",
-      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
-      "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
-      "dev": true,
-      "license": "MIT"
- },
  "packages/cli": {
-      "name": "@change-logger/cli",
       "version": "1.0.0",

*      "license": "ISC"

-      "license": "ISC",
-      "dependencies": {
-        "@octokit/rest": "^19.0.0",
-        "axios": "^1.9.0",
-        "commander": "^9.0.0",
-        "dotenv": "^16.0.0"
-      },
-      "devDependencies": {
-        "@octokit/types": "^14.0.0",
-        "@types/node": "^18.0.0",
-        "typescript": "^4.9.0"
-      }
- },
- "packages/cli/node_modules/@octokit/openapi-types": {
-      "version": "25.0.0",
-      "resolved": "https://registry.npmjs.org/@octokit/openapi-types/-/openapi-types-25.0.0.tgz",
-      "integrity": "sha512-FZvktFu7HfOIJf2BScLKIEYjDsw6RKc7rBJCdvCTfKsVnx2GEB/Nbzjr29DUdb7vQhlzS/j8qDzdditP0OC6aw==",
-      "dev": true,
-      "license": "MIT"
- },
- "packages/cli/node_modules/@octokit/types": {
-      "version": "14.0.0",
-      "resolved": "https://registry.npmjs.org/@octokit/types/-/types-14.0.0.tgz",
-      "integrity": "sha512-VVmZP0lEhbo2O1pdq63gZFiGCKkm8PPp8AUOijlwPO6hojEVjspA0MWKP7E4hbvGxzFKNqKr6p0IYtOH/Wf/zA==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "@octokit/openapi-types": "^25.0.0"
-      }
- },
- "packages/cli/node_modules/@types/node": {
-      "version": "18.19.100",
-      "resolved": "https://registry.npmjs.org/@types/node/-/node-18.19.100.tgz",
-      "integrity": "sha512-ojmMP8SZBKprc3qGrGk8Ujpo80AXkrP7G2tOT4VWr5jlr5DHjsJF+emXJz+Wm0glmy4Js62oKMdZZ6B9Y+tEcA==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "undici-types": "~5.26.4"
-      }
- },
- "packages/cli/node_modules/commander": {
-      "version": "9.5.0",
-      "resolved": "https://registry.npmjs.org/commander/-/commander-9.5.0.tgz",
-      "integrity": "sha512-KRs7WVDKg86PWiuAqhDrAQnTXZKraVcCc6vFdL14qrZ/DcWwuRo7VoiYXalXO7S5GKpqYiVEwCbgFDfxNHKJBQ==",
-      "license": "MIT",
-      "engines": {
-        "node": "^12.20.0 || >=14"
-      }
- },
- "packages/cli/node_modules/typescript": {
-      "version": "4.9.5",
-      "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.9.5.tgz",
-      "integrity": "sha512-1FXk9E2Hm+QzZQ7z+McJiHL4NW1F2EzMu9Nq9i3zAaGqibafqYwCVU6WyWAuyQRRzOlxou8xZSyXLEN8oKj24g==",
-      "dev": true,
-      "license": "Apache-2.0",
-      "bin": {
-        "tsc": "bin/tsc",
-        "tsserver": "bin/tsserver"
-      },
-      "engines": {
-        "node": ">=4.2.0"
-      }
- },
- "packages/cli/node_modules/undici-types": {
-      "version": "5.26.5",
-      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
-      "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
-      "dev": true,
-      "license": "MIT"
  },
  "packages/eslint-config": {
  "name": "@repo/eslint-config",
  ***
  File: package.json
  Status: modified
  Additions: 4
  Deletions: 1
  Changes: 5

Patch:
@@ -6,9 +6,12 @@
"dev": "turbo run dev",
"lint": "turbo run lint",
"format": "prettier --write \"\*_/_.{ts,tsx,md}\"",

- "check-types": "turbo run check-types"

* "check-types": "turbo run check-types",
* "changelog": "node packages/cli/dist/index.js",
* "start:api": "cd packages/api && npm start"
  },
  "devDependencies": {
* "@change-logger/cli": "workspace:\*",
  "@types/node": "^22.15.18",
  "prettier": "^3.5.3",
  "turbo": "^2.5.3",

---

File: packages/api/package.json
Status: added
Additions: 26
Deletions: 0
Changes: 26

Patch:
@@ -0,0 +1,26 @@
+{

- "name": "@change-logger/api",
- "version": "1.0.0",
- "main": "dist/index.js",
- "type": "commonjs",
- "scripts": {
- "build": "tsc",
- "dev": "tsc -w",
- "start": "node dist/index.js",
- "test": "echo \"Error: no test specified\" && exit 1"
- },
- "dependencies": {
- "axios": "^1.6.7",
- "cors": "^2.8.5",
- "dotenv": "^16.0.0",
- "express": "^4.18.2",
- "openai": "^4.0.0"
- },
- "devDependencies": {
- "@types/axios": "^0.9.36",
- "@types/cors": "^2.8.17",
- "@types/express": "^4.17.21",
- "@types/node": "^18.0.0",
- "typescript": "^4.9.0"
- }
  +}
  ***
  File: packages/api/src/examples/analyze-changes.ts
  Status: added
  Additions: 79
  Deletions: 0
  Changes: 79

Patch:
@@ -0,0 +1,79 @@
+import axios from 'axios';
+import _ as fs from 'fs';
+import _ as path from 'path';

- +interface AnalysisRequest {
- diffContent: string;
- options?: {
- format?: 'markdown' | 'json';
- includeOriginal?: boolean;
- };
  +}
- +interface AnalysisResponse {
- analysis:
- | string
- | Array<{
-        title: string;
-        content: string;
-      }>;
- originalDiff?: string;
  +}
- +async function analyzeChanges(
- diffFilePath: string,
- options: AnalysisRequest['options'] = {}
  +): Promise<AnalysisResponse> {
- try {
- // Read the diff file
- const diffContent = await fs.promises.readFile(diffFilePath, 'utf-8');
-
- // Make the API request
- const response = await axios.post<AnalysisResponse>(
-      'http://localhost:3000/api/analyze',
-      {
-        diffContent,
-        options,
-      }
- );
-
- return response.data;
- } catch (error) {
- const errorMessage = error instanceof Error ? error.message : String(error);
- console.error('Error analyzing changes:', errorMessage);
- throw error;
- }
  +}
- +// Example usage
  +async function main() {
- try {
- // Example 1: Get markdown analysis
- const markdownAnalysis = await analyzeChanges('path/to/your/CODE_DIFFS.md');
- console.log('Markdown Analysis:', markdownAnalysis.analysis);
-
- // Example 2: Get JSON analysis with original diff
- const jsonAnalysis = await analyzeChanges('path/to/your/CODE_DIFFS.md', {
-      format: 'json',
-      includeOriginal: true,
- });
- console.log('JSON Analysis:', JSON.stringify(jsonAnalysis, null, 2));
-
- // Save the analysis to a file
- const outputPath = path.join(process.cwd(), 'CHANGE_ANALYSIS.md');
- await fs.promises.writeFile(
-      outputPath,
-      typeof markdownAnalysis.analysis === 'string'
-        ? markdownAnalysis.analysis
-        : JSON.stringify(markdownAnalysis.analysis, null, 2)
- );
- console.log(`Analysis saved to: ${outputPath}`);
- } catch (error) {
- const errorMessage = error instanceof Error ? error.message : String(error);
- console.error('Failed to analyze changes:', errorMessage);
- process.exit(1);
- }
  +}
- +// Run the example
  +main();
  ***
  File: packages/api/src/index.ts
  Status: modified
  Additions: 100
  Deletions: 6
  Changes: 106

Patch:
@@ -1,16 +1,110 @@
-import express from 'express';
+import express, { Request, Response } from 'express';
import cors from 'cors';
+import \* as dotenv from 'dotenv';
+import OpenAI from 'openai';

- +dotenv.config();
  const app = express();
  +const port = process.env.PORT || 3000;
- +// Initialize OpenAI client
  +const openai = new OpenAI({
- apiKey: process.env.OPENAI_API_KEY,
  +});

+// Middleware
app.use(cors());
app.use(express.json());

-// Routes for changelog management
-app.get('/api/changelogs', (req, res) => {

- // Implementation here
  +interface AnalysisRequest {

* diffContent: string;
* options?: {
* format?: 'markdown' | 'json';
* includeOriginal?: boolean;
* };
  +}
* +// Analysis endpoint
  +app.post('/api/analyze', async (req: Request, res: Response) => {
* try {
* const { diffContent, options = {} } = req.body as AnalysisRequest;
*
* if (!diffContent) {
*      return res.status(400).json({
*        error: 'Missing required field: diffContent',
*      });
* }
*
* // Create the prompt for OpenAI
* const prompt = `Please analyze the following code changes and provide a detailed explanation of:
  +1. What changes were made
  +2. Why these changes were likely made
  +3. The impact of these changes
  +4. Any potential risks or considerations
* +Here are the code changes to analyze:
* +${diffContent}`;
*
* // Get analysis from OpenAI
* const completion = await openai.chat.completions.create({
*      model: 'gpt-4-turbo-preview',
*      messages: [
*        {
*          role: 'system',
*          content:
*            'You are an expert software developer who analyzes code changes and explains them in clear, technical terms.',
*        },
*        {
*          role: 'user',
*          content: prompt,
*        },
*      ],
*      temperature: 0.7,
*      max_tokens: 2000,
* });
*
* const analysis = completion.choices[0].message.content;
*
* // Format the response based on options
* if (options.format === 'json') {
*      // Parse the markdown into a structured format
*      const sections = analysis?.split('##').map((section) => {
*        const [title, ...content] = section.split('\n');
*        return {
*          title: title.trim(),
*          content: content.join('\n').trim(),
*        };
*      });
*
*      return res.json({
*        analysis: sections,
*        originalDiff: options.includeOriginal ? diffContent : undefined,
*      });
* }
*
* // Default to markdown format
* return res.json({
*      analysis,
*      originalDiff: options.includeOriginal ? diffContent : undefined,
* });
* } catch (error) {
* console.error('Error analyzing changes:', error);
* return res.status(500).json({
*      error: 'error on OpenAI servers',
*      details:
*        error instanceof Error ? 'error on OpenAI servers' : 'Unknown error',
* });
* }
  +});
* +// Health check endpoint
  +app.get('/health', (\_req: Request, res: Response) => {
* res.json({ status: 'ok' });
  });

-app.listen(3000, () => {

- console.log('API running on port 3000');
  +// Start server
  +app.listen(port, () => {

* console.log(`API server running on port ${port}`);
  });
  ---
  File: packages/api/tsconfig.json
  Status: added
  Additions: 8
  Deletions: 0
  Changes: 8

Patch:
@@ -0,0 +1,8 @@
+{

- "extends": "../../tsconfig.base.json",
- "compilerOptions": {
- "outDir": "./dist",
- "rootDir": "./src"
- },
- "include": ["src/**/*"]
  +}
  ***
  File: packages/cli/package.json
  Status: modified
  Additions: 18
  Deletions: 3
  Changes: 21

Patch:
@@ -1,12 +1,27 @@
{

- "name": "cli",

* "name": "@change-logger/cli",
  "version": "1.0.0",

- "main": "index.js",

* "main": "dist/index.js",
* "type": "commonjs",
  "scripts": {
* "build": "tsc && node -e \"require('fs').writeFileSync('dist/index.js', '#!/usr/bin/env node\\n' + require('fs').readFileSync('dist/index.js', 'utf8'))\"",
* "dev": "tsc -w",
* "start": "node dist/index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",

- "description": ""

* "description": "",
* "dependencies": {
* "@octokit/rest": "^19.0.0",
* "axios": "^1.9.0",
* "commander": "^9.0.0",
* "dotenv": "^16.0.0"
* },
* "devDependencies": {
* "@octokit/types": "^14.0.0",
* "@types/node": "^18.0.0",
* "typescript": "^4.9.0"
* }
  }
  ---
  File: packages/cli/src/README.md
  Status: added
  Additions: 114
  Deletions: 0
  Changes: 114

Patch:
@@ -0,0 +1,114 @@
+# Change Logger CLI

- +**Change Logger** is a developer-friendly CLI tool that automates the process of generating changelogs and analyzing code changes in your GitHub repositories.  
  +It helps teams keep track of what’s changed, why, and the impact of those changes—making releases and code reviews easier and more transparent.
- +- **Generate changelogs** from your commit history and pull requests.
  +- **Analyze code diffs** using AI for deeper insights and summaries.
  +- **Integrate with your workflow** using git hooks or run manually as needed.
- +Whether you’re working solo or as part of a team, Change Logger streamlines your release process and keeps your documentation up to date with minimal effort.
- +## Installation
- +Add the CLI to your dev dependencies:
- +`bash
+npm install --save-dev @change-logger/cli
+`
- +If you are using a monorepo with npm workspaces, add it to your root `package.json`:
- +```json
  +"devDependencies": {
- "@change-logger/cli": "workspace:\*"
  +}
  +```
- +Then run:
- +`bash
+npm install
+`
- +````
- +---
- +**Summary:**
- +- For npm: `npm install --save-dev @change-logger/cli`
  +- For workspaces: add `"@change-logger/cli": "workspace:*"` to `devDependencies` and run `npm install`.
- +Let me know if you want this formatted for a specific section of your README!
- +## Usage
- +### Generate a Changelog
- +Generate a changelog comparing your current branch to a stable branch:
- +```bash
  +npm run changelog generateChangeLog -r owner/repo -b feature-branch -s main -d code_diffs.md
  +````
- +- `-r owner/repo` — GitHub repository (required if not in a git repo)
  +- `-b feature-branch` — Branch to compare (defaults to current branch)
  +- `-s main` — Stable branch to compare against (defaults to repo default)
  +- `-d code_diffs.md` — Output file for code differences (default: `CODE_DIFFS.md`)
- +### Analyze Code Changes with AI
- +Analyze code differences using the AI API:
- +`bash
+npm run changelog analyze-changes -d code_diffs.md -o change_analysis.md
+`
- +- `-d code_diffs.md` — Diff file to analyze (default: `CODE_DIFFS.md`)
  +- `-o change_analysis.md` — Output file for analysis (default: `CHANGE_ANALYSIS.md`)
- +### Set Up Git Hooks
- +Automatically generate changelogs on commit:
- +`bash
+npm run changelog setup-hooks
+`
- +### Test Your GitHub Token
- +Check if your GitHub token is valid and has the correct permissions:
- +`bash
+npm run changelog test-token
+`
- +---
- +## Notes
- +- Make sure your `.env` file is present and contains a valid `GITHUB_TOKEN` before running commands.
  +- For AI analysis, ensure the API server is running and the `OPENAI_API_KEY` is set in its `.env` file.
  +- You can override the API URL for analysis with the `--api-url` option if needed.
- +---
- +## Example Workflow
- +1. Generate code diffs and a changelog:
-
- ```bash

  ```

- npm run changelog generateChangeLog -r owner/repo -b feature-branch -s main -d code_diffs.md
- ```

  ```

- +2. Analyze the code diffs with AI:
- ```bash

  ```

- npm run changelog analyze-changes -d code_diffs.md -o change_analysis.md
- ```

  ```

- +---
- +## License
- +MIT
  ***
  File: packages/cli/src/commands/analyze-changes.ts
  Status: added
  Additions: 27
  Deletions: 0
  Changes: 27

Patch:
@@ -0,0 +1,27 @@
+import { Command } from 'commander';
+import { analyzeChanges } from '../utils/analyze-changes';

- +export function createAnalyzeChangesCommand(): Command {
- return new Command('analyze-changes')
- .description('Analyze code changes and generate a human-readable report')
- .option(
-      '-d, --diff <file>',
-      'Input file containing code differences',
-      'CODE_DIFFS.md'
- )
- .option(
-      '-o, --output <file>',
-      'Output file for the analysis report',
-      'CHANGE_ANALYSIS.md'
- )
- .action(async (options) => {
-      try {
-        await analyzeChanges({
-          diffFile: options.diff,
-          outputFile: options.output,
-        });
-      } catch (error) {
-        process.exit(1);
-      }
- });
  +}

---

File: packages/cli/src/commands/generate-changelog.ts
Status: added
Additions: 191
Deletions: 0
Changes: 191

Patch:
@@ -0,0 +1,191 @@
+import { Command } from 'commander';
+import { Octokit } from '@octokit/rest';
+import _ as fs from 'fs';
+import _ as path from 'path';
+import { getConfig } from '../config/config';
+import {

- getCurrentRepo,
- getCurrentBranch,
- getDefaultStableBranch,
  +} from '../utils/git-utils';
  +import { generateMarkdown, formatFileDiff } from '../utils/markdown';
- +export function createGenerateChangelogCommand() {
- return new Command('generateChangeLog')
- .description('Generate changelog from recent commits')
- .option('-r, --repo <repo>', 'GitHub repository (owner/repo)')
- .option(
-      '-b, --base <branch>',
-      'Branch to compare (default: current branch)'
- )
- .option('-o, --output <file>', 'Output file path', 'CHANGELOG.md')
- .option('-s, --stable <branch>', 'Stable branch to compare against')
- .option(
-      '-d, --diff <file>',
-      'Output file for code differences',
-      'CODE_DIFFS.md'
- )
- .action(async (options) => {
-      try {
-        const config = await getConfig();
-        const octokit = new Octokit({
-          auth: process.env.GITHUB_TOKEN,
-        });
-
-        // Get repository information
-        let owner: string;
-        let repo: string;
-        if (options.repo) {
-          [owner, repo] = options.repo.split('/');
-        } else {
-          try {
-            const repoInfo = getCurrentRepo();
-            owner = repoInfo.owner;
-            repo = repoInfo.repo;
-            console.log(`\n📦 Using repository: ${owner}/${repo}`);
-          } catch (repoError) {
-            console.error('\n❌ Error getting repository information:');
-            console.error('Could not determine current repository.');
-            console.error('Please either:');
-            console.error('1. Run this command from a git repository, or');
-            console.error('2. Specify the repository using -r owner/repo');
-            process.exit(1);
-          }
-        }
-
-        // Get branch information
-        let currentBranch: string;
-        let stableBranch: string;
-        try {
-          currentBranch = options.base || getCurrentBranch();
-          console.log(`\n🌿 Current branch: ${currentBranch}`);
-
-          stableBranch =
-            options.stable ||
-            (await getDefaultStableBranch(octokit, owner, repo));
-          console.log(`🌿 Stable branch: ${stableBranch}`);
-        } catch (branchError) {
-          console.error('\n❌ Error getting branch information:');
-          console.error(
-            branchError instanceof Error ? branchError.message : 'Unknown error'
-          );
-          process.exit(1);
-        }
-
-        console.log(`\n🔄 Generating changelog for ${owner}/${repo}`);
-        console.log(`📊 Comparing ${currentBranch} against ${stableBranch}`);
-
-        // Get the stable branch state
-        try {
-          const { data: stableBranchData } = await octokit.repos.getBranch({
-            owner,
-            repo,
-            branch: stableBranch,
-          });
-          const stableCommit = stableBranchData.commit.sha;
-          console.log(`✅ Found stable branch commit: ${stableCommit}`);
-
-          // Get the current branch state
-          const { data: currentBranchData } = await octokit.repos.getBranch({
-            owner,
-            repo,
-            branch: currentBranch,
-          });
-          const currentCommit = currentBranchData.commit.sha;
-          console.log(`✅ Found current branch commit: ${currentCommit}`);
-
-          // Get commits between stable branch and current branch
-          const { data: compareData } = await octokit.repos.compareCommits({
-            owner,
-            repo,
-            base: stableCommit,
-            head: currentCommit,
-          });
-
-          const commits = compareData.commits || [];
-          const files = compareData.files || [];
-
-          if (commits.length === 0) {
-            console.warn(
-              '\n⚠️  Warning: No commits found between stable and current branch.'
-            );
-          } else {
-            console.log(
-              `\n📝 Found ${commits.length} commits and ${files.length} changed files`
-            );
-          }
-
-          // Get the latest release for version information
-          const { data: releases } = await octokit.repos.listReleases({
-            owner,
-            repo,
-          });
-
-          // Generate the changelog markdown
-          const latestRelease = releases[0];
-          const markdown = generateMarkdown(commits, latestRelease, {
-            stableBranch,
-            currentBranch,
-            lastMergedCommit: stableCommit,
-            currentCommit,
-            lastMergedPR: 0,
-          });
-
-          // Generate the code differences file
-          let diffContent = `# Code Differences between ${stableBranch} and ${currentBranch}\n\n`;
-          diffContent += `## Summary\n`;
-          diffContent += `- Total files changed: ${files.length}\n`;
-          diffContent += `- Total additions: ${files.reduce((sum, file) => sum + file.additions, 0)}\n`;
-          diffContent += `- Total deletions: ${files.reduce((sum, file) => sum + file.deletions, 0)}\n\n`;
-
-          diffContent += `## File Changes\n`;
-          files.forEach((file) => {
-            diffContent += formatFileDiff(file);
-          });
-
-          // Write both files
-          const outputPath = path.resolve(process.cwd(), options.output);
-          const diffPath = path.resolve(process.cwd(), options.diff);
-
-          try {
-            console.log(`\nSaving files:`);
-            console.log(`Changelog: ${outputPath}`);
-            console.log(`Code diffs: ${diffPath}\n`);
-
-            await fs.promises.writeFile(outputPath, markdown);
-            console.log(`✅ Changelog saved successfully: ${outputPath}`);
-
-            await fs.promises.writeFile(diffPath, diffContent);
-            console.log(`✅ Code differences saved successfully: ${diffPath}`);
-          } catch (writeError) {
-            console.error('\n❌ Error saving files:');
-            console.error(
-              `Failed to save to: ${writeError instanceof Error ? writeError.message : 'Unknown error'}`
-            );
-            console.error(`Attempted to save to:`);
-            console.error(`- Changelog: ${outputPath}`);
-            console.error(`- Code diffs: ${diffPath}`);
-            process.exit(1);
-          }
-        } catch (error) {
-          const err = error as Error;
-          console.error('\n❌ Error generating changelog:');
-          console.error(err.message);
-          if (err.stack) {
-            console.error('\nStack trace:');
-            console.error(err.stack);
-          }
-          process.exit(1);
-        }
-      } catch (error) {
-        const err = error as Error;
-        console.error('\n❌ Error generating changelog:');
-        console.error(err.message);
-        if (err.stack) {
-          console.error('\nStack trace:');
-          console.error(err.stack);
-        }
-        process.exit(1);
-      }
- });
  +}

---

File: packages/cli/src/commands/setup-hooks.ts
Status: added
Additions: 16
Deletions: 0
Changes: 16

Patch:
@@ -0,0 +1,16 @@
+import { Command } from 'commander';
+import { setupGitHooks } from '../utils/git-hooks';

- +export function createSetupHooksCommand() {
- return new Command('setup-hooks')
- .description('Set up git hooks for automatic changelog generation')
- .action(async () => {
-      try {
-        await setupGitHooks();
-        console.log('Git hooks set up successfully');
-      } catch (error) {
-        console.error('Error setting up git hooks:', error);
-        process.exit(1);
-      }
- });
  +}

---

File: packages/cli/src/commands/test-token.ts
Status: added
Additions: 115
Deletions: 0
Changes: 115

Patch:
@@ -0,0 +1,115 @@
+import { Command } from 'commander';
+import { Octokit } from '@octokit/rest';

- +export function createTestTokenCommand() {
- return new Command('test-token')
- .description('Test GitHub token permissions')
- .option('-r, --repo <repo>', 'GitHub repository (owner/repo)')
- .action(async (options) => {
-      try {
-        const octokit = new Octokit({
-          auth: process.env.GITHUB_TOKEN,
-        });
-
-        if (!process.env.GITHUB_TOKEN) {
-          throw new Error('GITHUB_TOKEN is not set');
-        }
-
-        console.log('Testing GitHub token...\n');
-
-        // Test 1: Check if token is valid
-        console.log('1. Testing token validity...');
-        const { data: user } = await octokit.users.getAuthenticated();
-        console.log('✅ Token is valid');
-        console.log(`   Authenticated as: ${user.login}\n`);
-        console.log('   Raw user data:', JSON.stringify(user, null, 2), '\n');
-        console.log(
-          '   Octokit object structure:',
-          {
-            auth: octokit.auth,
-            log: octokit.log,
-            request: octokit.request,
-            rest: Object.keys(octokit.rest),
-            graphql: octokit.graphql,
-            paginate: octokit.paginate,
-            hook: octokit.hook,
-          },
-          '\n'
-        );
-
-        // Test 2: Check organization access
-        console.log('2. Testing organization access...');
-        try {
-          const { data: orgs } = await octokit.orgs.listForUser({
-            username: user.login,
-          });
-          console.log('✅ Organization access successful');
-          console.log(
-            '   Raw organizations data:',
-            JSON.stringify(orgs, null, 2),
-            '\n'
-          );
-
-          console.log('   Organizations you have access to:');
-          if (orgs.length === 0) {
-            console.log('   No organizations found in response');
-          } else {
-            orgs.forEach((org) => {
-              console.log(`   - ${org.login}`);
-            });
-          }
-          console.log();
-        } catch (error) {
-          console.error('❌ Failed to list organizations:', error);
-          console.error('Full error object:', JSON.stringify(error, null, 2));
-        }
-
-        // Test 3: Check repository access
-        if (options.repo) {
-          console.log('3. Testing repository access...');
-          const [owner, repo] = options.repo.split('/');
-          console.log(`   Attempting to access: ${owner}/${repo}`);
-
-          try {
-            // First try to get organization details
-            const { data: orgData } = await octokit.orgs.get({
-              org: owner,
-            });
-            console.log(`   Organization found: ${orgData.login}`);
-
-            // Check organization membership
-            const { data: membership } =
-              await octokit.orgs.getMembershipForUser({
-                org: owner,
-                username: user.login,
-              });
-            console.log(`   Your role in organization: ${membership.role}`);
-
-            // List repositories
-            console.log('   Listing repositories in organization...');
-            const { data: repos } = await octokit.repos.listForOrg({
-              org: owner,
-              type: 'all',
-            });
-
-            console.log('   Available repositories:');
-            repos.forEach((repo) => {
-              console.log(`   - ${repo.name}`);
-            });
-          } catch (error) {
-            console.error('❌ Error accessing repository:', error);
-            console.error('Full error object:', JSON.stringify(error, null, 2));
-          }
-        }
-
-        console.log(
-          'All tests passed! Your token has the correct permissions.'
-        );
-      } catch (error) {
-        const err = error as Error;
-        console.error('❌ Test failed:', err.message);
-        console.error('Full error object:', JSON.stringify(error, null, 2));
-        process.exit(1);
-      }
- });
  +}

---

File: packages/cli/src/config/config.ts
Status: modified
Additions: 3
Deletions: 3
Changes: 6

Patch:
@@ -1,6 +1,6 @@
-import fs from 'fs';
-import path from 'path';
-import os from 'os';
+import _ as fs from 'fs';
+import _ as path from 'path';
+import \* as os from 'os';

interface Config {
defaultRepo: string;

---

File: packages/cli/src/index.ts
Status: modified
Additions: 9
Deletions: 61
Changes: 70

Patch:
@@ -1,10 +1,9 @@
import { Command } from 'commander';
-import { Octokit } from '@octokit/rest';
-import dotenv from 'dotenv';
-import { generateMarkdown } from './utils/markdown';
-import { getConfig } from './config/config';
-import { setupGitHooks } from './utils/git-hooks';
-import fs from 'fs';
+import \* as dotenv from 'dotenv';
+import { createGenerateChangelogCommand } from './commands/generate-changelog';
+import { createSetupHooksCommand } from './commands/setup-hooks';
+import { createTestTokenCommand } from './commands/test-token';
+import { createAnalyzeChangesCommand } from './commands/analyze-changes';

dotenv.config();

@@ -15,60 +14,9 @@ program
.description('CLI tool for generating changelogs from GitHub commits')
.version('1.0.0');

-program

- .command('generateChangeLog')
- .description('Generate changelog from recent commits')
- .option('-r, --repo <repo>', 'GitHub repository (owner/repo)')
- .option('-b, --base <branch>', 'Base branch to compare against', 'main')
- .option('-o, --output <file>', 'Output file path', 'CHANGELOG.md')
- .action(async (options) => {
- try {
-      const config = await getConfig();
-      const octokit = new Octokit({
-        auth: process.env.GITHUB_TOKEN,
-      });
-
-      const [owner, repo] = (options.repo || config.defaultRepo).split('/');
-
-      // Get the latest release
-      const { data: releases } = await octokit.repos.listReleases({
-        owner,
-        repo,
-      });
-
-      const latestRelease = releases[0];
-      const baseCommit = latestRelease?.target_commitish || options.base;
-
-      // Get commits between latest release and current branch
-      const { data: commits } = await octokit.repos.compareCommits({
-        owner,
-        repo,
-        base: baseCommit,
-        head: 'HEAD',
-      });
-
-      const markdown = generateMarkdown(commits, latestRelease);
-
-      // Write to file
-      await fs.promises.writeFile(options.output, markdown);
-      console.log(`Changelog generated successfully at ${options.output}`);
- } catch (error) {
-      console.error('Error generating changelog:', error);
-      process.exit(1);
- }
- });
- -program
- .command('setup-hooks')
- .description('Set up git hooks for automatic changelog generation')
- .action(async () => {
- try {
-      await setupGitHooks();
-      console.log('Git hooks set up successfully');
- } catch (error) {
-      console.error('Error setting up git hooks:', error);
-      process.exit(1);
- }
- });
  +program.addCommand(createGenerateChangelogCommand());
  +program.addCommand(createSetupHooksCommand());
  +program.addCommand(createTestTokenCommand());
  +program.addCommand(createAnalyzeChangesCommand());

program.parse();

---

File: packages/cli/src/utils/analyze-changes.ts
Status: added
Additions: 77
Deletions: 0
Changes: 77

Patch:
@@ -0,0 +1,77 @@
+import axios from 'axios';
+import _ as fs from 'fs';
+import _ as path from 'path';

- +interface AnalysisOptions {
- diffFile: string;
- outputFile: string;
- apiUrl?: string; // Optional: allow overriding the API URL
  +}
- +interface AnalysisResponse {
- analysis:
- | string
- | Array<{
-        title: string;
-        content: string;
-      }>;
- originalDiff?: string;
  +}
- +export async function analyzeChanges(options: AnalysisOptions): Promise<void> {
- try {
- // Read the code differences file
- const diffContent = await fs.promises.readFile(options.diffFile, 'utf-8');
-
- // Use provided API URL or default to localhost
- const apiUrl = options.apiUrl || 'http://localhost:3000/api/analyze';
-
- // Make the API request
- const response = await axios.post<AnalysisResponse>(apiUrl, {
-      diffContent,
-      options: {
-        format: 'markdown',
-        includeOriginal: true,
-      },
- });
-
- // Generate the analysis report
- let reportContent = `# Change Analysis Report\n\n`;
- reportContent += `## Overview\n`;
- reportContent += `This report provides an analysis of the code changes between versions.\n\n`;
-
- // Add the AI analysis
- reportContent += `## AI Analysis\n\n`;
- reportContent +=
-      typeof response.data.analysis === 'string'
-        ? response.data.analysis
-        : JSON.stringify(response.data.analysis, null, 2);
- reportContent += '\n\n';
-
- // Add the original changes for reference
- reportContent += `## Original Changes\n`;
- reportContent += `For reference, here are the original code changes:\n\n`;
- reportContent += diffContent;
-
- // Write the analysis report
- await fs.promises.writeFile(options.outputFile, reportContent);
- console.log(`Analysis report generated at ${options.outputFile}`);
-
- // Print instructions for AI analysis
- console.log('\nTo analyze these changes with AI:');
- console.log('1. Copy the contents of the analysis report');
- console.log(
-      '2. Paste it into your preferred AI tool (e.g., ChatGPT, Claude)'
- );
- console.log(
-      '3. Ask the AI to analyze the changes and generate a human-readable report'
- );
- console.log(
-      '4. The AI will provide insights about new features, breaking changes, and technical details'
- );
- } catch (error) {
- const err = error instanceof Error ? error : new Error(String(error));
- console.error('Error:', err.message);
- throw err;
- }
  +}
  ***
  File: packages/cli/src/utils/git-hooks.ts
  Status: modified
  Additions: 3
  Deletions: 3
  Changes: 6

Patch:
@@ -1,10 +1,10 @@
-import fs from 'fs';
-import path from 'path';
+import _ as fs from 'fs';
+import _ as path from 'path';
import { execSync } from 'child_process';

const HOOK_CONTENT = `#!/bin/sh

# Generated by change-logger

-npx change-logger generateChangeLog
+npm run changelog generateChangeLog
`;

export async function setupGitHooks(): Promise<void> {

---

File: packages/cli/src/utils/git-utils.ts
Status: added
Additions: 64
Deletions: 0
Changes: 64

Patch:
@@ -0,0 +1,64 @@
+import { execSync } from 'child_process';
+import { Octokit } from '@octokit/rest';

- +/\*\*
- - Gets the current git repository information from the remote origin
- - @returns Object containing owner and repo name
- - @throws Error if not in a git repository or no remote origin found
- \*/
  +export function getCurrentRepo(): { owner: string; repo: string } {
- try {
- const remoteUrl = execSync('git config --get remote.origin.url')
-      .toString()
-      .trim();
- // Handle both HTTPS and SSH URLs
- const match = remoteUrl.match(
-      /github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/
- );
- if (!match) {
-      throw new Error('Could not parse GitHub repository URL');
- }
- return {
-      owner: match[1],
-      repo: match[2],
- };
- } catch (error) {
- throw new Error('Not in a git repository or no remote origin found');
- }
  +}
- +/\*\*
- - Gets the name of the current git branch
- - @returns Current branch name
- - @throws Error if could not determine current branch
- \*/
  +export function getCurrentBranch(): string {
- try {
- return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
- } catch (error) {
- throw new Error('Could not determine current branch');
- }
  +}
- +/\*\*
- - Gets the default stable branch for a repository using GitHub API
- - @param octokit - Octokit instance for GitHub API calls
- - @param owner - Repository owner
- - @param repo - Repository name
- - @returns Default branch name, falls back to 'main' if API call fails
- \*/
  +export async function getDefaultStableBranch(
- octokit: Octokit,
- owner: string,
- repo: string
  +): Promise<string> {
- try {
- const { data } = await octokit.repos.get({ owner, repo });
- return data.default_branch;
- } catch (error) {
- console.warn(
-      'Could not determine default branch, using "main" as fallback'
- );
- return 'main';
- }
  +}
  ***
  File: packages/cli/src/utils/markdown.ts
  Status: modified
  Additions: 49
  Deletions: 3
  Changes: 52

Patch:
@@ -1,4 +1,15 @@
-import { Commit } from '@octokit/rest';
+interface Commit {

- commit: {
- message: string;
- author: {
-      name?: string;
-      email?: string;
-      date?: string;
- } | null;
- };
- sha: string;
- html_url: string;
  +}

interface CategorizedCommits {
features: Commit[];
@@ -7,16 +18,30 @@ interface CategorizedCommits {
other: Commit[];
}

+interface MarkdownOptions {

- stableBranch: string;
- currentBranch: string;
- lastMergedCommit: string;
- currentCommit: string;
- lastMergedPR: number;
  +}
- export function generateMarkdown(
  commits: Commit[],

* latestRelease: any

- latestRelease: any,
- options: MarkdownOptions
  ): string {
  const categorized = categorizeCommits(commits);

  let markdown = `# Changelog\n\n`;

- // Add comparison information
- markdown += `## Changes since last merged PR (#${options.lastMergedPR})\n\n`;
- markdown += `- Last Merged PR: #${options.lastMergedPR} (${options.lastMergedCommit.substring(0, 7)})\n`;
- markdown += `- Current Branch: ${options.currentBranch} (${options.currentCommit.substring(0, 7)})\n\n`;
- if (latestRelease) {

* markdown += `## Changes since ${latestRelease.tag_name}\n\n`;

- markdown += `### Latest Release: ${latestRelease.tag_name}\n\n`;
  }

if (categorized.breaking.length > 0) {
@@ -51,6 +76,15 @@ export function generateMarkdown(
markdown += '\n';
}

- // Add commit details section
- markdown += `## Detailed Commit List\n\n`;
- commits.forEach((commit) => {
- markdown += `### ${commit.commit.message.split('\n')[0]}\n\n`;
- markdown += `- **Author:** ${commit.commit.author?.name}\n`;
- markdown += `- **Date:** ${new Date(commit.commit.author?.date || '').toLocaleString()}\n`;
- markdown += `- **Commit:** [${commit.sha.substring(0, 7)}](${commit.html_url})\n\n`;
- });
- return markdown;
  }

@@ -88,3 +122,15 @@ function formatCommit(commit: Commit): string {
const hash = commit.sha.substring(0, 7);
return `${message} (${hash})`;
}

- +// Add this function to format the file differences
  +export function formatFileDiff(file: any): string {
- return `
- File: ${file.filename}
- Status: ${file.status}
- Additions: ${file.additions}
- Deletions: ${file.deletions}
- Changes: ${file.changes}
- ${file.patch ? `\nPatch:\n${file.patch}` : ''}
- ---`;
  +}
  ***
  File: packages/cli/tsconfig.json
  Status: added
  Additions: 8
  Deletions: 0
  Changes: 8

Patch:
@@ -0,0 +1,8 @@
+{

- "extends": "../../tsconfig.base.json",
- "compilerOptions": {
- "outDir": "./dist",
- "rootDir": "./src"
- },
- "include": ["src/**/*"]
  +}
  ***
  File: tsconfig.base.json
  Status: added
  Additions: 13
  Deletions: 0
  Changes: 13

Patch:
@@ -0,0 +1,13 @@
+{

- "compilerOptions": {
- "target": "ES2020",
- "module": "CommonJS",
- "moduleResolution": "Node",
- "esModuleInterop": true,
- "forceConsistentCasingInFileNames": true,
- "strict": true,
- "skipLibCheck": true,
- "resolveJsonModule": true,
- "baseUrl": "."
- }
  +}
  ***
