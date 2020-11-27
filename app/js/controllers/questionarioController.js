const Questionario = require("../models/questionario")
const Questionarios = require('../models/questionarios')

class QuestionarioControl {
    constructor(){
        this.titulo = $('#tittle-input').val(()=>{
            if(titulo == undefined)
                console.log('undefined')
        })
        this.user = $('#user-input')
        this.localidade = $('#localidade-input')
        this.questionarios = new Questionarios()
    }

    criarNovo(){ 
        const questionario = new Questionario(this.titulo.val(), this.user.val(), this.localidade.val())
        this.questionarios.adiciona(questionario)
        console.log('CRIAR NOVO')
        console.log(this.questionarios)

        return this.questionarios
    }
}

module.exports = QuestionarioControl






