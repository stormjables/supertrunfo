var carta1 = {
  nome: "Crono",
  imagem: "https://i.redd.it/88lia66y6xh61.png",
  atributos: {
    ataque: 9,
    defesa: 7,
    magia: 4
  }
};

var carta2 = {
  nome: "Marle",
  imagem: "https://i.redd.it/e5bbu5qzmbi61.png",
  atributos: {
    ataque: 6,
    defesa: 5,
    magia: 9
  }
};

var carta3 = {
  nome: "Lucca",
  imagem:
    "https://i.pinimg.com/564x/7f/29/6d/7f296d4d4763d06e35b484553db1e668.jpg",
  atributos: {
    ataque: 8,
    defesa: 4,
    magia: 7
  }
};

var carta4 = {
  nome: "Cobô",
  imagem: "https://s1.zerochan.net/Robo.600.2882999.jpg",
  atributos: {
    ataque: 5,
    defesa: 10,
    magia: 7
  }
};

var carta5 = {
  nome: "Magus",
  imagem: "https://s1.zerochan.net/Magus.600.3582007.jpg",
  atributos: {
    ataque: 7,
    defesa: 6,
    magia: 10
  }
};

var carta6 = {
  nome: "Ayla",
  imagem: "https://s1.zerochan.net/Ayla.600.3551527.jpg",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 4
  }
};

var carta7 = {
  nome: "Frog",
  imagem: "https://static.zerochan.net/Kaeru.full.472459.jpg",
  atributos: {
    ataque: 9,
    defesa: 6,
    magia: 7
  }
};

var carta8 = {
  nome: "Dalton",
  imagem: "https://images.uncyc.org/pt/4/42/Daltomnoob.jpg",
  atributos: {
    ataque: 8,
    defesa: 8,
    magia: 4
  }
};

var carta9 = {
  nome: "Azala",
  imagem:
    "https://ssl-forum-files.fobby.net/submissions/0000/1527/CHRONOTRIGGERRRRRR.png",
  atributos: {
    ataque: 7,
    defesa: 9,
    magia: 6
  }
};

var carta10 = {
  nome: "Ozzie",
  imagem:
    "https://64.media.tumblr.com/2c06668c2779680fe7c3702ed14551b9/tumblr_nx3hzyJ8qK1u99teao1_500.png",
  atributos: {
    ataque: 3,
    defesa: 7,
    magia: 8
  }
};

var carta11 = {
  nome: "Slash",
  imagem: "https://pbs.twimg.com/media/CQW_srVWwAEH1-_.jpg",
  atributos: {
    ataque: 6,
    defesa: 6,
    magia: 8
  }
};

var carta12 = {
  nome: "Flea",
  imagem:
    "https://cdn.donmai.us/original/70/49/7049f27be6833d664c723fd4fecbd327.png",
  atributos: {
    ataque: 8,
    defesa: 4,
    magia: 8
  }
};

var carta13 = {
  nome: "Rainha Zeal",
  imagem: "https://i.kym-cdn.com/photos/images/original/001/186/563/0cb.png",
  atributos: {
    ataque: 6,
    defesa: 4,
    magia: 9
  }
};

var carta14 = {
  nome: "Masa&Mune",
  imagem: "https://cdn.wikimg.net/en/chronowiki/images/9/9a/Masa_%26_Mune.jpg",
  atributos: {
    ataque: 4,
    defesa: 8,
    magia: 10
  }
};

var carta15 = {
  nome: "Lavos SUPER TRUNFO",
  imagem:
    "https://i.pinimg.com/originals/9c/73/44/9c7344ffdca91622c53bf7215a0f14b8.jpg",
  atributos: {
    ataque: 11,
    defesa: 11,
    magia: 11
  }
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
  carta14,
  carta15
];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 15);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 15);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 15);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
  exibirCartaJogador();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado =
      "<p class='resultado-final'>Você perdeu! Tente novamente.</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Houve um empate!</p>";
  }
  elementoResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}