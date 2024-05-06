const mysql = require("mysql");
// creer une connexion mysql
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "nodetest",
	database: "movies"
});

con.connect(function(err) {
	if (err) {
		throw err;
	} else {
		console.log("connected to mysql");
	}
});
module.exports={
	con
}