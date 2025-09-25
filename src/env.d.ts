/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  // add other env variables here if you use them
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
