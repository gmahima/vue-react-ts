const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // Add a new rule for .react.jsx files
    config.module
      .rule("react")
      .test(/\.jsx$/) // Target only .react.jsx files
      .use("babel-loader")
      .loader("babel-loader")
      .options({
        presets: [
          "@babel/preset-env",
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        ],
      })
      .end();
  },
});
