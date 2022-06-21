function bubbleSort(){
    var str = document.getElementById("numbers").value
    var focus = parseInt(document.getElementById("focus").value)
    str = str.split(",").slice()
    var array = str.map(Number)
    var new_array = []
    while( typeof (i = array.shift()) !== 'undefined' ) {
    parseInt(i)
    new_array.unshift(i)
    }
    var length = new_array.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(new_array[j] > new_array[j+1]) {
                           var tmp = new_array[j]; 
                new_array[j] = new_array[j+1]; 
                new_array[j+1] = tmp; 
            }
        }        
    }

    var focalNumber = 1 + new_array.indexOf(focus)
    console.log(focalNumber)
    if (focalNumber != 0){
        document.getElementById('focalNumber').innerHTML = "Números organizados: " + new_array;
    }
    else{
        document.getElementById('focalNumber').innerHTML = "Valor focal não encontrado"
    }
    document.getElementById('exit').innerHTML = "Posição do valor focal: " + focalNumber;
}