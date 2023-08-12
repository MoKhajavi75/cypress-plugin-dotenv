import { defineConfig } from 'cypress';
import { dotenv } from '../src';

export default defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents: (_, config) => {
      return dotenv(config, { path: `${process.env.PWD}/.env` });
    }
  }
});
