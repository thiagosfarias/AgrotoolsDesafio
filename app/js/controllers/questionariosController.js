class QuestionariosController {

    constructor(){
        this._questionarios = []
    }

    adiciona(questionario){
        this._questionarios.push(questionario)
    }

    paraArray() {
        return [].concat(this._questionarios);
    }

}

module.exports = QuestionariosController

