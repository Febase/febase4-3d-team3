/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'cloudflare-pages',
  server: './server.js',
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['**/.*'],
  future: {
    unstable_cssModules: true,
    unstable_cssSideEffectImports: true,
    unstable_vanillaExtract: true,
    v2_routeConvention: true,
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "functions/[[path]].js",
  // publicPath: "/build/",
};
