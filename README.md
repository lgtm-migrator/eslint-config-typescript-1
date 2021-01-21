# @tmware/eslint-config-typescript [![NPM](https://img.shields.io/npm/v/@tmware/eslint-config-typescript.svg)](https://www.npmjs.com/package/@tmware/eslint-config-typescript)

ESLint config for my TypeScript projects.

## Installation

```bash
yarn add @tmware/eslint-config-typescript eslint --dev
```

```bash
npm i @tmware/eslint-config-typescript eslint --save-dev
```

## Usage

To use the ESLint config, add the following to your `.eslintrc`:

```json
{
  "extends": ["@tmware/eslint-config-typescript"]
}
```

Lint script for `package.json`

```json
...
"lint": "eslint --ext .js,.ts --ignore-path .gitignore src/"
...
```
