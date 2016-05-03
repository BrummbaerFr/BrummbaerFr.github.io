function removeAccents() {
  var str = document.getElementById('ciphered').value;
  var accents    = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  str = str.split('');
  var strLen = str.length;
  var i, x;
  for (i = 0; i < strLen; i++) {
    if ((x = accents.indexOf(str[i])) != -1) {
      str[i] = accentsOut[x];
    }
  }
  document.getElementById('ciphered').value = str.join('');
}

function freqLettres() {
  document.getElementById('resultP').innerHTML = "";
  var ciphered = document.getElementById('ciphered').value.toUpperCase();
  var wordCount = ciphered.split(" ").length;
  ciphered = ciphered.replace(/\W+/g, '');
  ciphered = ciphered.replace(/\s+/g, '');
  var cipheredArray = ciphered.split(""); // string to array pour pouvoir les ranger par ordre alph. cf ligne ci-dessous
  cipheredArray.sort();
  if (cipheredArray.length < 1) {
    alert("Vous n'avez rien entré !");
  }
  else {
    ciphered = cipheredArray.toString();  // forme traitable de la string pour compter ses caractères
    document.getElementById('resultP').innerHTML += "Analyse de <strong>" + cipheredArray.length + "</strong> lettres dans <strong>" + wordCount + "</strong> mots.";
    var occurences = [];
    var occurencesPer = [];
    for (var counter = 0; counter < 26; counter++) { // compte les occurences
      var letterString = String.fromCharCode(65+counter);
      var howMany = ciphered.split(letterString).length - 1;
      var Per = (howMany/cipheredArray.length)*100;
      var Per = Math.round(Per*10)/10;
      occurencesPer.push(Per);
      occurences.push(howMany);
    }
    // Affichage des résultats
    var table = document.getElementById('result');
    var reset = document.getElementsByTagName('tr').length; // si le tableau possède plus d'une ligne (ancienne analyse), on le vide
    if (reset > 1) {
      for (counter = 1; counter < reset; counter++) {
        table.deleteRow(-1);
      }
    }
    // Si le tableau contient des données (ancienne analyse), on le vide
    //if (table.length != 1)
    for (counter = 0; counter < 26; counter++) {
      var row = table.insertRow(-1);
      var column1 = row.insertCell(0);
      column1.innerHTML += String.fromCharCode(65+counter);
      var column2 = row.insertCell(1);
      column2.innerHTML += occurences[counter] + " ("  + occurencesPer[counter] + "%)";
    }
  }
}
