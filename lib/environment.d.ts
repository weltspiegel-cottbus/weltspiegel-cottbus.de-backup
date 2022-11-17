export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MANDATOR_ID: string;
      COCKPIT_URL: string;
      COCKPIT_APIKEY: string;
    }
  }
}
