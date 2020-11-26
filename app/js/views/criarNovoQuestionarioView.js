class criarNovoQuestionarioView {
    template(){
        return `
    <form>
        <div class="form-group">
            <label>Titulo</label>
            <input type="tittle" class="form-control" id="exampleInputEmail1" placeholder="digite aqui o titulo...">
        </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>`
    }
}