let matriz,linhaClicada, colunaClicada, jogador, larguraQuadrado, tela;
let estadoPeca, pecaSelecionada, pecaMovimentada;
let imagemEducador, imagemAluno, imagemTabuleiro, imagemVegaPunk, gif, imagemBattle, imagemKaidou, imagemKaidou_selecionado, imagemLuffy, imagemLuffy_selecionado;

function definirValorInicial() {
  matriz = [
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [2,0,2,0,2,0,2,0],
        [0,2,0,2,0,2,0,2],
        [2,0,2,0,2,0,2,0]
];
  linhaClicada = -1;
  colunaClicada = -1;
  jogador = 1;
  larguraQuadrado = 60;
  tela = 0;
  pecaMovimentada = 1;
  estadoPeca = pecaSelecionada;
}

function definirMatrizInicial() {
  for (let contadorLinha = 0; contadorLinha < 3; contadorLinha++) {
    for (let contadorColuna = 0; contadorColuna < 8; contadorColuna++) {
        if (contadorLinha % 2 != contadorColuna % 2) {
            matriz[contadorLinha][contadorColuna] = 1;
        }
    }
  }
  
  for (contadorLinha = 5; contadorLinha < 8; contadorLinha++) {
    for (contadorColuna = 0; contadorColuna < 8; contadorColuna++) {
        if (contadorLinha % 2 != contadorColuna % 2) {
            matriz[contadorLinha][contadorColuna] = 2;
        }
    }
  }
}

function resetarVariaveis() {
    definirValorInicial();
    definirMatrizInicial();
}

function preload() {
  imagemEducador = loadImage("aquiles.jpg");
  imagemAluno = loadImage("chico.jpeg");
  imagemTabuleiro = loadImage("board.png");
  gif = loadImage("luffyGif.gif");
  imagemBattle = loadImage("fundo.jpg");
  imagemVegaPunk = loadImage("vegapunk.png");
  imagemKaidou = loadImage("kaidou.png");
  imagemLuffy = loadImage("luffy.png");
  imagemLuffy_selecionado = loadImage("luffy_selecionado.png"); 
  imagemKaidou_selecionado = loadImage("kaidou_selecionado.png");
  musica = loadSound("soundtrack.mp3");
  movimento = loadSound("movimento.mp3");
  somMenu = loadSound("button menu.mp3");
}

function setup() {
  createCanvas(475, 475);
  textFont(loadFont('pirata.ttf'));
  musica.setVolume(0.1);
  movimento.setVolume(0.15);
  musica.loop();
  
  definirValorInicial();
  definirMatrizInicial();
  
}

function draw() {
  background(imagemBattle);
  
  if (tela == 0) {
      textSize(40);
      fill(225,180,50);
      text("A One piece game", 110, 80);
      image(gif,-50, -70 , 200, 200);
      fill(0, 0, 0, 140);
      rect(160,100,140,40,15);
      textSize(20);
      fill(225,180,50);
      text("jogar",210,125);
      fill(0, 0, 0, 140);
      rect(160,150,140,40,15);
      textSize(20);
      fill(225,180,50)
      text("Instruções",190,177);
      fill(0, 0, 0, 140);
      rect(160,200,140,40,15);
      textSize(20);
      fill(225,180,50);
      text("Créditos",200,225);
  
  } else if (tela == 1) {
      background(imagemTabuleiro);
      musica.setVolume(0.01);
    
      for (let contadorLinha = 0; contadorLinha < 8; contadorLinha++) {
          for (let contadorColuna = 0; contadorColuna < 8; contadorColuna++) {


              if (matriz[contadorLinha][contadorColuna] > 0) {
                  let pecaCentralizada1 = (contadorColuna*larguraQuadrado + larguraQuadrado/2) - 25;
                  let pecaCentralizada2 = (contadorLinha*larguraQuadrado + larguraQuadrado/2) - 27;
        
                  if (matriz[contadorLinha][contadorColuna] == 2) {
                      image(imagemLuffy, pecaCentralizada1,pecaCentralizada2, 45, 45);
          
                  } else if (matriz[contadorLinha][contadorColuna] == 1) {
                        image(imagemKaidou, pecaCentralizada1,pecaCentralizada2, 45, 45);
                
                  }

              if (contadorLinha == linhaClicada && contadorColuna == colunaClicada) {
                  if (jogador == 1) {
                      image(imagemKaidou_selecionado, pecaCentralizada1,pecaCentralizada2, 45, 45);
          
                  } else {
                      image(imagemLuffy_selecionado, pecaCentralizada1,pecaCentralizada2, 45, 45);
                  }
              }
            
              }
          }
      }

  } else if (tela == 2) {
      background(0);
      textSize(40);
      fill(225,100,100);
      text("Instruções", 165, 40);  
      textSize(16);
      fill(225,100,100);
      text("O jogo a ser desenvolvido será dama, será voltado para jogadores que querem se testar em relação a sua capacidade cognitiva.", 20, 120, 460);
      text("Ano: Ensino superior", 20, 160, 460)
      text("Máteria: Habilidade em lógica.", 20, 180, 460);
      image(imagemVegaPunk, 20, 190, 200, 200);
      fill(250);
      rect(300,435,140,40,15);
      fill(225,100,100);
      textSize(20);
      text("Voltar ", 345,465);
      
  } else if (tela == 3) {
      background(0);
      fill(225,100,100);
      textSize(40);
      text("Créditos", 160, 70);
      textSize(20);
      text("AQUILES BURLAMAQUI", 300, 140 );
      text("FRANCISCO JOSÉ", 55, 140)
      textSize(18);
      text("Função: Aluno", 55, 155);
      text("Função: Educador", 300 , 155 );
      fill(225);
      rect(300,435,140,40,15);
      textSize(20);
      fill(225,100,100);
      text("Voltar ", 345,465);
      image(imagemAluno,20 , 160, 200, 200);
      image(imagemEducador, 270, 160, 200, 200);
  }
}

