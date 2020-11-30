const MensagemView = require("./mensagemView");




class QuestionarioView {
 
    constructor(){
        this.mensagemView = new MensagemView()

        
    }


  novoQuestionarioView(){


        return   $('#option_selected').html(`
        
        <form id="quest-form">
        <div class="form-group">
            <h5>Titulo</h5>
            <input type="tittle" class="form-control"  id="tittle-input" placeholder="digite o titulo..."  required>
        </div>
        <div class="form-group">
            <h5>Usuario</h5>
            <input type="user" class="form-control" id="user-input"placeholder="digite seu user..."  required>
        </div>
        <div class="form-group">
            <h5>Geolocalização</h5>
            <button id="btn-geolocalizacao" class="btn btn-primary ml-3" type="button" required>Fornecer</button>
            <p id="latitude">
            </p>
            <p id="longitude">
            </p>

        </div>
        <div class="form-group">
            <h5>Data</h5>
            <input type="date" class="form-control" id="date-input"   required>
        </div>
        <div class="form"></div>
        <div class="form-group">
            <h5>Pergunta</h5>
            <input name="perguntas[]" type="pergunta" class="form-control placeholder="digite sua pergunta..." required>
        </div>
        <div class="form-group" name="nova-pergunta[]"></div>

        <button id="btn-submit" class="btn btn-primary mr-3" type="submit">Criar</button>
        <button id="btn-pergunta" class="btn btn-primary ml-3" type="button">Nova Pergunta</button>
        </form>
        

        
        `
    )
  }

  exibirQuestionarioRespondido(questionario, respostas){
      return $('#option_selected').html(`
    

      <div class="card d-flex">
        <div class="card-header d-flex ml-2">
            <p class="questionario-info flex-column">Usuário: ${questionario.user.user}<p/>
            <p class="questionario-info flex-column">Titulo: ${questionario.titulo}<p>
            <p class="questionario-info flex-column">Latitude:${questionario.user.latitude}</p>
            <p class="questionario-info flex-column">Longitude:${questionario.user.longitude}</p>
            <p class="questionario-info flex-column">Data de cadastro:${questionario.user.data}</p>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        ${questionario.perguntas.enunciados.map( (enunciado, index) => 
            
            `
    
            <li class="list-group-item">n.${index}) ${enunciado}</li>
            `
            
        )}
        </ul>
        
        </div> 
       </div><br>
       <h4 class="ml-2">Respostas</h4><br>     
      ${respostas.map((resposta) => 
        `
        <div class="card info-usuario d-flex">
            <div class="card-header d-flex ml-2">
            
            <p class="questionario-info flex-column">Usuario: ${resposta.user.user}</p>
            <p class="questionario-info flex-column">Data: ${resposta.user.data}</p>
            <p class="questionario-info flex-column">Latitude:${resposta.user.latitude}</p>
            <p class="questionario-info flex-column">Longitude:${resposta.user.longitude}</p>
            </>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
            ${
                resposta.respostas.map((textoResposta, index) => 
                `
                <li class="list-group-item">n.${index}) ${textoResposta}</li>
                `
                ).join('')
            }
            </ul>
        </div>


        `
      )}
      </div>
    
      </div>
  
  `)
  }

  

  exibirQuestionario(questionario){
    
    return $('#option_selected').html(`
    

        <div class="card d-flex flex-row">
        <div class="card-header d-flex ml-2">
            <p class="questionario-info flex-row">Usuário: ${questionario.user.user}<p/>
            <p class="questionario-info flex-row">Titulo: ${questionario.titulo}<p>
            <p class="questionario-info flex-row">Latitude:${questionario.user.latitude}</p>
            <p class="questionario-info flex-row">Longitude:${questionario.user.longitude}</p>
            <p class="questionario-info flex-row">Data de cadastro:${questionario.user.data}</p>
        </div>
        </div><br>

        <h3>Responder Questionário</h3><br>
        <form id="resposta-form">
        <div class="form-group">
            <h5>Usuario</h5>
            <input type="user" class="form-control" id="user-input"placeholder="digite seu user..."  required>
        </div>
        <div class="form-group">
            <h5>Geolocalização</h5>
            <button id="btn-geolocalizacao" class="btn btn-primary ml-3" type="button" required>Fornecer</button>
            <p id="latitude">
            </p>
            <p id="longitude">
            </p>

        </div>
        <div class="form-group">
            <h5>Data</h5>
            <input type="date" class="form-control" id="date-input"   required>
        </div>
        ${questionario.perguntas.enunciados.map( (enunciado) => 
            
            `
    
        <div class="form-group" name="respostas[]">
            <h5 class="enunciado">${enunciado}</h5>
            <input class="form-control" type="text" name="respostas[]" placeholder="digite sua resposta aqui..."></input>


            `
            
        )}
            <br>
        <a class="btn btn-primary" id="responderQuestionario"><p id="${questionario.id}">Responder</p></a>

      </form>
    
    `)
}



  listaQuestionarios(questionarios){
        if(questionarios.questionarios == 0){
            this.mensagemView.exibirMensagem('Não há questionarios registrados', 'alert-warning')
        }

        return $('#option_selected').html( `
            
    
             ${questionarios.questionarios.map( (questionario) =>  

                 `
                 


         <div id="body-box" class="card">
             <div class="card-header">
                <h5 clas="flex-column ml-2" name=titulo[]>Titulo: ${questionario.titulo}</h5>
                <h6  class="flex-column ml-2" name=usuario[]>Usuario: ${questionario.user.user}</h6>
                <h6  class="flex-column ml-2" name="id">ID: ${questionario.id}</h6>
            </div>
            <div class="card-body">
                <a class="expand_questionario flex-column ml-2"  href="#" name="questionario-${questionario.id}" id="viewQuestionario">
                    <img class="box-icon" id="${questionario.id}" src="./assets/img/next_icon.png" alt="">
                </a>
            </div>
        </div>

             
             
     
                 
             `).join('')}            
                 
         `);
                
    }

    listaQuestionariosRespondidos(questionarios){

        return $('#option_selected').html( `
            
    
             ${questionarios.questionarios.map( (questionario) =>  

                 `

         <div id="body-box" class="card">
             <div class="card-header">
                <h5 clas="flex-column ml-2" name=titulo[]>${questionario.titulo}</h5>
                <h6  class="flex-column ml-2" name=usuario[]>${questionario.user.user}</h6>
                <h6  class="flex-column ml-2" name="id">${questionario.id}</h6>
             </div>
             <div class="card-body">
                <a class="expand_questionario flex-row ml-2"  href="#" name="questionario-${questionario.id}" id="viewQuestionarioRespondido">
                    <img class="box-icon" id="${questionario.id}" src="./assets/img/next_icon.png" alt="">
                </a>
             </div>
        </div>


             
             
     
                 
             `).join('')}            
                 
         `);
                
    }


}

module.exports = QuestionarioView

