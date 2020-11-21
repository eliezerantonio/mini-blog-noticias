module.exports.index = function (application, req, res) {

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function (error, result) {

        console.log(result);
        //passar resultado para view
        res.render("home/index", {noticias: result});
    });

}