function mousePressed() {
  
  const coluna = floor(mouseX / larguraQuadrado);
  const linha = floor(mouseY / larguraQuadrado);
  
  if (matriz[linha][coluna] == jogador) {
      linhaClicada = linha;
      colunaClicada = coluna;
      estadoPeca = pecaMovimentada;    
  
  } else if (matriz[linha][coluna] === 0) {
        
            if (tela == 1) {
                const direcaoColuna = coluna - colunaClicada;
                const direcaoLinha = linha - linhaClicada;
              
                if (jogador == 1) {
                        if ( direcaoLinha == 2 && direcaoColuna == 2 || direcaoLinha == 2 && direcaoColuna == -2 ) {
                            const verificaoColuna = colunaClicada + direcaoColuna / 2;
                            const verificaoLinha = linhaClicada + direcaoLinha / 2;
                          
                          if (matriz[verificaoLinha][verificaoColuna] == 2 && matriz[linha][coluna] == 0) {
                              matriz[verificaoLinha][verificaoColuna] = 0;
                              matriz[linha][coluna] = 1;
                              matriz[linhaClicada][colunaClicada] = 0;
                              jogador = 2;
                              estadoPeca = pecaSelecionada;
                              console.log('jogador 1 capturou uma peça');  
                              movimento.play();
                            
                          } 
                                
                        } else if (direcaoLinha == 1 && direcaoColuna == -1) {
                                  matriz[linha][coluna] = jogador;
                                  matriz[linhaClicada][colunaClicada] = 0;
                                  jogador = 2;
                                  estadoPeca = pecaSelecionada;
                                  console.log('jogador 1 jogou!');  
                                  movimento.play();
                          
                        } else if (direcaoLinha == 1 && direcaoColuna == 1 ) {
                                    matriz[linha][coluna] = jogador;
                                    matriz[linhaClicada][colunaClicada] = 0;
                                    jogador = 2;
                                    estadoPeca = pecaSelecionada;
                                    console.log('jogador 1 jogou!');  
                                    movimento.play();
                                
                        }
                        
                          
                  } else if (jogador == 2) {
                      
                            if ( direcaoLinha == -2 && direcaoColuna == 2 || direcaoLinha == -2 && direcaoColuna == -2 ) {
                                verificaoColuna = colunaClicada + direcaoColuna / 2;
                                verificaoLinha = linhaClicada + direcaoLinha / 2;
                          
                                if (matriz[verificaoLinha][verificaoColuna] == 1 && matriz[linha][coluna] == 0) {
                                    matriz[verificaoLinha][verificaoColuna] = 0;
                                    matriz[linha][coluna] = 2;
                                    matriz[linhaClicada][colunaClicada] = 0;
                                    jogador = 1;
                                    estadoPeca = pecaSelecionada;
                                    console.log('jogador 2 capturou uma peça');  
                                    movimento.play();
              
                                } 
                            
                            } else if ( direcaoLinha == -1 && direcaoColuna == -1) {
                                      matriz[linha][coluna] = jogador;
                                      matriz[linhaClicada][colunaClicada] = 0;
                                      jogador = 1;
                                      estadoPeca = pecaSelecionada;
                                      console.log('jogador 2 jogou!');  
                                      movimento.play();
                             
                            } else if (direcaoLinha == -1 && direcaoColuna == 1) {
                                      matriz[linha][coluna] = jogador;
                                      matriz[linhaClicada][colunaClicada] = 0;
                                      jogador = 1;
                                      estadoPeca = pecaSelecionada;
                                      console.log('jogador 2 jogou!');  
                                      movimento.play();
                          
                            }
                         
                  }
            }
        }
  

}

function mouseClicked() {
  if  (mouseX > 160 && mouseX < 300 && mouseY > 102 && mouseY < 140 && tela == 0) {
      console.log("clicou pra jogar");
      tela = 1;
      somMenu.play();
  } else if  (mouseX > 300 && mouseX < 440 && mouseY > 450 && mouseY < 490 && tela != 0 && tela != 1) {
      console.log("clicou no voltar ");
      tela = 0;
      somMenu.play();
  } else if  (mouseX > 160 && mouseX < 300 && mouseY > 150 && mouseY < 191 && tela == 0) {
      console.log("clicou na Instruções");
      tela = 2;
      somMenu.play();
  } else if  (mouseX > 160 && mouseX < 300 && mouseY > 200 && mouseY < 240 && tela == 0) {
      console.log("clicou nos Creditos");
      tela = 3;
      somMenu.play();
  }
}

function keyPressed() {
  if  (key === "Escape") {
      resetarVariaveis();
      musica.setVolume(0.1);
  }
}
