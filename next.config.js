const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {};

module.exports = {
  distDir: "out",
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
