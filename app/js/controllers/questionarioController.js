const Questionario = require("../models/questionario");

const questionario = {"usuario":"","titulo":"","perguntas":"","localidade":""}


class QuestionarioController {

    cria(usuario, titulo, perguntas, localidade){
        questionario.usuario = usuario
        questionario.titulo = titulo
        questionario.perguntas = perguntas
        questionario.localidade = localidade
    }

    lista(){

    }

    atualizaStatus(){

    }
    
}

module.exports = QuestionarioController