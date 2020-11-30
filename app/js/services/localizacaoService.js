class LocalizacaoService {
    retornageolocalizacao(){
        navigator.geolocation.getCurrentPosition(this.exibirPosicao)

    }

    exibirPosicao(posicao){
        $('#latitude').html(`
            ${posicao.coords.latitude}
        `)

        $('#longitude').html(`
            ${posicao.coords.longitude}
        `)
    }
    

} module.exports = LocalizacaoService