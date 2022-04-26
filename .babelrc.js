const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      isDevelopment
        ? { targets: { esmodules: true } }
        : {
            useBuiltIns: "usage",
            bugfixes: true,
            shippedProposals: true,
            corejs: { version: 3, proposals: true },
            targets: {
              ie: "10",
              ios: "9",
              safari: "9",
            },
          },
    ],
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};
