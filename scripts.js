let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
// document = html
// querySelector = pegador / selecionador

function mudarVisual(cor, imagem){
    
    body.style.background = cor
    tenis.src = imagem
}

function mudarVisual(cor, imagemSrc) {
    // Muda o fundo da página
    document.body.style.background = cor;
  
    const imagemTenis = document.querySelector(".imagem-tenis");
  
    // Remove qualquer classe antiga e adiciona a de saída
    imagemTenis.classList.remove("entrando");
    imagemTenis.classList.add("saindo");
  
    // Aguarda a saída terminar, troca a imagem e anima entrada
    setTimeout(() => {
      imagemTenis.src = imagemSrc;
      imagemTenis.classList.remove("saindo");
      imagemTenis.classList.add("entrando");
  
      // Depois de um tempo, volta ao normal
      setTimeout(() => {
        imagemTenis.classList.remove("entrando");
      }, 600); // tempo igual ao transition do CSS
    }, 300); // meio tempo da transição de saída
  }
  