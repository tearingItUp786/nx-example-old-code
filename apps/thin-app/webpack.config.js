const { composePlugins, withNx } = require('@nrwl/webpack')
const { withReact } = require('@nrwl/react')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`

    config.resolve = {
        ...config.resolve,
        plugins: [
            ...config.resolve.plugins,
            new TsconfigPathsPlugin({
                configFile: 'tsconfig.json',
                extensions: ['.tsx', '.ts', '.js', '.json'],
            }),
        ],
    }
    return config
})
