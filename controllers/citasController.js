const citas = require('../models').citasModel;

module.exports = {
    list(req, res) {
        return citas
            .findAll({})
            .then((citas) => res.status(200).send(citas))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return citas
            .findByPk(req.params.id)
            .then((citas) => {
                console.log(citas);
                if (!citas) {
                    return res.status(404).send({
                        message: 'Data Not Found',
                    });
                }
                return res.status(200).send(citas);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    
    add(req, res) {
        return citas
            .create({
                id_clie: req.body.id_clie,
                id_usu: req.body.id_usu,
                id_ventanilla: req.body.id_ventanilla,
                fec_cita: req.body.fec_cita,
                hora: req.body.hora,
                estado: req.body.estado
            })
            .then((citas) => res.status(201).send(citas))
            .catch((error) => res.status(400).send(error));
    },
    
    update(req, res) {
        return citas
            .findByPk(req.params.id)
            .then(citas => {
                if (!citas) {
                    return res.status(404).send({
                        message: 'cita Not Found',
                    });
                }
                return citas
                    .update({
                        id_clie: req.body.id_clie || citas.id_clie,
                        id_usu: req.body.id_usu || citas.id_usu,
                        id_ventanilla: req.body.id_ventanilla || citas.id_ventanilla,
                        fec_cita: req.body.fec_cita || citas.fec_cita,
                        hora: req.body.hora || citas.hora,
                        estado: req.body.estado || citas.estado
                    })
                    .then(() => res.status(200).send(citas))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    
    delete(req, res) {
        return citas
            .findByPk(req.params.id)
            .then(citas => {
                if (!citas) {
                    return res.status(400).send({
                        message: 'cita Not Found',
                    });
                }
                return citas
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}