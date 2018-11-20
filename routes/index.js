var express = require("express");
var router  = express.Router();


//root route
router.get("/", function(req, res){
	var env = "";
	if (process.env.HOST === "http://localhost") {
		var env = "local";
	}
	else {
		var env = "prod"
	}
    res.render("index", {
    	env : env
    });
});


module.exports = router;