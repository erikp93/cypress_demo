import { defineConfig } from "cypress";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      dotenv.config();
      // we can grab some process environment variables
      // and stick it into config.env before returning the updated config
      config.env = config.env || {};

      config.env.CYPRESS_EMAIL = process.env.CYPRESS_EMAIL;
      config.env.CYPRESS_PASSWORD = process.env.CYPRESS_PASSWORD;

      return config;
    },
    baseUrl: "https://mail.zoznam.sk",
  },
});
