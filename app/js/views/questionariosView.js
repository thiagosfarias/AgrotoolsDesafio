const MesageView = require("./mesageView");
const LocalizacaoService = require("../services/localizacaoService")
const questControl = require("../controllers/questionarioController");

let index=0

class QuestionarioView {
 
    constructor(){
        this.mesageView = new MesageView()
        this.localizacaoService = new LocalizacaoService()
        
        
    }


  novoQuestionarioView(){


        return   $('#option_selected').html(`
        
        <form id="quest-form">
        <div id = "criar-quest" class="form-group">
            <h5>Titulo</h5>
            <input type="tittle" class="form-control"  id="tittle-input" placeholder="digite o titulo..."  required>
        </div>
        <div class="form-group">
            <h5>User</h5>
            <input type="user" class="form-control" id="user-input"placeholder="digite seu user..."  required>
        </div>
        <div class="form-group">
            <h5>Geolocalização</h5>
            <button id="btn-geolocalizacao" class="btn btn-primary ml-3" type="button" required>Fornecer</button>
            ${

                $(document).on('click', '#btn-geolocalizacao', () => {
                   this.localizacaoService.retornageolocalizacao()
                })

            }
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
        ${$(document).ready(() =>{
            $(document).on('click', '#btn-pergunta', (e) =>{
                e.preventDefault()
                $('div[name="nova-pergunta[]"]').append(`
                <h5>Pergunta</h5>
                <input name="perguntas[]" type="pergunta" class="form-control placeholder="digite sua pergunta..." required>
                `)
            })
        })}
        <div class="form-group" name="nova-pergunta[]"></div>

        <button id="btn-submit" class="btn btn-primary mr-3" type="submit">Criar</button>
        <button id="btn-pergunta" class="btn btn-primary ml-3" type="button">Nova Pergunta</button>
        </form>
        

        
        `
    )
  }

  exibirQuestionario(questionario){
    return $('#option_selected').html(`
    

        <form class="d-flex flex-column">
        <div class="form-group flex-">
          <h4>Usuário:<h4/>
          <h5>${questionario.user.user}</h5>
      </div>
      <div class="form-group flex-">
      <h4>Titulo:<h4/>
      <h5>${questionario.titulo}</h5>
    </div>
      <div class="form-group">
        <h4>(Latitude e Longitude)<h4/>
        <h2>${questionario.user.latitude}</h2><br>
        <h2>${questionario.user.longitude}</h2>
      </div>
      <div class="form-group">
          <h4>Data de cadastro<h4/>
          <h5>${questionario.user.data}</h5>
      </div>
      <div></div>
        <form>
        ${questionario.perguntas.enunciados.map( (enunciado, index) => 
        
            `
    
        <div class="form-group" name="respostas[]">
            <h5 class="enunciado">${enunciado}</h5>
            <input type="text" name="respostas[]" placeholder="digite sua resposta aqui..."></input>


            `
            
        )}
        <button class="btn btn-primary" type=submit>Responder</button>    
        </form>

      </form>
    
    `)
}

  listaQuestionarios(questionarios){


        if(questionarios.paraArray() == 0){
            this.mesageView.exibirMensagem('Não há questionários cadastrados', 'alert-warning')
        } 

        return $('#option_selected').html( `
            
    
             ${questionarios.questionarios.map( (questionario, index) =>  

                 `
                 

         <div id="questionarios-box">
         <div id="body-box" class="body-box d-flex flex-row">
             <h5 clas="flex-column ml-2" name=titulo[]>${questionario.titulo}</h5>
             <h6  class="flex-row ml-2" name=usuario[]>${questionario.user.user}</h6>
             <h6  class="flex-row ml-2" name="id">${index}</h6>


         <div class="flag">
         </div>

         <a class="expand_questionario flex-row ml-2"  href="#" name="questionario-${index}" id="viewQuestionario">
             <img class="box-icon" id="${index}" src="./assets/img/next_icon.png" alt="">
         </a>
         </div>
             
             
     
                 
             `).join('')}            
                 
         `);
                
    }

    responderQuestionario(){

    }


}

module.exports = QuestionarioView

