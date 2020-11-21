var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'eliezer',
		password : '1223',
		database : 'portal_noticias'
	});
}

module.exports = function () {
	return connMySQL;
}