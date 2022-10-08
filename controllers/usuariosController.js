const usuarios = require('../models').usuariosModel;

module.exports = {
    list(req, res) {
        return usuarios
            .findAll({})
            .then((usuarios) => res.status(200).send(usuarios))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return usuario
            .findByPk(req.params.id)
            .then((usuario) => {
                console.log(usuario);
                if (!usuario) {
                    return res.status(404).send({
                        message: 'Data Not Found',
                    });
                }
                return res.status(200).send(usuario);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return usuario
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
            .then((usuario) => res.status(201).send(usuario))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return usuario
            .findByPk(req.params.id)
            .then(usuario => {
                if (!usuario) {
                    return res.status(404).send({
                        message: 'usuario Not Found',
                    });
                }
                return usuario
                    .update({
                        nombres: req.body.nombres || usuario.nombres,
                        apellidos: req.body.apellidos || usuario.apellidos,
                        tipo_dni: req.body.tipo_dni || usuario.tipo_dni,
                        dni: req.body.dni || usuario.dni,
                        sexo: req.body.sexo || usuario.sexo,
                        municipio: req.body.municipio || usuario.municipio,
                        direccion: req.body.direccion || usuario.direccion,
                        tel: req.body.tel || usuario.tel,
                        fec_nac: req.body.fec_nac || usuario.fec_nac,
                        email: req.body.email || usuario.email,
                        password: req.body.password || usuario.password,
                        rol: req.body.rol || usuario.rol
                    })
                    .then(() => res.status(200).send(usuario))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return usuario
            .findByPk(req.params.id)
            .then(usuario => {
                if (!usuario) {
                    return res.status(400).send({
                        message: 'usuario Not Found',
                    });
                }
                return usuario
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}