var cartaRod = {
    nome:"Superman",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRz20JFiaxJIwfXwtdYDiNR6q0dZkAwXNWOEX6yjfnzeY0uEXRVyMhIrR1TENihXjo8SE&usqp=CAU",
    atributos: {
    ataque:80,
    defesa:60,
    magia:90 
    }
  }
  
  var cartaRafa ={
    nome:"Bulbasauro",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
    ataque:70,
    defesa:65,
    magia:75
    } 
  }
  
  var cartaGui ={
    nome:"Lorde Darth Vader",
    imagem: "https://yt3.ggpht.com/ytc/AAUvwnhP0ONSO6SLxZxTxOtLlbm8MNq3S8F4B7p28rRvDA=s900-c-k-c0x00ffffff-no-rj",
    atributos: {
    ataque: 88,
    defesa: 62,
    magia: 85
    }
  }
  
  var cartaHarry = {
      nome: "Harry Potter",
      imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
      atributos: {
          ataque: 70,
          defesa: 50,
          magia: 95
      }
  }
  
  var cartaBatman = {
      nome: "Batman",
      imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
      atributos: {
          ataque: 95,
          defesa: 70,
          magia: 0
      }
  }
  
  var cartaMarvel = {
      nome: "Capitã Marvel",
      imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
      atributos: {
          ataque: 90,
          defesa: 80,
          magia: 70
      }
  }
  
  
  var cartaMaquina
  var cartaJogador
  var cartas =[cartaRod, cartaRafa, cartaGui, cartaHarry, cartaBatman, cartaMarvel]
  
  var pontosJogador = 0
  var pontosMaquina = 0
  atualizaPlacar()
  atualizaQuantidadeDeCartas()
  
  function atualizaQuantidadeDeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length
    divQuantidadeCartas.innerHTML = html
  }
  
  function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina  + " Maquina"
    divPlacar.innerHTML = html
  }
  
  
  function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random()*cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1 )
    
    var numeroCartaJogador = parseInt(Math.random()*cartas.length)
    cartaJogador = cartas [numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1 )
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibeCartaJogador()
  }
  
  function  exibeCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto =""
    
    for (var atributo in cartaJogador.atributos){
       opcoesTexto += "<input type ='radio' name = 'atributo' value ='" + atributo + "'>" + atributo +" " + cartaJogador.atributos[atributo] + "<br>"
      
    }  
    var html = "<div id='opcoes' class='carta-status'>"
    
    divCartaJogador.innerHTML =moldura+ nome + html+ opcoesTexto+'</div>'
  }
  
  function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto= ""
    
  }
  
  function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i <radioAtributo.length; i++){
      if (radioAtributo [i].checked){
        return radioAtributo[i].value
      }
    } 
  }
  
  function jogar(){
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
      htmlResultado = '<p class="resultado-final">Você venceu a máquina!!!</p>'
      pontosJogador++
    } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
     htmlResultado = '<p class="resultado-final">Você perdeu!</p>'
      pontosMaquina++
    }else {
       htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }
    if(cartas.length == 0){
      alert("Fim de Jogo")
      if(pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      } else if( pontosMaquina > pontosJogador) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      } else{
        htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
    }else{
     document.getElementById('btnProximaRodada').disabled = false
    }
    
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    
    
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
  }
  
  function exibeCartaMaquina(){
   var divCartaMaquina = document.getElementById("carta-maquina")
   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto =""
    
    for (var atributo in cartaMaquina.atributos){
       opcoesTexto += "<p type ='text' name = 'atributo' value ='" + atributo + "'>" + atributo +" " + cartaMaquina.atributos[atributo] + "</p>"
      
    }  
    var html = "<div id='opcoes' class='carta-status --spacing'>"
    
    divCartaMaquina.innerHTML =moldura+ nome + html+ opcoesTexto+'</div>' 
  }
  
  function proximaRodada(){
    var divCartas = document.getElementById('cartas')
    
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
   document.getElementById('btnSortear').disabled = false
   document.getElementById('btnJogar').disabled = true
   document.getElementById('btnProximaRodada').disabled = true 
    
   var divResultado = document.getElementById('resultado')
   divResultado.innerHTML = ""
    
  }