# @tmware/eslint-config [![NPM](https://img.shields.io/npm/v/@tmware/eslint-config.svg)](https://www.npmjs.com/package/@tmware/eslint-config)

ESLint config for my TypeScript projects.

## Installation

```bash
yarn add @tmware/eslint-config eslint --dev
```

```bash
npm i @tmware/eslint-config eslint --save-dev
```

## Usage

To use the ESLint config, add the following to your `.eslintrc`:

```json
{
  "extends": "@tmware/eslint-config"
}
```

Lint script for `package.json`

```json
...
"lint": "eslint --ext .js,.ts --ignore-path .gitignore src/"
...
```
