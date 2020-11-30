const QuestionarioControl = require('./questionarioController');
const questionarioControl = new QuestionarioControl();


$(document).ready(()=>{
  $('#novo-quest').click(()=>{
    $('.op_name').html('<h1 class="op_name">Novo Questionário</h1>')
    questionarioControl.gerarFormParaQuestionario()
  })
})

$(document).ready(()=>{
  $('#questionarios-disponiveis').click(()=>{
    $('.op_name').html('<h1 class="op_name">Questionários</h1>')
    questionarioControl.listaQuestionarios()
  })
})


$(document).ready(()=>{
  $('#questionarios-respondidos').click(()=>{
    $('.op_name').html('<h1 class="op_name">Questionários Respondidos</h1>')
    questionarioControl.listaQuestionariosRespondidos()
  })
})


$(document).on('submit', '#quest-form', () => {
  console.log("SUBMETI?")
  questionarioControl.submterForm()
})

$(document).ready(()=>{
  $(document).on('click', '#myFiles-quest', () => {
    let questionariosGET = questionarioControl.listaQuestionariosHttp()
    questionariosGET.forEach((questionarioGET) => {
      questionarioControl.verQuestionario(questionarioGET)
    })
  })
})

$(document).ready(()=>{
  $(document).on('click', '#viewQuestionario', (e) => {
    $('.op_name').html('<h1 class="op_name">Questionários n.'+e.target.id+'</h1>')
    e.preventDefault()
    questionarioControl.verQuestionario(e.target.id)
  })})

  $(document).ready(()=>{
    $(document).on('click', '#viewQuestionarioRespondido', (e) => {
      $('.op_name').html('<h1 class="op_name">Questionário Respondido n.'+e.target.id+'</h1>')
      e.preventDefault()
      questionarioControl.verQuestionarioRespondido(e.target.id)
    })})

$(document).ready((e) => {
  $(document).on('click', '#responderQuestionario', (e) =>{
    e.preventDefault()
    console.log(e.target.id)
    let id = e.target.id
    questionarioControl.responderQuestionario(id)
  })})




