function login(){
    var usuario=document.getElementById("inp").value
    var senha=document.getElementById("inp1").value
    if(usuario == "adm" && senha == "123"){
        document.getElementById("resultados").innerHTML =
        `<b class="aprov">Parabens, ${usuario} voce  pode entrar </b>`}
    else{
        document.getElementById("resultados").innerHTML =
        `<b class="repr">${usuario} voce nao pode entrar </b>`
    }
}