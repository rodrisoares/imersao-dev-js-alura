
var listaFilmes = ['https://m.media-amazon.com/images/M/MV5BYmY0NjcwMWMtN2MyNC00ZmZjLWEwZTAtM2ExYWE1NDUwNWQyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg','https://m.media-amazon.com/images/M/MV5BMTk2NDc2MDAxN15BMl5BanBnXkFtZTYwNDc1NDY2._V1_UY268_CR2,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BNmRiZDM4ZmMtOTVjMi00YTNlLTkyNjMtMjI2OTAxNjgwMWM1XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg','https://m.media-amazon.com/images/M/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_UX182_CR0,0,182,268_AL_.jpg']

var nomesFilmes = ['Resident Evil','Carga Explosiva','Jogos Mortais - Jigsaw', 'Velozes e furiosos']

var escolhas = []

for (i = 0; i < nomesFilmes.length; i++){
    var escolher = parseInt(prompt("Escolha os Filmes que quer ver, em seguida aperte 5:\n[1] =Resident Evil\n[2] = Carga Explosiva\n[3] = Jogos Mortais - Jigsaw\n[4] = Velozes e furiosos\n[5] = Sair"))
 if(escolher == 1){
            document.write("<img src=" + listaFilmes[0] + ">")
            document.write("<h2> Resident Evil 5 - Retribuição: </h2> <h3>Alice luta ao lado de um movimento de resistência para recuperar sua liberdade de uma instalação   de testes da Umbrella Corporation. </h3> ")
            escolhas.push(nomesFilmes[0])
        }
        else if(escolher == 2){
            document.write("<img src=" + listaFilmes[1] + ">")
            document.write("<h2>Carga Explosiva: </h2> <h3> Frank Martin é um transportador mercenário levando bens, humanos ou não, de um lugar para outro, sem fazer perguntas sobre que tipo de mercadoria foi contratado para transportar. </h3> ")
            escolhas.push(nomesFilmes[1])
        }
       
        else if(escolher == 3){
            document.write("<img src=" + listaFilmes[2] + ">")
            document.write("<h2> Jogos Mortais - Jigsaw: </h2> <h3>Corpos estão surgindo pela cidade, cada um tendo enfrentado uma morte singularmente horrível. Conforme a investigação prossegue, as evidências apontam para um suspeito: John Kramer, o homem conhecido como Jigsaw, que está morto há mais de 10 anos. </h3> ")
            escolhas.push(nomesFilmes[2])
        }
        else if(escolher == 4){
            document.write("<img src=" + listaFilmes[3] + ">")
            document.write("<h2> Velozes e furiosos: </h2> <h3>Quando uma mulher misteriosa seduz Dominic Toretto para o mundo do terrorismo e uma traição aos mais próximos dele, a tripulação enfrenta provações que os testarão como nunca antes. </h3> ")
            escolhas.push(nomesFilmes[3])
        }
        else if(escolher == 5){
            break
        }

}
