function calculo()
{
  var v0 = parseInt(document.getElementById('v0').value);
  var tempo = v0 / 10; 
  var hmax = (v0**2)/(2 * 10); 
  alert("A altura máxima é de " + hmax +" metros. O tempo total é de " + tempo +" segundos"); 
}