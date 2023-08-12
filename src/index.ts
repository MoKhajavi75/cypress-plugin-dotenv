import type { DotenvConfigOptions } from 'dotenv';
import { config as loadEnv } from 'dotenv';

/**
 * Merge environment variables from `.env` into Cypress config.
 *
 * @param config - Original Cypress config.
 * @param dotenvConfig - Configuration for `dotenv`.
 *
 * @returns Updated Cypress config with merged env vars.
 *
 * @throws If `.env` loading fails.
 */
export const dotenv = (
  config: Cypress.PluginConfigOptions,
  dotenvConfig?: DotenvConfigOptions
): Cypress.PluginConfigOptions => {
  const { error, parsed } = loadEnv(dotenvConfig);

  if (error) throw error;

  config.env = { ...config.env, ...parsed };

  return config;
};
