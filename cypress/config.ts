import { defineConfig } from 'cypress';
import path from 'path';
import { dotenv, generateEnvTypes } from '../src';

const ROOT = process.env.CI ? '..' : process.env.PWD;

export default defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents: (on, config) => {
      on('before:browser:launch', (_, launchOptions) => {
        generateEnvTypes(path.join(ROOT, 'cypress', 'types', 'env.d.ts'), {
          path: path.join(ROOT, '.env')
        });
        return launchOptions;
      });

      // NOTE: passed `isCI` false intentionally.
      return dotenv(config, { path: path.join(ROOT, '.env') }, false);
    }
  }
});
