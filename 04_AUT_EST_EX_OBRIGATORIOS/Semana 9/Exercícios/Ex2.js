function change(){
    var word1 = document.getElementById('word1');
    var word2 = document.getElementById('word2');
    var intermediario = word1.value;
    word1.value = word2.value;
    word2.value = intermediario;
  }