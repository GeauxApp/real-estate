function index(req, res){
	res.json({
		message: "Welcome to the real-estate app!",
		documentation_url: "https://github.com/laurakathleen/real-estate",
		endpoints: [
			{method: "GET", path: "/api", description: "Describes available endpoints"},
			{method: "GET", path: "/api/properties", description: "Gets all properties"},
			{method: "GET", path: "/api/properties/:id", description: "Gets one property"}
		]
	});
}

module.exports.index = index;