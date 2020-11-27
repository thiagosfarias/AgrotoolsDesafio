
const event = new Event("look", {"bubbles":true, "cancelable":false});


const link = 'http://localhost:1000/questionarios-pendentes'

let questionarios = 
    [
        {titulo:"Teste1", user: "thiago@gmail.com", perguntas:["qual o valor do terreno?", "é possivel plantar no solo?", "qual capacidade de plantio?"]},
        {titulo:"Teste2", user: "talyson@gmail.com", perguntas:["qual o valor do terreno?", "é possivel plantar no solo?", "qual capacidade de plantio?"]},
        {titulo:"Teste4", user: "isadora@gmail.com", perguntas:["qual o valor do terreno?", "é possivel plantar no solo?", "qual capacidade de plantio?"]},
        {titulo:"Teste5", user: "isabella@gmail.com", perguntas:["qual o valor do terreno?", "é possivel plantar no solo?", "qual capacidade de plantio?"]},
        {titulo:"Teste5", user: "isabella@gmail.com", perguntas:["qual o valor do terreno?", "é possivel plantar no solo?", "qual capacidade de plantio?"]},
        {titulo:"Teste5", user: "isabella@gmail.com", perguntas:["qual o valor do terreno?", "é possivel plantar no solo?", "qual capacidade de plantio?"]},
        {titulo:"Teste5", user: "isabella@gmail.com", perguntas:["qual o valor do terreno?", "é possivel plantar no solo?", "qual capacidade de plantio?"]}

    ]



$(document).ready(()=>{
  $('#quest-pend').click(()=>{
    $('.op_name').html('<h1>Questionários Pendentes</h1>')
    $('#option_selected').html( `
    
  
        ${questionarios.map(questionario =>
              `
              
      
      <div id="questionarios-box">
      <div id="body-box" class="body-box">
        <h5 clas="flex-column" id="tittle">${questionario.titulo}</h5>
        <h6 id="user">${questionario.user}</h6>
      <div class="flag">
        
      </div>
      <a class="expand_questionario">
        <img class="box-icon" src="./assets/img/next_icon.png" alt="">
      </a> 
      </div>
      <button type="button" id="btn-form" class="btn btn-primary">Count</button>
      </div>
  
  
              
        `).join('')}            
               
    `);})
  
})
  


$('#quest-resp').click(() => {
  $('.op_name').html('<h1 class="op_name">Questionários Respondidos</h1>')
  $.get(link).done((res) => {
    $('#option_selected').html(`
      <p>${res.titulo}</p>
    `)
  }).fail(() => console.log("FALHOU"))
})













