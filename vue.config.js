const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'src/public/index.html',
    },
  },
  outputDir: 'public',
  devServer: {
    writeToDisk: file => {
      return !/\.hot-update\.js/.test(file);
    },
    watchOptions: {
      ignored: [
        'node_modules',
        'public'
      ]
    },
  },
  chainWebpack: config => {
    config.plugins.delete('copy');
    config.plugin('copy').use(CopyPlugin, [[{
      from: __dirname+"/src/public",
      to: __dirname+"/public"
    }]]);
    if (process.env.NODE_ENV === "development") {
      config.plugin('browsersync').use(BrowserSyncPlugin, [
        {
          host: "localhost",
          port: 3000,
          //server: { baseDir: ['public'] }
          proxy: "http://localhost:8080/",
        },
        {
          reload: false,
          injectCss: true,
        },
      ]);
    }
  },
  pluginOptions: {
    // https://www.npmjs.com/package/vue-cli-plugin-import-components
    components: {
      mapComponent(component) {
        /* wont work:
        component.kebabName = 'prefix-'+component.kebabName;
        component.pascalName = 'Prefix'+component.pascalName;
        */
        // console.log(component);
        return component;
      },
    },
  },
};
