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
        return cita
            .findByPk(req.params.id)
            .then((cita) => {
                console.log(cita);
                if (!cita) {
                    return res.status(404).send({
                        message: 'Data Not Found',
                    });
                }
                return res.status(200).send(cita);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    /*
    add(req, res) {
        return cita
            .create({
                title: req.body.title,
                description: req.body.description,
                state: req.body.state
            })
            .then((cita) => res.status(201).send(cita))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return cita
            .findByPk(req.params.id)
            .then(cita => {
                if (!cita) {
                    return res.status(404).send({
                        message: 'cita Not Found',
                    });
                }
                return cita
                    .update({
                        title: req.body.title || cita.title,
                        description: req.body.description || cita.description,
                        state: req.body.state || cita.state
                    })
                    .then(() => res.status(200).send(cita))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return cita
            .findByPk(req.params.id)
            .then(cita => {
                if (!cita) {
                    return res.status(400).send({
                        message: 'cita Not Found',
                    });
                }
                return cita
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
    */

}