function freqLettres() {
  var ciphered = document.getElementById('ciphered').value.toUpperCase();
  var wordCount = ciphered.split(" ").length;
  ciphered = ciphered.replace(/\W+/g, '');
  ciphered = ciphered.replace(/\s+/g, '');
  if (ciphered = "") {
    alert("Vous n'avez rien entré.");
    var counter = 26;
  }
  var cipheredArray = ciphered.split(""); // string to array pour pouvoir les ranger par ordre alph. cf ligne ci-dessous
  cipheredArray.sort();
  ciphered = cipheredArray.toString();  // forme traitable de la string pour compter ses caractères
  document.getElementById('resultP').innerHTML += "Analyse de <strong>" + cipheredArray.length + "</strong> lettres dans <strong>" + wordCount + "</strong> mots";
  var occurences = [];
  var occurencesPer = [];
  for (var counter = 0; counter < 26; counter++) { // compte les occurences
    var letterString = String.fromCharCode(65+counter);
    var howMany = ciphered.split(letterString).length - 1;
    var Per = (howMany/ciphered.length)*100;
    var Per = Math.round(Per*10)/10;
    occurencesPer.push(Per);
    occurences.push(howMany);
  }
  // Affichage des résultats
  var table = document.getElementById('result');
  for (counter = 0; counter < 26; counter++) {
    var row = table.insertRow(-1);
    var column1 = row.insertCell(0);
    column1.innerHTML += String.fromCharCode(65+counter);
    var column2 = row.insertCell(1);
    column2.innerHTML += occurences[counter] + " ("  + occurencesPer[counter] + "%)";
  }
}
