const ventanillas = require('../models').ventanillasModel;
const citas = require('../models').citasModel;

module.exports = {
    list(req, res) {
        return ventanillas
            .findAll({})
            .then((ventanillas) => res.status(200).send(ventanillas))
            .catch((error) => { res.status(400).send(error); });
    },

    listFull(req, res) {
        return ventanillas
            .findAll({
                include: [{
                    model: citas
                }]
            })
            .then((ventanillas) => res.status(200).send(ventanillas))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return ventanillas
            .findByPk(req.params.id)
            .then((ventanillas) => {
                console.log(ventanillas);
                if (!ventanillas) {
                    return res.status(404).send({
                        message: 'Data Not Found',
                    });
                }
                return res.status(200).send(ventanillas);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    
    add(req, res) {
        return ventanillas
            .create({
                nom_ventanilla: req.body.nom_ventanilla
            })
            .then((ventanillas) => res.status(201).send(ventanillas))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return ventanillas
            .findByPk(req.params.id)
            .then(ventanillas => {
                if (!ventanillas) {
                    return res.status(404).send({
                        message: 'ventanilla Not Found',
                    });
                }
                return ventanillas
                    .update({
                        nom_ventanilla: req.body.nom_ventanilla || ventanillas.nom_ventanilla
                    })
                    .then(() => res.status(200).send(ventanillas))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return ventanillas
            .findByPk(req.params.id)
            .then(ventanillas => {
                if (!ventanillas) {
                    return res.status(400).send({
                        message: 'ventanilla Not Found',
                    });
                }
                return ventanillas
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}