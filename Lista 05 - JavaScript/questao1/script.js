// Variáveis iniciais
var a = 10;
var b = 5;
var c = 1;
var d;

// Operações
c = b--;
b = a++;
a = 5 + "1";
d = "1" + "1";

// Exibir valores iniciais e resultados das operações
document.getElementById("valoresIniciais").innerHTML = "a = " + a + ", b = " + b + ", c = " + c + ", d = " + d;
document.getElementById("resultadosOperacoes").innerHTML = "c = b-- resulta em c = " + c + "<br>" +
    "b = a++ resulta em b = " + b + "<br>" +
    "a = 5 + '1' resulta em a = " + a + "<br>" +
    "d = '1' + '1' resulta em d = " + d;
