function sortearmes(){
    var casarMes = parseInt(Math.random() * 15) + 1
    var nome = document.getElementById("inp1").value
switch (casarMes) {
    case 1:
        document.getElementById("resultados").innerHTML = `${nome}, voce nao vai se casar no mes janeiro <br> 
        <img class="img" src="dowload.jifif">`
    break 
    case 2:
        document.getElementById("resultados").innerHTML = `${nome}, voce vai se casar no mes fevereiro <br> <img class="img" src="js-casar.avif">`
    break
    case 3:
        document.getElementById("resultados").innerHTML = `${nome}, voce nao vai se casar no mes março  <br> <img class="img" src="dowload.jifif">`
    break
    case 4:
        document.getElementById("resultados").innerHTML = `${nome}, voce vai se casar no mes abril <br> <img class="img" src="js-casar.avif">`
    break
    case 5:
        document.getElementById("resultados").innerHTML = `${nome}, voce vai se casar no mes maio <br> <img class="img" src="js-casar.avif">`
    break
    case 6:
        document.getElementById("resultados").innerHTML = `${nome}, voce nao vai se casar no mes junho <br> <img class="img" src="dowload.jifif">`
    break
    case 7:
        document.getElementById("resultados").innerHTML = `${nome}, voce vai se casar no mes julho <br> <img class="img" src="js-casar.avif"> `
    break
    case 8:
        document.getElementById("resultados").innerHTML = `${nome}, voce vai se casar no mes agosto <br> <img class="img" src="js-casar.avif">`
    break
    case 9:
        document.getElementById("resultados").innerHTML = `${nome}, voce vai se casar no mes setembro <br> <img class="img" src="js-casar.avif">`
    break
    case 10:
        document.getElementById("resultados").innerHTML = `${nome}, voce nao vai se casar no mes outubro <br> <img class="img" src="dowload.jifif"> `
    break
    case 11:
        document.getElementById("resultados").innerHTML = `${nome}, voce vai se casar no mes novembro <br> <img class="img" src="js-casar.avif"> `
    break
    case 12:
     document.getElementById("resultados").innerHTML = `${nome}, voce nao vai se casar no mes dezembro <br> <img class="img" src="dowload.jifif"> `
    break
    default:
    console.log("")
}
}












