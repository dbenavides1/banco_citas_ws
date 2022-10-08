const clientes = require('../models').clientesModel;
const citas = require('../models').citasModel;

module.exports = {
    list(req, res) {
        return clientes
            .findAll({})
            .then((clientes) => res.status(200).send(clientes))
            .catch((error) => { res.status(400).send(error); });
    },

    listFull(req, res) {
        return clientes
            .findAll({
                include: [{
                    model: citas
                }]
            })
            .then((clientes) => res.status(200).send(clientes))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return cliente
            .findByPk(req.params.id)
            .then((cliente) => {
                console.log(cliente);
                if (!cliente) {
                    return res.status(404).send({
                        message: 'Data Not Found',
                    });
                }
                return res.status(200).send(cliente);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return cliente
            .create({
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                tipo_dni: req.body.tipo_dni,
                dni: req.body.dni,
                sexo: req.body.sexo,
                municipio: req.body.municipio,
                direccion: req.body.direccion,
                tel: req.body.tel,
                fec_nac: req.body.fec_nac,
                email: req.body.email,
                password: req.body.password
            })
            .then((cliente) => res.status(201).send(cliente))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return cliente
            .findByPk(req.params.id)
            .then(cliente => {
                if (!cliente) {
                    return res.status(404).send({
                        message: 'cliente Not Found',
                    });
                }
                return cliente
                    .update({
                        nombres: req.body.nombres || cliente.nombres,
                        apellidos: req.body.apellidos || cliente.apellidos,
                        tipo_dni: req.body.tipo_dni || cliente.tipo_dni,
                        dni: req.body.dni || cliente.dni,
                        sexo: req.body.sexo || cliente.sexo,
                        municipio: req.body.municipio || cliente.municipio,
                        direccion: req.body.direccion || cliente.direccion,
                        tel: req.body.tel || cliente.tel,
                        fec_nac: req.body.fec_nac || cliente.fec_nac,
                        email: req.body.email || cliente.email,
                        password: req.body.password || cliente.password
                    })
                    .then(() => res.status(200).send(cliente))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return cliente
            .findByPk(req.params.id)
            .then(cliente => {
                if (!cliente) {
                    return res.status(400).send({
                        message: 'cliente Not Found',
                    });
                }
                return cliente
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
};