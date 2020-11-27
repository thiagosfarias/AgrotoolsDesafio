

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
      </div>
  
  
              
        `).join('')}            
               
    `);})