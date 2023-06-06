const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const { generateJWT } = require('../utils/jwt');

// crear nuestro CRUD

// GET ( obtener )
const getUsers = async (req, res) => {

    const users = await userModel.find(); // find = obtener todo

    res
        .status(200) // 200 = OK
        .json({
            users: users
        })
        .send()

}

// POST ( crear ) / register
const createUser = async (req, res) => {
    const { email, name, password, age } = req.body;

    console.log(req.body);

    const hash = bcrypt.hashSync(password, 10);

    const user = new userModel({
        email: email,
        name: name,
        password: hash,
        age: age
    })

    await user.save()

    res
        .status(201) // 201 = Create
        .json({
            message: 'Usuario creado'
        })
        .send()

}

// PUT ( actualizar )
const userUpdate = async (req, res) => {

    const { id } = req.params;
    const { email, name, password, age } = req.body;

    await userModel.findByIdAndUpdate(id, {
        email: email,
        name: name,
        password: password,
        age: age
    });

    res
        .status(200)
        .json({
            message: 'Actualizado correctamente'
        })
        .send()

}

// DELETE ( eliminar )
const userDelete = async (req, res) => {

    const { id } = req.params;

    await userModel.findByIdAndDelete(id);

    res
        .status(200)
        .json({
            message: 'Eliminado correctamente'
        })
        .send()

}

// Login / Post 
const login = async (req, res) => {

    console.log("attempting login...")

    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email});

    if (!user) {
        return res
                .status(404)
                .json({
                    message: 'Usuario no encontrado'+ email
                })
                .send()
    }

    console.log(password, user.password);

    const isMatch = bcrypt.compareSync(password, user.password);
    console.log(isMatch);


    if (isMatch) {
        const token = generateJWT(user._id);
        return res
                .status(200)
                .json({
                    message: 'Usuario logeado correctamente',
                    user: {
                        age: user.age,
                        email: user.email
                    },
                    token: token
                })
                .send()
    } else {
        return res
                .status(401)
                .json({
                   message: 'Usuario incorrecto:'+ email +' '+user.email
                })
                .send()
                
    }

}

module.exports = {
    getUsers,
    createUser,
    userDelete,
    userUpdate,
    login
}