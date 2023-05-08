//CÓDIGOS ATOR
let xAtor = 85;
let yAtor = 366;
let colisao = false
let pontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function podeMover() {
  return yAtor < 366
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeMover()) {
      yAtor += 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 3;
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      posicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()) {
        pontos -= 1;
      }
    }
  }
}

function posicaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 60))
  text(pontos, width / 5, 28)
}

function marcaPonto() {
  if(yAtor < 15) {
    pontos++;
    posicaoInicial()
    somDoPonto.play();
  }
  
}


function pontosMaiorQueZero() {
  return pontos > 0
}



