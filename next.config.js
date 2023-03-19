const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const nextConfig = {
    mode: "production",
    devtool: "source-map",
    reactStrictMode: true,
    optimizeFonts: false,
    performance: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
        removeConsole: true
    },
    experimental: {
        esmExternals: "loose",
        outputStandalone: true,
        largePageDataBytes: 128 * 100000
    },
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    splitChunks: {
        chunks: "all"
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    webpack(cfg) {
        const originalEntry = cfg.entry;

        cfg.entry = async () => {
            return await originalEntry();
        };

        cfg.module.rules.push({
            test: /\.svg$/,
            issuer: [/\.(js|ts)x?$/],
            use: ["@svgr/webpack?-svgo,+titleProp,+ref![path]"]
        });

        return cfg;
    }
}

module.exports = nextConfig

