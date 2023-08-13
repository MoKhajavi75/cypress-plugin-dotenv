declare global {
  namespace Cypress {
    export interface Cypress {
      env(key: 'IS_THIS_PLUGIN_AWESOME'): string;
    }
  }
}

export {};
