const {
    override,
    addWebpackAlias,
} = require("customize-cra");

const path = require('path');

module.exports = override(
    addWebpackAlias({
    	'react-router-dom': path.resolve('./node_modules/react-router-dom')
	})
)
