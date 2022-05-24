/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="one.js"></script>
    <title>Form</title>
</head>
<body>
    <form method="get" action="envio_dados.php">
        <input type="number" name="Velocidade Inicial" id="velIni" placeholder="Digite a Velocidade Inicial">
        <input type="submit" name="enviar" value="Calcular" onclick="getit()">    
    </form>
</body>
</html> */

/* Um arremesso de um corpo, com velocidade inicial na direção vertical, recebe o nome de Lançamento Vertical. 
Sua trajetória é retilínea e vertical, e, devido à gravidade, o movimento classifica-se com Uniformemente Variado.
Sabendo-se que hmax é a altura máxima que um objeto consegue atingir, e que V0 é a velocidade inicial do lançamento, 
construa um formulário em HTML para receber o valor da velocidade inicial e um script em Javascript que calcule a altura 
máxima (em metros) e o tempo total de subida do objeto (em segundos), considerando a aceleração da gravidade g = 10 m/s2, e 
de acordo com a velocidade inicial inserida pelo usuário.
Seguem as fórmulas para o cálculo: */

var g = 10;
var v0 = "";
var hmax = console.log(v0 ** 2) / 2 * g; 

var capturando = "";
function getit () {
    capturando = document.getElementById('velIni').value;
    document.getElementById('velIni').innerHTML = capturando;
}