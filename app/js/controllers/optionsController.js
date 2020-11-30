
const QuestionarioControl = require('./questionarioController');
const questionarioControl = new QuestionarioControl();


$(document).ready(()=>{
  $('#novo-quest').click(()=>{
    $('.op_name').html('<h1 class="op_name">Novo Questionário</h1>')
    questionarioControl.gerarFormParaQuestionario()
  })
})

$(document).ready(()=>{
  $('#quest-pend').click(()=>{
    $('.op_name').html('<h1 class="op_name">Questionários</h1>')
    questionarioControl.listaQuestionarios()
  })
})


$(document).on('submit', '#quest-form', () => {
  console.log("SUBMETI?")
  questionarioControl.submterForm()
})

$(document).ready(()=>{
  $(document).on('click', '#myFiles-quest', () => {
    questionarioControl.listaQuestionariosHttp()
  })
})

$(document).ready(()=>{
  $(document).on('click', '#viewQuestionario', (e) => {
    e.preventDefault()
    questionarioControl.verQuestionario(e.target.id)
  })
})








