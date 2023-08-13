import { defineConfig } from 'cypress';
import { dotenv, generateEnvTypes } from '../src';

const ROOT = process.env.PWD;

export default defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents: (on, config) => {
      on('before:browser:launch', (_, launchOptions) => {
        generateEnvTypes(`${ROOT}/cypress/types/env.d.ts`, { path: `${ROOT}/.env` });
        return launchOptions;
      });

      return dotenv(config, { path: `${ROOT}/.env` });
    }
  }
});
