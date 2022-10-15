const usuarios = require('../models').usuariosModel;
const citas = require('../models').citasModel;

module.exports = {
    list(req, res) {
        return usuarios
            .findAll({})
            .then((usuarios) => res.status(200).send(usuarios))
            .catch((error) => { res.status(400).send(error); });
    },

    listFull(req, res) {
        return usuarios
            .findAll({
                include: [{
                    model: citas
                }]
            })
            .then((usuarios) => res.status(200).send(usuarios))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return usuarios
            .findByPk(req.params.id, {
                include: [
                    {
                        model: citas
                    }
                ]
            })
            .then((usuarios) => {
                console.log(usuarios);
                if (!usuarios) {
                    return res.status(404).send({
                        message: 'Data Not Found',
                    });
                }
                return res.status(200).send(usuarios);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return usuarios
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
                password: req.body.password,
                rol: req.body.rol
            })
            .then((usuarios) => res.status(201).send(usuarios))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return usuarios
            .findByPk(req.params.id)
            .then(usuarios => {
                if (!usuarios) {
                    return res.status(404).send({
                        message: 'usuario Not Found',
                    });
                }
                return usuarios
                    .update({
                        nombres: req.body.nombres || usuarios.nombres,
                        apellidos: req.body.apellidos || usuarios.apellidos,
                        tipo_dni: req.body.tipo_dni || usuarios.tipo_dni,
                        dni: req.body.dni || usuarios.dni,
                        sexo: req.body.sexo || usuarios.sexo,
                        municipio: req.body.municipio || usuarios.municipio,
                        direccion: req.body.direccion || usuarios.direccion,
                        tel: req.body.tel || usuarios.tel,
                        fec_nac: req.body.fec_nac || usuarios.fec_nac,
                        email: req.body.email || usuarios.email,
                        password: req.body.password || usuarios.password,
                        rol: req.body.rol || usuarios.rol
                    })
                    .then(() => res.status(200).send(usuarios))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return usuarios
            .findByPk(req.params.id)
            .then(usuarios => {
                if (!usuarios) {
                    return res.status(400).send({
                        message: 'usuario Not Found',
                    });
                }
                return usuarios
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}