const cardPersonagem = document.querySelectorAll(".cardPersonagem");
const radios = document.querySelectorAll("input");
const selecionarPersonagens = document.querySelectorAll(
  ".selecionarPersonagens"
);
const descricao = document.querySelectorAll(".desc");
const racaSelecionada = document.querySelectorAll(".cardRacaSelecionar");
const racaImagem = document.querySelectorAll(".racaImagem");
const armamento = document.querySelectorAll(".armamentos");
const imagemFundos = document.querySelector("#imagemPersFundos");
const audios = document.querySelectorAll(".audios");
const mensagemDeDano = document.querySelector("#dano");
const botaoDano = document.querySelector("#botao");
const hpPersonagem = document.querySelectorAll(".hpPersonagem");
const testativas = document.querySelector("#tentativas")


let nomesPersonagem;
let hpPersonagemSelecionado;
let nomePersonagemSelecionado;

function selecaoDeRaca() {
  for (let i = 0; i < racaSelecionada.length; i++)
    if (racaSelecionada[i].checked) {
      cardPersonagem[i].style.zIndex = "1";
      cardPersonagem[i].style.margin = "1rem";
      cardPersonagem[i].style.transition = "all 1s";
      cardPersonagem[i].style.opacity = "1";
      racaSelecionada[i].parentElement.style.boxShadow = "0 0 6rem yellow";
      racaSelecionada[i].parentElement.style.padding = "8px";
      racaSelecionada[i].parentElement.style.borderColor = "";
      racaSelecionada[i].parentElement.style.borderRadius = "0.5rem";
      nomesPersonagem = racaSelecionada[i].value;
    } else {
      racaSelecionada[i].parentElement.style.borderColor = "";
      racaSelecionada[i].parentElement.style.boxShadow = "";
      cardPersonagem[i].style.zIndex = "-1";
      cardPersonagem[i].style.margin = "-1rem";
      cardPersonagem[i].style.marginTop = "-25rem";
      cardPersonagem[i].style.transition = "all 1s";
      cardPersonagem[i].style.opacity = "-1";
    }
}

function selecionarRaca() {
  for (let i = 0; i < radios.length; i++) {
    radios[i].removeAttribute("enabled", "enabled");
    radios[i].removeAttribute("disabled", "disabled");
    if (radios[0].checked) {
      radios[1].setAttribute("enabled", "enabled");
      radios[2].setAttribute("enabled", "enabled");
      radios[3].setAttribute("enabled", "enabled");
      radios[5].setAttribute("disabled", "disabled");
      radios[6].setAttribute("disabled", "disabled");
      radios[7].setAttribute("disabled", "disabled");
      radios[9].setAttribute("disabled", "disabled");
      radios[10].setAttribute("disabled", "disabled");
      radios[11].setAttribute("disabled", "disabled");
    } else if (radios[4].checked) {
      radios[1].setAttribute("disabled", "disabled");
      radios[2].setAttribute("disabled", "disabled");
      radios[3].setAttribute("disabled", "disabled");
      radios[5].setAttribute("enabled", "enabled");
      radios[6].setAttribute("enabled", "enabled");
      radios[7].setAttribute("enabled", "enabled");
      radios[9].setAttribute("disabled", "disabled");
      radios[10].setAttribute("disabled", "disabled");
      radios[11].setAttribute("disabled", "disabled");
    } else if (radios[8].checked) {
      radios[1].setAttribute("disabled", "disabled");
      radios[2].setAttribute("disabled", "disabled");
      radios[3].setAttribute("disabled", "disabled");
      radios[5].setAttribute("disabled", "disabled");
      radios[6].setAttribute("disabled", "disabled");
      radios[7].setAttribute("disabled", "disabled");
      radios[9].setAttribute("enabled", "enabled");
      radios[10].setAttribute("enabled", "enabled");
      radios[11].setAttribute("enabled", "enabled");
    }
  }
}

function selecao() {
  for (let i = 0; i < selecionarPersonagens.length; i++)
    if (selecionarPersonagens[i].checked) {
      hpPersonagemSelecionado = parseInt(hpPersonagem[i].innerHTML);
      selecionarPersonagens[i].parentElement.style.transition = "all 1s";
      descricao[i].style.opacity = "1";
      armamento[i].style.transition = "all 1s";
      armamento[i].style.opacity = "1";
      armamento[i].style.marginTop = "1rem";
      selecionarPersonagens[i].parentElement.style.borderColor = "";
      selecionarPersonagens[i].parentElement.style.boxShadow =
        "0 0 6rem darkblue";
      nomesPersonagem = selecionarPersonagens[i].value;
      nomePersonagemSelecionado = selecionarPersonagens[i].value;
      let persToLower = nomesPersonagem.toLowerCase().replace(" ", "");
      imagemFundos.setAttribute("src", `/static/img/${persToLower}.png`);
      imagemFundos.style.maxWidth = "100%";
      audios[i].setAttribute("src", `/static/audios/${persToLower}.mp3`);
      audios[i].play();
    } else {
      armamento[i].style.transition = "all 1s";
      armamento[i].style.opacity = "-1";
      armamento[i].style.zIndex = "1";
      armamento[i].style.marginTop = "-1rem";
      selecionarPersonagens[i].parentElement.style.borderColor = "";
      selecionarPersonagens[i].parentElement.style.boxShadow = "";
      descricao[i].style.opacity = "0";
    }
}

function rolarOsDados() {
  const min = Math.ceil(80);
  const max = Math.floor(200);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let vitoria = false;
let hp = 3;
botao.addEventListener("click", () => {
  selecao();

  if (
    !nomesPersonagem ||
    nomesPersonagem == "Zergs" ||
    nomesPersonagem == "Protoss" ||
    nomesPersonagem == "Terranos"
    ) {
      alert("Selecione a raça e o personagem para calcular o dano");
      return;
    }
    
    const danoDados = rolarOsDados();
    let resultado = "Dano: " + danoDados + "! ";
  
  if (danoDados >= hpPersonagemSelecionado) {
    resultado += `Você conseguiu destruir ${nomePersonagemSelecionado} com suas forças! Deseja confirmar sua vitória?`;
    vitoria = true
    if (vitoria = true){
      let confirmar = confirm(resultado)
      if (confirmar == false){
        return window.location.href = "/";
      } else{
         return window.location.href = "/vitoria";
      }
    }
  } else {
    vitoria = false
    resultado += `${nomePersonagemSelecionado} ainda impera nas galaxias, tente novamente!`;
    hp--
    if (hp >= 1){
      alert(`Dano: ${danoDados}! Você possui ${hp} tentativas.`)
      tentativas.innerHTML = `Tentativas restantes ${hp}`
    }else {
      alert(`Você possui ${hp} tentativas.`)
      return window.location.href = "/derrota";
    }  
  }

  mensagemDeDano.innerHTML = resultado;
});
