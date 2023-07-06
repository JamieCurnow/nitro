export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  modules: ["@nuxtjs/plausible", "@nuxthq/studio"],
  experimental: {
    // test
    payloadExtraction: false,
  },
});
