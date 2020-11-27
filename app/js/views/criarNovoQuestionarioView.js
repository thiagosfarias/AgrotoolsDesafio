

class NovoQuestionarioView{

  template(questControl){
      return () => {
      $('.op_name').html('<h1 class="op_name">Novo Questionário</h1>')
    
      $('#option_selected').html(`
      
        <form>
        <div id = "criar-quest" class="form-group">
          <h5>Titulo</h5>
          <input type="tittle" class="form-control"  id="tittle-input" placeholder="digite o titulo...">
        </div>
        <div class="form-group">
          <h5>User</h5>
          <input type="user" class="form-control" id="user-input"placeholder="digite seu user...">
        </div>
        <div class="form-group">
          <h5>Localidade</h5>
          <input type="local" class="form-control" id="localidade-input" placeholder="digite sua latitude e longitude...">
        </div>
        
        <button type="submit" class="btn btn-primary">Criar</button>
        </form>
      
      `).submit(()=>{
          questControl.adiciona.bind(questControl)
          
      })}
  }

  


}