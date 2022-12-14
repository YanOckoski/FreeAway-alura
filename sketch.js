

function setup() {
  createCanvas(600, 400);
  somTrilha.loop()
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor()
  mostraCarro()
  moveCarro()
  moveAtor()
  voltaPosicaoInicialCarro()
  verificaColisao()
  incluiPontos()
  marcaPonto()
}


