// criando a variavel
let temp

//criando a funçao tempo 
function tempo() {

    // DECLARANDO AS VARIAVEIS 
    let relogio = document.querySelector("#main");

    //chamando o relogio pra aparecer como 11 digitos
    let hora = new Date ();
    relogio.innerHTML =(hora.toLocaleString()).slice(-8);
}

document.querySelector("#ligar").addEventListener("click", ()=>{
    temp = setInterval(tempo,1000)
})

document.querySelector("#desligar").addEventListener("click", ()=>{
    clearInterval(temp)
})
