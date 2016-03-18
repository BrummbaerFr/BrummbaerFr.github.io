function syracuseCipher() {
  var plain = document.getElementById('plain').value.toUpperCase();    // on récupère le texte et on le transforme en majuscules
  plain = plain.replace(/\W+/g, '');    // RegExp : \W pour les caractères spéciaux et /g pour TOUS. Supprime les caractères spéciaux, pareil pour lignes 4 & 5
  plain = plain.replace(/\s+/g, '');    // \s RegExp pour "Espace"
  plain = plain.replace(/\d+/g, ''); // pareil que ligne 3 mais enlève les nombres (\d)
  var key = document.getElementById('key').value;   // var clé pour le nombre
  var keyArray = [];
  var syracuse = key;
  while (syracuse != 1) {   // calcul de la suite de Syracuse du nombre N (variable key)
    if(syracuse%2 == 0) {
      syracuse /= 2;
    }
    else {
      syracuse *= 3;
      syracuse += 1;
    }
    keyArray.push(syracuse);
  }
  for (var i = 0; i < plain.length; i++) {
    var plainEncrypt = plain.charCodeAt(i)-65;
    var ciphered = (keyArray[plainEncrypt]%26)+65;
    document.getElementById('cipher').value += String.fromCharCode(ciphered);
    }
}

function syracuseDecipher () {
  var plain = "";
  var cipher = document.getElementById('cipher').value.toUpperCase();    // on récupère le texte crypté
  cipher = cipher.replace(/\W+/g, '');    // il ne devrait pas y avoir de caractères spéciaux, mais si l'user en entre un ...
  cipher = cipher.replace(/\s+/g, '');    // pareil pour les espaces
  cipher = cipher.replace(/\d+/g, '');    // pareil pour les chiffres
  var key = document.getElementById('key').value;   // on récupère la clé
  var keyArray = [];
  var syracuse = key;
  while (syracuse != 1) {   // calcul de la suite de Syracuse du nombre N (variable key)
    if(syracuse%2 == 0) {
      syracuse /= 2;
    }
    else {
      syracuse *= 3;
      syracuse += 1;
    }
    keyArray.push(syracuse);
  }

}

function factorize(n) {   // Méthode de Fermat cf http://www.bibmath.net/crypto/index.php?action=affiche&quoi=complements/factoentiers
  var a = 0;
  var b = 0;
  var vrai = true;
  alert(n);
  console.log();
  debugger;
  while (vrai = true) {
    a = Math.sqrt(n+b^2);
    if (a%1 != 0) {
      b++;
    }
    else {
      vrai = false;
    }
  }
  a = a+b;
  b = a-b;
  document.getElementById('result').innerHTML = n + " se factorise en " + a + "*" + b;
}
