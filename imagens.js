// imagens
let imagemDaEstrada
let imagemDoAtor
let imagemCarro
let imagemCarro2
let imagemCarro3

//sons
let somTrilha
let somColisao
let somPontos

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/lola.png")
  imagemCarro = loadImage("imagens/carro-1.png")
  imagemCarro2= loadImage("imagens/carro-2.png")
  imagemCarro3= loadImage("imagens/carro-3.png")
  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro, imagemCarro3]
  
  somTrilha = loadSound("runningOne.mp3")
  somColisao = loadSound("Gunshot.mp3")
  somPontos = loadSound("pontos.wav")
}