let salvar = []

const salva = function(){
   let vdate = document.getElementById('date').value;
   let vtext = document.getElementById('text').value;

   salvar.push([vdate,vtext,])
   
    localStorage.setItem("tarefa",JSON.stringify(salvar))
}
  const listar = function(){
   
    alert(localStorage.getItem('tarefa'))
  }