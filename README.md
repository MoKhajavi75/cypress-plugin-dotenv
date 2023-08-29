<div align="center">

# cypress-plugin-dotenv

[![npm version](https://badge.fury.io/js/cypress-plugin-dotenv.svg)](https://badge.fury.io/js/cypress-plugin-dotenv) &nbsp; [![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/) &nbsp; [![tests](https://github.com/MohamadKh75/cypress-plugin-dotenv/actions/workflows/main.yml/badge.svg)](https://github.com/MohamadKh75/cypress-plugin-dotenv/actions/workflows/main.yml)

</div>

## ⚙️ Install

- npm:

```shell
npm install cypress-plugin-dotenv
```

- yarn:

```shell
yarn add cypress-plugin-dotenv
```

- pnpm:

```shell
pnpm add cypress-plugin-dotenv
```

## 🧪 Usage

Import the plugin into your [config file](https://docs.cypress.io/guides/references/configuration):

```js
import { dotenv } from 'cypress-plugin-dotenv';
// or
const dotenv = require('cypress-plugin-dotenv');

export default defineConfig({
  e2e: {
    setupNodeEvents: (_, config) => {
      return dotenv(config);
    }
  }
});
```

## 🔧 Dynamic Types

Automate TypeScript definitions for `.env` with:

```js
import { generateEnvTypes } from 'cypress-plugin-dotenv';

on('before:browser:launch', (browser, launchOptions) => {
  generateEnvTypes(outputPath, options);

  // your code
});
```

**⚠️ Important**: Run Cypress once after setup to initialize the types.

## 📐 Example

Take a look at [cypress folder](./cypress/)

## License

This project is licensed under the terms of the [MIT license](/LICENSE.md).
