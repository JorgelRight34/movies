// babel.config.cjs
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    // Optional: Only include this plugin during tests
    process.env.NODE_ENV === "test"
      ? "babel-plugin-transform-import-meta"
      : null,
  ].filter(Boolean),
};
