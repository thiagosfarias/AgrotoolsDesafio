class MesageView {


    exibirMensagem(mensagem, tipo){
        event.preventDefault()
        console.log('Mandei')
        return $('#mesageView').html(`
            <h5 class="alert ${tipo}">${mensagem}</h5>
        `)
    }

    limpaMensagem(){
        return $('#mesageView').html(`
        `)
    }
}

module.exports = MesageView