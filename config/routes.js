module.exports = (function(get, post) {

	get("/", "home#index");
	get("/show", "home#show");

	get("/forced", "home#forced");

});