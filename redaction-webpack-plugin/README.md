# A webpack plugin to build a custom A-stad redaction module

## Installation

Install locally using npm:
`npm i redaction-webpack-plugin`

### Webpack compatibility

This plugin only works with webpack >=4

## Usage

The RedactionWebpackPlugin class has no parameters. You only need to create an instance from it and add it to the plugins array

```
const RedactionWebpackPlugin = require('redaction-webpack-plugin');

module.exports = {
	// other webpack config here

	plugins: [
		new RedactionWebpackPlugin()
	]
}
```
