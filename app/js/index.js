const link = 'http://localhost:1000/questionarios-pendentes'

let myHeaders = new Headers();

$('#quest-pend').click(()=>{
    $.ajax({
        url:link,
        crossDomain: true,
        type: "GET",
        headers: { "Access-Control-Allow-Origin": "true"},
        dataType: 'json',
        success:function(resposta){
              console.log(resposta);
              this.setState({lista:resposta});
            }
        }
      )
})





