var rodrigo = {
    nome:"Rodrigo",
    vitorias: 0,
    empates: 0,
    derrotas:0,
    pontos: 0
  }
  
  var rafa = {
    nome:"Rafa",
    vitorias: 0,
    empates: 0,
    derrotas:0,
    pontos: 0
  }
  
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias *3)
    + jogador.empates
    return pontos
  }
  
  rafa.pontos = calculaPontos(rafa)
  rodrigo.pontos = calculaPontos(rodrigo)
  
  
  var jogadores = [rafa,rodrigo]
  
  function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i=0; i< jogadores.length; i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
      if (i == 0) {
          html +=
        "<td rowspan='2'><button onClick='adicionarEmpate(" + i +")'>Empate</button></td>";
        }
         html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
         if (i == 0) {
          html +="<td td rowspan='2'><button class='btnResetar' onClick='Resetar()'>Resetar</button></td></tr>";
        }
    }
      
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML=html 
  }
  
  exibirJogadoresNaTela(jogadores)
  
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    exibirJogadoresNaTela(jogadores);
  }
  
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadoresNaTela(jogadores);
  }
  
  function adicionarEmpate(i) {
    for (i = 0; i < jogadores.length; i++) {
      jogadores[i].empates++;
    }
    exibirJogadoresNaTela(jogadores);
  }
  
  function Resetar() {
    for (i = 0; i < jogadores.length; i++) {
      jogadores[i].vitorias = 0;
      jogadores[i].derrotas = 0;
      jogadores[i].empates = 0;
      jogadores[i].pontos = 0;
    }
    exibirJogadoresNaTela(jogadores);
  }