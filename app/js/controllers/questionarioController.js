const HttpRequests = require("../services/httpRequestsService")
const InputService = require("../services/inputService")
const Questionario = require("../models/questionario")
const Questionarios = require('../models/questionarios')
const MesageView = require("../views/mesageView")
const QuestionarioView = require("../views/questionariosView")
let index = 0

class QuestionarioController {
    constructor(){
        this.questionarios = new Questionarios()
        this.questionariosView = new QuestionarioView()
        this.httpRequest = new HttpRequests()
        this.mesageView = new MesageView()
        this.inputService = new InputService()
    } 



    async criarNovo(){

       
        this.titulo = $('#tittle-input')
        let user = this.inputService.inputUser()
        let perguntas = this.inputService.inputPerguntas()
        const questionario = new Questionario(user, this.titulo.val(), perguntas)
        this.questionarios.adiciona(questionario)
        this.mesageView.exibirMensagem('Criado com sucesso', 'alert-success')
        console.log(this.questionarios)
        questionario.id = index
        index++
        console.log(questionario.id)
        this.limpaForm()
        await this.httpRequest.postQuestionario(questionario)

    }

    limpaForm(){
        $('#quest-form').trigger('reset')
    }

    submterForm(){
        this.criarNovo()
        return false
    }

    gerarFormParaQuestionario(){
        this.mesageView.limpaMensagem()
        this.questionariosView.novoQuestionarioView()
    }


    listaQuestionarios(){
       this.mesageView.limpaMensagem()
       this.questionariosView.listaQuestionarios(this.questionarios)
    }

    listaQuestionariosRespondidos(){
        this.mesageView.limpaMensagem()

        let questionariosRespondidos = new Questionarios()


        console.log('antes de adicionar no array resp'+questionariosRespondidos)

        this.questionarios.questionarios.map( questionario =>{
            console.log('entrei no map')
            if(questionario.respondido == true){
                this.mesageView.limpaMensagem()
                console.log('deu true')
                questionariosRespondidos.adiciona(questionario)
            }
        })

        console.log('apos de adicionar no array resp'+questionariosRespondidos)

        this.questionariosView.listaQuestionariosRespondidos(questionariosRespondidos)
        return questionariosRespondidos
     }

    async listaQuestionariosHttp(){
        this.mesageView.limpaMensagem()
        await this.httpRequest.getQuestionarios()
    }

    questionariosRespondidos(){

        return [].concat(this.questionarios)
    }

    buscaQuestionarioPor(id){
        return this.questionarios.questionarios[id]
    }

    verQuestionario(id){
        let questionario = this.buscaQuestionarioPor(id)
        this.questionariosView.exibirQuestionario(questionario)
    }

    verQuestionarioRespondido(id){
        let questionario = this.buscaQuestionarioPor(id)
        console.log(questionario)
        let respostas = []
        questionario.respostas.map(resposta => respostas.push(resposta))
        console.log(respostas)
        this.questionariosView.exibirQuestionarioRespondido(questionario, respostas)
        console.log("ver questionario respondido")
    
    }

    async responderQuestionario(id){
        console.log("CHAMEI O RESPONDER")
        let respostas = this.inputService.inputRespostas()
        let questionarioRespondido = this.buscaQuestionarioPor(id)
        questionarioRespondido.respostas.push(respostas)
        questionarioRespondido.respondido = true
        this.mesageView.exibirMensagem('Respondido com sucesso', 'alert-success')
        await this.httpRequest.patchResposta(questionarioRespondido)
    }


}   
      

module.exports = QuestionarioController






