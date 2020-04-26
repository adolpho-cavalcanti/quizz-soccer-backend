const Option = require('../models/Options');
const Question = require('../models/Questions');

class OptionController{
    async store(req, res) {
        const question = await Question.findById(req.params.id);

        const option = await Option.create({
            opcao: req.body.opcao,
            excluido: req.body.excluido,
            resposta_certa: req.body.resposta_certa,
        });

        question.options.push(option);

        await question.save();

        return res.json(option);
    }
    async show(req, res) {
        const option = await Option.find();
        return res.json(option);
    }
}

module.exports = new OptionController();