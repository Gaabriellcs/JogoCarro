//Posição dos Carros
let yCarros   = [40, 105, 158, 210, 270, 318];

// Inicio de Carros
let xCarros   = [600, 600, 600, 600, 600, 600];

// Velocidade dos Carros
let velCarros = [12, 7, 10, 4, 5, 3];

let comprimentoCarros = 50;
let alturaCarros = 25;


function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros ,alturaCarros);
  }
}

function movimentaCarro(){
  for(i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velCarros[i];
  }
}

function pInicial(){
  for(i = 0; i < imagemCarros.length; i++){
    if(passouTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}


function passouTela(xCarro){
  return xCarro < -50;
}