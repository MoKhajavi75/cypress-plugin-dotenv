import type { DotenvConfigOptions } from 'dotenv';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';

/**
 * Generates TypeScript definitions for .env keys.
 *
 * @param outputPath - Path where type definitions should be written.
 * @param options - Configuration for `dotenv`.
 */
export const generateEnvTypes = (outputPath: string, options?: DotenvConfigOptions): void => {
  const keys = Object.keys(config(options).parsed);

  const typeDefs = `declare global {
  namespace Cypress {
    export interface Cypress {
      env(key: '${keys.join("' | '")}'): string;
    }
  }
}

export {};
`;

  writeFileSync(outputPath, typeDefs, 'utf-8');
};
