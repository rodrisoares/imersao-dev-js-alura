var valorEmDolarTexto = prompt("Qual o valor em dolar você quer converter?")
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
var valorEmReal = valorEmDolarNumero * 5.50
alert("o valor em real é R$" + valorEmReal.toFixed(2))
