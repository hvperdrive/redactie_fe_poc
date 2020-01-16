const { join } = require("path");
const { readFileSync, writeFileSync } = require("fs");

try {
	const packageJSON = JSON.parse(readFileSync(join(__dirname, "..", "package.json"), { encoding: "UTF-8" }));

	const publishPackageJSON = Object.keys(packageJSON).filter((key) => ![
		"scripts",
		"devDependencies",
		"husky"
	].includes(key)).reduce((acc, key) => Object.assign(acc, {
		[key]: packageJSON[key],
	}), {});

	publishPackageJSON.main = "umd/core-module.js";
	publishPackageJSON.esm = "esm/index.js";
	publishPackageJSON.es2015 = "es2015/index.js";
	publishPackageJSON.cjs = "cjs/index.js";
	publishPackageJSON.types = "types/index.d.ts";

	writeFileSync(join(__dirname, "..", "dist", "package.json"), JSON.stringify(publishPackageJSON, null, 2), { encoding: "UTF-8" });

	process.exit(0);
} catch (e) {
	process.exit(e);
}
