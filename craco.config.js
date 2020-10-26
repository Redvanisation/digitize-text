const { whenProd } = require('@craco/craco');
const CracoLinariaPlugin = require('craco-linaria');

module.exports = function({ env }) {
    return {
        plugins: [
            {
                plugin: CracoLinariaPlugin,
                options: {
                    displayName: whenProd(() => false, true),
                },
            },
        ],
    };
}