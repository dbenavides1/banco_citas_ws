const pqrs = require('../models').pqrsModel;

module.exports = {
    list(req, res) {
        return pqrs
            .findAll({})
            .then((pqrs) => res.status(200).send(pqrs))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return pqrs
            .findByPk(req.params.id)
            .then((pqrs) => {
                console.log(pqrs);
                if (!pqrs) {
                    return res.status(404).send({
                        message: 'Data Not Found',
                    });
                }
                return res.status(200).send(pqrs);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return pqrs
            .create({
                id_clie: req.body.id_clie,
                tipo: req.body.tipo,
                estado: req.body.estado,
                mensaje: req.body.mensaje
            })
            .then((pqrs) => res.status(201).send(pqrs))
            .catch((error) => res.status(400).send(error));
    },
    
    update(req, res) {
        return pqrs
            .findByPk(req.params.id)
            .then(pqrs => {
                if (!pqrs) {
                    return res.status(404).send({
                        message: 'pqrs Not Found',
                    });
                }
                return pqrs
                    .update({
                        id_clie: req.body.id_clie || pqrs.id_clie,
                        tipo: req.body.tipo || pqrs.tipo,
                        estado: req.body.estado || pqrs.estado,
                        mensaje: req.body.mensaje || pqrs.mensaje
                    })
                    .then(() => res.status(200).send(pqrs))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    
    delete(req, res) {
        return pqrs
            .findByPk(req.params.id)
            .then(pqrs => {
                if (!pqrs) {
                    return res.status(400).send({
                        message: 'pqrs Not Found',
                    });
                }
                return pqrs
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}