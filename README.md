<div align="center">

# cypress-plugin-dotenv

[![npm version](https://badge.fury.io/js/cypress-plugin-dotenv.svg)](https://badge.fury.io/js/cypress-plugin-dotenv) &nbsp; [![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)

</div>

## ⚙️ Install

- npm:

```bash
npm install cypress-plugin-dotenv
```

- yarn:

```bash
yarn add cypress-plugin-dotenv
```

- pnpm:

```
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

## License

This project is licensed under the terms of the [MIT license](/LICENSE.md).
