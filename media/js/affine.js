function getAffineHash(){
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var plain = document.getElementById("plain").value.toLowerCase();
	var fonction = document.getElementById("fonction").value;
	var tableau = plain.split("");
	var hash = "";
	for (var i = 0; i <= tableau.length; i++) {
		//Nous regardons a quel position est la lettre dans l'alphabet
		var emplacement = alphabet.indexOf(tableau[i]);
		//Nous remplaçons le x par l'emplacement
		fonction_temps = fonction.replace("x", emplacement);
		//Nous faisons le cancul
		var resultat = eval(fonction_temps) % 26;
		//Nous regardons a quel lettre correspond l'emplacement
		hash += alphabet.charAt(resultat);
	}
	document.getElementById("hash").innerHTML = hash;
}
