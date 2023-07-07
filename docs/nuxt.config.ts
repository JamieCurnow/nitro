export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  modules: ["@nuxtjs/plausible", "@nuxthq/studio"],

  nitro: {
    vercel: {
      config: {
        version: 3,
        overrides: {
          "deploy/index.html": {
            path: "deploy",
          },
          "deploy/workers/index.html": {
            path: "deploy/workers",
          },
        },
      },
    },
  },
});
