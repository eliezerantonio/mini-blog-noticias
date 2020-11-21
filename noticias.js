var http = require('http');

var server = http.createServer( function(req, res){

	var categoria = req.url;

	if(categoria == '/tecnologia'){
		res.end("<html><body>Notícias de Tecnologia</body></html>");

	} else if (categoria == '/moda') {
		res.end("<html><body>Notícias de Moda</body></html>");

	} else if (categoria == '/beleza') {
		res.end("<html><body>Notícias de Beleza</body></html>");
	
	} else {
		res.end("<html><body>Portal de notícias</body></html>");	
	}
	

}).listen(3000);