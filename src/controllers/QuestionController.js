const Question = require('../models/Questions');

class QuestionController{
    async store(req, res) {
        const question = await Question.create({
            enunciado: req.body.enunciado,
            excluido: req.body.excluido,
        });

        return res.json(question);
    }

    async show(req, res) {
        const question = await Question.findById(req.params.id).populate({
            path: 'options',
            options: { sort: { createdAt: 1 } } //1-Ordena ASC; -1:Ordena DESC
        });
        return res.json(question);
    }
}

module.exports = new QuestionController();