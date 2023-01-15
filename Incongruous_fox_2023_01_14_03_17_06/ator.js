
//Ator

let xAtor = 90;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;
let marcaPontos;
let pontosMZero;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30 ,25 );
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=  3;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

function pInicialAtor(){
  if(yAtor < 24){
    yAtor = 366;
  }
  if(yAtor > 400){
    yAtor = 366;
  }
}

function verificaColisao(){
  
  
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 25)
    if(colisao){
      yAtor = 366;
      somColisao.play();
      if(pontosMZeros()){
        meusPontos -= 1;
        
      }
    }
  }  
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255 ,165, 0));
  text(meusPontos, width / 3, 25);
}

function marcaPonto(){
  if(yAtor < 25){
    meusPontos += 1;
    somPonto.play();
    } 
} 

function pontosMZeros(){
  return meusPontos > 0;
}
