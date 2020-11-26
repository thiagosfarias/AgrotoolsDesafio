const QuestionarioController = require('../controllers/questionarioController')
const questionarioControl = new QuestionarioController()

class Questionario {
    constructor(titulo, perguntas, usuario, localidade){
        this._titulo = titulo
        this._perguntas = perguntas
        this._usuario = usuario
        this._localidade = localidade
    }

    novo(usuario, titulo, perguntas){
        questionarioControl.cria(usuario,titulo,perguntas, localidade)
    }
}

module.exports = Questionario