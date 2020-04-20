const Test = require('../models/Test');
const User = require('../models/Users');

class TestController{
    async store(req, res) {
        const user = await User.findById(req.params.id);

        const test = await Test.create({
            qtd_acertos: req.body.qtd_acertos,
            excluido: req.body.excluido,
            status: req.body.status,
        });

        user.tests.push(test);

        await user.save();

        return res.json(test);
    }
}

module.exports = new TestController();