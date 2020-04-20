const User = require('../models/Users');

class UserController{
    async store(req, res) {
        const user = await User.create({
            nome: req.body.nome,
            email: req.body.email,
        });

        return res.json(user);
    }

    async show(req, res) {
        const user = await User.findById(req.params.id).populate({
            path: 'tests',
            options: { sort: { createdAt: 1 } } //1-Ordena ASC; -1:Ordena DESC
        });
        return res.json(user);
    }

}

module.exports = new UserController();