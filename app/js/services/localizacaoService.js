class LocalizacaoService {
    retornaGeolocalizacao(){
        navigator.geolocation.getCurrentPosition(this.exibirPosicao)

    }

    exibirPosicao(posicao){
        $('#latitude').html(`
        <p>
         ${posicao.coords.latitude}
        </p>
        `)

        $('#longitude').html(`
            <p>
            ${posicao.coords.longitude}
            </p>
        `)
    }
    

} module.exports = LocalizacaoService