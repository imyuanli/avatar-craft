import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
