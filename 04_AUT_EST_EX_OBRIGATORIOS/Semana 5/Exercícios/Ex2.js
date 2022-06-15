function money() {

  var total = document.getElementById('value').value;

  var notas = 0
  document.getElementById('result').innerHTML = '';

  let cedula100 = parseInt(total / 100);
      total = total % 100
  let cedula50 = parseInt (total / 50);
      total = total % 50
  let cedula20 = parseInt (total / 20);
      total = total % 20
  let cedula10 = parseInt (total / 10);
      total = total % 10
  let cedula5 = parseInt (total / 5); 
      total = total % 5
  let cedula2 = parseInt (total / 2); 
  let cedula1 = parseInt(total % 2); 


  if (cedula100 >= 1) {
      document.getElementById('result').innerHTML += '<br>Cédulas de 100: ' + cedula100;
  }
  if (cedula50 >= 1) {
      document.getElementById('result').innerHTML += '<br>Cédulas de 50: ' + cedula50;
  }
  if (cedula20 >= 1) {
      document.getElementById('result').innerHTML += '<br>Cédulas de 20: ' + cedula20;
  }
  if (cedula10 >= 1) {
      document.getElementById('result').innerHTML += '<br>Cédulas de 10: ' + cedula10;
  }
  if (cedula5 >= 1) {
      document.getElementById('result').innerHTML += '<br>Cédulas de 5: ' + cedula5;
  }
  if (cedula2 >= 1) {
      document.getElementById('result').innerHTML += '<br>Cédulas de 2: ' + cedula2;
  }
  if (cedula1 >= 1) {
      document.getElementById('result').innerHTML += '<br>Cédulas de 1: ' + cedula1;
  }

}
