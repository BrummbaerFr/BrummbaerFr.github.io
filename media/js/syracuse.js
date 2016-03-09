function syracuseCipher() {
  var plain = document.getElementById('plain').value.toUpperCase();    // on récupère le texte et on le transforme en majuscules
  alert(plain);
  var plainArray = plain.split("");   // on transforme la string contenant le texte en array
  alert(plainArray);
  var key = "";   // var clé
    for (var i = 0; i < plainArray.length; i++) {   // boucle de cryptage
      if (plainArray[i] = " ") {    // si le caractère en cours de traitement est un espace, on ne fait rien

      }
      else {    // sinon on applique la suite de Syracuse
        var ciphered = (plainArray.charCodeAt(i))-65;    // on prend le numéro ASCII de la lettre
        alert(ciphered);
        while (ciphered != 1) {   // tant que l'on ne tombe pas dans le cycle 1, 4, 2 ... on applique la suite
          if (ciphered%2 != 0) {    // si le nombre est impair, on fait les opérations nécessaires
            ciphered *= 3;
            ciphered += 1;
            key += 0;   // trace (clé) 0 = impair
            alert("works");
          }
          else {    // sinon, le nombre est forcément pair, on divise par deux
            ciphered /= 2;
            key += 1;   // trace (clé) 1 = pair
          }
        }
      }
      key += 5;
    }
  document.getElementById('key').value = key;
}
