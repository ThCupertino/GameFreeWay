//CÓDIGOS CARRO

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarro = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 60
let alturaCarro = 40


function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for(let i = 0; i < xCarros.length; i++) {
      xCarros[i] -= velocidadeCarro[i];
  }
}

function posicaoInicialCarro () {
  for(let i = 0; i < xCarros.length; i++) {
    if(passouTela(xCarros[i])) {
    xCarros[i] = 600;
    }
  }
}

function passouTela(xCarros) {
  return xCarros < -60;
}
