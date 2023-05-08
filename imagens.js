//CÓDIGOS IMAGENS E SONS
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload(){
  imagemEstrada = loadImage("imagem/estrada.png")
  imagemAtor = loadImage("imagem/ator-1.png")
  imagemCarro = loadImage("imagem/carro-1.png")
  imagemCarro2 = loadImage("imagem/carro-2.png")
  imagemCarro3 = loadImage("imagem/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDaColisao = loadSound("sons/colidiu.mp3")
  somDoPonto = loadSound("sons/pontos.wav")
} 