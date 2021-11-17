function enviar(){
    var name = window.document.getElementById('nome')
    var id = window.document.getElementById('idade')
    var sex = window.document.getElementById('sexo')
    var res = document.getElementById('res')
    if(name.value.length == 0 || id.value.length == 0 || sex.value.length == 0){
        window.alert('[ERRO] Dados invalidos')
    }else{
        document.getElementById("nome").value=''
        document.getElementById("idade").value=''
        document.getElementById("sexo").value=''
        window.confirm('ficha enviada com sucesso')
    }

    
}