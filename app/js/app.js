
const QuestionarioController = require('./controllers/questionarioController')
const questControl = new QuestionarioController();

$(document).ready(()=>{
  $('#novo-quest').click(function setFormView () {
    $('.op_name').html('<h1 class="op_name">Novo Questionário</h1>')
  
    $('#option_selected').html(`

    <button id="btn" class="btn btn-primary" type="button">CLIQUE</button>
    
      <form id="quest-form">
      <div id = "criar-quest" class="form-group">
        <h5>Titulo</h5>
        <input type="tittle" class="form-control"  id="tittle-input" placeholder="digite o titulo..." required>
      </div>
      <div class="form-group">
        <h5>User</h5>
        <input type="user" class="form-control" id="user-input"placeholder="digite seu user..." required>
      </div>
      <div class="form-group">
        <h5>Localidade</h5>
        <input type="local" class="form-control" id="localidade-input" placeholder="digite sua latitude e longitude..." required>
      </div>
      
      <button id="btn-form" class="btn btn-primary" type="submit">Criar</button>
      </form>
    
    `
    )
    })
})

$(document).on('submit', '#quest-form', (res) => {
  console.log('CHEGUEI NO SUBMIT')
  let titulo = $('#tittle-input').val()
  let user = $('#user-input').val()
  let localidade =  $('#localidade-input').val()
  console.log(titulo)
  console.log(user)
  questControl.criarNovo()
  return false
})





























