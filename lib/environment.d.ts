export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MANDATOR_ID: string;
    }
  }
}
