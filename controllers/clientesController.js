const clientes = require('../models').clientesModel;
const citas = require('../models').citasModel;
const pqrs = require('../models').pqrsModel;

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
                include: [
                    {
                        model: citas
                    },
                    {
                        model: pqrs
                    }
                ]
            })
            .then((clientes) => res.status(200).send(clientes))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return clientes
            .findByPk(req.params.id)
            .then((clientes) => {
                console.log(clientes);
                if (!clientes) {
                    return res.status(404).send({
                        message: 'Data Not Found',
                    });
                }
                return res.status(200).send(clientes);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return clientes
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
            .then((clientes) => res.status(201).send(clientes))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return clientes
            .findByPk(req.params.id)
            .then(clientes => {
                if (!clientes) {
                    return res.status(404).send({
                        message: 'cliente Not Found',
                    });
                }
                return clientes
                    .update({
                        nombres: req.body.nombres || clientes.nombres,
                        apellidos: req.body.apellidos || clientes.apellidos,
                        tipo_dni: req.body.tipo_dni || clientes.tipo_dni,
                        dni: req.body.dni || clientes.dni,
                        sexo: req.body.sexo || clientes.sexo,
                        municipio: req.body.municipio || clientes.municipio,
                        direccion: req.body.direccion || clientes.direccion,
                        tel: req.body.tel || clientes.tel,
                        fec_nac: req.body.fec_nac || clientes.fec_nac,
                        email: req.body.email || clientes.email,
                        password: req.body.password || clientes.password
                    })
                    .then(() => res.status(200).send(clientes))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return clientes
            .findByPk(req.params.id)
            .then(clientes => {
                if (!clientes) {
                    return res.status(400).send({
                        message: 'cliente Not Found',
                    });
                }
                return clientes
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
};