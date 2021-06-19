const cardPersonagem = document.querySelectorAll(".cardPersonagem");
const radios = document.querySelectorAll("input");
const botao = document.querySelector("#selecionar");
const selecionarPersonagens = document.querySelectorAll(
  ".selecionarPersonagens"
);

const descricao = document.querySelectorAll('.desc' )
const racaSelecionada = document.querySelectorAll(".cardRacaSelecionar");
const racaImagem = document.querySelectorAll('.racaImagem')
const armamento = document.querySelectorAll('.armamentos')

function selecaoDeRaca() {
  for (let i = 0; i < racaSelecionada.length; i++)
    if (racaSelecionada[i].checked) {
      
      cardPersonagem[i].style.zIndex = "1";
      cardPersonagem[i].style.margin = "2rem";
      cardPersonagem[i].style.transition = "all 1s";
      cardPersonagem[i].style.opacity = "1";
      racaSelecionada[i].parentElement.style.boxShadow = "0 0 6rem yellow";
      racaSelecionada[i].parentElement.style.borderColor = "";
      racaSelecionada[i].parentElement.style.borderRadius = "0.5rem";
  
    
      nomesPersonagem = racaSelecionada[i].value;
    } else {
      racaSelecionada[i].parentElement.style.borderColor = "";
      racaSelecionada[i].parentElement.style.boxShadow = "";
      cardPersonagem[i].style.zIndex = "-1";
      cardPersonagem[i].style.margin = "-15rem";
      cardPersonagem[i].style.transition = "all 1s";
      cardPersonagem[i].style.opacity = "-1";
    }
  console.log(nomesPersonagem);
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
  let nomesPersonagem = "";
  for (let i = 0; i < selecionarPersonagens.length; i++)
    if (selecionarPersonagens[i].checked) {
      selecionarPersonagens[i].parentElement.style.transition = "all 1s";
      descricao[i].style.opacity = '1'
      armamento[i].style.transition = "all 1s";
      armamento[i].style.opacity = "1";
      armamento[i].style.marginTop = "1rem";
      selecionarPersonagens[i].parentElement.style.borderColor = "";
      selecionarPersonagens[i].parentElement.style.boxShadow =
        "0 0 6rem darkblue";
      nomesPersonagem = selecionarPersonagens[i].value;
    } else {
      armamento[i].style.transition = "all 1s";
      armamento[i].style.opacity = "-1";
      armamento[i].style.zIndex = "1";
      armamento[i].style.marginTop = "-1rem";
      selecionarPersonagens[i].parentElement.style.borderColor = "";
      selecionarPersonagens[i].parentElement.style.boxShadow = "";
      descricao[i].style.opacity = '0'
    }
  console.log(nomesPersonagem);
}

botao.addEventListener("click", selecao);
