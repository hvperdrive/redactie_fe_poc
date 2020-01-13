const R = require("ramda");

module.exports.test = R.curry((type, req, res) => {
	res.status(200).json({
		type,
		status: "Route ok"
	});
});
