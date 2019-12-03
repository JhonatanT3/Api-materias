const Materia = require('../models/materias');

exports.ejercicioInq = function(req, res) {
    Materia.find({}, function(err, doc) {
        if (err) return console.log(err);
        console.log("Clientes encontrados");
        console.log(doc);
        res.send(doc);
    }); //.sort({ semestre: 5 });
};
exports.ejercicioAdd = (req, res) => {
    client = new Materia({

        nombre: req.body.nombre,
        clave: req.body.clave,
        maestro: req.body.maestro,
        semestre: req.body.semestre
    })
    console.log(client);
    client.save(function(err, client) {
        if (err) return console.error(err);
        res.send(client.client + " insertado en la coleccion...");


    });
}