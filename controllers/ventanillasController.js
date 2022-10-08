const ventanillas = require('../models').ventanillasModel;

module.exports = {
    list(req, res) {
        return ventanillas
            .findAll({})
            .then((ventanillas) => res.status(200).send(ventanillas))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return ventanilla
            .findByPk(req.params.id)
            .then((ventanilla) => {
                console.log(ventanilla);
                if (!ventanilla) {
                    return res.status(404).send({
                        message: 'Data Not Found',
                    });
                }
                return res.status(200).send(ventanilla);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    
    add(req, res) {
        return ventanilla
            .create({
                nom_ventanilla: req.body.nom_ventanilla
            })
            .then((ventanilla) => res.status(201).send(ventanilla))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return ventanilla
            .findByPk(req.params.id)
            .then(ventanilla => {
                if (!ventanilla) {
                    return res.status(404).send({
                        message: 'ventanilla Not Found',
                    });
                }
                return ventanilla
                    .update({
                        nom_ventanilla: req.body.nom_ventanilla || ventanilla.nom_ventanilla
                    })
                    .then(() => res.status(200).send(ventanilla))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return ventanilla
            .findByPk(req.params.id)
            .then(ventanilla => {
                if (!ventanilla) {
                    return res.status(400).send({
                        message: 'ventanilla Not Found',
                    });
                }
                return ventanilla
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}