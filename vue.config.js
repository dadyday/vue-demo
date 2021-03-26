const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const plugins = [];
if (process.env.NODE_ENV === "development") {
  plugins.push(
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        //server: { baseDir: ['public'] }
        proxy: "http://localhost:8080/",
      },
      {
        reload: false,
        injectCss: true,
      }
    )
  );
}

module.exports = {
  configureWebpack: {
    plugins: plugins,
  },
};
