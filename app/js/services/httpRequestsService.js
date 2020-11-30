let link = 'http://localhost:1000/'

class HttpRequests {
    constructor(){
        this.res
    }

    async getQuestionarios(){
        return $.get(link+'questionarios')
    }

    async postQuestionario(questionario){
        return $.post(link+'questionario', questionario)
                .done((res, status)=> console.log(res, status))
                .fail((err) => {
                    console.log()
                })
    }
}

module.exports = HttpRequests