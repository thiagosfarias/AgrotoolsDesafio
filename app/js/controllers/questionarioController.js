const HttpRequests = require("../services/httpRequestsService")
const InputService = require("../services/inputService")
const Questionario = require("../models/questionario")
const Questionarios = require('../models/questionarios')
const MesageView = require("../views/mesageView")
const QuestionarioView = require("../views/questionariosView")
const id = 0

class QuestionarioControl {
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

    async listaQuestionariosHttp(){
        this.mesageView.limpaMensagem()
        await this.httpRequest.getQuestionarios()
    }

    verQuestionario(id){
        let questionario = this.questionarios.questionarios[id]
        this.questionariosView.exibirQuestionario(questionario)
    }

    responderQuestionario(index){
        
    }








}   
      

 
    
    
    


    

module.exports = QuestionarioControl






