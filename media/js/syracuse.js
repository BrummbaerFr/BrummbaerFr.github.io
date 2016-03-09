function syracuseCipher() {
  var plain = document.getElementById('plain').value.toUpperCase();    // on récupère le texte et on le transforme en majuscules
  plain = plain.replace(/\s+/g, '');    // \s RegEx pour "Espace" et /g pour TOUS. Supprime tous les espaces de plain
  alert(plain);
  var key = "";   // var clé
  for (var i = 0; i < plain.length; i++) {   // boucle de cryptage
    var ciphered = (plain.charCodeAt(i))-65;    // on prend le numéro ASCII de la lettre
    while (ciphered != 1) {   // tant que l'on ne tombe pas dans le cycle 1, 4, 2 ... on applique la suite
      if (ciphered%2 != 0) {    // si le nombre est impair, on fait les opérations nécessaires
        ciphered *= 3;
        ciphered += 1;
        key += 0;   // trace (clé) 0 = impair
      }
      else {    // sinon, le nombre est forcément pair, on divise par deux
        ciphered /= 2;
        key += 1;   // trace (clé) 1 = pair
      }
    }
    var display = "B";
    document.getElementById('cipher').value += display;
    key += 5;
  }
  document.getElementById('key').value = key;
  }
