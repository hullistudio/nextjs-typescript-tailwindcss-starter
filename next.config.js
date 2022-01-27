/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  reactStrictMode: true,
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    config.module.rules.push({
      test: [/\.svg$/, /\.woff$/],
      loader: "file-loader",
      options: {
        name: "[name].[hash:8].[ext]",
        publicPath: `/_next/static/images/`,
        outputPath: "static/images"
      }
    });

    config.resolve.alias["@helpers"] = path.resolve(__dirname + "/helpers");
    config.resolve.alias["@hooks"] = path.resolve(__dirname + "/hooks");
    config.resolve.alias["@utils"] = path.resolve(__dirname + "/utils");
    config.resolve.alias["@providers"] = path.resolve(__dirname + "/providers");
    config.resolve.alias["@styles"] = path.resolve(__dirname + "/styles");
    config.resolve.alias["@pages"] = path.resolve(__dirname + "/pages");
    config.resolve.alias["@sections"] = path.resolve(__dirname + "/sections");
    config.resolve.alias["@icons"] = path.resolve(__dirname + "/icons");
    config.resolve.alias["@images"] = path.resolve(
        __dirname + "/public/images"
    );
    config.resolve.alias["@validators"] = path.resolve(
        __dirname + "/validators"
    );
    config.resolve.alias["@containers"] = path.resolve(
        __dirname + "/containers"
    );
    config.resolve.alias["@components"] = path.resolve(
        __dirname + "/components"
    );

    return config;
  }
};
